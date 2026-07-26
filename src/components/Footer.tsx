import { Phone, Globe, Mail } from 'lucide-react';
import { SpiderLogo } from './SpiderLogo';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4 text-white">
          <SpiderLogo className="w-12 h-12 md:w-16 md:h-16 text-white" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xl md:text-2xl uppercase tracking-wider">Johannesburg</span>
            <span className="font-semibold text-base md:text-lg text-blue-500 uppercase tracking-widest">Web Studio</span>
            <span className="text-zinc-500 text-xs mt-2">Solutions That Empower Your Growth</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-zinc-300">
          <a href="tel:0648297643" aria-label="Call Johannesburg Web Studio" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
            <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">064 829 7643</span>
          </a>
          <a href="https://jhbwebstudio101.netlify.app/" aria-label="Visit Johannesburg Web Studio Website" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
            <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <span className="font-medium">https://jhbwebstudio101.netlify.app/</span>
          </a>
          <a href="mailto:johannesburgwebstudio@gmail.com" aria-label="Email Johannesburg Web Studio" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
            <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-medium">johannesburgwebstudio@gmail.com</span>
          </a>
        </div>

        {/* QR Code Placeholder */}
        <div className="bg-white p-2 rounded-xl shrink-0 hidden md:block">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/27648297643`}
            alt="WhatsApp QR Code" 
            className="w-24 h-24"
          />
        </div>

      </div>
      <div className="container mx-auto px-4 max-w-7xl mt-12 pt-6 border-t border-white/5 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Johannesburg Web Studio. All Rights Reserved.
      </div>
    </footer>
  );
};
