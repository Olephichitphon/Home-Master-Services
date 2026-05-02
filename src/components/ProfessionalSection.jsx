import React from 'react';

import { motion } from 'motion/react';

const points = [
  "งานซ่อมแซมและติดตั้ง",
  "งานบำรุงรักษา",
  "ระบบความปลอดภัยในบ้าน",
  "งานระบบประปา",
  "ราคาเหมาะสม",
  "โซลูชันที่เป็นมิตรต่อสิ่งแวดล้อม",
];

export default function ProfessionalSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f0f9ff 100%)' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: White Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] leading-tight mb-4">
            มืออาชีพเพื่อบริการดูแลบ้านของคุณ
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            คุณกำลังมองหาความช่วยเหลือเรื่องบ้านอยู่ใช่ไหม? เราคือทีมงานมืออาชีพที่พร้อมให้
            บริการดูแลบ้านครบวงจร เพื่อตอบโจทย์ทุกความต้องการของคุณ
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <i className="fa-solid fa-circle-check text-green-500 text-sm flex-shrink-0"></i>
                <span className="text-sm font-semibold text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div
            className="rounded-2xl p-5 text-white"
            style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)' }}
          >
            <p className="text-sm font-semibold leading-relaxed">
              เราพร้อมให้บริการด่วนตลอด 24 ชั่วโมง
            </p>
            <a
              href="tel:0888617589"
              className="flex items-center gap-2 mt-2 font-black text-base underline underline-offset-2 hover:opacity-80 transition"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              (888) 617-5894
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center py-4"
        >
          {/* Outer glow */}
          <div className="absolute inset-4 rounded-3xl bg-blue-300/30 blur-2xl -z-10" />

          {/* White card frame */}
          <div className="relative w-full max-w-sm md:max-w-md rounded-3xl bg-white p-3 shadow-[0_20px_60px_rgba(59,130,246,0.2),0_8px_24px_rgba(0,0,0,0.1)]">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/A.jpg"
                alt="Professional workers"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Inner gradient overlay for depth */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(30,64,175,0.10) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.18) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Glow accents */}
          <div className="absolute -bottom-4 right-4 w-36 h-36 bg-blue-400/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-4 left-4 w-24 h-24 bg-sky-300/20 rounded-full blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
