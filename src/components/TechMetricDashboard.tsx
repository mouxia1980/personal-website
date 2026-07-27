"use client";

import { useEffect, useRef, useState } from "react";

interface MetricItem {
    value: number;
    suffix: string;
    label: string;
}

const metricsData: MetricItem[] = [
    { value: 5000, suffix: "m²", label: "工厂面积" },
    { value: 50, suffix: "+", label: "合作品牌" },
    { value: 100, suffix: "万+", label: "年产能(件)" },
    { value: 99, suffix: "%", label: "客户满意度" },
];

export default function TechMetricDashboard() {
    const [animatedValues, setAnimatedValues] = useState<number[]>(metricsData.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Animate counters when visible
    useEffect(() => {
        if (!isVisible) return;
        const durations = metricsData.map(() => 1800);
        const steps = 60;
        const increments = metricsData.map(m => m.value / steps);
        const intervals = metricsData.map((_, i) => {
            let current = 0;
            return setInterval(() => {
                current += increments[i];
                if (current >= metricsData[i].value) {
                    current = metricsData[i].value;
                    clearInterval(intervals[i]);
                }
                setAnimatedValues(prev => {
                    const next = [...prev];
                    next[i] = Math.round(current);
                    return next;
                });
            }, durations[i] / steps);
        });
        return () => intervals.forEach(clearInterval);
    }, [isVisible]);

    return (
        <section ref={ref} className="py-20 md:py-28" aria-label="工厂数据看板">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-cyan/70 tracking-widest uppercase mb-3 reveal-up">FACTORY METRICS</p>
                    <h2 className="text-3xl md:text-5xl font-bold reveal-up delay-100">
                        <span className="text-gradient">智造实力</span>
                        <span className="text-silver"> 一目了然</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metricsData.map((metric, idx) => (
                        <div key={idx} className="glass-card p-6 text-center group reveal-up" style={{ transitionDelay: (100 + idx * 100) + "ms" }}>
                            <div className="text-4xl md:text-5xl font-bold text-gradient font-mono mb-2">
                                {isVisible ? animatedValues[idx] : 0}{metric.suffix}
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden mb-3">
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan to-purple progress-fill rounded-full"
                                    style={{ width: isVisible ? `${Math.min((animatedValues[idx] / metric.value) * 100, 100)}%` : "0%" }}
                                />
                            </div>
                            <div className="text-sm text-silver/50">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-12 glass-card p-6 reveal-up delay-300">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-sm font-mono text-cyan/60 mb-1">LOCATION</p>
                            <p className="text-silver/70">大连市旅顺口区龙头工业园区龙天路21号</p>
                        </div>
                        <div>
                            <p className="text-sm font-mono text-purple/60 mb-1">CERTIFICATION</p>
                            <p className="text-silver/70">ISO9001 · FSC · 食品级 / 医药级认证</p>
                        </div>
                        <div>
                            <p className="text-sm font-mono text-accent/60 mb-1">SUPPORT</p>
                            <p className="text-silver/70">免费打样 · 上门验厂 · 全球物流</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}