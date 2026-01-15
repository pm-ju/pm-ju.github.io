import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Interactive particle network */}
      <div className="pointer-events-auto">
        <ParticleNetwork />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]"
      />
    </div>
  );
};

export default AnimatedBackground;
