import React from 'react';
import { ShieldCheck, MapPin, Calendar, FileText, Clock, Heart } from 'lucide-react';

export default function GuaranteeSection() {
  const items = [
    { title: "รับประกันความพึงพอใจ", icon: <ShieldCheck size={40} />, desc: "ไม่ต้องกังวลเรื่องการหลอกลวงหรือคุณภาพงาน บริษัทของเราผ่านการรับรองและมุ่งมั่นที่จะมอบผลลัพธ์ที่ดีที่สุด" },
    { title: "ประเมินราคาฟรี", icon: <FileText size={40} />, desc: "รับการประเมินราคาโดยไม่มีข้อผูกมัด สัมผัสความโปร่งใสและสบายใจได้ในทุกขั้นตอน" },
    { title: "มืออาชีพในพื้นที่", icon: <MapPin size={40} />, desc: "บริการของเราครอบคลุมทั่วประเทศ ไม่ว่าจะในเมือง ชานเมือง หรือชนบท เราพร้อมให้บริการดูแลทั้งระยะสั้นและระยะยาว" },
    { title: "บริการด่วน 24 ชั่วโมง", icon: <Clock size={40} />, desc: "ต้องการการซ่อมแซมเร่งด่วน? ทีมผู้เชี่ยวชาญของเราพร้อมให้บริการตลอดเวลาเพื่อแก้ปัญหาของคุณทันที" },
    { title: "นัดหมายยืดหยุ่น", icon: <Calendar size={40} />, desc: "เราพร้อมเข้าดูแลตามเวลาที่คุณสะดวก ไม่ว่าจะเป็นช่วงกลางวัน กลางคืน หรือวันหยุดสุดสัปดาห์" },
    { title: "ไม่มีข้อผูกมัด 100%", icon: <Heart size={40} />, desc: "คุณสามารถปรึกษาปัญหาที่คุณพบได้ฟรี เราพร้อมให้คำแนะนำอย่างจริงใจโดยไม่มีเงื่อนไขผูกมัด" },
  ];

  return (
    <section className="bg-primary-dark text-white rounded-[4rem] my-20 overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-8">
          <h2 className="text-4xl font-bold max-w-md">รวดเร็ว เป็นกันเอง และรับประกันความพึงพอใจ</h2>
          <p className="text-gray-400 max-w-md text-sm">
            ไม่ว่างานของคุณจะใหญ่หรือเล็ก ทั้งภายในหรือภายนอกบ้าน เราพร้อมให้บริการและช่วยแก้ปัญหาบ้านของคุณให้หมดไป
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="text-primary-blue shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
