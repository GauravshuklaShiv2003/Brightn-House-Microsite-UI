import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STICKY LEAD FORM COMPONENT ---
const StickyLeadForm = () => {
  return (
    <div className="hidden lg:block fixed right-0 top-32 w-80 bg-white shadow-2xl rounded-l-2xl p-6 z-50 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">ENQUIRE NOW</h3>
        <button className="bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.376 23.63l5.733-1.504A11.954 11.954 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm3.859 17.266c-.156.44-1.536 2.052-2.313 2.052-.777 0-1.748-.445-3.805-2.072-2.058-1.628-3.32-3.882-3.645-4.42-.325-.54-.34-1.228.163-1.597.502-.37.94-.88 1.135-1.233.195-.353.076-.842-.119-1.233-.195-.39-1.15-2.772-1.575-3.794-.424-1.022-1.033-.923-1.554-.923h-1.12c-.521 0-1.365.195-2.08.972-.714.777-2.73 2.662-2.73 6.49s2.795 7.525 3.185 8.045c.39.52 5.485 8.375 13.28 11.722 7.795 3.348 8.445 1.88 9.385 1.49.94-.39 2.503-1.135 2.828-2.207.325-1.072.325-1.947.228-2.142-.098-.195-.358-.292-.748-.487z"/></svg>
        </button>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-slate-800 outline-none transition" />
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l">+91</span>
          <input type="tel" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded-r focus:ring-2 focus:ring-slate-800 outline-none transition" />
        </div>
        <div className="flex items-start text-xs text-gray-500">
          <input type="checkbox" className="mt-1 mr-2" required />
          <p>I consent to the use of my data in accordance with the privacy policy.</p>
        </div>
        <button type="button" className="w-full bg-slate-800 text-white font-semibold py-3 rounded hover:bg-slate-700 transition shadow-md">
          Express Your Interest
        </button>
      </form>
    </div>
  );
};

// --- GATED LAYOUTS COMPONENT ---
const GatedLayouts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Master & Unit Plans</h2>
          <p className="text-gray-600 text-lg">Detailed layouts designed for upscale everyday living.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Master Plan */}
          <motion.div whileHover={{ y: -5 }} className="relative group overflow-hidden rounded-2xl shadow-xl h-96 bg-white cursor-pointer" onClick={() => setModalOpen(true)}>
            <div className="absolute inset-0 bg-slate-200 blur-md opacity-80 transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-colors group-hover:bg-black/40">
              <h3 className="text-3xl text-white font-bold mb-6 tracking-wide">Master Plan Layout</h3>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-emerald-500 transition">Request Layout</button>
            </div>
          </motion.div>

          {/* Unit Plan */}
          <motion.div whileHover={{ y: -5 }} className="relative group overflow-hidden rounded-2xl shadow-xl h-96 bg-white cursor-pointer" onClick={() => setModalOpen(true)}>
            <div className="absolute inset-0 bg-slate-200 blur-md opacity-80 transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-bl from-gray-300 to-gray-400 opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-colors group-hover:bg-black/40">
              <h3 className="text-3xl text-white font-bold mb-6 tracking-wide">Detailed Unit Plans</h3>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-emerald-500 transition">Request Layout</button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
              <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition">✕</button>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Unlock Layouts</h3>
              <p className="text-gray-500 mb-6 text-sm">Please provide your details to view high-resolution plans.</p>
              <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              <div className="flex mb-6">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l">+91</span>
                <input type="tel" placeholder="Mobile Number" className="w-full p-3 border border-gray-300 rounded-r focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
              <button className="w-full bg-emerald-600 text-white py-3 rounded font-bold shadow-lg hover:bg-emerald-700 transition">View Layouts</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- AMENITIES COMPONENT ---
const Amenities = () => {
  const amenitiesList = [
    { title: "Central Park", desc: "63,000 sq ft landscaped retreat", icon: "🌳" },
    { title: "Smart Automation", desc: "Tata Power EZ Home solutions", icon: "⚡" },
    { title: "Curated Rooftops", desc: "Connected elevated experiences", icon: "🌇" },
    { title: "Premium Library", desc: "Dedicated quiet reading space", icon: "📚" },
    { title: "Clubhouse", desc: "3,000 sq ft community center", icon: "🏛️" },
    { title: "Fitness Deck", desc: "Rooftop yoga and wellness zone", icon: "🧘" },
    { title: "Advanced Security", desc: "24x7 controlled entry & exit", icon: "🛡️" },
    { title: "EV Charging", desc: "Future-ready vehicle infrastructure", icon: "🔋" }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Curated Lifestyle Experiences</h2>
          <p className="text-gray-600 text-lg">Designed for wellness, connection, and everyday peace of mind.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenitiesList.map((item, idx) => (
            <motion.div whileHover={{ y: -5 }} key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group cursor-default">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONNECTIVITY COMPONENT ---
const Connectivity = () => {
  const [activeTab, setActiveTab] = useState('metro');

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-slate-900 to-black"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Transit Epicenter</h2>
          <p className="text-gray-400 text-lg">Seamless connectivity from Surajpur to all major NCR hubs.</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-16">
          <button onClick={() => setActiveTab('metro')} className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'metro' ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}>Metro & RRTS</button>
          <button onClick={() => setActiveTab('road')} className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'road' ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}>Expressways</button>
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'metro' ? (
            <>
              {[
                { time: "8 Mins", hub: "Gaur Chowk" },
                { time: "15 Mins", hub: "Delhi Metro / Faridabad" },
                { time: "20 Mins", hub: "Buraki MMTS" },
                { time: "35 Mins", hub: "Gurugram (IFFCO Chowk)" },
                { time: "40 Mins", hub: "IGI Airport" },
                { time: "45 Mins", hub: "Noida Intl Airport (NIA)" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <h4 className="text-3xl font-black text-emerald-400 mb-2">{item.time}</h4>
                  <p className="text-gray-300 text-lg">{item.hub}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              {[
                { time: "12 Mins", hub: "Pari Chowk" },
                { time: "12 Mins", hub: "Yamuna Expressway" },
                { time: "18 Mins", hub: "Greater Noida Express" },
                { time: "25 Mins", hub: "Gaur Chowk / Dadri" },
                { time: "28 Mins", hub: "Eastern Peripheral" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <h4 className="text-3xl font-black text-emerald-400 mb-2">{item.time}</h4>
                  <p className="text-gray-300 text-lg">{item.hub}</p>
                </div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-16 border-t border-slate-800 pb-28 lg:pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-black text-white mb-4 tracking-tight">BRIGHTN HOUSE</h3>
          <p className="mb-6 max-w-md">An exclusive G+5 low-rise residential community in Surajpur, Greater Noida, offering upscale living spaces and unparalleled transit connectivity.</p>
          <p className="text-sm">Developed by <strong>Anabia Infrastructure Pvt. Ltd.</strong></p>
        </div>
        <div className="md:text-right">
          <h4 className="text-white font-bold mb-4">Site Address</h4>
          <p className="mb-2">Lakhnawali, Ecotech-II</p>
          <p className="mb-2">Knowledge Park, Greater Noida</p>
          <p className="mb-6">Near ITBP Camp & Surajpur Roundabout</p>
          <p className="text-sm text-gray-500 border border-slate-700 inline-block p-2 rounded">UP RERA Reg. No: [ Required ]</p>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN PAGE LAYOUT ---
export default function BrightnHouseMicrosite() {
  return (
    <div className="font-sans antialiased bg-white text-gray-800 relative selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 h-20 flex items-center justify-between px-6 lg:px-12 border-b border-gray-100">
        <div className="text-2xl font-black text-slate-800 tracking-tight">BRIGHTN HOUSE</div>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-emerald-600 transition">Overview</a>
          <a href="#" className="hover:text-emerald-600 transition">Price</a>
          <a href="#" className="hover:text-emerald-600 transition">Amenities</a>
          <a href="#" className="hover:text-emerald-600 transition">Location</a>
        </nav>
      </header>

      <StickyLeadForm />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] bg-slate-900 flex items-center px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-slate-800 z-0"></div>
          
          <div className="max-w-6xl mx-auto w-full relative z-20 text-white">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-4 border border-emerald-500 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                Ready To Move In
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight">
                Upscale Living.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Unmatched Access.</span>
              </h1>
              <p className="text-lg md:text-xl max-w-xl mb-10 text-gray-300 font-medium">
                An exclusive G+5 smart-home community in Surajpur, Greater Noida. Experience connected luxury starting at ₹45 Lacs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-500 transition shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Schedule Site Visit
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Amenities />
        <GatedLayouts />
        <Connectivity />
        <Footer />
      </main>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 flex justify-between items-center z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button className="bg-slate-800 text-white flex-1 py-3.5 rounded-lg font-bold mr-4 text-center shadow-md">Enquire Now</button>
        <button className="bg-[#25D366] text-white p-3.5 rounded-lg shadow-md flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.376 23.63l5.733-1.504A11.954 11.954 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm3.859 17.266c-.156.44-1.536 2.052-2.313 2.052-.777 0-1.748-.445-3.805-2.072-2.058-1.628-3.32-3.882-3.645-4.42-.325-.54-.34-1.228.163-1.597.502-.37.94-.88 1.135-1.233.195-.353.076-.842-.119-1.233-.195-.39-1.15-2.772-1.575-3.794-.424-1.022-1.033-.923-1.554-.923h-1.12c-.521 0-1.365.195-2.08.972-.714.777-2.73 2.662-2.73 6.49s2.795 7.525 3.185 8.045c.39.52 5.485 8.375 13.28 11.722 7.795 3.348 8.445 1.88 9.385 1.49.94-.39 2.503-1.135 2.828-2.207.325-1.072.325-1.947.228-2.142-.098-.195-.358-.292-.748-.487z"/></svg>
        </button>
      </div>
    </div>
  );
}