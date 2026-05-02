import React from 'react';

import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark pt-24 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter bar with Glassmorphism */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 mb-24 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10 shadow-2xl">
          <div className="text-center lg:text-left">
            <h4 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">ติดตามข่าวสารและโปรโมชั่น</h4>
            <p className="text-gray-400 max-w-md">รับเคล็ดลับการดูแลบ้านและข้อเสนอพิเศษส่งตรงถึงคุณ</p>
          </div>
          <div className="flex w-full lg:w-auto bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            <input 
              type="email" 
              placeholder="อีเมลของคุณ" 
              className="flex-1 px-8 text-white outline-none placeholder:text-gray-500 bg-transparent min-w-[200px]"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue hover:bg-sky-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary-blue/20"
            >
              สมัครสมาชิก
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 border-b border-white/5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 mb-10 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl border border-blue-100/10 overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover scale-125" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl md:text-4xl font-black leading-none tracking-tighter text-white">HOME MASTER</h3>
                <h3 className="text-3xl md:text-4xl font-black leading-none tracking-tighter text-white mb-2">SERVICES</h3>
                <div className="flex gap-3 text-[10px] font-bold tracking-widest text-primary-blue uppercase">
                  <span>• PLUMBING</span>
                  <span>• ELECTRICAL</span>
                  <span>• HVAC</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-10 max-w-sm leading-relaxed text-sm">
              เราคือทีมผู้เชี่ยวชาญด้านการดูแลบ้านแบบครบวงจร มุ่งมั่นส่งมอบบริการที่มีคุณภาพและน่าเชื่อถือที่สุดเพื่อบ้านที่คุณรัก
            </p>
            <div className="flex gap-5">
              {[
                { icon: 'fa-brands fa-youtube', color: '#ff0000' },
                { icon: 'fa-brands fa-instagram', color: '#e4405f' },
                { icon: 'fa-brands fa-facebook', color: '#1877f2' },
                { icon: 'fa-brands fa-x-twitter', color: '#000000' },
                { icon: 'fa-solid fa-envelope', color: '#38bdf8' }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 transition-all hover:bg-white/10"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white">บริการหลัก</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              {['งานซ่อมแซมไฟฟ้า', 'งานประปาครบวงจร', 'ติดตั้งแอร์/ล้างแอร์', 'งานทาสีบ้าน', 'งานทำความสะอาด'].map((item) => (
                <li key={item}><a href="#" className="hover:text-primary-blue transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-blue/30" /> {item}
                </a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 text-white">ช่วยเหลือ</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              {['เกี่ยวกับเรา', 'คำถามที่พบบ่อย', 'ติดต่อเรา', 'นโยบายความเป็นส่วนตัว', 'ข้อกำหนดการใช้งาน'].map((item) => (
                <li key={item}><a href="#" className="hover:text-primary-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-10 text-center text-xs text-gray-500 font-medium">
          © {new Date().getFullYear()} HOME MASTER SERVICES. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
