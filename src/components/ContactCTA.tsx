import { ArrowRight, Smartphone, Gauge, LayoutGrid, HandHeart } from 'lucide-react';

export const ContactCTA = () => {
  const highlights = [
    { icon: <Smartphone />, title: "Mobile Friendly", desc: "Looks perfect on all devices." },
    { icon: <Gauge />, title: "Fast & Secure", desc: "Speed optimized & secure website." },
    { icon: <LayoutGrid />, title: "Google Ready", desc: "Includes Maps & Business setup." },
    { icon: <HandHeart />, title: "Support", desc: "We're here even after launch." },
  ];

  return (
    <section className="py-12 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {highlights.map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                <div className="text-blue-500 bg-blue-500/10 p-3 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl">
              Let's bring your vision to life and get your <span className="font-bold text-white">business online</span> today!
            </p>
          </div>

          <a 
            href="https://wa.me/27648297643" 
            target="_blank" 
            rel="noreferrer"
            className="relative z-10 flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full text-xl font-black uppercase tracking-wider hover:bg-zinc-100 transition-all hover:scale-105 shrink-0"
          >
            Start Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
