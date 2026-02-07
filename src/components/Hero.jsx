import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-eco-green/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

      <div className="text-center z-10 max-w-4xl px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-eco-green font-mono tracking-widest uppercase mb-4 block"
        >
          Smart Grain Storage System
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-8xl font-black mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          ECO-SILO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-8 leading-relaxed"
        >
          An IoT-enabled solution to prevent fungal growth in stored grains.
          <br />
          Saving harvest, one sensor at a time.
        </motion.p>
      </div>
    </section>
  );
}
