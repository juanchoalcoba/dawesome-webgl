import { motion } from "framer-motion";


function PeachStyleShowcase() {
    return (
        <>
            <div className="min-h-screen bg-[#0d0d11] text-white flex flex-col items-center justify-center p-10">
                {/* Hero Section */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-7xl font-extrabold tracking-tight text-center bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
                >
                    Un Diseño <span className="text-purple-300">Impactante</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-2xl max-w-2xl text-center text-gray-300 mt-6"
                >
                    Inspirado en experiencias 3D modernas con tipografías fuertes, brillo sutil y una presentación elegante.
                </motion.p>

                {/* Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(180,90,255,0.2)] rounded-3xl p-10 w-full max-w-3xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4 tracking-tight">
                        Experiencia Visual Premium
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Elementos con efecto de vidrio líquido, sombras brillantes, tipografías pesadas y un estilo que
                        transmite modernidad y creatividad.
                    </p>
                    <p className="text-gray-400 mt-4">
                        Ideal para portafolios, landing pages o presentaciones espectaculares.
                    </p>
                </motion.div>

                {/* Floating Lights */}
                <motion.div
                    className="fixed top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 filter blur-3xl"
                    animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <motion.div
                    className="fixed bottom-20 right-20 w-72 h-72 rounded-full bg-blue-500/20 filter blur-3xl"
                    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
            </div>
        </>
    );
}
export default PeachStyleShowcase;