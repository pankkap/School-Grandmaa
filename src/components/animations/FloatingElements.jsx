import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaPaperclip, FaWhatsapp, FaInfoCircle, FaFileDownload, FaClock, FaPhone } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useCMS } from '../../context/CMSContext';

// Sophisticated Gold & Silver Academy Confetti
export const triggerConfetti = () => {
  confetti({
    particleCount: 120,
    spread: 60,
    origin: { y: 0.65 },
    colors: ['#ca8a04', '#b45309', '#e7e5e4', '#1e3a8a', '#172554']
  });
};

// 1. Slow drifting golden academic sparkles
export const FloatingClouds = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Initialize 6 drifting gold dust items
    const items = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      top: Math.random() * 80 + 10,
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 4
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-b from-slate-900/5 to-transparent">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: 'rgba(202, 138, 4, 0.25)',
            boxShadow: '0 0 8px rgba(202, 138, 4, 0.4)'
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// 1b. Slow drifting cartoon balloons rising in background
export const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState([]);
  const colors = ['#f84554', '#f59e0b', '#3b82f6', '#10b981', '#a855f7', '#ec4899'];

  useEffect(() => {
    const items = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      scale: Math.random() * 0.6 + 0.5,
      duration: Math.random() * 12 + 18,
      delay: Math.random() * 15,
      color: colors[i % colors.length]
    }));
    setBalloons(items);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {balloons.map(b => (
        <motion.div
          key={b.id}
          style={{
            position: 'absolute',
            left: `${b.left}%`,
            bottom: '-150px',
            width: '60px',
            height: '80px',
            backgroundColor: b.color,
            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
            boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)',
            transform: `scale(${b.scale})`,
            opacity: 0.35,
          }}
          animate={{
            y: ['0vh', '-125vh'],
            x: [0, 40, -40, 20, 0]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "linear"
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: `8px solid ${b.color}`,
            }}
          />
          <svg
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '60px',
              fill: 'none',
              stroke: '#94a3b8',
              strokeWidth: '1.5',
              opacity: 0.5
            }}
            viewBox="0 0 20 60"
          >
            <path d="M 10 0 Q 15 20, 5 40 T 10 60" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// 1c. Translucent drifting soap bubbles rising in background
export const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 30 + 15,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10
    }));
    setBubbles(items);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {bubbles.map(b => (
        <motion.div
          key={b.id}
          style={{
            position: 'absolute',
            left: `${b.left}%`,
            bottom: '-60px',
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            border: '1.5px solid rgba(59, 130, 246, 0.25)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
            boxShadow: 'inset -2px -2px 6px rgba(59, 130, 246, 0.05), 0 4px 10px rgba(0,0,0,0.02)',
            opacity: 0.3,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// 1d. Drifting toffees, lollipops, stars and butterflies in background
export const FloatingButterflies = () => {
  const [items, setItems] = useState([]);
  const colors = ['#fb7185', '#fbbf24', '#38bdf8', '#c084fc', '#4ade80', '#f472b6'];

  useEffect(() => {
    const driftingItems = Array.from({ length: 12 }).map((_, i) => {
      const types = ['toffee', 'lollipop', 'star', 'butterfly'];
      return {
        id: i,
        type: types[i % types.length],
        left: Math.random() * 90 + 5,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 12,
        color: colors[i % colors.length]
      };
    });
    setItems(driftingItems);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {items.map(item => {
        let element = null;
        switch (item.type) {
          case 'toffee':
            element = (
              <svg viewBox="0 0 40 20" style={{ width: '40px', height: '20px' }}>
                <polygon points="0,5 10,10 0,15" fill={item.color} />
                <polygon points="40,5 30,10 40,15" fill={item.color} />
                <rect x="10" y="2" width="20" height="16" rx="8" fill={item.color} />
                <path d="M15 10 Q 20 5, 25 10" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
            );
            break;
          case 'lollipop':
            element = (
              <svg viewBox="0 0 20 40" style={{ width: '20px', height: '40px' }}>
                <rect x="9" y="16" width="2" height="24" fill="#cbd5e1" />
                <circle cx="10" cy="10" r="8" fill={item.color} />
                <path d="M10 2 A 8 8 0 0 1 18 10" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
            );
            break;
          case 'star':
            element = (
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }} fill={item.color}>
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
              </svg>
            );
            break;
          case 'butterfly':
            element = (
              <svg viewBox="0 0 30 30" style={{ width: '28px', height: '28px' }} fill={item.color}>
                <path d="M15 10 C12 2, 2 2, 7 15 C2 28, 12 28, 15 20 C18 28, 28 28, 23 15 C28 2, 18 2, 15 10 Z" />
              </svg>
            );
            break;
          default:
            break;
        }

        return (
          <motion.div
            key={item.id}
            style={{
              position: 'absolute',
              left: `${item.left}%`,
              bottom: '-80px',
              opacity: 0.35,
              transform: `scale(${item.scale})`
            }}
            animate={{
              y: ['0vh', '-120vh'],
              rotate: [0, 360],
              x: [0, 30, -30, 20, 0]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            {element}
          </motion.div>
        );
      })}
    </div>
  );
};

// 2. High-end Academic Loader
export const SunLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 max-w-sm mx-auto shadow-soft rounded-2xl">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="text-4xl text-amber-600 mb-4"
      >
        <FaGraduationCap />
      </motion.div>
      <h3 className="font-heading text-base text-slate-800 mb-1">Illusion Academy Portal</h3>
      <p className="font-body text-xs text-slate-400 text-center">Loading circular schedules...</p>
    </div>
  );
};

// 3. Elegant Gold Ribbon Divider
export const SchoolBusDivider = () => {
  return (
    <div className="relative w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-16 pointer-events-none" />
  );
};

// 4. Professional Admissions Office widget
export const MascotGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show welcoming chat bubble after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white border border-slate-200 p-5 rounded-2xl shadow-lg max-w-[280px] mb-4 relative pointer-events-auto flex flex-col gap-3 text-left"
          >
            {/* Header info */}
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="text-xl text-amber-600 shrink-0"><FaGraduationCap /></span>
              <div className="flex flex-col">
                <span className="font-heading text-xs font-bold text-slate-800">Admissions Desk</span>
                <span className="text-[9px] font-body text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" /> Coordinator Online
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-slate-600 leading-relaxed">
              Welcome to Illusion Play School. How can we support your enrollment inquiry today?
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col gap-1.5">
              <a
                href="/admissions"
                className="no-underline flex items-center gap-2 p-2 bg-slate-50 hover:bg-amber-50 rounded-lg text-[10px] font-heading font-bold text-slate-700 transition-colors"
              >
                <FaInfoCircle className="text-amber-600" /> ENROLLMENT GUIDELINES
              </a>
              <a
                href="/downloads"
                className="no-underline flex items-center gap-2 p-2 bg-slate-50 hover:bg-amber-50 rounded-lg text-[10px] font-heading font-bold text-slate-700 transition-colors"
              >
                <FaFileDownload className="text-amber-600" /> DOWNLOAD PROSPECTUS
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-2 p-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-[10px] font-heading font-bold text-emerald-700 transition-colors"
              >
                <FaWhatsapp className="text-emerald-600 text-sm" /> CHAT ON WHATSAPP
              </a>
            </div>

            {/* speech bubble close trigger */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2.5 right-2.5 bg-transparent border-0 text-[10px] font-heading font-bold text-slate-400 cursor-pointer hover:text-slate-600"
            >
              DISMISS
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="pointer-events-auto cursor-pointer border-0 bg-transparent flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-heading text-xs font-bold rounded-full shadow-lg border border-slate-800">
          <FaGraduationCap className="text-base text-yellow-500" />
          <span>INQUIRE</span>
        </div>
      </motion.button>
    </div>
  );
};

// 5. Interactive fixed Lion Mamma mascot (Custom sized, borderless, transparent, non-clickable)
export const LionMammaMascot = () => {
  return (
    <div className="lion-mamma-fixed-container">
      <motion.div
        className="lion-mamma-img-wrapper"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/lion_mamma.png"
          alt="Lion Mamma Mascot"
        />
      </motion.div>
    </div>
  );
};

// 6. Sticky WhatsApp Widget (Sticky on the right, opposite to Lion)
export const StickyWhatsApp = () => {
  const { siteSettings } = useCMS();
  const whatsappLink = `https://wa.me/${siteSettings?.whatsappNumber || '919899852000'}`;

  return (
    <div className="whatsapp-sticky-container">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-sticky-link"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};
