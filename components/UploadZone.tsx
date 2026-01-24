
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadZoneProps {
  onUpload: (file: File) => void;
}

const UploadZone: React.FC<UploadZoneProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setIsDragging(true);
    else if (e.type === 'dragleave') setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files?.[0]) onUpload(files[0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) onUpload(files[0]);
  };

  return (
    <div 
      id="upload-zone"
      className="relative group transition-all duration-500 w-full"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <motion.div 
        onClick={() => fileInputRef.current?.click()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`relative bg-surface border-2 ${isDragging ? 'border-neon shadow-neon' : 'border-border'} rounded-[3rem] p-24 flex flex-col items-center justify-center text-center gap-12 cursor-pointer transition-all duration-500 shadow-3xl overflow-hidden`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*,video/*,audio/*"
          onChange={handleFileChange}
        />

        {/* Orbital Scanning Animation */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 border border-neon/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-4 border border-neon/20 rounded-full border-t-neon"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-surfaceLight border border-border flex items-center justify-center text-white/20 group-hover:text-neon group-hover:border-neon transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Forensic Intake</h2>
          <p className="text-white/40 text-lg max-w-sm mx-auto leading-relaxed italic font-light">
            Securely upload suspected media to begin neural interrogation.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 relative z-10">
          <button className="px-16 py-5 bg-white text-black font-black rounded-2xl hover:bg-neon transition-all duration-500 shadow-2xl group-hover:shadow-neon-low uppercase tracking-[0.4em] text-[11px]">
            Browse Terminal
          </button>
          
          <div className="flex items-center gap-6 text-[9px] font-black text-white/10 uppercase tracking-[0.5em]">
            <div className="h-px w-16 bg-border"></div>
            Neural Handshake Ready
            <div className="h-px w-16 bg-border"></div>
          </div>
        </div>

        <AnimatePresence>
          {isDragging && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neon/10 backdrop-blur-sm flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="p-8 border-2 border-neon rounded-3xl bg-charcoal shadow-neon animate-pulse">
                <span className="text-neon font-black uppercase tracking-[0.5em] text-sm">Release for Analysis</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UploadZone;
