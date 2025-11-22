import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TextRevealClean() {
    const ref = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = ref.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const rawProgress = 1 - rect.top / windowHeight;
            const safeProgress = Math.min(1, Math.max(0, rawProgress));

            setProgress(safeProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const clipValue = progress * 100;
    const glowValue = progress * 25; // glow MUCHO más suave

    return (
        <div className="relative w-full flex rounded-4xl justify-center py-32 bg-black text-white">
            {/* Glows muy sutiles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute w-72 h-72 bg-white/5 blur-[110px] rounded-full top-24 left-12" />
                <div className="absolute w-96 h-96 bg-white/3 blur-[140px] rounded-full bottom-10 right-12" />
            </div>

            <div
                ref={ref}
                className="relative text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight tracking-tight text-center w-full uppercase"
                style={{
                    WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) ${clipValue}%, rgba(0,0,0,0) ${clipValue + 20}%)`,
                    maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) ${clipValue}%, rgba(0,0,0,0) ${clipValue + 20}%)`,

                    // Glow MUY suave en blanco
                    textShadow: `
            0 0 ${glowValue}px rgba(255,255,255,0.25)
          `,

                    transition: "mask-image 0.25s linear",
                }}
            >
                <div className="text-6xl md:text-7xl  font-extrabold leading-tight text-center">
                    <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-[#bbbbbb]">
                        DISEÑADO CON
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-[#999999]">
                        PRECISIÓN MILIMÉTRICA
                    </span>
                    <br />
                    <motion.span
                        className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-gray-400
               font-black uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
               inline-block"
                        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Elegancia que se siente
                    </motion.span>
                    <br />
                </div>

                <br />

                <span className="text-transparent text-5xl bg-clip-text bg-linear-to-b from-white to-[#999999]">
                    Diseño que no solo se ve… se vive
                </span>
            </div>
        </div>
    );
}
