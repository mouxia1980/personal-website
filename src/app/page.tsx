export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-gray-200">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-white">&lt;阿木/&gt;</span>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="text-sm text-gray-400 hover:text-cyan-400">About</a>
            <a href="#gallery" className="text-sm text-gray-400 hover:text-cyan-400">Gallery</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/images/high-speed-offset-printing-machine.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Offset printing machinery production line" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">阿木 - 印刷包装专家</h1>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">专注纸制品包装设计 &middot; 高端礼盒定制 &middot; 药食级环保包装</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20">查看实景案例</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.06]">联系阿木</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#0d0d14]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">关于阿木</h2>
          <p className="mb-6 text-gray-400 leading-relaxed text-lg">深耕印刷包装行业多年，提供从设计到生产的一站式纸制品解决方案。专注药品、食品及高端礼品的包装设计与制造。</p>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">实景案例展示</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0e0e15] overflow-hidden hover:border-cyan-500/30 transition">
              <div className="grid grid-cols-3 h-48 gap-1">
                <img src="/images/luxury-gift-food-packaging.jpg" className="w-full h-full object-cover" alt="Luxury gift packaging" />
                <img src="/images/luxury-seafood-packaging-box.jpg" className="w-full h-full object-cover" alt="Seafood packaging" />
                <img src="/images/corrugated-food-paper-carton.jpg" className="w-full h-full object-cover" alt="Food carton" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-200">高端礼品与食品包装</h3>
                <p className="text-sm text-gray-500 leading-relaxed">适用于海鲜礼盒、高档食品等，采用环保纸材与特种工艺。</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0e0e15] overflow-hidden hover:border-cyan-500/30 transition">
              <div className="grid grid-cols-3 h-48 gap-1">
                <img src="/images/paperboard-pharmaceutical-box.jpg" className="w-full h-full object-cover" alt="Pharma box" />
                <img src="/images/medical-medicine-box-design.jpg" className="w-full h-full object-cover" alt="Medicine design" />
                <img src="/images/pharmaceutical-blister-packaging.jpg" className="w-full h-full object-cover" alt="Blister pack" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-200">药食级医疗包装</h3>
                <p className="text-sm text-gray-500 leading-relaxed">精密印制的药品包装盒、医疗器械彩盒及泡罩包装。</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0e0e15] overflow-hidden hover:border-cyan-500/30 transition">
              <div className="grid grid-cols-3 h-48 gap-1">
                <img src="/images/design-paper-shopping-bags.jpg" className="w-full h-full object-cover" alt="Shopping bag" />
                <img src="/images/paper-bag-packaging-solution.jpg" className="w-full h-full object-cover" alt="Paper bag" />
                <img src="/images/cosmetic-drug-blister-package.jpg" className="w-full h-full object-cover" alt="Cosmetic pack" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-200">品牌视觉与手提袋设计</h3>
                <p className="text-sm text-gray-500 leading-relaxed">展现品牌形象的定制纸袋，广泛应用于零售与奢侈品行业。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#0d0d14]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">联系我们</h2>
          <p className="mb-10 max-w-lg mx-auto text-gray-400 leading-relaxed">有印刷需求、合作意向，或者只是想聊聊行业心得？随时联系我。</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="tel:13555985453" className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-3 text-base font-medium text-emerald-400 transition hover:bg-emerald-500/20">📞 13555985453</a>
            <a href="mailto:mouxia1980@outlook.com" className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-3 text-base font-medium text-cyan-400 transition hover:bg-cyan-500/20">✉️ mouxia1980@outlook.com</a>
          </div>
          <p className="text-xs text-gray-600 font-mono">© 2026 Amu Pack | Built with Next.js & Tailwind CSS</p>
        </div>
      </section>
    </main>
  );
}