import React from 'react';

import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 h-28 flex items-center shadow-sm">
      {/* Dark blue accent for logo - stylized cutout */}
      <div className="absolute top-0 left-0 h-full w-[120px] md:w-[220px] bg-[#1a365d]" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between relative">
        {/* Logo Area */}
        <div className="flex items-center relative z-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <div className="relative flex-shrink-0">
              {/* Pulsing glow ring */}
              <div className="absolute inset-0 rounded-full animate-ping bg-blue-400/30" style={{ animationDuration: '2s' }}></div>
              <div className="absolute -inset-1 rounded-full animate-pulse bg-blue-400/20 blur-md" style={{ animationDuration: '1.5s' }}></div>
              {/* Logo circle */}
              <div className="relative w-14 h-14 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)] flex-shrink-0 bg-white">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover scale-150"
                />
              </div>
            </div>
            <div className="flex flex-col ml-20 md:ml-10">
              <div className="flex flex-col">
                <span className="text-base md:text-2xl lg:text-3xl font-black tracking-tighter text-[#1a365d] leading-none">HOME MASTER</span>
                <span className="text-base md:text-2xl lg:text-3xl font-black tracking-tighter text-[#1a365d] leading-none mb-1">SERVICES</span>
              </div>
              <div className="flex gap-2 md:gap-3 items-center">
                <span className="text-[7px] md:text-[9px] font-black text-[#1a365d]/80 uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1 h-1 bg-primary-blue rounded-full"></div>
                  Plumbing
                </span>
                <span className="text-[7px] md:text-[9px] font-black text-[#1a365d]/80 uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1 h-1 bg-primary-blue rounded-full"></div>
                  Electrical
                </span>
                <span className="text-[7px] md:text-[9px] font-black text-[#1a365d]/80 uppercase tracking-widest flex items-center gap-1 whitespace-nowrap">
                  <div className="w-1 h-1 bg-primary-blue rounded-full"></div>
                  HVAC
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[13px] font-black text-[#1a365d] tracking-[0.2em] uppercase">
            {['หน้าแรก', 'บริการ', 'เกี่ยวกับเรา', 'ติดต่อเรา'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-primary-blue transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#2a4a7d' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a365d] text-white px-10 py-3.5 rounded-lg font-black text-[13px] uppercase tracking-[0.15em] shadow-xl shadow-blue-900/20 transition-all"
          >
            จองบริการ
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button className="p-2 text-[#1a365d]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden z-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-10 text-center font-black text-[#1a365d] tracking-[0.2em] uppercase">
              <a href="#" className="hover:text-primary-blue transition-colors">หน้าแรก</a>
              <a href="#" className="hover:text-primary-blue transition-colors">บริการ</a>
              <a href="#" className="hover:text-primary-blue transition-colors">เกี่ยวกับเรา</a>
              <a href="#" className="hover:text-primary-blue transition-colors">ติดต่อเรา</a>
              <button className="bg-[#1a365d] text-white py-5 rounded-xl font-black tracking-[0.2em] mt-4 shadow-lg">
                จองบริการ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
