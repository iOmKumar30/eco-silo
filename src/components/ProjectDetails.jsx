import { motion } from "framer-motion";
import {
  Cpu,
  Droplets,
  ShieldCheck,
  TrendingUp,
  Wind,
  Zap,
} from "lucide-react";

export default function ProjectDetails() {
  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-400" />,
      title: "The Problem",
      desc: "In India, nearly 6% of grain harvest is lost due to improper storage. High humidity (>65%) causes fungal growth (Aspergillus), producing toxins that make food unsafe.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-eco-green" />,
      title: "Our Solution",
      desc: "Eco-Silo is an 'Active Storage' system. Unlike passive jars, it constantly monitors the micro-climate inside the grain and reacts instantly to moisture threats.",
    },
  ];

  const components = [
    {
      name: "Arduino Uno",
      role: "The Brain: Processes data & controls logic.",
    },
    { name: "DHT11 Sensor", role: "The Nose: Detects humidity & temperature." },
    {
      name: "Relay Module",
      role: "The Switch: Safely controls high-voltage fan.",
    },
    { name: "12V DC Fan", role: "The Lungs: Extracts moist air actively." },
  ];

  return (
    <section className="py-20 bg-black/40 relative" id="details">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- WHY & HOW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-eco-green/50 transition-colors"
            >
              <div className="mb-4 bg-white/10 w-fit p-3 rounded-xl">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- WORKFLOW DIAGRAM --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-10">
            How It <span className="text-eco-green">Works</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
            <div className="p-4 border border-eco-green rounded-xl bg-eco-green/10">
              Sensor Detects 65% Humidity
            </div>
            <div className="hidden md:block text-2xl">→</div>
            <div className="md:hidden text-2xl">↓</div>
            <div className="p-4 border border-white/20 rounded-xl">
              Arduino Triggers 'Red Alert'
            </div>
            <div className="hidden md:block text-2xl">→</div>
            <div className="md:hidden text-2xl">↓</div>
            <div className="p-4 border border-blue-400 rounded-xl bg-blue-500/10">
              Fan Activates (Drying)
            </div>
            <div className="hidden md:block text-2xl">→</div>
            <div className="md:hidden text-2xl">↓</div>
            <div className="p-4 border border-white/20 rounded-xl">
              Humidity Drops = Fan OFF
            </div>
          </div>
        </motion.div>

        {/* --- COMPONENTS GRID --- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Key <span className="text-blue-400">Components</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border-l-4 border-eco-green"
              >
                <h4 className="font-bold text-lg text-white mb-2">{c.name}</h4>
                <p className="text-sm text-gray-400">{c.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FUTURE SCOPE --- */}
        <div className="bg-linear-to-r from-eco-dark to-eco-green/20 p-8 rounded-3xl border border-white/10">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-eco-green rounded-full text-black">
              <TrendingUp size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Scalability & Future</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <Zap size={20} className="text-yellow-400" />
                  <span>
                    <strong>IoT Integration:</strong> Using ESP32 for WiFi
                    alerts to farmers' phones.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Wind size={20} className="text-blue-300" />
                  <span>
                    <strong>Industrial Scale:</strong> Replacing small fans with
                    giant blowers for 10-ton warehouses.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Cpu size={20} className="text-purple-400" />
                  <span>
                    <strong>Solar Powered:</strong> Perfect for off-grid rural
                    villages.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
