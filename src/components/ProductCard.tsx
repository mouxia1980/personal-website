"use client";

import { useState } from "react";

interface ProductCardProps {
    icon: string;
    title: string;
    desc: string;
    details: string[];
    color?: string;
}

const iconMap: Record<string, string> = {
    medicine: "M19 14V19H5V14H19ZM19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3Z",
    health: "M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",
    food: "M11 9H9V2H7V9H5V2H3V9C3 11.05 4.28 12.88 6 13.43V22H8V13.43C9.72 12.88 11 11.05 11 9V2H9V9H11V2H7V9C7 12.86 9.93 15.79 13.65 16.07C13.18 16.58 12.83 17.25 12.71 18H13.69C13.25 18.82 13 19.77 13 20.75C13 22.45 14.32 23.75 16 23.75C17.68 23.75 19 22.45 19 20.75C19 19.77 18.75 18.82 18.31 18H19.29C19.8 17.2 20.12 16.24 20.18 15.22C20.9 14.84 21.5 14.18 21.5 13.38C21.5 12.17 20.52 11.2 19.32 11.2C18.88 11.2 18.46 11.33 18.1 11.55C18.28 10.77 18.32 9.94 18.2 9.14C17.96 7.57 16.71 6.42 15.15 6.15C14.88 6.09 14.6 6.07 14.32 6.07C13.02 6.07 11.84 6.72 11.1 7.7L11 9ZM15 20.75C14.45 20.75 14 20.3 14 19.75C14 19.2 14.45 18.75 15 18.75C15.55 18.75 16 19.2 16 19.75C16 20.3 15.55 20.75 15 20.75ZM18 14.62C17.29 14.62 16.71 15.2 16.71 15.91C16.71 16.62 17.29 17.2 18 17.2C18.71 17.2 19.29 16.62 19.29 15.91C19.29 15.2 18.71 14.62 18 14.62Z",
    cosmetic: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM7.39 16L9.5 11.57L7.73 8.28C7.52 7.88 7.69 7.37 8.09 7.16C8.49 6.95 9 7.12 9.21 7.52L11 10.81L13.11 6.5C13.32 6.09 13.83 5.9 14.24 6.12C14.64 6.33 14.83 6.85 14.62 7.25L12.51 11.57L14.62 15.88C14.83 16.29 14.64 16.8 14.24 17.02C13.84 17.23 13.32 17.04 13.11 16.63L11 12.31L9.5 15.08C9.29 15.49 8.77 15.68 8.37 15.47C7.97 15.26 7.78 14.74 7.99 14.34L7.39 16Z",
    electronic: "M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18ZM6 13H18V11H6V13Z",
    toy: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM8.5 15C7.67 15 7 14.33 7 13.5S7.67 12 8.5 12 10 12.67 10 13.5 9.33 15 8.5 15ZM15.5 15C14.67 15 14 14.33 14 13.5S14.67 12 15.5 12 17 12.67 17 13.5 16.33 15 15.5 15ZM9 17.5C9 16.67 10.33 16 12 16S15 16.67 15 17.5C15 18.33 13.67 19 12 19S9 18.33 9 17.5Z",
    seafood: "M20 4H4V2H20V4ZM20 6H2V8H20V6ZM20 10H2V10.5H20V10ZM20 12H2V13H20V12ZM20 14H2V15H20V14ZM20 16H2V17H20V16ZM20 18H2V19H20V18ZM20 20H2V21H20V20Z",
    bag: "M18 4H6C4.89 4 4 4.89 4 6V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V6C20 4.89 19.11 4 18 4ZM6 6H18V20H6V6Z",
};

export default function ProductCard({ icon, title, desc, details }: ProductCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="glass-card p-6 flex flex-col gap-3 group cursor-pointer"
            data-ai-entity="service"
            data-industry={icon.replace("medicine","").toLowerCase()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Icon */}
            <div className="flex items-center gap-3 mb-1">
                <svg className={`w-8 h-8 ${hovered ? "text-cyan" : "text-silver/40"} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[icon] || icon} />
                </svg>
                <h3 className="text-lg font-semibold text-silver group-hover:text-cyan transition-colors">{title}</h3>
            </div>
            <p className="text-sm text-silver/60 leading-relaxed">{desc}</p>
            
            {/* Detail tags */}
            <div className="flex flex-wrap gap-2 mt-2">
                {details.map((tag, i) => (
                    <span key={i} className={`px-2.5 py-1 rounded-full text-xs font-mono ${hovered ? "bg-cyan/10 text-cyan/90 border border-cyan/20" : "bg-white/5 text-silver/40 border border-white/10"} transition-all duration-300`}>
                        {tag}
                    </span>
                ))}
            </div>
            
            {/* Arrow indicator */}
            <div className={`mt-auto pt-3 flex items-center gap-2 text-sm ${hovered ? "text-cyan" : "text-silver/30"} transition-all duration-300`}>
                <span>了解详情</span>
                <svg className="w-4 h-4 -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
}