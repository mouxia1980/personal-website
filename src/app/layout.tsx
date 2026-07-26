import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阿木 - 印刷销售主管 | 个人主页",
  description: "阿木的个人主页，专注印刷行业销售与客户服务。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-[#0a0a0f] text-gray-200">{children}</body>
    </html>
  );
}
