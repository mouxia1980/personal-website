'use client';

import Image from 'next/image';

const images = {
  machine: '/images/high-speed-offset-printing-machine.jpg',
  giftBox: '/images/custom-printed-gift-box-design.jpg',
  toothpaste: '/images/toothpaste-packaging-design.jpg',
  shoppingBag1: '/images/design-paper-shopping-bags.jpg',
  shoppingBag2: '/images/paper-bag-packaging-solution.jpg',
  seafood: '/images/luxury-seafood-packaging-box.jpg',
  blister: '/images/pharmaceutical-blister-packaging.jpg',
  medicalBox: '/images/medical-medicine-box-design.jpg',
  carton: '/images/pharmaceutical-carton-packaging.jpg',
  cosmetic: '/images/cosmetic-drug-blister-package.jpg',
  pharmaBox: '/images/paperboard-pharmaceutical-box.jpg',
  creamBox: '/images/medical-cream-jar-box-design.jpg',
  foodGrade: '/images/food-grade-paperboard-packaging.jpg',
  luxuryFood: '/images/luxury-gift-food-packaging.jpg',
  cartonFood: '/images/corrugated-food-paper-carton.jpg',
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight text-white">
          <span className="text-cyan-400">&lt;</span>阿木<span className="text-cyan-400">/&gt;</span>
        </span>
        <div className="hidden space-x-8 md:flex">
          {["About", "Projects", "Gallery", "Contact"].map((item) => (
            <a key={item} href={#} className="text-sm text-gray-400 transition hover:text-cyan-400">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <Image 
        src={images.machine} 
        alt="High-speed offset printing machinery production line" 
        fill 
        className="object-cover opacity-20" 
        priority 
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JGggk7hc0gIQoJCgsMDA4LDA4OCQ4SElITEhUSEhYXGBgaGxwdHh8gICIkJSYnKCkqMjM2ODk6Ozo9Pj9AQEJBQUFBQUEhIwAAAAAAAAECAwQFCAo= // Simplified 1x1 blur placeholder for performance"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/40 to-[#0a0a0f]" />
      
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">阿木 - 印刷包装专家</span>
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
          专注纸制品包装设计 &middot; 高端礼盒定制 &middot; 药食级环保包装
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20">查看实景案例</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.06]">联系阿木</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0d0d14]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-cyan-400">01.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">关于阿木</h2>
          <div className="flex-1 border-b border-white/10" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl overflow-hidden border border-white/10 relative h-80">
            <Image 
              src={images.machine} 
              alt="Advanced hex-color offset printing machinery for custom packaging" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-gray-400 leading-relaxed text-lg">
              深耕印刷包装行业多年，提供从设计到生产的一站式纸制品解决方案。专注药品、食品及高端礼品的包装设计与制造。
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-xs text-gray-500">小批量起订 (pcs)</div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">24h</div>
                <div className="text-xs text-gray-500">快速报价响应</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const projects = [
    { 
      title: "高端礼品与食品包装", 
      desc: "适用于海鲜礼盒、高档食品等，采用环保纸材与特种工艺。", 
      images: [images.luxuryGiftFood, images.seafood, images.corrugatedFood] 
    },
    { 
      title: "药食级医疗包装", 
      desc: "精密印制的药品包装盒、医疗器械彩盒及泡罩包装。", 
      images: [images.pharmaceuticalBox, images.medicalBox, images.blister] 
    },
    { 
      title: "品牌视觉与手提袋设计", 
      desc: "展现品牌形象的定制纸袋，广泛应用于零售与奢侈品行业。", 
      images: [images.shoppingBag1, images.shoppingBag2, images.cosmetic] 
    },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-cyan-400">02.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">实景案例展示</h2>
          <div className="flex-1 border-b border-white/10" />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-[#0e0e15] overflow-hidden transition hover:border-cyan-500/30 group">
              {/* Grid of 3 images */}
              <div className="grid grid-cols-3 h-48 gap-1">
                {p.images.map((img, idx) => (
                  <Image 
                    key={idx} 
                    src={img} 
                    alt={${p.title}  showcase} 
                    width={200} 
                    height={200} 
                    className="object-cover transition group-hover:opacity-100 opacity-90"
                  />
                ))}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-200">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d14]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="font-mono text-sm text-cyan-400">03.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">联系我们</h2>
        </div>
        <p className="mb-10 max-w-lg mx-auto text-gray-400 leading-relaxed">有印刷需求、合作意向，或者只是想聊聊行业心得？随时联系我。</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:13555985453" className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-3 text-base font-medium text-emerald-400 transition hover:bg-emerald-500/20">
            <span>📞</span>13555985453
          </a>
          <a href="mailto:mouxia1980@outlook.com" className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-3 text-base font-medium text-cyan-400 transition hover:bg-cyan-500/20">
            <span>✉️</span>mouxia1980@outlook.com
          </a>
        </div>
        <p className="text-xs text-gray-600 font-mono">© 2026 Amu Pack | Built with Next.js & Tailwind CSS</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
