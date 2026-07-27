export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#0B0F19]" />
            
            {/* Circuit grid */}
            <div 
                className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(to right, #00F0FF15 1px, transparent 1px), linear-gradient(to bottom, #00F0FF15 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[3px] h-[3px] bg-cyan rounded-full animate-pulse-slow"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${5 + (i % 4) * 25}%`,
                            opacity: 0.3,
                            animationDelay: `${i * 0.6}s`
                        }}
                    />
                ))}
            </div>

            {/* Factory image overlay */}
            <img 
                src="/images/factory-panorama.jpg" 
                alt="阿木印刷包装工厂全景 - 大连旅顺龙头工业园区生产基地"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
            />

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-transparent to-[#0B0F19]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-transparent to-[#0B0F19]/90" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <div className="w-24 h-[2px] bg-gradient-to-r from-cyan via-purple to-accent mx-auto mb-8" />
                
                <div 
                    className="inline-block px-5 py-1.5 border border-cyan/30 rounded-full mb-6 backdrop-blur-sm"
                    data-ai-agent="business-category"
                    data-entity-type="industry-tag"
                >
                    <span className="text-xs tracking-[0.3em] uppercase text-cyan font-mono">Print & Packaging Expert</span>
                </div>

                <h1 
                    className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8"
                    data-ai-agent="primary-value-proposition"
                >
                    <span className="text-[#E0E5EC]">让每一个产品</span><br />
                    <span className="bg-gradient-to-r from-cyan via-purple to-accent bg-clip-text text-transparent">
                        都有完美的包装
                    </span>
                </h1>

                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                    从设计到生产，为药品、食品、化妆品、电子产品等提供一站式纸制品包装解决方案。工厂直供，品质保障。
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a 
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan to-purple text-[#0B0F19] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] overflow-hidden"
                        data-ai-agent="primary-cta"
                    >
                        <span className="relative z-10">获取智能报价</span>
                        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                    
                    <a 
                        href="#portfolio"
                        className="inline-flex items-center gap-2 border border-white/20 text-gray-300 font-medium px-8 py-4 rounded-full hover:bg-white/[0.05] hover:border-cyan/30 transition-all duration-300 backdrop-blur-sm"
                    >
                        查看作品集
                    </a>
                </div>

                {/* Metrics */}
                <div 
                    className="grid grid-cols-3 gap-6 sm:gap-8 mt-20 max-w-lg mx-auto"
                    data-entity-type="key-metrics"
                >
                    {[{value:'500',label:'最小起订量'},{value:'7+',label:'行业覆盖'},{value:'全链条',label:'设计到生产'}].map((m,i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white" data-ai-agent="metric-value">{m.value}</div>
                            <div className="text-gray-500 text-xs sm:text-sm mt-1 font-mono">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
