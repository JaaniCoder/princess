import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function DesignerGallery() {
  const memories = [
    { src: "/memories/pic1.jpeg", alt: "Our first date", position: "object-center" },
    { src: "/memories/pic2.jpeg", alt: "Beautiful moment", position: "object-[center_60%]" },
    { src: "/memories/pic3.jpeg", alt: "Smiling together", position: "object-[center_70%]" },
  ];

  return (
    <section className="flex flex-col items-center text-center space-y-12">
      <div className="space-y-4">
        <Sparkles className="w-8 h-8 text-rose-400 mx-auto" />
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          The UI/UX Designer’s Dream
        </h2>
        <p className="text-pink-100/60 max-w-lg">
          You design beautiful interfaces, but loving you is the most flawless user experience of my life. Every interaction is magical.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-0">
        {memories.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="relative h-96 md:h-80 rounded-2xl overflow-hidden border border-rose-500/30 shadow-[0_0_15px_rgba(251,113,133,0.15)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover ${img.position}`}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-[#1a0b22]/40 to-transparent flex items-end p-6 md:p-4">
              <span className="text-rose-300 font-medium tracking-wide text-lg md:text-base">{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}