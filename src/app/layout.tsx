import type { Metadata } from "next";
import "./globals.css";
import { generateOrganizationSchema, homepageFAQs } from "@/lib/schema";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.zhipack.com"),
    title: {
        default: "智包装 ZhiPack | 专业纸制品包装盒定制 - 大连印刷工厂",
        template: "%s | 智包装 ZhiPack",
    },
    description: "阿木包装，资深印刷销售主管。专注药食级纸制品包装设计，提供药品、食品、化妆品等包装盒一站式定制服务。500件起订，大连旅顺工厂直供。电话: 13555985453",
    keywords: [
        "印刷包装", "纸质包装盒", "礼品盒定制", "手提袋设计",
        "药品包装盒", "保健品包装", "食品包装", "化妆品包装",
        "电子产品包装", "玩具包装", "海鲜礼盒",
        "大连印刷", "小批量印刷", "纸制品包装",
    ],
    authors: [{ name: "阿木" }],
    creator: "阿木包装",
    publisher: "阿木包装",
    alternates: { canonical: "https://www.zhipack.com" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
        type: "website" as const, locale: "zh_CN", url: "https://www.zhipack.com",
        title: "智包装 ZhiPack | 专业纸制品包装盒定制",
        description: "专注药食级纸制品包装设计，药品、食品、化妆品等包装盒一站式定制。500件起订。",
        siteName: "智包装ZhiPack", images: [{ url: "/images/factory-panorama.jpg", width: 1920, height: 1080, alt: "工厂全景" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const orgSchema = generateOrganizationSchema("智包装ZhiPack", "https://www.zhipack.com", "/images/factory-panorama.jpg");
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homepageFAQs.map(f => ({ "@type": "Question" as const, name: f.q, acceptedAnswer: { "@type": "Answer" as const, text: f.a } })) };
    return (
        <html lang="zh-CN">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased circuit-bg">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                {children}
            </body>
        </html>
    );
}