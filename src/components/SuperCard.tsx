import { motion } from "framer-motion";
import { useRef } from "react";

export default function MegaCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">

            {/* === SUPER TARJETA === */}
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
          relative 
          w-full max-w-6xl 
          p-14 
          rounded-3xl 
          overflow-hidden 
          shadow-[0_0_80px_rgba(255,255,255,0.1)]
          bg-[#111]
        "
            >

                {/* BACKGROUND TYPE WEBGL — partículas suaves */}
                <motion.canvas
                    className="absolute inset-0 w-full h-full opacity-30"
                    animate={{ opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Glow Top */}
                <div className="absolute -top-20 -left-10 w-80 h-80 bg-white/10 blur-[120px]" />

                {/* Glow Bottom */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[140px]" />

                {/* CONTENT */}
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Diseño Interactivo de Alto Impacto
                    </h1>

                    <p className="text-gray-400 max-w-2xl text-lg mb-12">
                        Una tarjeta gigante con animación reactiva, partículas tipo WebGL
                        y un grid de información completamente simétrico y moderno.
                    </p>

                    {/* === GRID DE SUBTARJETAS === */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* CARD A */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">⚡ Velocidad GPU</h3>
                            <p className="text-gray-400">
                                Animaciones fluidas sin consumir CPU. Experiencia premium.
                            </p>
                        </motion.div>

                        {/* CARD B */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">🎨 3D & Profundidad</h3>
                            <p className="text-gray-400">
                                Fondos con movimiento, perspectiva y luces suaves.
                            </p>
                        </motion.div>

                        {/* CARD C */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">🌐 WebGL Look</h3>
                            <p className="text-gray-400">
                                Partículas dinámicas inspiradas en gráficos GPU.
                            </p>
                        </motion.div>

                        {/* CARD D */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">🧩 Diseño Modular</h3>
                            <p className="text-gray-400">
                                Composición de secciones adaptable a cualquier contenido.
                            </p>
                        </motion.div>

                        {/* CARD E */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">🌀 Animación Reactiva</h3>
                            <p className="text-gray-400">
                                Reacciona al scroll, hover y movimiento del mouse.
                            </p>
                        </motion.div>

                        {/* CARD F */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">🛠️ Extensible</h3>
                            <p className="text-gray-400">
                                Podés agregar shaders, modelos 3D o partículas reales WebGL.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}
