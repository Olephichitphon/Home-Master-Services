import React from 'react';
import { motion } from 'motion/react';


export default function ServicesGrid() {
  const services = [
    {
      title: "บริการงานประปา",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
      desc: "ท่อประปารั่ว, ท่ออุดตัน, เปลี่ยนท่อประปาใหม่",
    },
    {
      title: "ซ่อมแซมหลังคา",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
      desc: "หลังคารั่ว, เปลี่ยนกระเบื้อง, ทำความสะอาดและบำรุงรักษาหลังคา",
    },
    {
      title: "กำจัดเชื้อรา",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      desc: "ขจัดและทำความสะอาดเชื้อรา, ฟื้นฟูและป้องกันการเกิดซ้ำ",
    },
    {
      title: "ตัดแต่งต้นไม้",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600",
      desc: "ตัดแต่งกิ่งไม้, กำจัดกิ่งไม้แห้ง, จัดทรงต้นไม้",
    },
    {
      title: "ซ่อมเครื่องใช้ไฟฟ้า",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
      desc: "ซ่อมเครื่องซักผ้า, ตู้เย็น, เครื่องปรับอากาศ และอื่นๆ",
    },
    {
      title: "รีโนเวทห้องน้ำ",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600",
      desc: "ออกแบบและให้คำปรึกษา, ติดตั้งสุขภัณฑ์, ซ่อมกระเบื้องห้องน้ำ",
    },
    {
      title: "ช่างกุญแจ",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600",
      desc: "ติดตั้งและซ่อมแซมกุญแจ, ทำกุญแจสำรอง, เปลี่ยนไส้กุญแจใหม่",
    },
  ];

  return (
    <section className="section-padding bg-gray-50/50 rounded-[4rem] my-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">บริการของเรา</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          ไม่ว่าจะเป็นท่อประปารั่ว, กระเบื้องแตก, ลืมกุญแจ หรือต้องการจัดระเบียบต้นไม้รอบบ้าน เราพร้อมช่วยคุณ!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
          >
            {/* Image header */}
            <div className="w-full h-44 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text body */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-[#1a365d]">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Contact card */}
        <div className="p-8 bg-primary-blue rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-lg shadow-primary-blue/30">
          <h3 className="text-2xl font-bold mb-4">บริการอื่นๆ?</h3>
          <p className="text-sm mb-6 opacity-90">แจ้งสิ่งที่ต้องการให้เราช่วย เราพร้อมดูแลทุกงาน!</p>
          <a
            href="tel:8886175894"
            className="bg-white text-primary-blue py-3 px-8 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            โทรหาเราตอนนี้
          </a>
        </div>
      </div>
    </section>
  );
}
