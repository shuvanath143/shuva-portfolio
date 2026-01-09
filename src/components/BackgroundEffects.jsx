import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#1e1b4b] via-[#110d29] to-background-dark opacity-80 dark:opacity-100"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
      />
      
      {/* Additional floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-[40%] right-[15%] w-[150px] h-[150px] bg-blue-500/15 rounded-full blur-[60px]"
      />
    </div>
  );
};

export default BackgroundEffects;