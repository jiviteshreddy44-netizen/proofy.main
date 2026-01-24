
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const line1 = "Real media needs";
  const line2 = "REAL PROOF.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <div className="text-center space-y-20 max-w-5xl mx-auto pt-32 pb-16 relative overflow-visible">
      {/* Neural Background for Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <circle cx="400" cy="300" r="2" fill="#00FF88" />
          <motion.circle 
            cx="400" cy="300" r="150" fill="none" stroke="#00FF88" strokeWidth="0.5" strokeDasharray="5,10"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="400" cy="300" r="250" fill="none" stroke="#00FF88" strokeWidth="0.5" strokeDasharray="10,20"
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="space-y-12 relative z-10">
        <h1 className="text-7xl md:text-[6.5rem] font-black tracking-tighter leading-[0.9] flex flex-col items-center select-none">
          <span className="flex overflow-hidden">
            {line1.split("").map((char, i) => (
              <motion.span 
                key={i} 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.03, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-white" 
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="flex overflow-hidden mt-4 group cursor-default relative">
            {line2.split("").map((char, i) => (
              <motion.span 
                key={i} 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-neon italic group-hover:text-white transition-colors duration-500" 
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-neon shadow-[0_0_20px_#00FF88]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
            />
          </span>
        </h1>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/80 font-light tracking-tight italic"
          >
            Verification for a synthetic age.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/40 font-light tracking-tight"
          >
            {"Advanced neural suites for ".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ delay: 1.5 + (i * 0.01) }}
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-white font-medium">
              {["images", ", ", "video", ", and ", "voice synthesis"].map((segment, i) => (
                 <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + (i * 0.1), duration: 0.5 }}
                  className={segment === "voice synthesis" || segment === "images" || segment === "video" ? "text-neon" : ""}
                 >
                  {segment}
                 </motion.span>
              ))}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 1, ease: "circOut" }}
        className="flex justify-center"
      >
        <button 
          onClick={() => document.getElementById('upload-zone')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-20 py-7 bg-transparent border border-neon/30 text-neon font-black rounded-2xl text-[10px] uppercase tracking-[0.6em] hover:border-neon transition-all duration-700 shadow-neon-low hover:shadow-neon active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500 italic">Initiate Session</span>
          <motion.div 
            className="absolute inset-0 bg-neon -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12"
      >
        <FeatureItem 
          icon="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" 
          label="Biometric Scan" 
          desc="Neural facial consistency analysis" 
          delay={3.4}
        />
        <FeatureItem 
          icon="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a8.25 8.25 0 0 1 13.788 0" 
          label="Spectral Check" 
          desc="Frequency domain artifact detection" 
          delay={3.6}
        />
        <FeatureItem 
          icon="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108" 
          label="Proof Certificate" 
          desc="Auditable forensic documentation" 
          delay={3.8}
        />
      </motion.div>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: string, label: string, desc: string, delay: number }> = ({ icon, label, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="flex flex-col items-center gap-5 group px-6"
  >
    <div className="w-16 h-16 rounded-[1.5rem] bg-surface border border-border flex items-center justify-center text-white/20 group-hover:text-neon group-hover:border-neon/40 group-hover:shadow-neon-low transition-all duration-500 group-hover:-translate-y-2">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} />
      </svg>
    </div>
    <div className="text-center space-y-2">
      <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white group-hover:text-neon transition-colors duration-500">
        {label}
      </h4>
      <p className="text-[10px] text-white/30 font-light leading-relaxed group-hover:text-white/60 transition-colors">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default Hero;
