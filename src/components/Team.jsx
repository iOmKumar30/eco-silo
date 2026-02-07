import { motion } from "framer-motion";

const members = [
  { name: "Apurba Rath",  img: "/assets/apurba.png" },
  { name: "Subhangi Rath", img: "/assets/saanvi.png" },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 bg-linear-to-b from-transparent to-black/50"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          The <span className="text-eco-green">Creators</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-eco-green/30 group-hover:border-eco-green transition-all duration-500 shadow-2xl relative">
                <img
                  src={member.img}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300")
                  }
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
