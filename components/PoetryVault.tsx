import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Heart, Sparkles } from "lucide-react";

export function PoetryVault() {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly typing as 'Variants' resolves the TypeScript easing error
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] relative">
      <h2 className="text-3xl font-semibold text-pink-300 mb-8 text-center">A Secret Poetry Vault</h2>
      
      {!isOpen ? (
        <motion.button
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(251,113,133,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#1a0b22]/80 backdrop-blur-md p-10 rounded-3xl border border-rose-500/40 flex flex-col items-center gap-4 cursor-pointer transition-all"
        >
          <motion.div animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-4 -right-4">
            <Sparkles className="w-6 h-6 text-pink-400" />
          </motion.div>
          <motion.div animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }} className="absolute -bottom-4 -left-4">
            <Sparkles className="w-5 h-5 text-rose-300" />
          </motion.div>

          <Mail className="w-12 h-12 text-rose-400 group-hover:text-pink-300 transition-colors" />
          <span className="text-rose-200 tracking-widest uppercase text-sm">Tap to Unlock</span>
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl bg-[#1a0b22]/90 backdrop-blur-xl border border-pink-500/40 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(244,114,182,0.2)] text-center relative max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500/30 scrollbar-track-transparent"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="absolute top-6 left-1/2 -translate-x-1/2"
            >
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500/50" />
            </motion.div>
            
            <div className="mt-10 space-y-6 font-serif text-[1.05rem] md:text-lg text-pink-50 leading-relaxed italic">
              <motion.p variants={itemVariants}>
                Anjaan tha main, na janta tha koi itna pyaara ho sakta hai<br/>
                Fareb ki is duniya me, mere hari ka dulara ho sakta hai<br/>
                Apno ki khushi ke liye jo toota sitara ho sakta hai<br/>
                Kya janta tha wo haseen shakhs kabhi humara ho sakta hai
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Nahi janta tha ke kisiko mera yu rona na gawara ho sakta hai<br/>
                Meri doobti huyi kashti ka iklota kinara ho sakta hai<br/>
                Bikhri si meri is zindagi ka sahara ho sakta hain<br/>
                Kya janta tha wo haseen shakhs kabhi humara ho sakta hai
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Mujhe bhigati is barsat me, kudrat ka diya bahara ho sakta hai<br/>
                Roz mohabbat me girte hai uski, ha ishq bhi dubara ho sakta hai<br/>
                Shayad ye kanhaji ka mujhe unka koi ishara ho sakta hai<br/>
                Kya janta tha wo haseen shakhs kabhi humara ho sakta hai
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Bekhabar tha koi mere liye itna haseen is zameen par utara ho sakta hai<br/>
                Shayad uske zara barabar ho saku isliye mujhe zara sawara ho sakta hai<br/>
                Sharif sa ye ladka kisi ke ishq me yu aawara ho sakta hai<br/>
                Kya janta tha wo haseen shakhs kabhi humara ho sakta hai
              </motion.p>

              <motion.div variants={itemVariants} className="pt-6 border-t border-pink-500/20 space-y-4 not-italic font-sans text-pink-100">
                <p>
                  Ab isse zyada shero shayari na mujhe aati hai<br/>
                  Mera dil hi nahi, meri ruh bhi tere bin na reh pati hai<br/>
                  Tujhse dur hokar bhi dhadkan tujhe hi soche jati hai<br/>
                  Teri yaad pal pal mujhe bahut satati hai<br/>
                  Meri saansen tujhse alag na rehna chahti hai<br/>
                  Main bs tumhara ban chuka hu, aur mere liye meri sab kuch meri Khyati hai 
                </p>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-10 space-y-2 text-rose-300 font-medium">
              <p>I love yuuuuuuuu soooooooooo much mah Khyati 😽</p>
              <p>I love yu n only yu meri jaan, my princess, my love, my everything 😘💙💋</p>
              <p className="pt-4 text-emerald-400">Forever Yours, <br/> - Jaani</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}