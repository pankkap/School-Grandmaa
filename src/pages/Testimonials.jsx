import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Testimonials = () => {
  const { testimonials } = useCMS();

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          FEEDBACK
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Parent Testimonials
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Hear directly from parents about their child's developmental milestone upgrades.
        </p>
      </div>

      {/* Grid of Testimonials */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-soft border-2 border-slate-50 flex flex-col justify-between text-left hover:border-pink-300 transition-colors"
          >
            <div className="flex flex-col gap-4">
              <FaQuoteLeft className="text-pink-200 text-3xl shrink-0" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
              <img
                src={t.parentPhoto}
                alt={t.parentName}
                className="w-12 h-12 rounded-full object-cover border-2 border-pink-200 shadow"
              />
              <div>
                <h4 className="font-heading text-sm text-slate-800">{t.parentName}</h4>
                <span className="font-body text-[10px] text-pink-500 font-bold">
                  Parent of: {t.childName}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
