import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm md:text-base font-medium"
        >
          We help startups & small businesses launch high-performance websites
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6"
        >
          Professional
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
            Web Design
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 inline-block px-6 py-3 rounded-2xl mb-8"
        >
           <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
             <span className="text-zinc-400">+</span> Fast & Reliable <span className="text-blue-500">Hosting</span>
           </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Everything you need to build your online presence – at an unbeatable price! Modern, responsive, and made for your business.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="https://wa.me/27648297643" 
            target="_blank" 
            rel="noreferrer"
            className="group relative inline-flex justify-center w-full sm:w-auto items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Start Your Project
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 backdrop-blur-md"
          >
            View Packages
          </a>
        </motion.div>

        {/* Modern Metric Statistics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto border border-white/10 bg-zinc-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8"
        >
          <div className="flex flex-col items-center justify-center p-4 border-r border-b lg:border-b-0 border-white/5 last:border-0">
            <span className="text-4xl md:text-5xl font-black text-blue-500 tracking-tight leading-none mb-2">50+</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-400 text-center">Live Client Sites Deployed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-white/5 last:border-0">
            <span className="text-4xl md:text-5xl font-black text-blue-500 tracking-tight leading-none mb-2">7 Days</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-400 text-center">Average Delivery Time</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border-r border-white/5 last:border-0">
            <span className="text-4xl md:text-5xl font-black text-blue-500 tracking-tight leading-none mb-2">R1499</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-400 text-center">Starting Price</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 last:border-0">
            <span className="text-4xl md:text-5xl font-black text-blue-500 tracking-tight leading-none mb-2">100%</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-400 text-center">Mobile-First Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
