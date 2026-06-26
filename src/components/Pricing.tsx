import { Check, ShieldCheck, XCircle, Zap, Shield, Cloud, RefreshCw, MessageSquare, Activity, Wrench } from 'lucide-react';

export const Pricing = () => {
  const getBillingDateString = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const packages = [
    {
      name: 'Starter (Tier 1)',
      subtitle: 'Best for: Salons, spaza shops, churches, sole traders, local services',
      features: [
        'Single-page responsive website (Home, Services, About, Contact on one page)',
        'WhatsApp CTA button (wa.me link with pre-filled message)',
        'Contact section: WhatsApp, phone, email, Facebook / Instagram / TikTok',
        'Google Maps embed showing business location',
        'Mobile-first design — optimised for SA mobile traffic (90%+)',
        '2 rounds of revisions included'
      ],
      time: '3–5 Days',
      price: 'R1,499',
      numericPrice: '1499.00',
      retainer: 'R199/mo retainer',
      popular: false
    },
    {
      name: 'Business (Tier 2)',
      subtitle: 'Best for: Restaurants, event companies, clinics, schools, professional services',
      features: [
        'Multi-page site — up to 5 pages (Home, About, Services, Gallery, Contact)',
        'Custom domain registration e.g. .shop, .co.za, .com',
        'Professional email setup (info@businessname.co.za — free)',
        'WhatsApp CTA + full contact section with socials',
        'Photo gallery or portfolio section',
        'SEO setup — meta tags, sitemap, robots.txt, Search Console',
        'Google Business Profile setup assistance',
        '3 rounds of revisions included'
      ],
      time: '5–7 Days',
      price: 'R2,499',
      numericPrice: '2499.00',
      retainer: 'R199/mo retainer',
      popular: true
    },
    {
      name: 'Full-Stack (Tier 3)',
      subtitle: 'Best for: Dental/medical, tutoring, restaurants, law firms, e-commerce',
      features: [
        'Everything in Tier 1 and Tier 2 included',
        'AI receptionist trained on your services acting like a human receptionist',
        'WhatsApp bot trained to answer questions about your business',
        'Online booking system — clients select service, date, and confirm independently',
        'Admin portal — edit prices, add media, view bookings, export data',
        'Email automation — instant confirmation + 24h reminder + follow-up',
        'Restaurant: product/menu management, order capture, live kitchen dashboard',
        'Payment integration — clients pay deposit or full amount at booking',
        'Multi-staff / multi-service configuration',
        'Unlimited revisions + 1-hour staff training session'
      ],
      time: '10–14 Days',
      price: 'R2,999+',
      numericPrice: '2999.00',
      retainer: 'R199/mo retainer',
      popular: false
    }
  ];

  const maintenanceFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      title: 'Fast & Secure Hosting',
      desc: 'Reliable hosting configured for a professional business website.'
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      title: 'SSL Certificate',
      desc: 'HTTPS security included to help protect visitors and build trust.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      title: 'Regular Backups',
      desc: 'Routine backups so your website has an added layer of protection.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
      title: 'Website & Plugin Updates',
      desc: 'Core updates handled to keep your website running smoothly.'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
      title: 'Technical Support',
      desc: 'Help is available when you need assistance with your website.'
    },
    {
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      title: 'Website Monitoring',
      desc: 'Ongoing checks help keep your online presence dependable.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      title: 'Ongoing Maintenance',
      desc: 'Continued care after launch so your site stays in good shape.'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Combo Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center flex-1 max-w-sm">
            <h3 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Professional</h3>
            <div className="text-3xl font-black text-white uppercase tracking-tight">Web Design</div>
            <div className="text-blue-400 font-black text-2xl mt-2">R1,499</div>
            <div className="text-zinc-500 text-sm font-medium mt-3 bg-zinc-950 py-2 rounded-lg">ONCE-OFF PAYMENT</div>
          </div>
          <div className="text-5xl font-black text-blue-500">+</div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center flex-1 max-w-sm">
            <h3 className="text-blue-500 font-bold uppercase tracking-wider mb-2">Web Hosting</h3>
            <div className="text-3xl font-black text-white uppercase tracking-tight">From Our Studio</div>
            <div className="text-blue-400 font-black text-2xl mt-2">R199</div>
            <div className="text-zinc-500 text-sm font-medium mt-3 bg-zinc-950 py-2 rounded-lg">PER MONTH</div>
          </div>
        </div>

        {/* Packages */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="text-blue-500">Packages</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Choose a plan that fits your vision and budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`bg-zinc-900/80 backdrop-blur-sm border rounded-3xl p-8 relative flex flex-col ${
                pkg.popular 
                  ? 'border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.15)] md:-translate-y-4' 
                  : 'border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black text-white uppercase mb-1">{pkg.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{pkg.subtitle}</p>
              
              <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6 mb-8 text-center">
                <div className="text-sm text-zinc-400 mb-2">Estimated Build Time</div>
                <div className="text-white font-bold text-lg mb-4 flex items-center justify-center gap-2">
                  <span>⏱️</span> {pkg.time}
                </div>
                <div className="text-3xl font-black text-blue-500 tracking-tight">
                  {pkg.price} <span className="text-xs text-zinc-500 font-normal uppercase">once-off</span>
                </div>
                <div className="text-sm text-blue-400 font-bold mt-2">
                  + {pkg.retainer}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form action="https://www.payfast.co.za/eng/process" method="POST" target="_blank" className="w-full">
                {/* Hidden Credentials */}
                <input type="hidden" name="merchant_id" value="21367488" />
                <input type="hidden" name="merchant_key" value="reo1ne4p3ulwc" />

                {/* Redirect Handlers */}
                <input type="hidden" name="return_url" value={typeof window !== 'undefined' ? window.location.origin : ''} />
                <input type="hidden" name="cancel_url" value={typeof window !== 'undefined' ? window.location.origin : ''} />

                {/* Client Metadata */}
                <input type="hidden" name="name_first" value="Guest" />
                <input type="hidden" name="name_last" value="Client" />
                <input type="hidden" name="email_address" value="customer@example.com" />

                {/* Order Details */}
                <input type="hidden" name="m_payment_id" value={`JHB-${pkg.name.replace(/\s+/g, '-').toUpperCase()}-${Date.now()}`} />
                <input type="hidden" name="amount" value={pkg.numericPrice} />
                <input type="hidden" name="item_name" value={pkg.name} />
                <input type="hidden" name="item_description" value={`Secure payment for ${pkg.name} - Johannesburg Web Studio`} />

                {/* Subscription / Recurring Billing Details */}
                <input type="hidden" name="subscription_type" value="1" />
                <input type="hidden" name="billing_date" value={getBillingDateString()} />
                <input type="hidden" name="recurring_amount" value="199.00" />
                <input type="hidden" name="frequency" value="3" />
                <input type="hidden" name="cycles" value="0" />

                {/* Submit Button */}
                <button 
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold transition-all text-center cursor-pointer block ${
                    pkg.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </form>
            </div>
          ))}
        </div>

        {/* Clear Scope & Hosting/Maintenance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Section 1: Clear Scope (What's Not Included) */}
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-red-500/10 hover:border-red-500/20 rounded-3xl p-8 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500/10 p-3 rounded-2xl">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest block">Limits & Boundaries</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Clear Scope</h3>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                To keep this offer affordable and delivered quickly, the package focuses on a professional brochure-style business website. The items below can be discussed separately if your project needs them:
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                  <div className="text-lg mt-0.5">📸</div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stock or Own Photos & Videos</h4>
                    <p className="text-xs text-zinc-500 mt-1">High-quality visual assets or professional media production must be provided or licensed separately.</p>
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                  <div className="text-lg mt-0.5">🔌</div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Premium Plugins & Licenses</h4>
                    <p className="text-xs text-zinc-500 mt-1">Specific third-party services, premium API keys, or commercial extension fees.</p>
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                  <div className="text-lg mt-0.5">💻</div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bespoke Premium Applications</h4>
                    <p className="text-xs text-zinc-500 mt-1">Complex systems with custom-coded databases or custom interactive portals outside standard business sites.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center lg:text-left">
              <span className="text-xs text-zinc-500">Need complex features or premium assets? </span>
              <a href="https://wa.me/27648297643" target="_blank" rel="noreferrer" className="text-xs text-blue-500 font-bold hover:underline ml-1">
                Let's discuss on WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* Section 2: Hosting & Maintenance Includes */}
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 rounded-3xl p-8 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-3 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">Ongoing Support</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Hosting & Maintenance</h3>
                </div>
              </div>
              <div className="bg-blue-600/10 border border-blue-500/30 px-4 py-2 rounded-2xl text-center self-start sm:self-auto">
                <span className="text-xs text-blue-400 font-bold block leading-none mb-1">MONTHLY VALUE</span>
                <span className="text-lg font-black text-white">R199/mo</span>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Your R199 monthly retainer keeps your website fully secure, updated, and supported after launch, allowing you to focus completely on growing your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[340px] overflow-y-auto pr-1">
              {maintenanceFeatures.map((feat, idx) => (
                <div key={idx} className="bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex gap-3">
                  <div className="shrink-0 mt-0.5 bg-blue-500/5 p-2 rounded-lg border border-blue-500/10">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide leading-tight">{feat.title}</h4>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Existing Hosting Banner */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Hosting Powered By <br/><span className="text-blue-500">Johannesburg Web Studio</span>
              </h2>
              <p className="text-zinc-400">Everything you need to keep your website fast, secure, and always online.</p>
            </div>
            
            <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {['50GB SSD Storage', 'Free Business Email', 'Let us Host your Websites', '99.9% Uptime', 'Free Migration', 'cPanel Control Panel'].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="bg-blue-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-blue-500" /></div>
                  <span className="text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="lg:w-1/3 flex flex-col items-center lg:items-end w-full">
              <div className="bg-blue-950/50 border border-blue-500/30 p-6 rounded-2xl flex items-center gap-4 w-full justify-center lg:justify-start">
                <ShieldCheck className="w-12 h-12 text-blue-500" />
                <div>
                  <div className="text-xl font-black text-white uppercase">Secure &</div>
                  <div className="text-xl font-black text-white uppercase">Reliable</div>
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mt-1">Affordable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

