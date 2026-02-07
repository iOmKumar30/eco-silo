import { motion } from "framer-motion";
import posterImg from "../assets/poster.jpeg"; 

export default function PosterSection() {
  return (
    <section id="poster" className="py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          Project <span className="text-blue-400">Overview</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="p-4 bg-white/5 rounded-3xl border border-white/10"
        >
          <img
            src={posterImg}
            alt="Eco Silo Project Poster"
            className="rounded-2xl shadow-2xl max-h-[80vh] w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
