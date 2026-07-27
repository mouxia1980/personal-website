"use client";

import { useEffect, useState } from "react";

export default function HeroTechBanner() {
    const [typedText, setTypedText] = useState("");
    const fullText = "纸制品包装·智造未来";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.substring(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 70);
        return () => clearInterval(interval);
    }, []);

    const quickStats = [
        { value: "500", label: "最小起订量" },
        { value: "7-15", label: "生产周期(天)" },
        { value: "食/药级", label: "认证标准" },
        { value: "大连旅顺", label: "工厂直供" },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="首页主视觉区">
            {/* Background */}
            <div className="absolute inset-0">
                <img src="/images/factory-panorama.jpg" alt="智包装工厂全景 - 大连旅顺印刷生产基地" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/85 via-[#0A0E17]/60 to-[#0A0E17]" />
            </div>

            {/* Circuit grid */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 rounded-full bg-[#00F0FF]/30" style={{ left: Math.random()*100+"%", top: Math.random()*100+"%", animation: "pulse-glow "+(3+Math.random()*4)+"s ease-in-out infinite", animationDelay: (Math.random()*5)+"s" }} />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card reveal-up">
                    <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
                    <span className="text-sm font-mono text-[#00F0FF]/90">大连旅顺工厂直供 · 500件起订</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-up delay-200">
                    <span className="text-gradient text-cyan-glow">{typedText}</span><span className="cursor-blink" />
                </h1>

                <p className="text-lg md:text-xl text-[#E0E5EC]/80 max-w-3xl mx-auto mb-10 reveal-up delay-400 leading-relaxed">
                    阿木包装，专注<span className="text-[#00F0FF]">纸制品包装盒</span>设计与生产。从创意打样到批量交付，一站式服务助力品牌升级。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up delay-500">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9B5DE5] text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-cyan/25" style={{ animation: "pulse-glow 2s ease-in-out infinite" }}>
                        <span>获取免费报价</span>
                    </a>
                    <a href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-[#E0E5EC] font-medium text-lg hover:border-[#00F0FF]/30 transition-all duration-300">查看产品案例</a>
                </div>

                {/* Stats badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {quickStats.map((stat, idx) => (
                        <div key={idx} className="glass-card p-4 reveal-up delay-300" style={{ animationDelay: (idx*0.5)+"s" }}>
                            <div className="text-2xl md:text-3xl font-bold text-gradient font-mono">{stat.value}</div>
                            <div className="text-xs text-[#E0E5EC]/60 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#products" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#E0E5EC]/40 hover:text-[#00F0FF] transition-colors">
                <span className="text-xs font-mono tracking-widest">SCROLL</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
        </section>
    );
}