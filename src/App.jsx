import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSection from './components/ProfessionalSection';
import ServicesGrid from './components/ServicesGrid';
import GuaranteeSection from './components/GuaranteeSection';
import ProcessSection from './components/ProcessSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const fadeProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-primary-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <motion.div {...fadeProps}>
          <ProfessionalSection />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeProps}>
            <ServicesGrid />
          </motion.div>
          
          <motion.div {...fadeProps}>
            <GuaranteeSection />
          </motion.div>
        </div>

        <motion.div {...fadeProps}>
          <ProcessSection />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeProps}>
            <BlogSection />
          </motion.div>
          
          <motion.div {...fadeProps}>
            <FAQSection />
          </motion.div>
        </div>

        <motion.div {...fadeProps}>
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
