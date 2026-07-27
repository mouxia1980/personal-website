"use client";

import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    animation?: "up" | "left" | "scale";
    delay?: number;
}

export default function ScrollRevealSection({ 
    children, 
    className = "", 
    animation = "up", 
    delay = 0 
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const animClass = animation === "left" ? "reveal-left" : 
                     animation === "scale" ? "reveal-scale" : "reveal-up";

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.classList.add(animClass);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [animClass]);

    return <div ref={ref} className={className} style={{ transitionDelay: delay + "ms" }}>{children}</div>;
}