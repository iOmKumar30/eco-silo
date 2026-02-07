import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black" />

      {/* Glow blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-125 h-125 bg-eco-green/30 rounded-full blur-[160px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -bottom-50 -right-50 w-125 h-125 bg-blue-500/30 rounded-full blur-[160px]"
      />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-size-[32px_32px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 rounded-full border border-eco-green/30 bg-eco-green/10 px-5 py-2 text-xs md:text-sm font-mono tracking-widest uppercase text-eco-green"
        >
          Smart Grain Storage System
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-5xl md:text-8xl font-extrabold leading-tight"
        >
          <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            ECO-SILO
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          An IoT-powered grain storage system that actively prevents fungal
          growth and spoilage.
          <span className="block mt-2 text-gray-500">
            Saving harvests — one sensor at a time.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
