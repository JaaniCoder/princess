"use client";

import { useEffect, useState } from "react";
import { CanvasBackground } from "@/components/CanvasBackground";
import { MagicMirror } from "@/components/MagicMirror";
import { TimeCounter } from "@/components/TimeCounter";
import { DesignerGallery } from "@/components/DesignerGallery";
import { Manifesto } from "@/components/Manifesto";
import { PoetryVault } from "@/components/PoetryVault";
import { motion } from "framer-motion";

export default function PrincessDaySurprise() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Cinematic scroll animation configuration for all sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] as const // Custom aesthetic easing (like a smooth physical spring)
      } 
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0510] text-white overflow-hidden font-sans selection:bg-rose-500 selection:text-white">
      <CanvasBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col gap-32 md:gap-40">
        
        {/* Hero Section with Staggered Entrance */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.4 } } // Delays the paragraph until the title appears
          }}
          className="text-center space-y-6 mt-10 md:mt-20"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight pb-2"
          >
            <motion.span 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-block bg-clip-text text-transparent bg-linear-to-r from-rose-400 via-pink-400 to-fuchsia-400"
            >
              Happy National Princess Day, Khyati
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="text-lg md:text-xl text-pink-100/70 max-w-2xl mx-auto font-light"
          >
            You are the center of my universe, the perfect design of my life, and the only one for me.
          </motion.p>
        </motion.section>

        {/* Feature Sections - Triggering precisely when she scrolls them into view */}
        
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <MagicMirror />
        </motion.div>
        
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* Using your exact first date */}
          <TimeCounter startDate={new Date("2025-02-19T00:00:00")} />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <DesignerGallery />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Manifesto />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <PoetryVault />
        </motion.div>
        
      </div>
    </main>
  );
}