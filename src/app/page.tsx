import HeroTechBanner from "@/components/HeroTechBanner";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import TechMetricDashboard from "@/components/TechMetricDashboard";
import ProductCard from "@/components/ProductCard";
import { generateServiceSchema, homepageFAQs } from "@/lib/schema";

const products = [
    { icon: "medicine", title: "药品包装盒", desc: "药食级认证纸材，符合GMP标准，防潮防氧化设计", details: ["白卡纸/铜版纸", "烫金/UV/覆膜", "6色印刷"] },
    { icon: "health", title: "保健品包装盒", desc: "高端礼品级设计，提升品牌价值与货架吸引力", details: ["灰板裱糊", "磁吸翻盖", "内托定制"] },
    { icon: "food", title: "食品包装盒", desc: "食品级安全检测通过，保鲜防潮工艺保障品质", details: ["食品级油墨", "铝箔内衬", "环保材质"] },
    { icon: "cosmetic", title: "化妆品包装盒", desc: "精致烫金UV工艺，打造高端品牌形象体验", details: ["特种纸", "激凸/击凸", "激光防伪"] },
    { icon: "electronic", title: "电子产品包装盒", desc: "防震内衬设计，完善物流保护方案", details: ["EVA内衬", "磁吸天地盖", "FSC认证"] },
    { icon: "toy", title: "儿童玩具包装盒", desc: "环保油墨印刷，圆角安全设计呵护儿童", details: ["大豆油墨", "模切开窗", "环保材质"] },
    { icon: "seafood", title: "海鲜礼盒", desc: "防潮防水处理，高端商务送礼首选方案", details: ["淋膜工艺", "手提设计", "礼盒套装"] },
    { icon: "bag", title: "手提袋定制", desc: "多材质可选，品牌VI标准化输出", details: ["牛皮纸/白卡", "棉绳/丝带", "按需定制"] },
];

const galleryImages = [
    { src: "/images/cosmetic-drug-blister-package.jpg", alt: "化妆品药片泡罩包装", span: "md:col-span-2" },
    { src: "/images/pharmaceutical-carton-packaging.jpg", alt: "药品纸箱外盒", span: "" },
    { src: "/images/food-grade-paperboard-packaging.jpg", alt: "食品级纸板包装", span: "" },
    { src: "/images/luxury-seafood-packaging-box.jpg", alt: "海鲜礼盒包装", span: "md:col-span-2" },
];

export default function Home() {
    return (
        <main>
            {/* ===== HERO SECTION ===== */}
            <HeroTechBanner />

            {/* Divider */}
            <div className="section-divider" />

            {/* ===== PRODUCTS / SERVICES SECTION ===== */}
            <section id="products" className="py-20 md:py-28 circuit-bg relative" aria-label="产品分类">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-sm font-mono text-cyan/70 tracking-widest uppercase mb-3 reveal-up">PRODUCT CATALOG</p>
                        <h2 className="text-3xl md:text-5xl font-bold reveal-up delay-100">
                            <span className="text-gradient">八大品类</span>，覆盖全场景包装需求
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, idx) => (
                            <ScrollRevealSection key={idx} animation="up" delay={idx * 80}>
                                <ProductCard {...product} />
                            </ScrollRevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="section-divider" />

            {/* ===== GALLERY SECTION ===== */}
            <section id="gallery" className="py-20 md:py-28 circuit-bg relative" aria-label="产品画廊">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-sm font-mono text-purple/70 tracking-widest uppercase mb-3 reveal-up">CASE GALLERY</p>
                        <h2 className="text-3xl md:text-5xl font-bold reveal-up delay-100">
                            <span className="text-gradient">实景案例</span>，品质看得见
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {galleryImages.map((img, idx) => (
                            <ScrollRevealSection key={idx} animation="scale" delay={idx * 150}>
                                <figure className={`glass-card overflow-hidden group ${img.span}`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <figcaption className="p-4 text-sm text-silver/50 font-mono">{img.alt}</figcaption>
                                </figure>
                            </ScrollRevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="section-divider" />

            {/* ===== METRICS DASHBOARD ===== */}
            <TechMetricDashboard />

            {/* Divider */}
            <div className="section-divider" />

            {/* ===== FAQ SECTION (AI-optimized + Schema) ===== */}
            <section id="faq" className="py-20 md:py-28 circuit-bg relative" aria-label="常见问题">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-sm font-mono text-cyan/70 tracking-widest uppercase mb-3 reveal-up">FAQ</p>
                        <h2 className="text-3xl md:text-5xl font-bold reveal-up delay-100">
                            <span className="text-gradient">常见问题</span>解答
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {homepageFAQs.map((faq, idx) => (
                            <ScrollRevealSection key={idx} animation="up" delay={idx * 80}>
                                <details className="glass-card group reveal-up p-6 cursor-pointer" open={idx === 0}>
                                    <summary className="flex items-center justify-between gap-4 text-silver/90 font-medium">
                                        <span>{faq.q}</span>
                                        <svg className="w-5 h-5 text-cyan/60 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-3 text-silver/60 leading-relaxed pl-4 border-l border-cyan/20">{faq.a}</div>
                                </details>
                            </ScrollRevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="section-divider" />

            {/* ===== CONTACT SECTION ===== */}
            <section id="contact" className="py-20 md:py-28 relative overflow-hidden" aria-label="联系方式">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-cyan/5" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-sm font-mono text-accent/70 tracking-widest uppercase mb-3 reveal-up">GET IN TOUCH</p>
                        <h2 className="text-3xl md:text-5xl font-bold reveal-up delay-100">
                            <span className="text-gradient">联系阿木包装</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Phone */}
                        <ScrollRevealSection animation="scale" delay={100}>
                            <a href="tel:+8613555985453" className="glass-card gradient-mesh p-8 text-center block group neon-border reveal-up">
                                <svg className="w-12 h-12 mx-auto mb-4 text-cyan/70 group-hover:text-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-sm text-silver/50 mb-2">电话咨询</p>
                                <p className="text-xl font-bold text-gradient font-mono">135-5598-5453</p>
                            </a>
                        </ScrollRevealSection>

                        {/* QQ */}
                        <ScrollRevealSection animation="scale" delay={200}>
                            <a href="https://qm.qq.com/cgi-bin/qm/qr?k=99589725" target="_blank" rel="noopener noreferrer" className="glass-card gradient-mesh p-8 text-center group neon-border reveal-up">
                                <svg className="w-12 h-12 mx-auto mb-4 text-purple/70 group-hover:text-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <p className="text-sm text-silver/50 mb-2">QQ咨询</p>
                                <p className="text-xl font-bold text-gradient font-mono">99589725</p>
                            </a>
                        </ScrollRevealSection>

                        {/* Email */}
                        <ScrollRevealSection animation="scale" delay={300}>
                            <a href="mailto:mouxia1980@outlook.com" className="glass-card gradient-mesh p-8 text-center group neon-border reveal-up">
                                <svg className="w-12 h-12 mx-auto mb-4 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm text-silver/50 mb-2">邮箱联系</p>
                                <p className="text-base font-bold text-gradient font-mono break-all">mouxia1980@outlook.com</p>
                            </a>
                        </ScrollRevealSection>
                    </div>

                    {/* Additional contact info */}
                    <ScrollRevealSection animation="up" delay={400}>
                        <div className="mt-12 glass-card p-6 text-center reveal-up">
                            <p className="text-sm text-silver/50 mb-2">📍 工厂地址</p>
                            <p className="text-silver/80">大连市旅顺口区龙头工业园区龙天路21号</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />500件起订 · 免费打样
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan" />支持上门验厂
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple" />全球物流发货
                                </span>
                            </div>
                        </div>
                    </ScrollRevealSection>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="py-12 border-t border-white/5" role="contentinfo">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-gradient font-bold text-lg">智包装 ZhiPack</p>
                            <p className="text-xs text-silver/40 mt-1">专业纸制品包装盒定制 · 大连旅顺工厂直供</p>
                        </div>
                        <nav aria-label="页脚导航" className="flex gap-6 text-sm">
                            <a href="#products" className="text-silver/50 hover:text-cyan transition-colors">产品</a>
                            <a href="#gallery" className="text-silver/50 hover:text-cyan transition-colors">案例</a>
                            <a href="#faq" className="text-silver/50 hover:text-cyan transition-colors">FAQ</a>
                            <a href="#contact" className="text-silver/50 hover:text-cyan transition-colors">联系</a>
                        </nav>
                        <p className="text-xs text-silver/30 font-mono">
                            © {new Date().getFullYear()} 智包装ZhiPack. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}