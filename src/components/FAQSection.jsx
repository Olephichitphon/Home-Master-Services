import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    { q: "HomePro คืออะไร?", a: "HomePro คือแพลตฟอร์มดูแลบ้านที่เชื่อมโยงเจ้าของบ้านกับผู้เชี่ยวชาญมืออาชีพ โดยให้บริการครบวงจร ตั้งแต่การซ่อมแซม บำรุงรักษา งานทำความสะอาด และอื่นๆ อีกมากมาย" },
    { q: "ผู้ให้บริการใน HomePro เชื่อถือได้และมีคุณสมบัติเหมาะสมหรือไม่?", a: "ใช่แน่นอน ผู้ให้บริการทุกคนผ่านการตรวจสอบและรับรองมาตรฐานเพื่อคุณภาพที่วางใจได้" },
    { q: "หากมีปัญหาหรือข้อร้องเรียนเกี่ยวกับผู้ให้บริการต้องทำอย่างไร?", a: "เรามีทีมงานซัพพอร์ตพร้อมดูแลตลอด 24 ชั่วโมง เพื่อช่วยแก้ไขข้อโต้แย้งหรือปัญหาด้านคุณภาพงานทันที" },
    { q: "การชำระเงินใน HomePro ทำอย่างไร?", a: "การชำระเงินจะดำเนินการอย่างปลอดภัยผ่านแพลตฟอร์มของเรา หลังจากที่งานเสร็จสมบูรณ์และได้รับการยืนยันจากคุณ" },
    { q: "ฉันจะรีวิวผู้ให้บริการได้อย่างไร?", a: "คุณสามารถให้คะแนนและรีวิวผู้ให้บริการได้ทันทีหลังจากที่งานเสร็จสิ้นผ่านหน้าโปรไฟล์ผู้ให้บริการ" },
  ];

  return (
    <section className="section-padding grid lg:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="text-5xl font-bold mb-6">คำถามที่พบบ่อย</h2>
        <p className="text-gray-500 mb-4">ยังต้องการความช่วยเหลือ? <a href="#" className="text-primary-blue underline">แจ้งให้เราช่วย</a></p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-gray-800">{faq.q}</span>
              {openIndex === i ? <ChevronUp size={20} className="text-primary-dark" /> : <ChevronDown size={20} className="text-primary-dark" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
