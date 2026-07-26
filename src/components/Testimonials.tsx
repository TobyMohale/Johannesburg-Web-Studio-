import { Star, ExternalLink } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This gentleman did quite an amazing job — now my business is on Google and I am getting sales from my website. I don't know anything about websites, but he made it so easy.",
      name: "Sphamandla",
      business: "Royal Trailers",
      rating: 5
    },
    {
      quote: "They did my website last week for my aluminium and glazing company. It gives details about our services and lets people get a quote directly.",
      name: "LS Build Projects",
      business: "Aluminium & Glazing",
      rating: 5
    },
    {
      quote: "They delivered the website in due time. No delays and good communication.",
      name: "Digital Marketing101",
      business: "Client Review",
      rating: 5
    },
    {
      quote: "It was great working with these guys. They really know what they are doing.",
      name: "Royal Canvas",
      business: "Client Review",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Client <span className="text-blue-500">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            See what our clients in Johannesburg and across South Africa have to say about our web design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <a 
              key={index} 
              href="https://www.google.com/search?q=Johannesburg+Web+Studio"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:bg-zinc-800/50 transition-colors group cursor-pointer"
            >
              <div className="relative">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  ))}
                  <ExternalLink className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-zinc-300 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">{testimonial.name}</h4>
                <p className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">{testimonial.business}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
