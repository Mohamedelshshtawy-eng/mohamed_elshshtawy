"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProfileSlider() {
  const images = ["/one.jpeg", "/two.jpeg", "/three.jpeg", "/four.jpeg"];
  const [index, setIndex] = useState(0);

  // Change image every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inset-0 relative"
        >
          <Image
            src={images[index]}
            alt="Profile"
            fill
            className="object-cover rounded-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          animate={{ x: ["-150%", "150%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>
    </div>
  );
}
