import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// --- STICKY LEAD FORM (GATED CONTENT) ---
const StickyLeadForm = ({ isModal = false, closeModal }) => {
  const formContent = (
    <div className={`${isModal ? 'w-full' : 'hidden lg:block fixed right-0 top-1/4 w-80'} bg-white/95 backdrop-blur-md shadow-2xl ${isModal ? 'rounded-2xl' : 'rounded-l-2xl'} p-8 z-50 border border-gray-100`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-black text-slate-900 tracking-wide">
          {isModal ? "Unlock Floor Plans" : "Ready to Step Up?"}
        </h3>
        {isModal && (
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-800 transition text-xl">✕</button>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-6">
        {isModal ? "Provide details to download 2BHK & 3BHK dimensioned layouts." : "Request a call back or schedule a site visit today."}
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" />
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm rounded-l-lg">+91</span>
          <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" />
        </div>
        <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-gray-500">
          <option>Configuration Preference</option>
          <option>2 BHK (900 - 1,275 sq ft)</option>
          <option>3 BHK (1,100 - 1,650 sq ft)</option>
        </select>
        <button type="button" className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg">
          {isModal ? "Download Brochure" : "Request a Call Back"}
        </button>
      </form>
    </div>
  );

  return formContent;
};

// --- 1. THE WELCOME SCREEN (HERO) ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-[90vh] bg-slate-950 flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black"></motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              🟢 4 Towers Ready-To-Move
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              ⚡ Tata Power EZ Homes
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
              🚇 RRTS Interchange Hub
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            Upscale Living.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Thoughtfully Priced.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-10">
            Discover Brightn House — an exclusive G+5 low-rise community in Surajpur, Greater Noida. Select towers ready to move in.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Schedule a Site Visit
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- 2. THE BRIGHTN PHILOSOPHY ---
const Intro = () => (
  <section id="philosophy" className="py-24 bg-white relative">
    <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">A Home that Reflects <br/>Your Progress.</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Step away from the ordinary and embrace a cultured, community-oriented lifestyle. Brightn House is designed for upwardly mobile households that aspire to better architecture, 24x7 security, and smart technology without the high-density chaos of skyscrapers.
        </p>
        <div className="flex space-x-12 mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div>
            <h4 className="text-4xl font-black text-emerald-600">185</h4>
            <p className="text-gray-500 font-bold mt-1">Total Exclusive Units</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-emerald-600">10</h4>
            <p className="text-gray-500 font-bold mt-1">Low-Rise (G+5) Towers</p>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 h-[500px]">
         <div className="bg-slate-200 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold">Cultured Community</span>
            </div>
         </div>
         <div className="bg-slate-300 rounded-3xl overflow-hidden relative mt-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold">Connected Rooftops</span>
            </div>
         </div>
      </motion.div>
    </div>
  </section>
);

// --- 3. THE BRIGHTN ADVANTAGE (USPs) ---
const USPs = () => {
  const usps = [
    { title: "Immediate Ownership", desc: "4 ready-to-move-in towers (60 units). See it, understand it, own it, move in today.", icon: "🔑" },
    { title: "Unmatched Connectivity", desc: "Upcoming status as a major RRTS and Metro interchange linking Gurgaon, Ghaziabad, and Jewar.", icon: "🚇" },
    { title: "Intimate Low-Rise Living", desc: "Exclusive G+5 architecture offering a safe, cultured environment away from crowded high-rises.", icon: "🏡" },
    { title: "Thoughtfully Priced Luxury", desc: "Premium additions like Tata Power EZ Home tech and curated rooftops at just ₹6,500/sq ft.", icon: "💎" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Designed for Better Everyday Living</h2>
          <p className="text-gray-600 text-lg">The Brightn Advantage</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all"
            >
              <div className="text-4xl mb-6 bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center">{usp.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. LIFESTYLE / AMENITIES ---
const Amenities = () => {
  const categories = [
    {
      title: "Wellness & Nature",
      items: [
        { name: "Central Park", desc: "A 700 sq yard landscaped retreat for morning walks and evening unwinding." },
        { name: "Yoga & Fitness Deck", desc: "A dedicated rooftop wellness zone to elevate physical and mental health." }
      ]
    },
    {
      title: "Community & Connection",
      items: [
        { name: "Connected Rooftops", desc: "Distinctive elevated realms to experience living under the open sky." },
        { name: "Community Centre", desc: "Vibrant spaces designed to celebrate milestones and build lasting connections." }
      ]
    },
    {
      title: "Generations",
      items: [
        { name: "Premium Library", desc: "A quiet, cultured space for focused reading and family learning." },
        { name: "Kids & Seniors Zones", desc: "Safe developmental play areas and shaded landscaped retreats for elders." }
      ]
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Beyond Four Walls.</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Curated Experiences designed for wellness, connection, and peace of mind.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-8 border-b border-slate-700 pb-4">{cat.title}</h3>
              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. THE HOMES (Configurations) ---
const Homes = () => {
  const [activeTab, setActiveTab] = useState('2bhk');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="floor-plans" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Space to Breathe. Room to Grow.</h2>
          <p className="text-gray-600 text-lg">Meticulously planned residences featuring zero-waste layouts.</p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <button onClick={() => setActiveTab('2bhk')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === '2bhk' ? 'bg-slate-900 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>2 BHK (900 - 1,275 sq ft)</button>
          <button onClick={() => setActiveTab('3bhk')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === '3bhk' ? 'bg-slate-900 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>3 BHK (1,100 - 1,650 sq ft)</button>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-slate-100 h-[500px] flex items-center justify-center border border-gray-200 group cursor-pointer" onClick={() => setModalOpen(true)}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48cGF0aCBkPSJNMCAwaDEwMHZ1MDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U1ZThlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-50 blur-sm group-hover:scale-105 transition-transform duration-700"></div>
          
          <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center shadow-xl max-w-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Private Sanctuary</h3>
            <p className="text-gray-600 mb-6 text-sm">Includes Tata Power EZ Home integration, optimal ventilation, and smart spatial planning.</p>
            <button className="bg-emerald-600 text-white w-full py-3 rounded-lg font-bold shadow-md hover:bg-emerald-700 transition">
              Unlock Detailed Floor Plans
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
             <div className="max-w-md w-full relative">
               <StickyLeadForm closeModal={() => setModalOpen(false)} isModal={true} />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- 6. LOCATION & CONNECTIVITY ---
const Location = () => (
  <section id="location" className="py-24 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">The Center of Tomorrow</h2>
          <p className="text-lg text-gray-600 mb-8">
            Lakhnawali, Surajpur — The upcoming transit epicenter of NCR. Approached directly from Surajpur Roundabout, adjacent to ITBP Camp.
          </p>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <h4 className="font-black text-emerald-600 mb-2">Future RRTS/Metro Hub</h4>
            <p className="text-gray-600 text-sm">Surajpur is designated as a key interchange connecting Ghaziabad RRTS station directly to Noida International Airport (Jewar).</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-black text-blue-600 mb-2">Proposed 60km Corridor</h4>
            <p className="text-gray-600 text-sm">Direct connectivity from IFFCO Chowk (Gurgaon) to Surajpur, providing rapid access to southern NCR and IGI airport.</p>
          </div>
        </div>
        
        <div className="bg-slate-200 h-[500px] rounded-3xl overflow-hidden relative shadow-inner border border-gray-300 flex items-center justify-center">
           <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl m-6">
              <span className="text-5xl block mb-4">📍</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Location Map</h3>
              <p className="text-sm text-gray-600">Showing proximity to ITBP Camp & Surajpur Roundabout</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 7. FOOTER ---
const Footer = () => (
  <footer className="bg-slate-950 text-gray-400 py-16 border-t border-slate-900 pb-32 lg:pb-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 mb-8">
      <div>
        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">BRIGHTN HOUSE</h3>
        <p className="mb-6 max-w-sm">An exclusive G+5 low-rise residential community in Greater Noida, offering upscale living spaces.</p>
        <p className="text-sm">Developed by <strong className="text-white">Anabia Infrastructure Pvt. Ltd.</strong></p>
      </div>
      <div className="md:text-right">
        <h4 className="text-white font-bold mb-4">Site Address</h4>
        <p className="mb-1">Lakhnawali, Ecotech-II, Knowledge Park</p>
        <p className="mb-6">Near ITBP Camp, Greater Noida</p>
        <p className="text-xs text-gray-500 border border-slate-800 inline-block p-2 rounded">UP RERA Reg. No: [ Required ]</p>
      </div>
    </div>
  </footer>
);

export default function BrightnHouseMicrosite() {
  
  // Smooth Scroll Navigation Handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // height of the fixed header (h-20)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Initialize Lenis for buttery smooth page scrolling
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="font-sans antialiased bg-white selection:bg-emerald-500 selection:text-white">
      {/* Sticky Header with Clickable Scroll Links */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 h-20 flex items-center justify-between px-6 lg:px-12 border-b border-gray-100">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-2xl font-black text-slate-900 tracking-tight cursor-pointer">
          BRIGHTN HOUSE
        </a>
        <nav className="hidden lg:flex space-x-8 text-sm font-bold text-gray-600">
          <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="hover:text-emerald-600 transition cursor-pointer">Philosophy</a>
          <a href="#amenities" onClick={(e) => handleNavClick(e, 'amenities')} className="hover:text-emerald-600 transition cursor-pointer">Amenities</a>
          <a href="#floor-plans" onClick={(e) => handleNavClick(e, 'floor-plans')} className="hover:text-emerald-600 transition cursor-pointer">Floor Plans</a>
          <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="hover:text-emerald-600 transition cursor-pointer">Location</a>
        </nav>
        <button onClick={(e) => handleNavClick(e, 'philosophy')} className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-600 transition">
          Discover More
        </button>
      </header>

      <StickyLeadForm/>
      
      <main>
        <Hero/>
        <Intro/>
        <USPs/>
        <Amenities/>
        <Homes/>
        <Location/>
      </main>
      
      <Footer/>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 flex justify-between items-center z-[100] shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button className="bg-slate-900 text-white flex-1 py-3.5 rounded-lg font-bold mr-3 shadow-md text-center">Enquire Now</button>
        <button className="bg-[#25D366] text-white p-3.5 rounded-lg shadow-md flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.376 23.63l5.733-1.504A11.954 11.954 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm3.859 17.266c-.156.44-1.536 2.052-2.313 2.052-.777 0-1.748-.445-3.805-2.072-2.058-1.628-3.32-3.882-3.645-4.42-.325-.54-.34-1.228.163-1.597.502-.37.94-.88 1.135-1.233.195-.353.076-.842-.119-1.233-.195-.39-1.15-2.772-1.575-3.794-.424-1.022-1.033-.923-1.554-.923h-1.12c-.521 0-1.365.195-2.08.972-.714.777-2.73 2.662-2.73 6.49s2.795 7.525 3.185 8.045c.39.52 5.485 8.375 13.28 11.722 7.795 3.348 8.445 1.88 9.385 1.49.94-.39 2.503-1.135 2.828-2.207.325-1.072.325-1.947.228-2.142-.098-.195-.358-.292-.748-.487z"/></svg>
        </button>
      </div>
    </div>
  );
}