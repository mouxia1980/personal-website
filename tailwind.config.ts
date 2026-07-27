import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0A0E17",
                card: "#111827",
                surface: "#1A1F35",
                cyan: "#00F0FF",
                purple: "#9B5DE5",
                silver: "#E0E5EC",
                accent: "#00D4AA",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
                mono: ["JetBrains Mono", "ui-monospace", "monospace"],
            },
        },
    },
    plugins: [],
};

export default config;
