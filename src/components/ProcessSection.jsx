import React from 'react';
import { motion } from 'motion/react';

export default function ProcessSection() {
  const steps = [
    { num: "1.", title: "ติดต่อเราได้ตลอด 24 ชม.", desc: "คุณสามารถติดต่อเราได้โดยตรง เราจะประสานงานกับผู้เชี่ยวชาญเพื่อเข้าดูแลคุณอย่างรวดเร็วที่สุด" },
    { num: "2.", title: "นัดหมายรับบริการ", desc: "ทีมงานของเราจะตอบคำถามเบื้องต้นและจัดตารางเวลาที่สะดวกที่สุดสำหรับคุณ" },
    { num: "3.", title: "เสร็จสิ้นการบริการ", desc: "ช่างเทคนิคจะประเมินหน้างานและแจ้งราคาประเมิน หากคุณตกลง ช่างจะเริ่มดำเนินการทันทีจนงานเสร็จสมบูรณ์" },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#f0f9ff]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary-blue/5 rounded-full blur-3xl" />
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800" 
              alt="Worker working" 
              className="rounded-[3rem] shadow-2xl relative z-10"
            />
  
          </motion.div>
        </div>
  
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12"> HOME MASTER SERVICE ทำงานอย่างไร?</h2>
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-8 items-start"
              >
                <span className="text-5xl font-bold text-gray-200">{step.num}</span>
                <div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
