
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "01 // INGESTION",
    short: "Secure sandboxing and telemetry strip.",
    full: "Media is isolated in an encrypted environment where all metadata is stripped to prevent bias, leaving only the raw forensic signal for interrogation.",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  },
  {
    id: 2,
    title: "02 // INTERROGATION",
    short: "Frequency domain and GAN artifact scan.",
    full: "Our neural core probes the pixel structure for frequency domain anomalies and generative patterns characteristic of deepfake fabrication models.",
    icon: "M10 21h4m-4-4h4m-4-4h4M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    id: 3,
    title: "03 // VERIFICATION",
    short: "Biometric and light-physics audit.",
    full: "We verify subsurface scattering and biometric symmetry. Every frame is cross-checked against physical world light-bounce consistency models.",
    icon: "M9 12l2 2 4-4m5.618-4.016A3.323 3.323 0 0010.605 8.618"
  },
  {
    id: 4,
    title: "04 // REPORTING",
    short: "Generating auditable proof certificates.",
    full: "Final results are compiled into a comprehensive forensic report with confidence scores, anomaly heatmaps, and judicial-ready proof timestamps.",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 9v2m0 4h.01"
  }
];

const HowItWorks: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="space-y-24 py-20 relative">
      <div className="space-y-6 text-center">
        <h3 className="text-[11px] font-black text-neon uppercase tracking-[0.6em] italic">Forensic Architecture</h3>
        <h2 className="text-5xl font-black tracking-tighter uppercase italic">The Pipeline</h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto italic font-light">An automated sequence of forensic interrogation protocols.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Pipeline Connector Graphics */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 pointer-events-none" />
        
        {steps.map((step, idx) => (
          <motion.div 
            key={step.id}
            layout
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={() => setExpanded(expanded === step.id ? null : step.id)}
            className={`group p-12 bg-surface border ${expanded === step.id ? 'border-neon' : 'border-border'} rounded-[3rem] transition-all duration-500 cursor-pointer relative overflow-hidden`}
          >
            <div className="flex items-start justify-between relative z-10">
              <div className="space-y-6 flex-grow">
                <div className={`w-14 h-14 rounded-2xl bg-charcoal border border-border flex items-center justify-center transition-all duration-500 text-white/20 group-hover:text-neon ${expanded === step.id ? 'border-neon/40 text-neon shadow-neon-low' : ''}`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={step.icon} />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black italic uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">{step.title}</h4>
                  <p className="text-white/30 text-sm font-light uppercase tracking-widest">{step.short}</p>
                </div>
              </div>
              
              <div className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center transition-all duration-500 mt-1 ${expanded === step.id ? 'bg-neon text-black' : 'text-white/10 group-hover:text-white/40'}`}>
                <motion.svg 
                  animate={{ rotate: expanded === step.id ? 180 : 0 }}
                  className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </div>
            </div>
            
            <AnimatePresence>
              {expanded === step.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 mt-8 border-t border-white/5">
                    <p className="text-white/50 text-base leading-relaxed italic font-light">
                      {step.full}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
