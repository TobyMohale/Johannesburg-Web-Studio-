import { motion } from 'motion/react';
import { 
  Search, GitBranch, PenTool, Layout, Smartphone, FileText, 
  Settings, Code2, Bug, SearchCode, Store, CheckSquare, 
  Rocket, Headset 
} from 'lucide-react';

export const Process = () => {
  const steps = [
    { day: 1, title: 'Discovery & Requirement', icon: <Search className="w-6 h-6" /> },
    { day: 2, title: 'Planning & Sitemap', icon: <GitBranch className="w-6 h-6" /> },
    { day: 3, title: 'Design Homepage', icon: <PenTool className="w-6 h-6" /> },
    { day: 4, title: 'Inner Pages Design', icon: <Layout className="w-6 h-6" /> },
    { day: 5, title: 'Mobile Responsive Design', icon: <Smartphone className="w-6 h-6" /> },
    { day: 6, title: 'Content Integration', icon: <FileText className="w-6 h-6" /> },
    { day: 7, title: 'Functionality (Forms, Maps)', icon: <Settings className="w-6 h-6" /> },
    { day: 8, title: 'Development & Coding', icon: <Code2 className="w-6 h-6" /> },
    { day: 9, title: 'Testing & Bug Fixing', icon: <Bug className="w-6 h-6" /> },
    { day: 10, title: 'On-Page SEO', icon: <SearchCode className="w-6 h-6" /> },
    { day: 11, title: 'Google Business Setup', icon: <Store className="w-6 h-6" /> },
    { day: 12, title: 'Final Review', icon: <CheckSquare className="w-6 h-6" /> },
    { day: 13, title: 'Deployment (Go Live)', icon: <Rocket className="w-6 h-6" /> },
    { day: 14, title: 'Support & Handover', icon: <Headset className="w-6 h-6" /> },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="text-blue-500">14-Day</span> Website Build Process
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined, transparent timeline from concept to launch.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 relative">
          {/* Connector Line (hidden on small screens, visual only) */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-white/10 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 border-4 border-slate-950 shadow-[0_0_0_2px_rgba(255,255,255,0.1)] group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                {step.day}
              </div>
              <div className="bg-zinc-900 border border-white/5 w-16 h-16 rounded-2xl flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all">
                {step.icon}
              </div>
              <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide px-2 leading-tight">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
