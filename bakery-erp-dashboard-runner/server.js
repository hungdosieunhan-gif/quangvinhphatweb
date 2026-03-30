import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

function fallbackReply(message, context) {
  const weatherWarning = context?.weatherWarning;
  const productionQtyLimit = context?.productionQtyLimit;
  const largeQtyCountRecent = context?.largeQtyCountRecent;
  const quantityWarning = context?.quantityWarning;
  const ordersSummary = context?.ordersSummary || {};
  const financeSummary = context?.financeSummary || {};
  const forecastSummary = context?.forecastSummary || {};

  const m = String(message || "");
  const intentOrders = /don\s*hang|đơn\s*hàng|quan\s*ly\s*don|theo\s*doi\s*don|đơn\s*đặt|orders?/i.test(m);
  const intentFinance = /tai\s*chinh|tài\s*chính|chi\s*phi|lợi\s*nhuận|loi\s*nhuan|profit|margin|lỗ|lãi/i.test(m);
  const intentForecast = /du\s*bao|forecast|ngay\s*mai|tomorrow|dự\s*báo/i.test(m);
  const intentPayment = /chua\s*tt|chưa\s*tt|chưa\s*thanh\s*toan|thanh\s*toan|cong\s*no|công\s*nợ|pending|thu\s*tiền/i.test(m);
  const intentMarketing = /marketing|opt-?in|qc|khuyen\s*mai|khuyến\s*mãi|campaign|tiep\s*thi/i.test(m);
  const intentSchedule = /san\s*xuat|sản\s*xuất|ke\s*hoach|kế\s*hoạch|lich|lịch|giao\s*hang|giao\s*hàng|ca|dong\s*goi|đóng\s*gói|plan/i.test(m);
  const intentCustomer = /khach|khách|sdt|dien\s*thoai|điện\s*thoại|ten\s*khach|tên\s*khách/i.test(m);
  const intentCost = /chi\s*phi|cost|gia\s*von|định\s*mức|ton\s*kho|tồn\s*kho|nguyen\s*lieu|nguyên\s*liệu/i.test(m);

  const parts = [];
  const C = (v) => {
    const n = typeof v === "number" ? v : Number(v);
    if (Number.isFinite(n)) return n.toLocaleString("vi-VN");
    return String(v ?? "");
  };

  function addCoreBaseLine() {
    const base = [];
    if (typeof ordersSummary.todayOrdersCount === "number") base.push(`${ordersSummary.todayOrdersCount} đơn`);
    if (typeof ordersSummary.todayRevenue === "number") base.push(`doanh thu ${C(ordersSummary.todayRevenue)}đ`);
    if (typeof ordersSummary.pendingCountToday === "number" && ordersSummary.pendingCountToday > 0) base.push(`chưa TT ${ordersSummary.pendingCountToday} đơn`);
    if (productionQtyLimit && typeof ordersSummary.largeQtyTodayCount === "number" && ordersSummary.largeQtyTodayCount > 0) base.push(`SL lớn ${ordersSummary.largeQtyTodayCount}`);
    if (typeof financeSummary.todayTotalCost === "number") base.push(`chi phí ${C(financeSummary.todayTotalCost)}đ`);
    if (typeof financeSummary.todayProfit === "number") base.push(`lợi nhuận ${C(financeSummary.todayProfit)}đ`);
    if (forecastSummary?.topProduct?.name) base.push(`top dự báo: ${forecastSummary.topProduct.name} ~${forecastSummary.topProduct.recommended} cái`);
    if (weatherWarning) base.push(`thời tiết xấu`);
    if (base.length > 0) parts.push(`Cơ sở: ${base.join(" · ")}`);
  }

  // PAYMENT
  if (intentPayment) {
    const pendingCount = ordersSummary.pendingCountToday ?? 0;
    const pendingAmount = ordersSummary.pendingAmountToday ?? 0;
    const topChannel = ordersSummary.topChannel?.label ?? "—";
    parts.push(`Cơ sở: ${pendingCount} đơn chưa thanh toán (tổng ${C(pendingAmount)}đ) · Top kênh ${topChannel}.`);
    parts.push("Việc cần làm:");
    parts.push("• Rà soát danh sách đơn chưa TT và gom theo kênh để nhắc đúng kịch bản.");
    parts.push("• Ưu tiên mẻ/đóng gói cho các đơn gần khung giờ cao điểm để không trễ SLA.");
    if (productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0) {
      parts.push("• Với đơn SL lớn: chia mẻ + chuẩn bị bao bì/giữ nhiệt để giao nhanh khi khách xác nhận.");
    } else {
      parts.push("• Chuẩn hóa thời gian giao từng kênh (walk-in/website/zalo/đại lý) theo dữ liệu giờ cao điểm.");
    }
    return parts.join("\n");
  }

  // CUSTOMER
  if (intentCustomer) {
    const topCustomers = Array.isArray(ordersSummary.topCustomers) ? ordersSummary.topCustomers : [];
    if (topCustomers.length > 0) {
      const top = topCustomers
        .slice(0, 3)
        .map(c => `${c.name ? c.name + " " : ""}(${c.phone}) ${c.orders} đơn`)
        .join("; ");
      parts.push(`Cơ sở: Top khách hôm nay: ${top}.`);
      parts.push("Việc cần làm:");
      parts.push("• Nhóm top khách theo kênh/khung giờ để ưu tiên đóng gói và nhắn lịch giao phù hợp.");
      parts.push("• Với nhóm thường mua sản phẩm top: chuẩn bị sẵn để giảm thời gian chờ.");
    } else {
      parts.push("Hôm nay chưa có dữ liệu SĐT/khách để xác định top khách.");
      parts.push("Việc cần làm: nhập SĐT khách khi tạo đơn để hệ thống phân tích chính xác hơn.");
    }
    return parts.join("\n");
  }

  // MARKETING
  if (intentMarketing) {
    const optIn = ordersSummary.marketingOptInTodayCount ?? 0;
    const total = ordersSummary.todayOrdersCount ?? 0;
    const rate = total > 0 ? Math.round((optIn / total) * 100) : 0;
    const pending = ordersSummary.pendingCountToday ?? 0;
    parts.push(`Cơ sở: marketing opt-in ${optIn}/${total} (${rate}%). Chưa TT ${pending} đơn.`);
    parts.push("Việc cần làm:");
    parts.push("• Nếu opt-in cao: ưu tiên nội dung/ưu đãi cho đúng kênh có doanh thu cao nhất.");
    parts.push("• Nếu thời tiết xấu hoặc có SL lớn: ưu tiên nhắc giao hàng/giữ chất lượng thay vì giảm giá mạnh.");
    return parts.join("\n");
  }

  // SCHEDULE / PRODUCTION
  if (intentSchedule) {
    const peakHour = ordersSummary.peakHour ?? "—";
    const peakSlot = forecastSummary?.peakSlot?.slot ?? "—";
    const topProduct = forecastSummary?.topProduct?.name ?? "—";
    const rec = forecastSummary?.topProduct?.recommended ?? 0;
    parts.push(`Cơ sở: giờ cao điểm hôm nay ${peakHour}; dự báo giờ nổi bật ${peakSlot}; ưu tiên ${topProduct} ~${rec} cái ngày mai.`);
    if (weatherWarning) parts.push(`Thêm cảnh báo: ${weatherWarning}`);
    if (productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0) {
      parts.push(`SL lớn hôm nay: ${ordersSummary.largeQtyTodayCount} đơn (ngưỡng ${productionQtyLimit}).`);
    }
    parts.push("Việc cần làm:");
    parts.push("• Lập mẻ theo giờ cao điểm: ưu tiên đóng gói trước cho các đơn theo khung giờ.");
    parts.push("• Chuẩn bị tồn nguyên liệu theo top sản phẩm; sắp xếp nhân sự theo khối lượng đóng gói.");
    parts.push("• Kiểm soát đơn SL lớn bằng cách chia mẻ để giảm rủi ro chất lượng/kẹt giao.");
    return parts.join("\n");
  }

  // FINANCE / COST
  if (intentFinance || intentCost) {
    const totalCost = Number(financeSummary.todayTotalCost ?? 0);
    const profit = Number(financeSummary.todayProfit ?? 0);
    const margin = financeSummary.todayProfitMarginPct;
    parts.push(`Cơ sở: chi phí ${totalCost.toLocaleString("vi-VN")}đ · lợi nhuận ${profit.toLocaleString("vi-VN")}đ${typeof margin === "number" ? ` · biên ${margin}%` : ""}.`);
    const topDrivers = Array.isArray(financeSummary.costTopDrivers) ? financeSummary.costTopDrivers : [];
    if (topDrivers.length > 0) {
      const top = topDrivers
        .slice(0, 3)
        .map(x => `${x.key} ${C(x.value)}đ`)
        .join(", ");
      parts.push(`Chi phí chi phối: ${top}.`);
    }
    parts.push("Việc cần làm:");
    parts.push(profit < 0 ? "• Rà lại định mức nguyên liệu/nhân công/vận chuyển; ưu tiên kênh biên tốt để kéo lợi nhuận." : "• Tối ưu lịch sản xuất theo nhu cầu hôm nay; cân nhắc điều chỉnh giá/khuyến mãi theo kênh có doanh thu cao.");
    if (weatherWarning) parts.push("• Do thời tiết xấu: tăng kiểm soát bảo quản & hạn chế giao dồn để tránh phát sinh chi phí.");
    if ((ordersSummary.pendingCountToday ?? 0) > 0) parts.push("• Đồng thời nhắc thanh toán để giảm đọng dòng tiền.");
    return parts.join("\n");
  }

  // FORECAST
  if (intentForecast) {
    const label = forecastSummary?.tomorrowLabel ?? "ngày mai";
    const topProduct = forecastSummary?.topProduct?.name ?? "—";
    const rec = forecastSummary?.topProduct?.recommended ?? 0;
    const peakSlot = forecastSummary?.peakSlot?.slot ?? "—";
    parts.push(`Cơ sở: ${label} dự báo ưu tiên ${topProduct} ~${rec} cái; giờ nổi bật ${peakSlot}.`);
    if (weatherWarning) parts.push(`Thêm cảnh báo: ${weatherWarning}`);
    parts.push("Việc cần làm:");
    parts.push("• Chuẩn bị nguyên liệu theo mẻ nhỏ hơn với buffer giữ chất lượng (đặc biệt khi có SL lớn/thời tiết xấu).");
    parts.push("• Lên kế hoạch đóng gói/giao theo giờ cao điểm dự kiến để giảm trễ.");
    return parts.join("\n");
  }

  // ORDERS (default)
  if (intentOrders || (!intentOrders && !intentFinance && !intentForecast && !intentPayment && !intentMarketing && !intentSchedule && !intentCustomer && !intentCost)) {
    addCoreBaseLine();
    parts.push("Việc cần làm:");
    if ((ordersSummary.pendingCountToday ?? 0) > 0) {
      parts.push("• Xử lý công nợ: nhắc theo kênh để giảm đơn chưa TT.");
    }
    if (weatherWarning) {
      parts.push("• Với thời tiết xấu: chia mẻ nhỏ + tăng kiểm soát bảo quản trước giao.");
    }
    if (productionQtyLimit && (ordersSummary.largeQtyTodayCount || 0) > 0) {
      parts.push("• Với đơn SL lớn: chia mẻ/đóng gói theo ca để tránh kẹt.");
    } else {
      parts.push("• Lên lịch sản xuất theo giờ cao điểm và top sản phẩm.");
    }
    parts.push("Nếu bạn muốn sâu hơn, gõ: `đơn hàng`, `tài chính`, `dự báo`, hoặc `chưa thanh toán`.");
    return parts.join("\n");
  }

  // Fallback cuối
  addCoreBaseLine();
  parts.push("Việc cần làm: cho mình biết bạn muốn xem phần nào (đơn hàng/tài chính/dự báo/chưa TT).");
  return parts.join("\n");
}

function safeString(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "string") return v;
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

app.post("/api/ai-agent", async (req, res) => {
  try {
    const message = safeString(req.body?.message);
    const context = req.body?.context ?? {};

    if (!message.trim()) {
      return res.status(400).json({ error: "Missing message" });
    }
    if (!OPENAI_API_KEY) {
      return res.json({
        reply: fallbackReply(message, context),
        note: "AI API key chưa cấu hình được; dùng gợi ý dự phòng.",
      });
    }

    const systemPrompt =
      "Bạn là AI agent trợ lý quản lý vận hành nhà làm bánh (ERP). " +
      "Luôn dựa trên dữ liệu trong `context` người dùng gửi lên (có cả số liệu). " +
      "Trả lời ngắn gọn theo hướng hành động (việc cần làm ngay), ưu tiên tiếng Việt. " +
      "Mỗi câu trả lời phải có mục `Cơ sở:` trích 2-4 số liệu quan trọng từ context và mục `Việc cần làm:` 1-3 gạch đầu dòng. " +
      "Không lặp câu hỏi chung chung; nếu cần thêm thông tin thì hỏi tối đa 1 câu duy nhất.";

    const contextText = safeString({
      weatherWarning: context?.weatherWarning ?? null,
      weatherMeta: context?.weatherMeta ?? null,
      productionQtyLimit: context?.productionQtyLimit ?? null,
      largeQtyCountRecent: context?.largeQtyCountRecent ?? null,
      quantityWarning: context?.quantityWarning ?? null,
      ordersSummary: context?.ordersSummary ?? null,
      financeSummary: context?.financeSummary ?? null,
      forecastSummary: context?.forecastSummary ?? null,
      todayStr: context?.todayStr ?? null,
    });

    const userPrompt =
      `Ngữ cảnh hiện tại:\n${contextText}\n\n` +
      `Yêu cầu của người dùng:\n${message}`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          temperature: 0.3,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        }),
      });

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (reply) return res.json({ reply });

    // If OpenAI fails (quota, model, etc), still provide a useful response.
    const fallback = fallbackReply(message, context);
    return res.json({
      reply: fallback,
      note:
        data?.error?.message
          ? `OpenAI lỗi: ${data.error.message}`
          : "OpenAI không trả lời được; dùng gợi ý dự phòng.",
    });
  } catch (e) {
    return res.json({
      reply: fallbackReply(message, context),
      note: "Lỗi hệ thống; dùng gợi ý dự phòng.",
    });
  }
});

app.listen(PORT, "127.0.0.1", () => {
  // eslint-disable-next-line no-console
  console.log(`AI server listening on http://127.0.0.1:${PORT}`);
});

