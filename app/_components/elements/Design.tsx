"use client";
import { motion } from "framer-motion";

export const DesignBulles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Effet de profondeur avec plusieurs couches */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Grandes bulles avec effets de glassmorphism */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-violet-500/20 rounded-full backdrop-blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-pink-400/20 to-purple-500/20 rounded-full backdrop-blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bulles moyennes avec effets de flou */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`medium-${i}`}
          className="absolute w-40 h-40 bg-gradient-to-r from-cyan-300/30 to-blue-500/30 rounded-full blur-xl"
          style={{
            top: `${25 + i * 30}%`,
            left: `${20 + i * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Petites particules brillantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Effet de brume animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Effet de lumière radiale */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
