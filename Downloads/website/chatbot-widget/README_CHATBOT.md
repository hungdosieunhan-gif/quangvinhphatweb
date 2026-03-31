# Hướng dẫn tích hợp Chatbot AI cho Quang Vinh Phát (Next.js)

Bộ mã nguồn này cung cấp một Chatbot Widget AI tư vấn bán hàng thông minh sử dụng API của OpenAI (ChatGPT), được cấu hình sẵn cho **Quang Vinh Phát**. Chatbot đặc biệt tập trung tư vấn 3 loại bánh: **Bánh dâu, Bánh caramen, Bánh sôcola**.

## 1. Yêu cầu trước khi cài đặt

Đảm bảo project Next.js của bạn đã cài đặt các thư viện cần thiết:
```bash
npm install lucide-react
```
*Ghi chú: Widget sử dụng **Tailwind CSS** để style, vui lòng đảm bảo project của bạn đã cài đặt Tailwind.*

## 2. Cấu trúc thư mục

Vui lòng copy các file trong thư mục này vào dự án Next.js của bạn theo cấu trúc gợi ý sau:

```text
your-nextjs-app/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         <-- Copy từ route.ts
│   ├── layout.tsx
│   └── ...
├── components/
│   └── ChatbotWidget.tsx        <-- Copy từ ChatbotWidget.tsx
├── lib/ (hoặc config/)
│   └── chatbot-config.ts        <-- Copy từ chatbot-config.ts
└── .env.local                   <-- Copy nội dung từ .env.local.example
```

## 3. Cấu hình Environment Variable

Mở (hoặc tạo) file `.env.local` ở thư mục gốc của dự án và thêm API key của OpenAI:
```env
OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```
*Lưu ý: Không bao giờ commit file này lên GitHub!*

## 4. Tùy chỉnh (Tùy chọn)

Mở file `chatbot-config.ts` để sửa:
- `shopName`: Tên cửa hàng.
- `hotline`: Số điện thoại.
- `openingHours`: Giờ mở cửa.
- `promotionText`: Các chương trình khuyến mãi.
- `modelName`: Thay đổi mô hình AI (Mặc định `gpt-4o-mini`).

## 5. Tích hợp vào Website

Để Chatbot hiển thị trên mọi trang, bạn nên đưa Component vào `app/layout.tsx`.

Ví dụ `app/layout.tsx`:
```tsx
import './globals.css';
import ChatbotWidget from '@/components/ChatbotWidget'; // Sửa lại đường dẫn nếu cần

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {children}
        
        {/* Thêm Widget Chatbot vào đây */}
        <ChatbotWidget />
      </body>
    </html>
  );
}
```

## 6. Tính năng nổi bật có sẵn
- **Hành vi được kiểm soát:** Chatbot được cấu hình để *chỉ tư vấn* 3 loại bánh cố định qua prompt nội bộ, không bịa đặt thông tin.
- **Nút trả lời nhanh:** Gợi ý người dùng các câu hỏi phổ biến ngay khi mở cửa sổ.
- **Lưu lịch sử chat tạm thời:** Component lưu lại lịch sử trong một session để AI trả lời có ngữ cảnh.
- **Bảo mật:** Gọi API thông qua Next.js Server (Backend), hoàn toàn giấu API key khỏi phía Client.
- **Giữ chân khách hàng:** Yêu cầu lấy thông tin hoặc hotline khi khách hàng muốn hỗ trợ trực tiếp.

## 7. Khắc phục lỗi (Troubleshooting)
- **Lỗi 500 API:** Hãy kiểm tra xem biến môi trường `OPENAI_API_KEY` đã được nạp đúng chưa. Hoặc khởi động lại server (`npm run dev`).
- **Lỗi icon không hiện:** Chatbot dùng `lucide-react`, hãy đảm bảo gói này đã được install.
