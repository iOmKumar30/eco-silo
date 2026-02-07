import { motion } from "framer-motion";

export default function VideoDemo() {
    const videoId = "P2UL1K1Ww4Q";

  return (
    <section id="demo" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Live <span className="text-eco-green">Working Model</span>
        </motion.h2>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-eco-green/20 group pointer-events-none">

          <iframe
            className="w-full h-full scale-[1.02]" // Scale 1.02 hides slight border artifacts
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0`}
            title="Eco Silo Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 bg-transparent" />
        </div>
      </div>
    </section>
  );
}
