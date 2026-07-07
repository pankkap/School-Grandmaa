import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaTimes, FaExpand } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Gallery = () => {
  const { gallery } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(gallery.map(item => item.category))];

  // Filter gallery items
  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          MOMENTS
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Photo Gallery
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Captured snapshots of class activities, garden plays, and preschool achievements.
        </p>
      </div>

      {/* Category selector tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`font-heading text-xs font-semibold px-4 py-2 rounded-full border-0 cursor-pointer transition-colors ${
              selectedCategory === cat
                ? 'bg-pink-500 text-white shadow-soft'
                : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-500'
            }`}
            style={{
              backgroundColor: selectedCategory === cat ? 'var(--soft-pink)' : '#f1f5f9',
              color: selectedCategory === cat ? 'white' : '#475569'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.section
        layout
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6"
      >
        <AnimatePresence>
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightboxIndex(idx)}
              className="relative rounded-2xl overflow-hidden shadow-soft border border-slate-100 group cursor-pointer h-48 md:h-64"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <span className="self-end text-lg bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <FaExpand />
                </span>
                <div className="text-left">
                  <h4 className="font-heading text-xs md:text-sm">{item.title}</h4>
                  <p className="font-body text-[9px] text-yellow-300 mt-0.5">{item.category} | {item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 flex flex-col justify-center items-center p-6"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white bg-transparent border-0 text-3xl cursor-pointer hover:text-pink-400"
            >
              <FaTimes />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[70vh] flex flex-col items-center bg-white/5 rounded-2xl overflow-hidden p-2"
              onClick={(e) => e.stopPropagation()} // prevent overlay close click
            >
              <img
                src={filteredGallery[lightboxIndex].url}
                alt={filteredGallery[lightboxIndex].title}
                className="max-w-full max-h-[60vh] object-contain rounded-lg"
              />

              <div className="text-white text-center mt-4 px-4 max-w-xl">
                <h3 className="font-heading text-base">{filteredGallery[lightboxIndex].title}</h3>
                <p className="font-body text-xs text-slate-300 mt-1">{filteredGallery[lightboxIndex].description}</p>
                <span className="font-body text-[10px] text-yellow-400 font-bold bg-white/10 px-2 py-0.5 rounded-full inline-block mt-2">
                  {filteredGallery[lightboxIndex].category}
                </span>
              </div>
            </motion.div>

            {/* Slider arrows */}
            <div className="absolute left-6 right-6 flex justify-between pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
                }}
                className="pointer-events-auto bg-white/10 text-white rounded-full w-12 h-12 border-none flex items-center justify-center text-xl cursor-pointer hover:bg-pink-500 hover:text-white"
              >
                ◀
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
                }}
                className="pointer-events-auto bg-white/10 text-white rounded-full w-12 h-12 border-none flex items-center justify-center text-xl cursor-pointer hover:bg-pink-500 hover:text-white"
              >
                ▶
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
