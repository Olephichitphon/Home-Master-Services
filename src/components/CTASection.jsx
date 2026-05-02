import React from 'react';

import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="mt-20 mx-6 bg-primary-dark rounded-[4rem] text-white relative overflow-hidden">
      {/* Decorative worker image from screenshot */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" 
          alt="Worker" 
          className="h-full w-full object-cover rounded-l-[4rem] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 py-20 px-12 md:py-32 md:px-24 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-10"
        >
          พร้อมที่จะซ่อมแซมหรือปรับปรุงบ้านของคุณแล้วหรือยัง? มาคุยกันเถอะ!
        </motion.h2>

        <div className="flex flex-wrap gap-8 text-sm mb-12">
          <div className="flex items-center gap-2 text-primary-blue">
            <i className="fa-solid fa-circle-check text-lg"></i>
            <span className="text-white font-medium">ประเมินราคาฟรี</span>
          </div>
          <div className="flex items-center gap-2 text-primary-blue">
            <i className="fa-solid fa-circle-check text-lg"></i>
            <span className="text-white font-medium">ไม่มีข้อผูกมัด 100%</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:8886175894"
            className="inline-flex items-center gap-3 bg-primary-blue hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl shadow-primary-blue/20"
          >
            โทรหาเราตอนนี้
            <div className="bg-white text-primary-blue w-8 h-8 flex items-center justify-center rounded-full">
              <i className="fa-solid fa-phone text-sm"></i>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05a647] text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl shadow-[#06C755]/20"
          >
            Line Official
            <div className="bg-white text-[#06C755] w-8 h-8 flex items-center justify-center rounded-full">
              <i className="fa-brands fa-line text-lg"></i>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@homemaster.com"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all border border-white/20"
          >
            ส่งอีเมล
            <div className="bg-white text-primary-dark w-8 h-8 flex items-center justify-center rounded-full">
              <i className="fa-solid fa-envelope text-sm"></i>
            </div>
          </motion.a>
        </div>
      </div>


    </section>
  );
}
