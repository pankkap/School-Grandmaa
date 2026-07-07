import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const FAQ = () => {
  const { faq } = useCMS();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          RESOLVING QUERIES
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Quick answers about enrollment logs, transport zones, daycare guidelines, and meals.
        </p>
      </div>

      {/* Accordions */}
      <section className="flex flex-col gap-4 mt-6">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-soft transition-colors"
              style={{ borderColor: isOpen ? 'var(--sky-blue)' : '#f1f5f9' }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full bg-transparent border-none py-5 px-6 flex items-center justify-between text-left cursor-pointer outline-none gap-4"
              >
                <span className="font-heading text-slate-800 text-sm md:text-base flex items-center gap-2">
                  <FaQuestionCircle className="text-sky-500 shrink-0" /> {item.question}
                </span>
                <span className="text-slate-400 shrink-0">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Answer Box */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 border-t border-dashed border-slate-100 font-body text-xs md:text-sm text-slate-500 leading-relaxed text-left">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>
    </div>
  );
};
