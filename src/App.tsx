/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
