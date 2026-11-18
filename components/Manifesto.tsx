import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Manifesto() {
  const promises = [
    "To always listen to your design ideas and your heart.",
    "To treat every day like a new opportunity to make you smile.",
    "To be your safe space, no matter how chaotic the world gets.",
    "To give you the princess treatment, today and till the end of my life."
  ];

  return (
    <section className="max-w-3xl mx-auto w-full bg-[#1a0b22]/60 border border-pink-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
      <h2 className="text-2xl md:text-3xl font-semibold text-rose-400 mb-8 border-b border-pink-900/50 pb-4">
        The Princess Treatment Manifesto
      </h2>
      <div className="space-y-6">
        {promises.map((promise, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
            <p className="text-lg text-pink-50">{promise}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}