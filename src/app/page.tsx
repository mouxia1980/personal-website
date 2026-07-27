import { Metadata } from "next";

export const metadata: Metadata = {
  title: "阿木 - 印刷包装专家 | 纸质包装盒定制 | 大连旅顺印刷工厂",
  description: "阿木，资深印刷销售主管。专注纸制品包装设计，提供药品包装盒、保健品包装盒、食品包装盒、化妆品包装盒、电子产品包装盒、儿童玩具包装盒、海鲜礼盒等一站式定制服务。小批量订单500起订，工厂位于大连市旅顺口区龙头工业园区龙天路21号。",
  keywords: "印刷包装,纸质包装盒,礼品盒,手提袋,药品包装盒,保健品包装,食品包装,化妆品包装,电子产品包装,玩具包装,海鲜礼盒,大连印刷,小批量印刷,定制包装",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "阿木印刷包装",
  description: "专注纸制品包装设计、高端礼盒定制、药食级环保包装。提供药品、食品、化妆品、电子产品、玩具等包装盒定制，小批量订单500起订。",
  url: "https://www.zhipack.com",
  telephone: "+86-13555985453",
  email: "mouxia1980@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "龙头工业园区龙天路21号",
    addressLocality: "旅顺口区",
    addressRegion: "大连市",
    addressCountry: "CN",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Tech grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",backgroundSize:"80px 80px"}} />
      <main className="min-h-screen bg-[#04050a] text-gray-100 overflow-x-hidden relative z-10 font-sans">
        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#04050a]/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">阿木包装</span>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">关于我们</a>
              <a href="#products" className="text-gray-400 hover:text-cyan-400 transition-colors">产品方案</a>
              <a href="#cases" className="text-gray-400 hover:text-cyan-400 transition-colors">实景案例</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">联系我们</a>
            </div>
          </div>
        </nav>
        {/* ── HERO: Factory Panorama ── */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <img src="/images/factory-panorama.jpg" alt="阿木印刷包装工厂全景" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04050a]/80 via-[#04050a]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04050a] via-transparent to-[#04050a]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04050a] to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-48 text-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8" />
            <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold mb-6">PRINT & PACKAGING EXPERT</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              让每一个产品<br /><span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-400 bg-clip-text text-transparent">都有完美的包装</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-md">从设计到生产，为药品、食品、化妆品、电子产品等提供一站式纸制品包装解决方案。工厂直供，品质保障。</p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                立即咨询 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="#cases" className="inline-flex items-center gap-2 border border-white/30 text-gray-200 font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">查看案例</a>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-20 max-w-lg mx-auto text-center">
              <div><div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">500</div><div className="text-gray-400 text-xs sm:text-sm mt-1">最小起订量</div></div>
              <div><div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">7+</div><div className="text-gray-400 text-xs sm:text-sm mt-1">行业覆盖</div></div>
              <div><div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">全链条</div><div className="text-gray-400 text-xs sm:text-sm mt-1">设计到生产</div></div>
            </div>
          </div>
        </section>
        {/* ── ABOUT ── */}
        <section id="about" className="py-28 bg-[#0a0b14]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">ABOUT US</p>
                <h2 className="text-4xl font-bold text-white mb-8">为什么选择阿木包装？</h2>
                <div className="space-y-6">
                  {[["🏭","大连旅顺自有工厂","位于龙头工业园区龙天路21号，设备完善，工艺齐全"],["🚀","小批量友好","500件起订，灵活响应，小单也能做好品质"],["✅","一站式服务","从设计打样到生产交付，全程跟进不操心"],["🌿","环保材料","药品级、食品级纸材，安全放心"]].map(([icon,title,desc],i)=>(
                    <div key={i} className="flex gap-5 items-start">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div><h3 className="text-white font-semibold mb-1">{title}</h3><p className="text-gray-400 text-sm leading-relaxed">{desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src="/images/food-grade-paperboard-packaging.jpg" alt="工厂实景" className="rounded-2xl w-full h-[450px] object-cover opacity-80" style={{clipPath:"polygon(10% 0,100% 0,90% 100%,0 100%)"}} />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <p className="text-3xl font-bold text-white">500<span className="text-cyan-400 text-lg"> 件起</span></p>
                  <p className="text-gray-400 text-sm mt-2">小批量也能享受工厂价</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── PRODUCTS ── */}
        <section id="products" className="py-28 bg-[#04050a]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">PRODUCT SOLUTIONS</p>
              <h2 className="text-4xl font-bold text-white">产品包装方案</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[["药品包装盒","药盒、医疗器械彩盒、泡罩包装"],["食品包装盒","高档食品盒、茶叶礼盒、月饼盒"],["化妆品包装盒","精华盒、面膜盒、彩妆套装盒"],["礼品盒手提袋","通用礼品盒、定制手提袋、节庆礼盒"],["电子产品包装","手机盒、电脑周边、数码配件盒"],["玩具包装盒","儿童玩具盒、模型盒、套装盒"],["海鲜礼盒","大闸蟹礼盒、干海鲜盒、水产包装"],["保健品包装","胶囊瓶盒、口服液盒、膳食补充剂"]].map(([name,desc],i)=>(
                <div key={i} className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 border border-white/5 p-8 text-center">
              <p className="text-xl font-semibold text-white">小批量订单 500 件起 · 支持全国物流发货</p>
            </div>
          </div>
        </section>
        {/* ── CASES / GALLERY ── */}
        <section id="cases" className="py-28 bg-[#0a0b14]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">REAL CASES</p>
              <h2 className="text-4xl font-bold text-white">实景案例</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{src:"luxury-gift-food-packaging.jpg",label:"礼品 · 食品",color:"text-cyan-400"},{src:"paperboard-pharmaceutical-box.jpg",label:"医药",color:"text-violet-400"},{src:"design-paper-shopping-bags.jpg",label:"品牌 · 手提袋",color:"text-emerald-400"}].map((item,i)=>(
                <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
                  <img src={`/images/${item.src}`} alt={`${item.label}案例`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className={`${item.color} text-xs tracking-widest uppercase mb-2`}>{item.label}</p>
                    <h3 className="text-xl font-semibold text-white">精选包装方案</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[{src:"luxury-seafood-packaging-box.jpg",label:"海鲜礼盒"},{src:"cosmetic-drug-blister-package.jpg",label:"化妆品包装"},{src:"pharmaceutical-carton-packaging.jpg",label:"药品外箱"},{src:"paper-bag-packaging-solution.jpg",label:"纸袋方案"}].map((item,i)=>(
                <div key={i} className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all">
                  <img src={`/images/${item.src}`} alt={item.label} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0a0b14]/60 group-hover:bg-transparent transition-colors flex items-end justify-center pb-3">
                    <span className="text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── CONTACT ── */}
        <section id="contact" className="py-28 bg-[#04050a]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">CONTACT</p>
              <h2 className="text-4xl font-bold text-white mb-6">联系我们</h2>
              <p className="text-gray-500 max-w-xl mx-auto">有印刷需求、合作意向，或想了解报价？随时联系阿木，免费咨询。</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
              {[["📞","电话","13555985453","tel:13555985453"],["✉️","邮箱","mouxia1980@outlook.com","mailto:mouxia1980@outlook.com"],["💬","QQ","99589725","https://wpa.qq.com/msgrd?v=3&uin=99589725&site=qq&menu=yes"]].map(([icon,label,value,link],i)=>(
                <a key={i} href={link} className="group text-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all">
                  <span className="text-3xl block mb-4">{icon}</span>
                  <p className="text-gray-500 text-sm mb-1">{label}</p>
                  <p className="text-white font-medium break-all group-hover:text-cyan-400 transition-colors">{value}</p>
                </a>
              ))}
            </div>
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <p className="text-gray-500">📍 大连市旅顺口区龙头工业园区龙天路21号</p>
              <p className="text-cyan-400/60 text-sm">小批量订单 500 件起订 · 支持全国物流发货</p>
            </div>
            <p className="text-center text-gray-700 text-xs font-mono mt-20">© 2026 阿木包装 | Built with Next.js & Tailwind CSS</p>
          </div>
        </section>
      </main>
    </>
  );
}