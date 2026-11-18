"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function TimeCounter({ startDate }: { startDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = new Date().getTime() - startDate.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  if (!mounted) return null;

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-4xl mx-auto py-10 z-10 relative">
      <div className="flex items-center gap-3 mb-10">
        <Clock className="w-8 h-8 text-rose-400" />
        <h2 className="text-2xl md:text-3xl font-light text-pink-100">
          Time since you became my <span className="text-pink-400 font-semibold">Princess</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: index * 0.2, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center bg-[#1a0b22]/60 backdrop-blur-md border border-rose-500/20 rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(251,113,133,0.05)] hover:border-pink-400/60 hover:shadow-[0_0_25px_rgba(244,114,182,0.2)] transition-all duration-300"
          >
            <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-br from-rose-300 to-pink-500 mb-2 font-mono">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-sm md:text-base text-pink-200/60 uppercase tracking-widest font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}