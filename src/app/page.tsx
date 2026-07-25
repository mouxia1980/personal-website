"use client";

import { useState } from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight text-white">
          <span className="text-cyan-400">&lt;</span>阿木<span className="text-cyan-400">/&gt;</span>
        </span>
        <div className="hidden space-x-8 md:flex">
          {["关于", "项目", "联系"].map(item => (
            <a key={item} href={"#" + item} className="text-sm text-gray-400 transition hover:text-cyan-400">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">你好，我是阿木</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-400 sm:text-xl">印刷行业销售主管 · 一站式印刷解决方案</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#关于" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20">向下探索</a>
          <a href="#联系" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.06]">立即咨询</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="关于" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-cyan-400">01.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">关于我</h2>
          <div className="flex-1 border-b border-white/10" />
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="mb-4 text-gray-400 leading-relaxed">在印刷行业深耕多年，担任销售主管一职。日常工作涵盖客户开发、订单管理、生产调度与品质把控。</p>
            <p className="mb-6 text-gray-400 leading-relaxed">希望通过这个页面，让更多人了解印刷行业的机会与合作可能。</p>
            <div className="flex flex-wrap gap-2">
              {"印刷工艺 客户管理 销售策略 团队协调 供应链沟通 品控".split(" ").map(s => (
                <span key={s} className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-400/80">{s}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 font-mono text-xs text-gray-500">// quick info</div>
              <ul className="space-y-3 text-sm">
                {[["职业", "印刷销售主管"], ["经验", "多年行业经验"], ["坐标", "中国"], ["电话", "13555985453"], ["邮箱", "mouxia1980@outlook.com"]].map(([label, value]) => (
                  <li key={label} className="flex justify-between">
                    <span className="text-gray-500">{label}</span>
                    <span className="text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    { title: "品牌包装印刷方案", desc: "为企业提供从设计到生产的一站式包装印刷服务，涵盖礼盒、手提袋、说明书等全系列物料。", tags: ["包装", "品牌", "定制"] },
    { title: "企业宣传物料制作", desc: "名片、海报、画册、折页、展架——各类企业宣传物料的设计与制作，快速交付。", tags: ["宣传品", "设计", "快印"] },
    { title: "印刷供应链优化项目", desc: "整合上游纸张供应商与下游印刷厂资源，帮助客户降低15%-30%的采购成本。", tags: ["供应链", "成本控制", "效率"] },
    { title: "数码直印服务", desc: "小批量、多批次的数码印刷方案，适合初创企业和小众品牌快速试水市场。", tags: ["数码印刷", "小批量", "灵活"] }
  ];
  return (
    <section id="项目" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-cyan-400">02.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">项目与服务</h2>
          <div className="flex-1 border-b border-white/10" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:bg-white/[0.04]">
              <div className="mb-4 font-mono text-xs text-gray-500">{`{project_${i + 1}}`}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-200">{p.title}</h3>
              <p className="mb-4 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[11px] text-cyan-400">{t}</span>
                ))}
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
    <section id="联系" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="font-mono text-sm text-cyan-400">03.</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">联系我</h2>
        </div>
        <p className="mb-10 max-w-lg mx-auto text-gray-400 leading-relaxed">有印刷需求、合作意向，或者只是想聊聊行业心得？随时联系我。</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:13555985453" className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-3 text-base font-medium text-emerald-400 transition hover:bg-emerald-500/20">
            <span>📞</span>13555985453
          </a>
          <a href="mailto:mouxia1980@outlook.com" className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-3 text-base font-medium text-cyan-400 transition hover:bg-cyan-500/20">
            <span>✉</span>mouxia1980@outlook.com
          </a>
        </div>
        <p className="mt-12 text-xs text-gray-600 font-mono">© 2026 阿木 · Built with Next.js & Tailwind CSS</p>
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
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
