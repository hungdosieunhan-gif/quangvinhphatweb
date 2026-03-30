import { useState, useEffect, useCallback } from "react";

// ============================================================
// SEED DATA
// ============================================================
const PRODUCTS = [
  { id: 1, name: "Bánh dâu", flavor_code: "BD", color: "#D4537E", light: "#FBEAF0", default_price: 35000 },
  { id: 2, name: "Bánh caramen", flavor_code: "BC", color: "#BA7517", light: "#FAEEDA", default_price: 32000 },
  { id: 3, name: "Bánh sôcola", flavor_code: "BS", color: "#534AB7", light: "#EEEDFE", default_price: 30000 },
];

const CHANNELS = ["walk-in", "website", "facebook", "zalo", "agent"];
const CHANNEL_LABELS = { "walk-in": "Tại quầy", website: "Website", facebook: "Facebook", zalo: "Zalo", agent: "Đại lý" };
const HOURS = ["5–7h", "7–9h", "11–13h", "14–16h", "16–19h"];
const DAYS_OF_WEEK = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function randomBetween(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function fmt(n) { return n.toLocaleString("vi-VN"); }
function fmtVND(n) { return fmt(n) + "đ"; }
function today() { return new Date().toISOString().slice(0, 10); }

async function fetchOpenMeteo(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(lat)}` +
    `&longitude=${encodeURIComponent(lon)}` +
    `&timezone=Asia%2FHo_Chi_Minh` +
    `&current=weather_code,temperature_2m,precipitation,wind_speed_10m` +
    `&hourly=precipitation_probability,wind_speed_10m` +
    `&forecast_days=1`;

  const r = await fetch(url);
  if (!r.ok) throw new Error(`Weather API error: ${r.status}`);
  return r.json();
}

function isBadWeather({ weather_code, precipitation, wind_speed_10m }) {
  // Open-Meteo weather codes (approximate grouping for “bad conditions”)
  const BAD_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);
  if (BAD_CODES.has(weather_code)) return true;
  if (typeof precipitation === "number" && precipitation >= 0.5) return true;
  if (typeof wind_speed_10m === "number" && wind_speed_10m >= 20) return true; // km/h
  return false;
}

function weatherWarningText(weather, hourly) {
  if (!weather) return null;
  const code = weather.weather_code;
  const temp = weather.temperature_2m;
  const precip = weather.precipitation;
  const wind = weather.wind_speed_10m;

  let maxPp = null;
  try {
    const now = new Date();
    const times = hourly?.time ?? [];
    const ppArr = hourly?.precipitation_probability ?? [];
    const windArr = hourly?.wind_speed_10m ?? [];
    // Look ahead ~3 hours
    const horizon = 3 * 60 * 60 * 1000;
    let bestPp = 0;
    let bestWind = 0;
    for (let i = 0; i < times.length; i++) {
      const t = new Date(times[i]).getTime();
      if (t >= now.getTime() && t <= now.getTime() + horizon) {
        bestPp = Math.max(bestPp, ppArr[i] || 0);
        bestWind = Math.max(bestWind, windArr[i] || 0);
      }
    }
    maxPp = { maxPp: bestPp, maxWind: bestWind };
  } catch {
    // ignore
  }

  const parts = [];
  parts.push(`Thời tiết xấu (mã ${code})`);
  if (typeof temp === "number") parts.push(`nhiệt độ ~${Math.round(temp)}°C`);
  if (typeof precip === "number") parts.push(`mưa ${precip.toFixed(1)} mm`);
  if (typeof wind === "number") parts.push(`gió ${Math.round(wind)} km/h`);
  if (maxPp) parts.push(`dự báo 3h tới: mưa ${Math.round(maxPp.maxPp)}% · gió ~${Math.round(maxPp.maxWind)} km/h`);
  return parts.join(" — ");
}

function clientFallbackReply(message, context) {
  const weatherWarning = context?.weatherWarning;
  const productionQtyLimit = context?.productionQtyLimit;
  const largeQtyCountRecent = context?.largeQtyCountRecent;
  const quantityWarning = context?.quantityWarning;
  const ordersSummary = context?.ordersSummary || {};
  const financeSummary = context?.financeSummary || {};
  const forecastSummary = context?.forecastSummary || {};

  const m = String(message || "");
  const intentOrders = /don\s*hang|đơn\s*hàng|quan\s*ly\s*don|theo\s*dõi\s*đơn|đơn\s*đặt|orders?/i.test(m);
  const intentFinance = /tai\s*chinh|tài\s*chính|chi\s*phi|lợi\s*nhuận|loi\s*nhuan|profit|margin|lỗ|lãi/i.test(m);
  const intentForecast = /du\s*bao|dự\s*báo|forecast|ngay\s*mai|tomorrow/i.test(m);
  const intentPayment = /chua\s*tt|chưa\s*tt|pending|thanh\s*toan|thanh\s*toán|cong\s*no|công\s*nợ|thu\s*tiền/i.test(m);
  const intentMarketing = /marketing|opt-?in|qc|quang\s*cao|khuyen\s*mai|khuyến\s*mãi|tiep\s*thi|campaign/i.test(m);
  const intentSchedule = /san\s*xuat|sản\s*xuất|ke\s*hoach|kế\s*hoạch|lich|lịch|giao\s*hang|giao\s*hàng|ca|dong\s*goi|đóng\s*gói/i.test(m);
  const intentCustomer = /khach|khách|sdt|dien\s*thoai|điện\s*thoại/i.test(m);

  const C = (v) => {
    const n = typeof v === "number" ? v : Number(v);
    if (Number.isFinite(n)) return n.toLocaleString("vi-VN");
    return String(v ?? "");
  };

  function coreBase() {
    const parts = [];
    if (typeof ordersSummary.todayOrdersCount === "number") parts.push(`${ordersSummary.todayOrdersCount} đơn`);
    if (typeof ordersSummary.todayRevenue === "number") parts.push(`doanh thu ${C(ordersSummary.todayRevenue)}đ`);
    if (typeof ordersSummary.pendingCountToday === "number" && ordersSummary.pendingCountToday > 0) parts.push(`chưa TT ${ordersSummary.pendingCountToday} đơn`);
    if (productionQtyLimit && typeof ordersSummary.largeQtyTodayCount === "number" && ordersSummary.largeQtyTodayCount > 0) parts.push(`SL lớn ${ordersSummary.largeQtyTodayCount}`);
    if (typeof financeSummary.todayProfit === "number") parts.push(`lợi nhuận ${C(financeSummary.todayProfit)}đ`);
    if (weatherWarning) parts.push("thời tiết xấu");
    return parts.length ? `Cơ sở: ${parts.join(" · ")}` : "Cơ sở: (thiếu dữ liệu)";
  }

  if (intentPayment) {
    return [
      `Cơ sở: ${ordersSummary.pendingCountToday ?? 0} đơn chưa thanh toán (tổng ${C(ordersSummary.pendingAmountToday ?? 0)}đ).`,
      `Việc cần làm:`,
      `• Nhắc thanh toán theo kênh và theo giờ cao điểm.`,
      productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0
        ? `• Với đơn SL lớn: ưu tiên đóng gói/giữ nhiệt để giao nhanh khi khách xác nhận.`
        : `• Chuẩn hóa thời gian giao theo từng kênh.`,
    ].join("\n");
  }

  if (intentMarketing) {
    const total = ordersSummary.todayOrdersCount ?? 0;
    const optIn = ordersSummary.marketingOptInTodayCount ?? 0;
    const rate = total > 0 ? Math.round((optIn / total) * 100) : 0;
    return [
      `Cơ sở: marketing opt-in ${optIn}/${total} (${rate}%).`,
      `Việc cần làm:`,
      `• Nếu opt-in cao: đẩy nội dung/ưu đãi theo kênh có doanh thu cao nhất hôm nay.`,
      weatherWarning || quantityWarning ? `• Nếu thời tiết/SL xấu: ưu tiên nhắc giao hàng & giữ chất lượng.` : `• Nếu thời tiết ổn: tăng ưu đãi để kéo đơn.`,
    ].join("\n");
  }

  if (intentOrders) {
    const cnt = ordersSummary.todayOrdersCount ?? 0;
    const rev = ordersSummary.todayRevenue ?? 0;
    const peak = ordersSummary.peakHour ?? "—";
    const top = Array.isArray(ordersSummary.topProducts) ? ordersSummary.topProducts.slice(0, 2).map(p => `${p.name} ${p.qty} SL`).join("; ") : "";
    return [
      coreBase(),
      `Đơn hàng hôm nay: ${cnt} đơn · Doanh thu ${C(rev)}đ · Giờ cao điểm ${peak}.`,
      top ? `Sản phẩm nổi bật: ${top}.` : null,
      `Việc cần làm:`,
      `• Rà soát đơn chưa TT (nếu có) và phân bổ mẻ quanh giờ cao điểm.`,
      productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0 ? `• Đơn SL lớn: chia mẻ + ưu tiên đóng gói trước.` : `• Chuẩn bị nhân sự đóng gói theo khối lượng.`,
    ].filter(Boolean).join("\n");
  }

  if (intentFinance) {
    const cost = financeSummary.todayTotalCost ?? 0;
    const profit = financeSummary.todayProfit ?? 0;
    const margin = financeSummary.todayProfitMarginPct;
    const drivers = Array.isArray(financeSummary.costTopDrivers) ? financeSummary.costTopDrivers.slice(0, 2) : [];
    return [
      coreBase(),
      `Tài chính hôm nay: Chi phí ${C(cost)}đ · Lợi nhuận ${C(profit)}đ.${typeof margin === "number" ? ` Biên ${margin}%.` : ""}`,
      drivers.length
        ? `Chi phí chi phối: ${drivers.map(d => `${d.key} ${C(d.value)}đ`).join(", ")}.`
        : null,
      `Việc cần làm:`,
      profit < 0
        ? `• Rà lại định mức và kênh có biên lợi nhuận tốt để giảm lỗ.`
        : `• Tối ưu lịch sản xuất theo nhu cầu hôm nay và cân nhắc điều chỉnh theo kênh.`,
    ].filter(Boolean).join("\n");
  }

  if (intentForecast) {
    const label = forecastSummary.tomorrowLabel ?? "ngày mai";
    const topProduct = forecastSummary.topProduct?.name ?? "—";
    const rec = forecastSummary.topProduct?.recommended ?? 0;
    const peakSlot = forecastSummary.peakSlot?.slot ?? "—";
    return [
      `Cơ sở: dự báo ${label}.`,
      `Dự báo: ưu tiên ${topProduct} (~${rec} cái) · Giờ nổi bật ${peakSlot}.`,
      `Việc cần làm:`,
      `• Chuẩn bị nguyên liệu theo mẻ nhỏ + đóng gói/giao quanh giờ cao điểm.`,
      weatherWarning || quantityWarning ? `• Nếu có thời tiết xấu: tăng giữ nhiệt và rút ngắn thời gian chờ.` : null,
    ].filter(Boolean).join("\n");
  }

  if (intentSchedule) {
    const peak = ordersSummary.peakHour ?? "—";
    const peakSlot = forecastSummary.peakSlot?.slot ?? "—";
    return [
      coreBase(),
      `Kế hoạch hôm nay: tập trung đóng gói/giao quanh ${peak}; khung dự kiến ${peakSlot}.`,
      `Việc cần làm:`,
      `• Lập checklist theo ca sáng/chiều và ưu tiên đơn SL lớn.`,
      productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0 ? `• Chia mẻ để tránh kẹt giao.` : `• Rà lại công suất đóng gói theo tổng SL.`,
    ].filter(Boolean).join("\n");
  }

  if (intentCustomer) {
    const topCustomers = Array.isArray(ordersSummary.topCustomers) ? ordersSummary.topCustomers.slice(0, 3) : [];
    if (!topCustomers.length) {
      return ["Cơ sở: chưa có dữ liệu SĐT/khách để thống kê.", "Việc cần làm:", "• Nhập SĐT khi tạo đơn để hệ thống phân tích top khách."].join("\n");
    }
    const top = topCustomers.map(c => `${c.name || ""} (${c.phone}) ${c.orders} đơn`).join("; ");
    return [
      `Cơ sở: Top khách hôm nay: ${top}.`,
      `Việc cần làm:`,
      `• Nhắc lịch giao/nhu cầu theo nhóm khách top và ưu tiên đóng gói cho sản phẩm họ mua.`,
    ].join("\n");
  }

  // Default
  return [
    coreBase(),
    `Việc cần làm:`,
    `• Gõ: \`đơn hàng\`, \`tài chính\`, \`dự báo\`, \`chưa thanh toán\`, hoặc \`marketing\` để xem gợi ý theo đúng mục.`,
    weatherWarning || quantityWarning ? `• Nếu thời tiết/SL xấu: ưu tiên giữ nhiệt và chia mẻ để giảm rủi ro chất lượng.` : null,
  ].filter(Boolean).join("\n");
}

function generateOrders() {
  const orders = [];
  let id = 1;
  const now = new Date();
  for (let d = 29; d >= 0; d--) {
    const date = new Date(now);
    date.setDate(date.getDate() - d);
    const dateStr = date.toISOString().slice(0, 10);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const numOrders = isWeekend ? randomBetween(18, 30) : randomBetween(10, 20);
    for (let i = 0; i < numOrders; i++) {
      const product = PRODUCTS[randomBetween(0, 2)];
      const hourSlots = [6, 7, 8, 12, 15, 17, 18];
      const hour = hourSlots[randomBetween(0, hourSlots.length - 1)];
      const min = randomBetween(0, 59);
      const timeStr = `${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}`;
      const qty = randomBetween(1, 12);
      const channel = CHANNELS[randomBetween(0, CHANNELS.length - 1)];
      orders.push({
        id: id++,
        order_date: dateStr,
        order_time: timeStr,
        customer_name: randomBetween(0, 1) ? `Khách ${id}` : "",
        customer_phone: randomBetween(0, 1) ? `09${randomBetween(10000000, 99999999)}` : "",
        sales_channel: channel,
        product_id: product.id,
        product_name: product.name,
        quantity: qty,
        unit_price: product.default_price,
        total_amount: qty * product.default_price,
        payment_status: randomBetween(0, 4) > 0 ? "paid" : "pending",
        note: "",
        marketing_opt_in: randomBetween(0, 1) === 1,
        consent_timestamp: dateStr,
      });
    }
  }
  return orders;
}

function generateCosts() {
  const costs = {};
  const now = new Date();
  for (let d = 29; d >= 0; d--) {
    const date = new Date(now);
    date.setDate(date.getDate() - d);
    const dateStr = date.toISOString().slice(0, 10);
    costs[dateStr] = {
      date: dateStr,
      flour_cost: randomBetween(200000, 400000),
      sugar_cost: randomBetween(100000, 200000),
      butter_cost: randomBetween(150000, 300000),
      strawberry_filling_cost: randomBetween(300000, 600000),
      caramel_filling_cost: randomBetween(250000, 500000),
      chocolate_filling_cost: randomBetween(280000, 550000),
      packaging_cost: randomBetween(100000, 200000),
      delivery_cost: randomBetween(50000, 150000),
      labor_cost: randomBetween(500000, 800000),
    };
  }
  return costs;
}

const INITIAL_ORDERS = generateOrders();
const INITIAL_COSTS = generateCosts();

// ============================================================
// UTILITY HOOKS & HELPERS
// ============================================================
function useLocalState(key, init) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : (typeof init === "function" ? init() : init); } catch { return typeof init === "function" ? init() : init; }
  });
  const update = useCallback((v) => { setVal(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key]);
  return [val, update];
}

function getHourSlot(timeStr) {
  const h = parseInt(timeStr.split(":")[0], 10);
  if (h >= 5 && h < 7) return "5–7h";
  if (h >= 7 && h < 9) return "7–9h";
  if (h >= 11 && h < 13) return "11–13h";
  if (h >= 14 && h < 16) return "14–16h";
  if (h >= 16 && h < 19) return "16–19h";
  return "Khác";
}

// ============================================================
// SIMPLE CHART COMPONENTS
// ============================================================
function BarChart({ data, color = "#3266ad", height = 120, label = "" }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height, padding: "0 4px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ width: "100%", background: color, borderRadius: 3, height: Math.max(4, (d.value / max) * (height - 24)), opacity: 0.85 }} title={`${d.label}: ${fmt(d.value)}`} />
          <span style={{ fontSize: 9, color: "var(--color-text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function MultiBarChart({ data, products, height = 150 }) {
  if (!data || data.length === 0) return null;
  const allVals = data.flatMap(d => products.map(p => d[p.name] || 0));
  const max = Math.max(...allVals, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height, padding: "0 4px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 1, width: "100%", height: height - 20 }}>
            {products.map(p => (
              <div key={p.id} style={{ flex: 1, background: p.color, borderRadius: "2px 2px 0 0", height: Math.max(2, ((d[p.name] || 0) / max) * (height - 24)), opacity: 0.85 }} title={`${p.name}: ${fmt(d[p.name] || 0)}`} />
            ))}
          </div>
          <span style={{ fontSize: 9, color: "var(--color-text-tertiary)" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ segments, size = 80 }) {
  const total = segments.reduce((s, d) => s + d.value, 0) || 1;
  let cumulativeAngle = -Math.PI / 2;
  const cx = size / 2, cy = size / 2, r = size / 2 - 6, inner = r * 0.55;
  const paths = segments.map(seg => {
    const angle = (seg.value / total) * 2 * Math.PI;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;
    const x1 = cx + r * Math.cos(startAngle), y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(cumulativeAngle), y2 = cy + r * Math.sin(cumulativeAngle);
    const xi1 = cx + inner * Math.cos(startAngle), yi1 = cy + inner * Math.sin(startAngle);
    const xi2 = cx + inner * Math.cos(cumulativeAngle), yi2 = cy + inner * Math.sin(cumulativeAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    return { d: `M ${xi1} ${yi1} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${inner} ${inner} 0 ${largeArc} 0 ${xi1} ${yi1} Z`, color: seg.color };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {paths.map((p, i) => <path key={i} d={p.d} fill={p.color} opacity={0.9} />)}
    </svg>
  );
}

function KPICard({ label, value, sub, color = "var(--color-text-primary)", icon }) {
  return (
    <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 16px", flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
        {icon && <span style={{ fontSize: 12 }}>{icon}</span>}{label}
      </div>
      <div style={{ fontSize: 20, fontWeight: 500, color, lineHeight: 1.2 }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 3 }}>{sub}</div>}
    </div>
  );
}

function Badge({ label, color, bg }) {
  return <span style={{ background: bg, color, fontSize: 11, padding: "2px 8px", borderRadius: "var(--border-radius-md)", fontWeight: 500, whiteSpace: "nowrap" }}>{label}</span>;
}

function SectionTitle({ children }) {
  return <h2 style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>{children}</h2>;
}

function Divider() {
  return <div style={{ height: "0.5px", background: "var(--color-border-tertiary)", margin: "20px 0" }} />;
}

// ============================================================
// MAIN APP
// ============================================================
export default function BakeryERP() {
  const [orders, setOrders] = useLocalState("bk_orders", INITIAL_ORDERS);
  const [costs, setCosts] = useLocalState("bk_costs", INITIAL_COSTS);
  const [activeTab, setActiveTab] = useState("overview");
  const [productionQtyLimit, setProductionQtyLimit] = useLocalState("bk_production_qty_limit", 200);
  const [weatherLocation, setWeatherLocation] = useLocalState("bk_weather_location", { lat: null, lon: null, label: "" });
  const [weatherWarning, setWeatherWarning] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useLocalState("bk_chat_messages", []);
  const [chatSending, setChatSending] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(
    "Chúng tôi thu thập thông tin đơn hàng và thông tin liên hệ để xử lý đơn hàng và cải thiện dịch vụ. Dữ liệu không được chia sẻ với bên thứ ba nếu không có sự đồng ý. Khách hàng có quyền yêu cầu xóa dữ liệu cá nhân bất kỳ lúc nào."
  );

  const todayStr = today();
  const todayOrders = orders.filter(o => o.order_date === todayStr);
  const todayRevenue = todayOrders.reduce((s, o) => s + o.total_amount, 0);

  const thisWeekOrders = orders.filter(o => {
    const d = new Date(o.order_date), now = new Date();
    const diff = (now - d) / 86400000;
    return diff < 7;
  });
  const weekRevenue = thisWeekOrders.reduce((s, o) => s + o.total_amount, 0);

  const monthRevenue = orders.reduce((s, o) => s + o.total_amount, 0);
  const largeQtyCountRecent = orders.filter(o => (productionQtyLimit ? o.quantity > productionQtyLimit : false)).length;
  const largeQtyCountToday = todayOrders.filter(o => (productionQtyLimit ? o.quantity > productionQtyLimit : false)).length;
  const quantityWarning =
    productionQtyLimit && largeQtyCountRecent > 0
      ? `Cảnh báo số lượng lớn: ${largeQtyCountRecent} đơn có SL > ${productionQtyLimit}`
      : null;

  const todayCostObj = costs?.[todayStr] || {};
  const todayTotalCost = Object.entries(todayCostObj)
    .filter(([k]) => k.endsWith("_cost"))
    .reduce((s, [, v]) => s + (typeof v === "number" ? v : parseInt(v) || 0), 0);
  const todayProfit = todayRevenue - todayTotalCost;
  const todayProfitMargin =
    todayRevenue > 0 ? Math.round((todayProfit / todayRevenue) * 100) : null;

  const pendingOrdersToday = todayOrders.filter(o => o.payment_status === "pending");
  const pendingCountToday = pendingOrdersToday.length;
  const pendingAmountToday = pendingOrdersToday.reduce((s, o) => s + o.total_amount, 0);

  const paidCountToday = todayOrders.filter(o => o.payment_status === "paid").length;
  const marketingOptInTodayCount = todayOrders.filter(o => o.marketing_opt_in).length;

  const todayAvgTicket = todayOrders.length > 0 ? Math.round(todayRevenue / todayOrders.length) : 0;
  const todayAvgQty = todayOrders.length > 0 ? Math.round(todayOrders.reduce((s, o) => s + o.quantity, 0) / todayOrders.length) : 0;

  const ordersTodayByProduct = PRODUCTS.map(p => {
    const productOrders = todayOrders.filter(o => o.product_id === p.id);
    const qty = productOrders.reduce((s, o) => s + o.quantity, 0);
    const rev = productOrders.reduce((s, o) => s + o.total_amount, 0);
    return { ...p, qty, rev };
  }).sort((a, b) => b.rev - a.rev);

  const ordersTodayByChannel = CHANNELS.map(c => {
    const rev = todayOrders.filter(o => o.sales_channel === c).reduce((s, o) => s + o.total_amount, 0);
    return { channel: c, label: CHANNEL_LABELS[c] || c, rev };
  }).sort((a, b) => b.rev - a.rev);

  const hourDataToday = HOURS.map(h => ({
    label: h,
    value: todayOrders.filter(o => getHourSlot(o.order_time) === h).reduce((s, o) => s + o.total_amount, 0),
  }));
  const peakHourToday = hourDataToday.reduce((a, b) => (b.value > a.value ? b : a), hourDataToday[0] || { label: "", value: 0 });

  const hourlyToday = HOURS.map(h => {
    const slotOrders = todayOrders.filter(o => getHourSlot(o.order_time) === h);
    const rev = slotOrders.reduce((s, o) => s + o.total_amount, 0);
    const count = slotOrders.length;
    const qty = slotOrders.reduce((s, o) => s + o.quantity, 0);
    return { label: h, revenue: rev, orderCount: count, qty };
  });

  const customerByPhone = todayOrders
    .filter(o => o.customer_phone)
    .reduce((acc, o) => {
      const key = o.customer_phone;
      if (!acc[key]) acc[key] = { phone: key, name: o.customer_name || "", count: 0, totalRev: 0 };
      acc[key].count += 1;
      acc[key].totalRev += o.total_amount;
      if (o.customer_name) acc[key].name = o.customer_name;
      return acc;
    }, {});
  const topCustomers = Object.values(customerByPhone)
    .sort((a, b) => b.totalRev - a.totalRev)
    .slice(0, 3)
    .map(c => ({ phone: c.phone, name: c.name, orders: c.count, rev: c.totalRev }));

  // Forecast summary (simple, derived from existing seed orders)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDay = tomorrow.getDay();
  const tomorrowIsWeekend = tomorrowDay === 0 || tomorrowDay === 6;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);

  function sameDayTypeForTomorrow(d) {
    const dow = d.getDay();
    return tomorrowIsWeekend ? (dow === 0 || dow === 6) : (dow > 0 && dow < 6);
  }

  const forecastByProduct = PRODUCTS.map(p => {
    const relevant = orders.filter(o => {
      const d = new Date(o.order_date);
      return d >= cutoff && sameDayTypeForTomorrow(d) && o.product_id === p.id;
    });
    const distinctDays = new Set(relevant.map(o => o.order_date)).size || 1;
    const totalQty = relevant.reduce((s, o) => s + o.quantity, 0);
    const recommended = Math.round(totalQty / Math.max(1, distinctDays));
    return { id: p.id, name: p.name, color: p.color, recommended };
  }).sort((a, b) => b.recommended - a.recommended);

  const forecastPeakSlot = (() => {
    const slotForecast = HOURS.map(slot => {
      const slotOrders = orders.filter(o => {
        const d = new Date(o.order_date);
        return d >= cutoff && sameDayTypeForTomorrow(d) && getHourSlot(o.order_time) === slot;
      });
      const distinctDays = new Set(slotOrders.map(o => o.order_date)).size || 1;
      const totalQty = slotOrders.reduce((s, o) => s + o.quantity, 0);
      const avg = Math.round(totalQty / Math.max(1, distinctDays));
      return { slot, avg };
    });
    return slotForecast.reduce((a, b) => (b.avg > a.avg ? b : a), slotForecast[0] || { slot: "", avg: 0 });
  })();

  const forecastSummary = {
    tomorrowLabel: tomorrow.toLocaleDateString("vi-VN"),
    isWeekend: tomorrowIsWeekend,
    topProduct: forecastByProduct[0] || null,
    peakSlot: forecastPeakSlot || null,
    byProduct: forecastByProduct.slice(0, 3),
  };

  const costBreakdownToday = Object.entries(todayCostObj)
    .filter(([k]) => k.endsWith("_cost"))
    .map(([k, v]) => ({ key: k, value: typeof v === "number" ? v : parseInt(v) || 0 }));

  const costTopDrivers = costBreakdownToday
    .slice()
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);

  // Trend vs 7-day avg (based on revenue)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const last7Revenue = last7Days.map(ds => orders.filter(o => o.order_date === ds).reduce((s, o) => s + o.total_amount, 0));
  const avg7Revenue = last7Revenue.reduce((s, v) => s + v, 0) / Math.max(1, last7Revenue.length);
  const revenueTrendPct7 = avg7Revenue > 0 ? Math.round(((todayRevenue - avg7Revenue) / avg7Revenue) * 100) : null;

  const ordersSummary = {
    todayOrdersCount: todayOrders.length,
    todayRevenue,
    peakHour: peakHourToday?.label || null,
    topProducts: ordersTodayByProduct.slice(0, 3).map(p => ({ name: p.name, qty: p.qty, rev: p.rev, color: p.color })),
    topChannel: ordersTodayByChannel[0] ? { channel: ordersTodayByChannel[0].channel, label: ordersTodayByChannel[0].label, rev: ordersTodayByChannel[0].rev } : null,
    todayHourly: hourlyToday,
    pendingCountToday,
    pendingAmountToday,
    paidCountToday,
    marketingOptInTodayCount,
    topCustomers,
    todayAvgTicket,
    todayAvgQty,
    revenueTrendPct7,
    largeQtyTodayCount: productionQtyLimit ? largeQtyCountToday : 0,
    productionQtyLimit,
  };

  const weekDates = new Set(thisWeekOrders.map(o => o.order_date));
  const weekCostTotal = Array.from(weekDates).reduce((s, ds) => {
    const day = costs?.[ds] || {};
    const dayCost = Object.entries(day)
      .filter(([k]) => k.endsWith("_cost"))
      .reduce((ss, [, v]) => ss + (typeof v === "number" ? v : parseInt(v) || 0), 0);
    return s + dayCost;
  }, 0);
  const weekProfit = weekRevenue - weekCostTotal;
  const weekProfitMarginPct = weekRevenue > 0 ? Math.round((weekProfit / weekRevenue) * 100) : null;

  const monthCostTotal = Object.values(costs || {}).reduce((s, day) => {
    const dayCost = Object.entries(day)
      .filter(([k]) => k.endsWith("_cost"))
      .reduce((ss, [, v]) => ss + (typeof v === "number" ? v : parseInt(v) || 0), 0);
    return s + dayCost;
  }, 0);
  const monthProfit = monthRevenue - monthCostTotal;
  const monthProfitMarginPct = monthRevenue > 0 ? Math.round((monthProfit / monthRevenue) * 100) : null;

  const financeSummary = {
    todayTotalCost,
    todayProfit,
    todayProfitMarginPct: todayProfitMargin,
    costTopDrivers,
    weekTotalCost: weekCostTotal,
    weekProfit,
    weekProfitMarginPct,
    monthTotalCost: monthCostTotal,
    monthProfit,
    monthProfitMarginPct,
  };

  const tabs = [
    { id: "overview", label: "Tổng quan" },
    { id: "orders", label: "Đơn hàng" },
    { id: "analytics", label: "Phân tích" },
    { id: "forecast", label: "Dự báo" },
    { id: "finance", label: "Tài chính" },
    { id: "settings", label: "Cài đặt" },
  ];

  useEffect(() => {
    const lat = weatherLocation?.lat;
    const lon = weatherLocation?.lon;
    if (typeof lat !== "number" || typeof lon !== "number") return;

    let cancelled = false;
    setWeatherLoading(true);
    fetchOpenMeteo(lat, lon)
      .then(data => {
        if (cancelled) return;
        const current = data?.current ?? null;
        const hourly = data?.hourly ?? null;
        if (!current) {
          setWeatherWarning(null);
          return;
        }
        if (isBadWeather(current)) {
          setWeatherWarning(weatherWarningText(current, hourly));
        } else {
          setWeatherWarning(null);
        }
      })
      .catch(() => {
        if (cancelled) return;
        setWeatherWarning(null);
      })
      .finally(() => {
        if (cancelled) return;
        setWeatherLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [weatherLocation]);

  useEffect(() => {
    if (!chatOpen) return;
    if (Array.isArray(chatMessages) && chatMessages.length > 0) return;
    setChatMessages([
      {
        role: "assistant",
        content:
          "Chào bạn! Tôi có thể giúp bạn theo dõi đơn hàng, chi phí, dự báo và đưa ra gợi ý hành động ngay. Bạn muốn xử lý vấn đề gì?",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatOpen]);

  async function handleUseMyLocation() {
    if (!navigator.geolocation) {
      alert("Trình duyệt không hỗ trợ geolocation. Bạn hãy nhập tọa độ (lat/lon) thủ công trong phần Cài đặt.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        setWeatherLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude, label: "Vị trí hiện tại" });
      },
      () => {
        alert("Không lấy được vị trí. Bạn hãy nhập tọa độ (lat/lon) thủ công trong phần Cài đặt.");
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  }

  async function handleSendChat() {
    const text = chatInput.trim();
    if (!text || chatSending) return;

    setChatInput("");
    const next = Array.isArray(chatMessages) ? [...chatMessages] : [];
    next.push({ role: "user", content: text });
    setChatMessages(next);

    setChatSending(true);
    try {
      const payload = {
        message: text,
        context: {
          weatherWarning,
          productionQtyLimit,
          largeQtyCountRecent,
          ordersSummary,
          financeSummary,
          forecastSummary,
          todayStr,
          quantityWarning,
        },
      };

      const r = await fetch("/api/ai-agent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json();
      const reply = data?.reply || data?.error || "Không thể nhận phản hồi từ AI. Thử lại sau.";

      const updated = [...next, { role: "assistant", content: reply }].slice(-30);
      setChatMessages(updated);
    } catch (e) {
      const fallback = clientFallbackReply(text, {
        weatherWarning,
        productionQtyLimit,
        largeQtyCountRecent,
        quantityWarning,
        ordersSummary,
        financeSummary,
        forecastSummary,
        todayStr,
      });
      const updated = [...next, { role: "assistant", content: fallback }].slice(-30);
      setChatMessages(updated);
    } finally {
      setChatSending(false);
    }
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--color-background-tertiary)", minHeight: "100vh" }}>
      {/* HEADER */}
      <div style={{ background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)", padding: "0 20px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, height: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "white", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img
                src="logo.png"
                alt="Quang Vinh Phat"
                style={{ width: 26, height: 26, objectFit: "contain" }}
              />
            </div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Quang Vinh Phát ERP</span>
          </div>
          <nav style={{ display: "flex", gap: 2, flex: 1 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ padding: "6px 12px", borderRadius: "var(--border-radius-md)", background: activeTab === t.id ? "var(--color-background-secondary)" : "transparent", border: activeTab === t.id ? "0.5px solid var(--color-border-secondary)" : "0.5px solid transparent", cursor: "pointer", fontSize: 13, fontWeight: activeTab === t.id ? 500 : 400, color: activeTab === t.id ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                {t.label}
              </button>
            ))}
          </nav>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{todayStr}</div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
        {(weatherWarning || quantityWarning) && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: "#EEEDFE", border: "0.5px solid #AFA9EC", borderRadius: "var(--border-radius-lg)", padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#534AB7" }}>Cảnh báo nhanh</div>
                <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{weatherLoading ? "Đang cập nhật thời tiết..." : ""}</div>
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: "#3C3489", lineHeight: 1.6 }}>
                {weatherWarning && <div style={{ marginBottom: 4 }}>• {weatherWarning}</div>}
                {quantityWarning && <div>• {quantityWarning}</div>}
              </div>
            </div>
          </div>
        )}

        {activeTab === "overview" && <OverviewTab orders={orders} todayRevenue={todayRevenue} todayOrders={todayOrders} weekRevenue={weekRevenue} monthRevenue={monthRevenue} costs={costs} />}
        {activeTab === "orders" && <OrdersTab orders={orders} setOrders={setOrders} productionQtyLimit={productionQtyLimit} />}
        {activeTab === "analytics" && <AnalyticsTab orders={orders} />}
        {activeTab === "forecast" && <ForecastTab orders={orders} />}
        {activeTab === "finance" && <FinanceTab orders={orders} costs={costs} setCosts={setCosts} />}
        {activeTab === "settings" && (
          <SettingsTab
            privacyPolicy={privacyPolicy}
            setPrivacyPolicy={setPrivacyPolicy}
            productionQtyLimit={productionQtyLimit}
            setProductionQtyLimit={setProductionQtyLimit}
            weatherLocation={weatherLocation}
            setWeatherLocation={setWeatherLocation}
            onUseMyLocation={handleUseMyLocation}
            weatherLoading={weatherLoading}
            weatherWarning={weatherWarning}
          />
        )}
      </div>

      {/* AI Chat Widget */}
      <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 50 }}>
        <button
          onClick={() => setChatOpen(v => !v)}
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            border: "0.5px solid rgba(83, 66, 171, 0.35)",
            background: chatOpen ? "#EEEDFE" : "#534AB7",
            color: chatOpen ? "#534AB7" : "white",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(83, 66, 171, 0.18)",
            position: "relative",
          }}
          aria-label="Chat AI"
          title="Chat AI hỗ trợ quản lý"
        >
          <div style={{ position: "absolute", top: -6, right: -6, width: 10, height: 10, borderRadius: 99, background: (weatherWarning || quantityWarning) ? "#D4537E" : "#D1D5DB", border: "2px solid white" }} />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto" }}>
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            <path d="M8 10h8" />
            <path d="M8 14h5" />
          </svg>
        </button>

        {chatOpen && (
          <div style={{ width: 340, maxWidth: "calc(100vw - 36px)", marginTop: 10 }}>
            <div style={{ background: "white", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
              <div style={{ padding: "10px 12px", background: "#EEEDFE", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#534AB7" }}>AI Agent (OpenAI)</div>
                <button onClick={() => setChatOpen(false)} style={{ padding: "2px 8px", borderRadius: 10, border: "0.5px solid #AFA9EC", background: "transparent", cursor: "pointer", fontSize: 12, color: "#534AB7" }}>
                  Đóng
                </button>
              </div>
              <div style={{ padding: 12, maxHeight: 320, overflow: "auto" }}>
                {Array.isArray(chatMessages) && chatMessages.length === 0 && (
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Đang sẵn sàng...</div>
                )}
                {Array.isArray(chatMessages) &&
                  chatMessages.map((m, idx) => (
                    <div key={idx} style={{ marginBottom: 10, textAlign: m.role === "user" ? "right" : "left" }}>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "8px 10px",
                          borderRadius: 12,
                          background: m.role === "user" ? "#534AB7" : "var(--color-background-secondary)",
                          color: m.role === "user" ? "white" : "var(--color-text-primary)",
                          maxWidth: "100%",
                          whiteSpace: "pre-wrap",
                          fontSize: 12,
                          lineHeight: 1.55,
                        }}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
              </div>
              <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", padding: 10, display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  placeholder="Nhập câu hỏi... (ví dụ: hôm nay mưa thì nên điều chỉnh sản xuất gì?)"
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: "0.5px solid var(--color-border-secondary)",
                    background: "var(--color-background-primary)",
                    color: "var(--color-text-primary)",
                    fontSize: 12,
                  }}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendChat();
                    }
                  }}
                />
                <button
                  onClick={handleSendChat}
                  disabled={chatSending}
                  style={{
                    padding: "9px 12px",
                    borderRadius: 12,
                    border: "none",
                    background: "#D4537E",
                    color: "white",
                    cursor: chatSending ? "not-allowed" : "pointer",
                    opacity: chatSending ? 0.7 : 1,
                    fontSize: 12,
                    fontWeight: 700,
                    minWidth: 70,
                  }}
                >
                  {chatSending ? "..." : "Gửi"}
                </button>
              </div>
            </div>
            <div style={{ fontSize: 10, color: "var(--color-text-tertiary)", marginTop: 6, textAlign: "right" }}>
              Nếu bạn thấy lỗi, hãy đảm bảo `OPENAI_API_KEY` đã cấu hình ở server.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// OVERVIEW TAB
// ============================================================
function OverviewTab({ orders, todayRevenue, todayOrders, weekRevenue, monthRevenue, costs }) {
  const todayCost = Object.values(costs).slice(-1)[0] || {};
  const todayTotalCost = Object.entries(todayCost).filter(([k]) => k.endsWith("_cost")).reduce((s, [, v]) => s + v, 0);
  const profit = todayRevenue - todayTotalCost;

  const productSales = PRODUCTS.map(p => ({
    ...p,
    qty: orders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.quantity, 0),
    rev: orders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.total_amount, 0),
  })).sort((a, b) => b.qty - a.qty);

  const hourData = HOURS.map(h => ({
    label: h,
    value: orders.filter(o => getHourSlot(o.order_time) === h).reduce((s, o) => s + o.total_amount, 0),
  }));

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const ds = d.toISOString().slice(0, 10);
    return { label: DAYS_OF_WEEK[d.getDay() === 0 ? 6 : d.getDay() - 1], date: ds, value: orders.filter(o => o.order_date === ds).reduce((s, o) => s + o.total_amount, 0) };
  });

  const topProduct = productSales[0];
  const peakHour = hourData.reduce((a, b) => b.value > a.value ? b : a, hourData[0]);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Tổng quan</h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: 13, margin: 0 }}>Báo cáo kinh doanh ngày hôm nay</p>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <KPICard label="Doanh thu hôm nay" value={fmtVND(todayRevenue)} sub={`${todayOrders.length} đơn hàng`} color="#D4537E" />
        <KPICard label="Doanh thu tuần" value={fmtVND(weekRevenue)} />
        <KPICard label="Doanh thu tháng" value={fmtVND(monthRevenue)} />
        <KPICard label="Lợi nhuận ước tính" value={fmtVND(Math.max(0, profit))} sub="Sau chi phí hôm nay" color={profit > 0 ? "#3B6D11" : "#A32D2D"} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Doanh thu theo giờ (hôm nay)</SectionTitle>
          <BarChart data={hourData} color="#D4537E" height={120} />
          <div style={{ marginTop: 8, fontSize: 12, color: "var(--color-text-secondary)" }}>
            Giờ cao điểm: <strong style={{ color: "var(--color-text-primary)" }}>{peakHour?.label}</strong>
          </div>
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Doanh thu 7 ngày qua</SectionTitle>
          <BarChart data={last7Days} color="#534AB7" height={120} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Sản phẩm bán chạy</SectionTitle>
          {productSales.map((p, i) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: i < productSales.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{fmt(p.qty)} cái</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{fmtVND(p.rev)}</div>
              {i === 0 && <Badge label="Bán chạy" color="#3B6D11" bg="#EAF3DE" />}
            </div>
          ))}
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Cảnh báo & thông tin</SectionTitle>
          <AlertCard type="info" msg={`Sản phẩm bán chạy nhất: ${topProduct?.name} (${fmt(topProduct?.qty)} cái)`} />
          <AlertCard type="success" msg={`Giờ cao điểm: ${peakHour?.label} — chuẩn bị tăng số lượng`} />
          {profit < 500000 && <AlertCard type="warning" msg="Lợi nhuận hôm nay thấp — kiểm tra chi phí đầu vào" />}
          <AlertCard type="info" msg="Dự báo ngày mai đã sẵn sàng trong tab Dự báo" />
        </div>
      </div>
    </div>
  );
}

function AlertCard({ type, msg }) {
  const styles = {
    info: { bg: "var(--color-background-info)", color: "var(--color-text-info)", dot: "#185FA5" },
    success: { bg: "var(--color-background-success)", color: "var(--color-text-success)", dot: "#3B6D11" },
    warning: { bg: "var(--color-background-warning)", color: "var(--color-text-warning)", dot: "#854F0B" },
    danger: { bg: "var(--color-background-danger)", color: "var(--color-text-danger)", dot: "#A32D2D" },
  };
  const s = styles[type] || styles.info;
  return (
    <div style={{ background: s.bg, color: s.color, padding: "8px 12px", borderRadius: "var(--border-radius-md)", marginBottom: 8, fontSize: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, marginTop: 3, flexShrink: 0 }} />
      {msg}
    </div>
  );
}

// ============================================================
// ORDERS TAB
// ============================================================
function OrdersTab({ orders, setOrders, productionQtyLimit }) {
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterProduct, setFilterProduct] = useState("");
  const [filterChannel, setFilterChannel] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [expandedEditId, setExpandedEditId] = useState(null);
  const [form, setForm] = useState(defaultForm());

  function defaultForm() {
    return { order_date: today(), order_time: "08:00", customer_name: "", customer_phone: "", sales_channel: "walk-in", product_id: 1, quantity: 1, payment_status: "paid", note: "", marketing_opt_in: false };
  }

  const filtered = orders.filter(o => {
    if (filterDate && o.order_date !== filterDate) return false;
    if (filterProduct && o.product_id !== parseInt(filterProduct)) return false;
    if (filterChannel && o.sales_channel !== filterChannel) return false;
    if (search && !o.customer_name.toLowerCase().includes(search.toLowerCase()) && !o.customer_phone.includes(search)) return false;
    return true;
  }).sort((a, b) => b.id - a.id).slice(0, 100);

  function handleSave() {
    const product = PRODUCTS.find(p => p.id === parseInt(form.product_id));
    const qty = parseInt(form.quantity) || 1;

    if (productionQtyLimit && qty > productionQtyLimit) {
      const ok = window.confirm(`Số lượng ${qty} vượt ngưỡng ${productionQtyLimit}. Bạn có muốn lưu không?`);
      if (!ok) return;
    }

    const total = qty * product.default_price;
    if (editOrder) {
      setOrders(
        orders.map(o =>
          o.id === editOrder.id
            ? {
              ...o,
              ...form,
              product_id: parseInt(form.product_id),
              product_name: product.name,
              unit_price: product.default_price,
              total_amount: total,
              quantity: qty,
            }
            : o
        )
      );
    } else {
      const newOrder = {
        ...form,
        id: Math.max(0, ...orders.map(o => o.id)) + 1,
        product_id: parseInt(form.product_id),
        product_name: product.name,
        unit_price: product.default_price,
        total_amount: total,
        quantity: qty,
        consent_timestamp: today(),
      };
      setOrders([newOrder, ...orders]);
    }
    setShowForm(false);
    setEditOrder(null);
    setExpandedEditId(null);
    setForm(defaultForm());
  }

  function handleEdit(o) {
    setEditOrder(o);
    setForm({ ...o });
    setShowForm(false); // edit inline, not the add/edit block above
    setExpandedEditId(o.id);
  }
  function handleDelete(id) {
    if (expandedEditId === id) handleCancelInlineEdit();
    setOrders(orders.filter(o => o.id !== id));
  }

  function adjustQty(id, delta) {
    const target = orders.find(o => o.id === id);
    if (!target) return;

    const nextQty = Math.max(1, (parseInt(target.quantity) || 1) + delta);
    const unitPrice = parseInt(target.unit_price) || target.unit_price || 0;
    const nextTotal = nextQty * unitPrice;

    if (productionQtyLimit && nextQty > productionQtyLimit) {
      const ok = window.confirm(`Số lượng ${nextQty} vượt ngưỡng ${productionQtyLimit}. Bạn có muốn cập nhật không?`);
      if (!ok) return;
    }

    setOrders(
      orders.map(o =>
        o.id === id
          ? {
            ...o,
            quantity: nextQty,
            total_amount: nextTotal,
          }
          : o
      )
    );

    // Keep inline edit form in sync
    if (expandedEditId === id) {
      setForm(f => ({ ...f, quantity: nextQty, total_amount: nextTotal }));
    }
  }

  function togglePayment(id) {
    setOrders(
      orders.map(o =>
        o.id === id
          ? {
            ...o,
            payment_status: o.payment_status === "paid" ? "pending" : "paid",
          }
          : o
      )
    );

    if (expandedEditId === id) {
      setForm(f => ({ ...f, payment_status: f.payment_status === "paid" ? "pending" : "paid" }));
    }
  }

  function handleCancelInlineEdit() {
    setExpandedEditId(null);
    setEditOrder(null);
    setForm(defaultForm());
  }

  function exportCSV() {
    const header = "ID,Ngày,Giờ,Khách,Điện thoại,Kênh,Sản phẩm,Số lượng,Đơn giá,Tổng\n";
    const rows = orders.map(o => `${o.id},${o.order_date},${o.order_time},${o.customer_name},${o.customer_phone},${o.sales_channel},${o.product_name},${o.quantity},${o.unit_price},${o.total_amount}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "don-hang.csv"; a.click();
  }

  const totalFiltered = filtered.reduce((s, o) => s + o.total_amount, 0);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Quản lý đơn hàng</h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 13, margin: 0 }}>{fmt(filtered.length)} đơn — {fmtVND(totalFiltered)}</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={exportCSV} style={{ padding: "7px 14px", fontSize: 13, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", cursor: "pointer" }}>Xuất CSV</button>
          <button onClick={() => { setEditOrder(null); setForm(defaultForm()); setShowForm(true); }} style={{ padding: "7px 14px", fontSize: 13, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "#D4537E", color: "white", cursor: "pointer" }}>+ Thêm đơn</button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm khách hàng, SĐT..." style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, flex: 1, minWidth: 160, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
        <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
        <select value={filterProduct} onChange={e => setFilterProduct(e.target.value)} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}>
          <option value="">Tất cả sản phẩm</option>
          {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select value={filterChannel} onChange={e => setFilterChannel(e.target.value)} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}>
          <option value="">Tất cả kênh</option>
          {CHANNELS.map(c => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
        </select>
        {(search || filterDate || filterProduct || filterChannel) && <button onClick={() => { setSearch(""); setFilterDate(""); setFilterProduct(""); setFilterChannel(""); }} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", cursor: "pointer", color: "var(--color-text-secondary)" }}>Xóa lọc</button>}
      </div>

      {showForm && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-secondary)", borderRadius: "var(--border-radius-lg)", padding: 20, marginBottom: 16 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 15 }}>{editOrder ? "Sửa đơn hàng" : "Thêm đơn hàng mới"}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <FormField label="Ngày đặt"><input type="date" value={form.order_date} onChange={e => setForm(f => ({ ...f, order_date: e.target.value }))} /></FormField>
            <FormField label="Giờ đặt"><input type="time" value={form.order_time} onChange={e => setForm(f => ({ ...f, order_time: e.target.value }))} /></FormField>
            <FormField label="Khách hàng (tuỳ chọn)"><input value={form.customer_name} onChange={e => setForm(f => ({ ...f, customer_name: e.target.value }))} placeholder="Tên khách" /></FormField>
            <FormField label="Điện thoại (tuỳ chọn)"><input value={form.customer_phone} onChange={e => setForm(f => ({ ...f, customer_phone: e.target.value }))} placeholder="09x..." /></FormField>
            <FormField label="Kênh bán hàng">
              <select value={form.sales_channel} onChange={e => setForm(f => ({ ...f, sales_channel: e.target.value }))}>
                {CHANNELS.map(c => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
              </select>
            </FormField>
            <FormField label="Sản phẩm">
              <select value={form.product_id} onChange={e => setForm(f => ({ ...f, product_id: parseInt(e.target.value) }))}>
                {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name} — {fmtVND(p.default_price)}/cái</option>)}
              </select>
            </FormField>
            <FormField label="Số lượng">
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={e => setForm(f => ({ ...f, quantity: parseInt(e.target.value) || 1 }))}
                style={{ width: "100%" }}
              />
              {productionQtyLimit && parseInt(form.quantity) > productionQtyLimit && (
                <div style={{ marginTop: 6, fontSize: 11, color: "#854F0B" }}>
                  Cảnh báo: vượt ngưỡng {productionQtyLimit}. Hệ thống sẽ hỏi xác nhận trước khi lưu.
                </div>
              )}
            </FormField>
            <FormField label="Trạng thái thanh toán">
              <select value={form.payment_status} onChange={e => setForm(f => ({ ...f, payment_status: e.target.value }))}>
                <option value="paid">Đã thanh toán</option>
                <option value="pending">Chưa thanh toán</option>
              </select>
            </FormField>
          </div>
          <div style={{ marginTop: 12 }}>
            <FormField label="Ghi chú"><input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Ghi chú..." /></FormField>
          </div>
          <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" id="opt_in" checked={form.marketing_opt_in} onChange={e => setForm(f => ({ ...f, marketing_opt_in: e.target.checked }))} />
            <label htmlFor="opt_in" style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Khách hàng đồng ý nhận thông tin khuyến mãi (marketing opt-in)</label>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button onClick={() => { setShowForm(false); setEditOrder(null); }} style={{ padding: "7px 16px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", cursor: "pointer", fontSize: 13 }}>Hủy</button>
            <button onClick={handleSave} style={{ padding: "7px 16px", borderRadius: "var(--border-radius-md)", border: "none", background: "#D4537E", color: "white", cursor: "pointer", fontSize: 13 }}>Lưu đơn hàng</button>
          </div>
        </div>
      )}

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "var(--color-background-secondary)" }}>
                {["ID", "Ngày", "Giờ", "Sản phẩm", "SL", "Tổng tiền", "Kênh", "Trạng thái", "Khách", ""].map((h, i) => (
                  <th key={i} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 500, fontSize: 11, color: "var(--color-text-secondary)", borderBottom: "0.5px solid var(--color-border-tertiary)", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o, i) => {
                const product = PRODUCTS.find(p => p.id === o.product_id);
                return (
                  [
                    <tr key={o.id} style={{ borderBottom: expandedEditId === o.id ? "none" : "0.5px solid var(--color-border-tertiary)", background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                      <td style={{ padding: "7px 12px", color: "var(--color-text-tertiary)" }}>#{o.id}</td>
                      <td style={{ padding: "7px 12px" }}>{o.order_date}</td>
                      <td style={{ padding: "7px 12px" }}>{o.order_time}</td>
                      <td style={{ padding: "7px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: product?.color || "#ccc", flexShrink: 0 }} />
                          {o.product_name}
                        </div>
                      </td>
                      <td style={{ padding: "7px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <button
                            onClick={() => adjustQty(o.id, -1)}
                            style={{ padding: "2px 8px", fontSize: 12, borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}
                            disabled={o.quantity <= 1}
                          >
                            -
                          </button>
                          <span style={{ minWidth: 24, textAlign: "center" }}>{o.quantity}</span>
                          <button
                            onClick={() => adjustQty(o.id, 1)}
                            style={{ padding: "2px 8px", fontSize: 12, borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}
                          >
                            +
                          </button>
                          {productionQtyLimit && o.quantity > productionQtyLimit && (
                            <Badge label="SL lớn" color="#854F0B" bg="#FAEEDA" />
                          )}
                        </div>
                      </td>
                      <td style={{ padding: "7px 12px", fontWeight: 500 }}>{fmtVND(o.total_amount)}</td>
                      <td style={{ padding: "7px 12px" }}><Badge label={CHANNEL_LABELS[o.sales_channel] || o.sales_channel} color="#185FA5" bg="#E6F1FB" /></td>
                      <td style={{ padding: "7px 12px" }}>
                        <button
                          onClick={() => togglePayment(o.id)}
                          style={{
                            padding: "4px 10px",
                            borderRadius: 999,
                            border: "0.5px solid var(--color-border-secondary)",
                            background: o.payment_status === "paid" ? "#EAF3DE" : "#FAEEDA",
                            color: o.payment_status === "paid" ? "#3B6D11" : "#854F0B",
                            cursor: "pointer",
                            fontSize: 11,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                          }}
                          title="Bấm để đổi trạng thái thanh toán"
                        >
                          {o.payment_status === "paid" ? "Đã TT" : "Chưa TT"}
                        </button>
                      </td>
                      <td style={{ padding: "7px 12px", color: "var(--color-text-secondary)" }}>{o.customer_name || "—"}</td>
                      <td style={{ padding: "7px 12px" }}>
                        <div style={{ display: "flex", gap: 4 }}>
                          <button onClick={() => handleEdit(o)} style={{ padding: "3px 8px", fontSize: 11, borderRadius: 4, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}>Sửa</button>
                          <button onClick={() => handleDelete(o.id)} style={{ padding: "3px 8px", fontSize: 11, borderRadius: 4, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "#A32D2D" }}>Xóa</button>
                        </div>
                      </td>
                    </tr>,

                    expandedEditId === o.id ? (
                      <tr style={{ borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                        <td colSpan={10} style={{ padding: 0 }}>
                          <div style={{ background: "var(--color-background-primary)", padding: 16 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                              <div style={{ fontSize: 13, fontWeight: 800, color: "#534AB7" }}>Sửa đơn hàng #{o.id}</div>
                              <button
                                onClick={handleCancelInlineEdit}
                                style={{ padding: "4px 10px", borderRadius: 10, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", fontSize: 12, color: "var(--color-text-secondary)" }}
                              >
                                Đóng
                              </button>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                              <FormField label="Ngày đặt">
                                <input type="date" value={form.order_date} onChange={e => setForm(f => ({ ...f, order_date: e.target.value }))} />
                              </FormField>
                              <FormField label="Giờ đặt">
                                <input type="time" value={form.order_time} onChange={e => setForm(f => ({ ...f, order_time: e.target.value }))} />
                              </FormField>

                              <FormField label="Khách hàng (tuỳ chọn)">
                                <input value={form.customer_name} onChange={e => setForm(f => ({ ...f, customer_name: e.target.value }))} placeholder="Tên khách" />
                              </FormField>
                              <FormField label="Điện thoại (tuỳ chọn)">
                                <input value={form.customer_phone} onChange={e => setForm(f => ({ ...f, customer_phone: e.target.value }))} placeholder="09x..." />
                              </FormField>

                              <FormField label="Kênh bán hàng">
                                <select value={form.sales_channel} onChange={e => setForm(f => ({ ...f, sales_channel: e.target.value }))}>
                                  {CHANNELS.map(c => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
                                </select>
                              </FormField>

                              <FormField label="Sản phẩm">
                                <select value={form.product_id} onChange={e => setForm(f => ({ ...f, product_id: parseInt(e.target.value) }))}>
                                  {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name} — {fmtVND(p.default_price)}/cái</option>)}
                                </select>
                              </FormField>

                              <FormField label="Số lượng">
                                <input type="number" min="1" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: parseInt(e.target.value) || 1 }))} />
                              </FormField>

                              <FormField label="Trạng thái thanh toán">
                                <select value={form.payment_status} onChange={e => setForm(f => ({ ...f, payment_status: e.target.value }))}>
                                  <option value="paid">Đã thanh toán</option>
                                  <option value="pending">Chưa thanh toán</option>
                                </select>
                              </FormField>
                            </div>

                            <div style={{ marginTop: 12 }}>
                              <FormField label="Ghi chú">
                                <input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Ghi chú..." />
                              </FormField>
                            </div>

                            <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
                              <input
                                type="checkbox"
                                id={`opt_in_inline_${o.id}`}
                                checked={form.marketing_opt_in}
                                onChange={e => setForm(f => ({ ...f, marketing_opt_in: e.target.checked }))}
                              />
                              <label htmlFor={`opt_in_inline_${o.id}`} style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                                Khách hàng đồng ý nhận thông tin khuyến mãi (marketing opt-in)
                              </label>
                            </div>

                            <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "flex-end" }}>
                              <button
                                onClick={handleCancelInlineEdit}
                                style={{ padding: "7px 16px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", cursor: "pointer", fontSize: 13 }}
                              >
                                Hủy
                              </button>
                              <button
                                onClick={handleSave}
                                style={{ padding: "7px 16px", borderRadius: "var(--border-radius-md)", border: "none", background: "#D4537E", color: "white", cursor: "pointer", fontSize: 13 }}
                              >
                                Lưu thay đổi
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : null
                  ]
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>{label}</label>
      {children}
    </div>
  );
}

// ============================================================
// ANALYTICS TAB
// ============================================================
function AnalyticsTab({ orders }) {
  const [range, setRange] = useState("30");

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - parseInt(range));
  const rangeOrders = orders.filter(o => new Date(o.order_date) >= cutoff);

  const hourSlotData = HOURS.map(h => {
    const entry = { label: h };
    PRODUCTS.forEach(p => {
      entry[p.name] = rangeOrders.filter(o => getHourSlot(o.order_time) === h && o.product_id === p.id).reduce((s, o) => s + o.quantity, 0);
    });
    return entry;
  });

  const productStats = PRODUCTS.map(p => ({
    ...p,
    qty: rangeOrders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.quantity, 0),
    rev: rangeOrders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.total_amount, 0),
  }));

  const totalQty = productStats.reduce((s, p) => s + p.qty, 0) || 1;
  const totalRev = productStats.reduce((s, p) => s + p.rev, 0) || 1;

  const channelData = CHANNELS.map(c => ({
    label: CHANNEL_LABELS[c],
    value: rangeOrders.filter(o => o.sales_channel === c).reduce((s, o) => s + o.total_amount, 0),
  })).filter(d => d.value > 0);

  const last14 = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (13 - i));
    const ds = d.toISOString().slice(0, 10);
    return {
      label: `${d.getDate()}/${d.getMonth() + 1}`,
      ...Object.fromEntries(PRODUCTS.map(p => [p.name, orders.filter(o => o.order_date === ds && o.product_id === p.id).reduce((s, o) => s + o.quantity, 0)])),
    };
  });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Phân tích bán hàng</h1>
        </div>
        <select value={range} onChange={e => setRange(e.target.value)} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}>
          <option value="7">7 ngày</option>
          <option value="14">14 ngày</option>
          <option value="30">30 ngày</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {productStats.map(p => (
          <KPICard key={p.id} label={p.name} value={fmt(p.qty) + " cái"} sub={fmtVND(p.rev)} color={p.color} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Số lượng bán theo giờ (so sánh 3 loại)</SectionTitle>
          <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
            {PRODUCTS.map(p => (
              <span key={p.id} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-text-secondary)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: p.color, display: "inline-block" }} />{p.name}
              </span>
            ))}
          </div>
          <MultiBarChart data={hourSlotData} products={PRODUCTS} height={140} />
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Thị phần doanh thu</SectionTitle>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <DonutChart segments={productStats.map(p => ({ value: p.rev, color: p.color }))} size={100} />
            <div>
              {productStats.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />
                  <span style={{ fontSize: 12 }}>{p.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, marginLeft: 4 }}>{Math.round(p.rev / totalRev * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Xu hướng 14 ngày theo sản phẩm</SectionTitle>
          <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
            {PRODUCTS.map(p => (
              <span key={p.id} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-text-secondary)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: p.color, display: "inline-block" }} />{p.name}
              </span>
            ))}
          </div>
          <MultiBarChart data={last14} products={PRODUCTS} height={140} />
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Doanh thu theo kênh bán hàng</SectionTitle>
          <BarChart data={channelData} color="#534AB7" height={140} />
          <div style={{ marginTop: 12 }}>
            {channelData.map((c, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "4px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                <span style={{ color: "var(--color-text-secondary)" }}>{c.label}</span>
                <span style={{ fontWeight: 500 }}>{fmtVND(c.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FORECAST TAB
// ============================================================
function ForecastTab({ orders }) {
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDay = tomorrow.getDay();
  const isWeekend = tomorrowDay === 0 || tomorrowDay === 6;

  function movingAverage(productId, days = 14) {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - days);
    const relevantOrders = orders.filter(o => {
      const d = new Date(o.order_date);
      const dow = d.getDay();
      const sameType = isWeekend ? (dow === 0 || dow === 6) : (dow > 0 && dow < 6);
      return d >= cutoff && o.product_id === productId && sameType;
    });
    const dayCount = Math.max(1, Math.ceil(days / (isWeekend ? 2 : 5) * (isWeekend ? 2 : 5) / 7));
    return Math.round(relevantOrders.reduce((s, o) => s + o.quantity, 0) / Math.max(1, dayCount));
  }

  function hourSlotForecast(productId) {
    return HOURS.map(slot => {
      const qty = orders.filter(o => o.product_id === productId && getHourSlot(o.order_time) === slot).reduce((s, o) => s + o.quantity, 0);
      const days = [...new Set(orders.map(o => o.order_date))].length || 1;
      return { slot, avg: Math.round(qty / days) };
    });
  }

  const forecasts = PRODUCTS.map(p => ({
    ...p,
    recommended: movingAverage(p.id),
    hourSlots: hourSlotForecast(p.id),
  }));

  const topProduct = forecasts.reduce((a, b) => b.recommended > a.recommended ? b : a, forecasts[0]);
  const peakSlot = forecasts.flatMap(f => f.hourSlots).reduce((a, b) => b.avg > a.avg ? b : a, { slot: "7–9h", avg: 0 });

  const aiSummary = `Dự báo cho ngày ${tomorrow.getDate()}/${tomorrow.getMonth() + 1} (${isWeekend ? "cuối tuần" : "ngày thường"}):
• ${topProduct.name} có nhu cầu cao nhất — chuẩn bị ${topProduct.recommended} cái.
• Khung giờ cao điểm dự kiến: ${peakSlot.slot} — tăng lượng hàng sẵn sàng trước 30 phút.
• ${isWeekend ? "Cuối tuần thường có doanh số cao hơn 30–40% so với ngày thường." : "Ngày thường — ưu tiên khung giờ sáng sớm (7–9h) và chiều (16–19h)."}`;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Dự báo bán hàng</h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: 13, margin: 0 }}>Ngày mai: {tomorrow.toLocaleDateString("vi-VN")} · {isWeekend ? "Cuối tuần" : "Ngày thường"} · Dựa trên dữ liệu 14 ngày</p>
      </div>

      <div style={{ background: "#EEEDFE", border: "0.5px solid #AFA9EC", borderRadius: "var(--border-radius-lg)", padding: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#534AB7", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Phân tích AI
        </div>
        <pre style={{ margin: 0, fontSize: 12, color: "#3C3489", lineHeight: 1.7, whiteSpace: "pre-wrap", fontFamily: "var(--font-sans)" }}>{aiSummary}</pre>
      </div>

      <SectionTitle>Số lượng chuẩn bị gợi ý cho ngày mai</SectionTitle>
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {forecasts.map(p => (
          <div key={p.id} style={{ flex: 1, background: p.light, border: `0.5px solid ${p.color}40`, borderRadius: "var(--border-radius-lg)", padding: 16 }}>
            <div style={{ fontSize: 12, color: p.color, fontWeight: 500, marginBottom: 6 }}>{p.name}</div>
            <div style={{ fontSize: 32, fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1 }}>{p.recommended}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 4 }}>cái cần chuẩn bị</div>
            {p.id === topProduct.id && <div style={{ marginTop: 8 }}><Badge label="Nhu cầu cao nhất" color={p.color} bg={p.light} /></div>}
          </div>
        ))}
      </div>

      <SectionTitle>Dự báo theo khung giờ</SectionTitle>
      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "var(--color-background-secondary)" }}>
              <th style={{ padding: "8px 16px", textAlign: "left", fontWeight: 500, fontSize: 11, color: "var(--color-text-secondary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>Khung giờ</th>
              {PRODUCTS.map(p => <th key={p.id} style={{ padding: "8px 16px", textAlign: "right", fontWeight: 500, fontSize: 11, color: p.color, borderBottom: "0.5px solid var(--color-border-tertiary)" }}>{p.name}</th>)}
              <th style={{ padding: "8px 16px", textAlign: "right", fontWeight: 500, fontSize: 11, color: "var(--color-text-secondary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>Tổng</th>
            </tr>
          </thead>
          <tbody>
            {HOURS.map((slot, i) => {
              const rowData = forecasts.map(f => f.hourSlots.find(s => s.slot === slot)?.avg || 0);
              const total = rowData.reduce((s, v) => s + v, 0);
              const isPeak = slot === peakSlot.slot;
              return (
                <tr key={slot} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: isPeak ? "#EEEDFE" : i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                  <td style={{ padding: "8px 16px", fontWeight: isPeak ? 500 : 400 }}>
                    {slot} {isPeak && <Badge label="Cao điểm" color="#534AB7" bg="#EEEDFE" />}
                  </td>
                  {rowData.map((v, j) => <td key={j} style={{ padding: "8px 16px", textAlign: "right", color: "var(--color-text-secondary)" }}>{v}</td>)}
                  <td style={{ padding: "8px 16px", textAlign: "right", fontWeight: 500 }}>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================
// FINANCE TAB
// ============================================================
function FinanceTab({ orders, costs, setCosts }) {
  const [selectedDate, setSelectedDate] = useState(today());
  const [editingCost, setEditingCost] = useState(false);
  const [costForm, setCostForm] = useState({});
  const [aiVisible, setAiVisible] = useState(false);

  const dateRevenue = orders.filter(o => o.order_date === selectedDate).reduce((s, o) => s + o.total_amount, 0);
  const dateCosts = costs[selectedDate] || {};
  const totalCost = Object.entries(dateCosts).filter(([k]) => k.endsWith("_cost")).reduce((s, [, v]) => s + v, 0);
  const profit = dateRevenue - totalCost;

  const productRevenues = PRODUCTS.map(p => ({
    ...p,
    rev: orders.filter(o => o.product_id === p.id && o.order_date === selectedDate).reduce((s, o) => s + o.total_amount, 0),
    qty: orders.filter(o => o.product_id === p.id && o.order_date === selectedDate).reduce((s, o) => s + o.quantity, 0),
  }));

  const costLabels = {
    flour_cost: "Bột mì", sugar_cost: "Đường", butter_cost: "Bơ",
    strawberry_filling_cost: "Nhân dâu", caramel_filling_cost: "Nhân caramen",
    chocolate_filling_cost: "Nhân sôcola", packaging_cost: "Bao bì",
    delivery_cost: "Vận chuyển", labor_cost: "Nhân công",
  };

  function startEdit() {
    setCostForm({ ...(costs[selectedDate] || Object.fromEntries(Object.keys(costLabels).map(k => [k, 0]))) });
    setEditingCost(true);
  }

  function saveCost() {
    const updated = { ...costs };
    updated[selectedDate] = { date: selectedDate, ...Object.fromEntries(Object.entries(costForm).map(([k, v]) => [k, parseInt(v) || 0])) };
    setCosts(updated);
    setEditingCost(false);
  }

  // 30-day totals for AI suggestions
  const totals30 = PRODUCTS.map(p => ({
    ...p,
    qty: orders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.quantity, 0),
    rev: orders.filter(o => o.product_id === p.id).reduce((s, o) => s + o.total_amount, 0),
  }));
  const maxRev = Math.max(...totals30.map(p => p.rev), 1);
  const minRev = Math.min(...totals30.map(p => p.rev));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Tài chính & Chi phí</h1>
        </div>
        <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} style={{ padding: "6px 10px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <KPICard label="Doanh thu ngày" value={fmtVND(dateRevenue)} />
        <KPICard label="Tổng chi phí" value={fmtVND(totalCost)} />
        <KPICard label="Lợi nhuận ước tính" value={fmtVND(profit)} color={profit >= 0 ? "#3B6D11" : "#A32D2D"} sub={profit >= 0 ? "Có lãi" : "Lỗ"} />
        <KPICard label="Biên lợi nhuận" value={dateRevenue > 0 ? Math.round(profit / dateRevenue * 100) + "%" : "N/A"} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <SectionTitle>Chi phí đầu vào</SectionTitle>
            <button onClick={startEdit} style={{ padding: "4px 10px", fontSize: 11, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}>Nhập chi phí</button>
          </div>
          {editingCost ? (
            <div>
              {Object.entries(costLabels).map(([k, label]) => (
                <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <label style={{ fontSize: 12, flex: 1, color: "var(--color-text-secondary)" }}>{label}</label>
                  <input type="number" value={costForm[k] || 0} onChange={e => setCostForm(f => ({ ...f, [k]: parseInt(e.target.value) || 0 }))} style={{ width: 120, padding: "4px 8px", fontSize: 12, textAlign: "right", borderRadius: 4, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button onClick={() => setEditingCost(false)} style={{ flex: 1, padding: "6px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", fontSize: 12 }}>Hủy</button>
                <button onClick={saveCost} style={{ flex: 1, padding: "6px", borderRadius: "var(--border-radius-md)", border: "none", background: "#D4537E", color: "white", cursor: "pointer", fontSize: 12 }}>Lưu</button>
              </div>
            </div>
          ) : (
            <div>
              {Object.entries(costLabels).map(([k, label]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "4px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                  <span style={{ color: "var(--color-text-secondary)" }}>{label}</span>
                  <span>{fmtVND(dateCosts[k] || 0)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 500, padding: "8px 0 0" }}>
                <span>Tổng chi phí</span><span>{fmtVND(totalCost)}</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Doanh thu theo sản phẩm</SectionTitle>
          {productRevenues.map((p, i) => (
            <div key={p.id} style={{ padding: "10px 0", borderBottom: i < 2 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />{p.name}
                </span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{fmtVND(p.rev)}</span>
              </div>
              <div style={{ height: 4, background: "var(--color-background-secondary)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", background: p.color, width: `${Math.round(p.rev / (dateRevenue || 1) * 100)}%`, borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 2 }}>{p.qty} cái · {Math.round(p.rev / (dateRevenue || 1) * 100)}% doanh thu</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <SectionTitle>Gợi ý AI tài chính (30 ngày)</SectionTitle>
          <button onClick={() => setAiVisible(!aiVisible)} style={{ padding: "4px 10px", fontSize: 11, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: aiVisible ? "#EEEDFE" : "transparent", cursor: "pointer", color: "#534AB7" }}>{aiVisible ? "Ẩn" : "Xem gợi ý"}</button>
        </div>
        {aiVisible && (
          <div>
            {totals30.map(p => {
              const isTop = p.rev === maxRev;
              const isLow = p.rev === minRev;
              return (
                <div key={p.id} style={{ padding: 12, borderRadius: "var(--border-radius-md)", background: isTop ? "#EAF3DE" : isLow ? "#FAEEDA" : "var(--color-background-secondary)", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />
                    <span style={{ fontWeight: 500, fontSize: 13 }}>{p.name}</span>
                    {isTop && <Badge label="Hiệu quả cao" color="#3B6D11" bg="#C0DD97" />}
                    {isLow && <Badge label="Cần xem xét" color="#854F0B" bg="#FAC775" />}
                  </div>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                    {isTop && `${p.name} đang dẫn đầu doanh thu (${fmtVND(p.rev)}). Nhu cầu ổn định — có thể xem xét tăng giá nhẹ nếu chi phí nguyên liệu tăng.`}
                    {isLow && `${p.name} có doanh thu thấp nhất (${fmtVND(p.rev)}). Cân nhắc chạy chương trình khuyến mãi hoặc giảm lượng chuẩn bị để tránh tồn đọng.`}
                    {!isTop && !isLow && `${p.name} hoạt động ổn định (${fmtVND(p.rev)}). Duy trì chiến lược hiện tại và theo dõi xu hướng theo tuần.`}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// SETTINGS TAB
// ============================================================
function SettingsTab({ privacyPolicy, setPrivacyPolicy, productionQtyLimit, setProductionQtyLimit, weatherLocation, setWeatherLocation, onUseMyLocation, weatherLoading, weatherWarning }) {
  const [editingPolicy, setEditingPolicy] = useState(false);
  const [policyDraft, setPolicyDraft] = useState(privacyPolicy);
  const [consentStats] = useState({ total: INITIAL_ORDERS.length, optedIn: INITIAL_ORDERS.filter(o => o.marketing_opt_in).length });

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Cài đặt & Tuân thủ</h1>
      <p style={{ color: "var(--color-text-secondary)", fontSize: 13, margin: "0 0 20px" }}>Quản lý quyền riêng tư, đồng ý marketing và cài đặt hệ thống</p>

      <div style={{ background: "#E6F1FB", border: "0.5px solid #85B7EB", borderRadius: "var(--border-radius-lg)", padding: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#185FA5", marginBottom: 6 }}>Tuyên bố tuân thủ</div>
        <p style={{ margin: 0, fontSize: 12, color: "#0C447C", lineHeight: 1.7 }}>
          Hệ thống này tuân theo các nguyên tắc bảo mật tương tự GDPR: sự đồng ý rõ ràng, minh bạch về mục đích sử dụng dữ liệu, giới hạn thu thập thông tin cá nhân, và không gửi spam marketing. Dữ liệu khách hàng chỉ được sử dụng để xử lý đơn hàng và cải thiện dịch vụ.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Thống kê đồng ý marketing</SectionTitle>
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <KPICard label="Tổng khách" value={fmt(consentStats.total)} />
            <KPICard label="Đồng ý nhận QC" value={fmt(consentStats.optedIn)} color="#3B6D11" />
            <KPICard label="Tỷ lệ opt-in" value={Math.round(consentStats.optedIn / consentStats.total * 100) + "%"} />
          </div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
            Chỉ khách hàng đã đồng ý (marketing opt-in) mới nhận thông tin khuyến mãi. Mọi đồng ý đều được ghi nhận với timestamp để đảm bảo tính minh bạch.
          </div>
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
          <SectionTitle>Tích hợp Google Sheets</SectionTitle>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 12 }}>
            <strong style={{ color: "var(--color-text-primary)" }}>Hướng dẫn import từ Google Sheets:</strong><br />
            1. Chuẩn bị file Google Sheets với các cột: ngày, giờ, sản phẩm, số lượng, kênh bán, khách hàng<br />
            2. Export sang CSV (File → Download → CSV)<br />
            3. Sử dụng nút "Xuất CSV" trong tab Đơn hàng để đồng bộ dữ liệu<br />
            4. Dữ liệu sẽ được import và hiển thị trong hệ thống
          </div>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>Tích hợp Google Sheets API đầy đủ cần thêm API key trong cài đặt nâng cao.</div>
        </div>
      </div>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <SectionTitle>Chính sách bảo mật</SectionTitle>
          <button onClick={() => { setPolicyDraft(privacyPolicy); setEditingPolicy(!editingPolicy); }} style={{ padding: "4px 10px", fontSize: 11, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", color: "var(--color-text-secondary)" }}>{editingPolicy ? "Hủy" : "Chỉnh sửa"}</button>
        </div>
        {editingPolicy ? (
          <div>
            <textarea value={policyDraft} onChange={e => setPolicyDraft(e.target.value)} rows={5} style={{ width: "100%", padding: "8px 12px", fontSize: 12, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)", resize: "vertical", lineHeight: 1.7, boxSizing: "border-box" }} />
            <button onClick={() => { setPrivacyPolicy(policyDraft); setEditingPolicy(false); }} style={{ marginTop: 8, padding: "6px 16px", fontSize: 12, borderRadius: "var(--border-radius-md)", border: "none", background: "#D4537E", color: "white", cursor: "pointer" }}>Lưu chính sách</button>
          </div>
        ) : (
          <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{privacyPolicy}</p>
        )}
      </div>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16, marginBottom: 16 }}>
        <SectionTitle>Thời tiết & cảnh báo sản xuất</SectionTitle>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
          Gọi API thời tiết và cảnh báo khi điều kiện xấu. Đồng thời nếu bạn nhập số lượng vượt ngưỡng thì sẽ hiện cảnh báo và hỏi xác nhận trước khi lưu.
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
          <button onClick={onUseMyLocation} style={{ padding: "7px 12px", fontSize: 13, borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", cursor: "pointer", color: "var(--color-text-secondary)" }}>
            Dùng vị trí hiện tại
          </button>

          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>Lat</div>
                <input
                  type="number"
                  value={weatherLocation?.lat ?? ""}
                  onChange={e => setWeatherLocation({ ...weatherLocation, lat: e.target.value === "" ? null : parseFloat(e.target.value) })}
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 12, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}
                />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>Lon</div>
                <input
                  type="number"
                  value={weatherLocation?.lon ?? ""}
                  onChange={e => setWeatherLocation({ ...weatherLocation, lon: e.target.value === "" ? null : parseFloat(e.target.value) })}
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 12, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}
                />
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>Ngưỡng cảnh báo SL lớn</div>
            <input
              type="number"
              min="1"
              value={productionQtyLimit}
              onChange={e => setProductionQtyLimit(parseInt(e.target.value) || 0)}
              style={{ width: "100%", padding: "8px 10px", borderRadius: 12, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}
            />
            <div style={{ marginTop: 6, fontSize: 11, color: "var(--color-text-tertiary)", lineHeight: 1.6 }}>
              Nhập SL &gt; ngưỡng sẽ hiển thị cảnh báo và hỏi xác nhận trước khi lưu.
            </div>
          </div>
        </div>

        <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6, color: "var(--color-text-secondary)" }}>Trạng thái thời tiết</div>
          {weatherLoading ? (
            <div style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Đang tải...</div>
          ) : weatherWarning ? (
            <div style={{ fontSize: 12, color: "#A32D2D", lineHeight: 1.6 }}>{weatherWarning}</div>
          ) : (
            <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", lineHeight: 1.6 }}>Hiện tại chưa có cảnh báo thời tiết xấu.</div>
          )}
        </div>
      </div>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 16 }}>
        <SectionTitle>Danh sách sản phẩm</SectionTitle>
        {PRODUCTS.map(p => (
          <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: p.color }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Mã: {p.flavor_code} · Giá mặc định: {fmtVND(p.default_price)}</div>
            </div>
            <Badge label="Đang hoạt động" color="#3B6D11" bg="#EAF3DE" />
          </div>
        ))}
      </div>
    </div>
  );
}
