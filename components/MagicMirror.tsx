import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export function MagicMirror() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);
        }
      } catch (err) {
        console.error("Camera access denied or unavailable.");
      }
    }
    setupCamera();
  }, []);

  return (
    <section className="flex flex-col items-center space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold text-rose-400">The Magic Mirror</h2>
        <p className="text-pink-100/60">Look inside to see the most beautiful girl in the world.</p>
      </div>

      <motion.div 
        animate={{ boxShadow: ["0px 0px 20px rgba(251,113,133,0.2)", "0px 0px 40px rgba(251,113,133,0.4)", "0px 0px 20px rgba(251,113,133,0.2)"] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden border-4 border-pink-500/50 bg-[#1a0b22] flex items-center justify-center"
      >
        {!hasPermission && (
          <div className="absolute flex flex-col items-center text-pink-300/50">
            <Camera className="w-10 h-10 mb-2" />
            <p className="text-sm">Waiting for camera access...</p>
          </div>
        )}
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="object-cover w-full h-full -scale-x-100 filter contrast-125 brightness-110 saturate-110 sepia-[0.1]"
        />
        <div className="absolute inset-0 pointer-events-none border-12 border-rose-500/20 rounded-3xl z-10" />
      </motion.div>
    </section>
  );
}