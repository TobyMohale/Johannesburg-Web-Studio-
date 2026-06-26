import { MonitorSmartphone, PenTool, Rocket, Headset } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-blue-500" />,
      title: 'Modern & Responsive',
      description: 'Looks perfect on all devices, from desktop screens to mobile phones.'
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      title: 'Custom Design',
      description: 'Tailored specifically to your brand and business goals.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: 'Fast & SEO Friendly',
      description: 'Built for speed and optimized for Google search visibility.'
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-500" />,
      title: 'Ongoing Support',
      description: 'We are here when you need us even after your website is launched.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Why Choose <span className="text-blue-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
