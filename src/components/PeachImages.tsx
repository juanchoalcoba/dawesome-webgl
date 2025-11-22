import { motion } from "framer-motion";

export default function PeachImageShowcase() {
    const images = [
        "/img1.webp",
        "/img2.webp",
        "/img3.webp",
        "/img4.webp",
    ];

    return (
        <div className="min-h-screen bg-[#0b0b0f] text-white px-6 py-16 flex flex-col items-center">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-extrabold text-center 
                bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
            >
                Galería Puzzle Premium
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-400 text-lg text-center max-w-3xl mt-4"
            >
                Diseño rompecabezas amplio, moderno y completamente responsive.
            </motion.p>

            {/* Puzzle Layout → SIN altura fija */}
            <div className="
                mt-20 
                grid grid-cols-1 md:grid-cols-2 
                gap-10 
                max-w-7xl 
                w-full
            ">

                {/* === Columna 1 === */}
                <div className="flex flex-col gap-10">

                    {/* A → grande */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="h-[500px] md:h-[650px] rounded-3xl overflow-hidden"
                    >
                        <img src={images[0]} className="w-full h-full object-cover" />
                    </motion.div>

                    {/* B → más baja */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="h-[250px] md:h-[320px] rounded-3xl overflow-hidden"
                    >
                        <img src={images[1]} className="w-full h-full object-cover" />
                    </motion.div>

                </div>

                {/* === Columna 2 === */}
                <div className="flex flex-col gap-10">

                    {/* C → baja */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="h-[250px] md:h-[320px] rounded-3xl overflow-hidden"
                    >
                        <img src={images[2]} className="w-full h-full object-cover" />
                    </motion.div>

                    {/* D → alta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="h-[500px] md:h-[650px] rounded-3xl overflow-hidden"
                    >
                        <img src={images[3]} className="w-full h-full object-cover" />
                    </motion.div>

                </div>

            </div>

            {/* Floating glows (sutiles) */}
            <motion.div
                className="fixed top-20 left-20 w-96 h-96 rounded-full bg-white/10 blur-[180px] pointer-events-none"
                animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
                className="fixed bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-[200px] pointer-events-none"
                animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
        </div>
    );
}
