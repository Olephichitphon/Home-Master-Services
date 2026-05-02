import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogSection() {
  const posts = [
    {
      date: "19 ม.ค. 2023",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
      title: "เจาะลึกระบบบ้านอัจฉริยะและการบำรุงรักษา",
      tags: ["ประปา", "สถาปัตยกรรม", "การดูแลรักษา"]
    },
    {
      date: "19 ม.ค. 2023",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      title: "คู่มือฉบับสมบูรณ์เรื่องการซ่อมแซมและรีโนเวทบ้าน",
      tags: ["ประปา", "สถาปัตยกรรม", "การดูแลรักษา"]
    },
    {
      date: "19 ม.ค. 2023",
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=800",
      title: "เทคนิคการทาสีเพื่อเปลี่ยนโฉมห้องครัวใหม่",
      tags: ["ประปา", "สถาปัตยกรรม", "การดูแลรักษา"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">ค้นพบเรื่องราวดีๆ ในบล็อกของเรา</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          รวมเคล็ดลับและข้อมูลที่น่าสนใจไว้ในที่เดียว ร่วมเรียนรู้และสร้างแรงบันดาลใจไปกับเรา
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer bg-primary-dark rounded-[2.5rem] p-6 shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p className="text-xs text-blue-300/80 mb-2 font-medium">{post.date}</p>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
              พบกับคู่มือสุดพิเศษในการแก้ปัญหาบ้านทั่วไป และนวัตกรรมใหม่ๆ ในการดูแลบ้านที่คุณไม่ควรพลาด...
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map((tag, j) => (
                <span key={j} className="text-[10px] px-3 py-1 bg-white/10 rounded-full text-blue-200 border border-white/5">{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 text-primary-dark font-bold hover:text-primary-blue transition-colors group">
          ดูเพิ่มเติม <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
