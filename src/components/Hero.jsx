import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero.jpg"
          alt="Home Background"
          className="w-full h-full object-cover shadow-2xl"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-lg">
            <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a365d] leading-[0.95] tracking-tight mb-6"
            >
              HOME<br />MASTER<br />SERVICE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1a365d]/80 leading-relaxed tracking-wide"
            >
              ซ่อมแซมทุกอย่างภายในบ้าน:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1a365d]/80 mb-8 leading-relaxed tracking-wide"
            >
              ประปา, ไฟฟ้า, งานซ่อมแซม
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: '#2a4a7d' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a365d] text-white px-10 py-4 rounded-xl font-black text-lg md:text-xl tracking-wide shadow-xl shadow-blue-900/20 hover:bg-[#2a4a7d] transition-all"
            >
              จองคิวซ่อมทันที
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
