"use client";

import { useState } from "react";

interface ProductCardProps {
    src: string;
    title: string;
    desc: string;
    details: string[];
}

export default function ProductCard({ src, title, desc, details }: ProductCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500"
            style={{ aspectRatio: "3/4" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background Image */}
            <img
                src={src}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
                loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent" />
            {hovered && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/90 via-transparent to-[#0A0E17]/30" style={{ transition: "opacity 0.3s" }} />
            )}

            {/* Top Accent Line */}
            <div className={`absolute top-0 left-4 right-4 h-[2px] transition-all duration-500 ${hovered ? "bg-gradient-to-r from-[#00F0FF] to-[#9B5DE5]" : "bg-white/10"}`} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Category Tag */}
                <div className={`mb-3 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 ${hovered ? "bg-cyan/20 text-cyan border border-cyan/40" : "bg-white/5 text-silver/60 border border-white/10"}`}>
                    包装方案
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hovered ? "text-white" : "text-silver/90"}`}>
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-silver/60 leading-relaxed mb-4 line-clamp-2 transition-all duration-300">
                    {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {details.slice(0, 2).map((tag, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all duration-300 ${hovered ? "bg-white/10 text-silver/80" : "bg-white/5 text-silver/40"}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Hover Arrow */}
                <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${hovered ? "translate-y-0 opacity-100 text-[#00F0FF]" : "translate-y-2 opacity-0"}`}>
                    <span>了解详情</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Neon Border Glow */}
            <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 pointer-events-none ${hovered ? "border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.15)]" : "border-transparent"}`} />
        </div>
    );
}