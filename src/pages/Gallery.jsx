import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaTimes, FaExpand } from 'react-icons/fa';

// Dummy gallery data – 15 kids school playing photos (reliable CDN URLs)
const dummyGallery = [
  { id: 'g-1',  title: 'Fun in the Classroom',  description: 'Children enjoying a colourful activity session.', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', category: 'Classroom', date: '2026-01-01' },
  { id: 'g-2',  title: 'Outdoor Playtime',       description: 'Kids running and laughing in the school ground.', url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80', category: 'Playground', date: '2026-01-02' },
  { id: 'g-3',  title: 'Art & Craft Day',        description: 'Little hands creating beautiful artwork.', url: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80', category: 'Art', date: '2026-01-03' },
  { id: 'g-4',  title: 'Story Time',             description: 'Children listening to an exciting story.', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', category: 'Classroom', date: '2026-01-04' },
  { id: 'g-5',  title: 'Garden Learning',        description: 'Exploring nature in the school garden.', url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80', category: 'Playground', date: '2026-01-05' },
  { id: 'g-6',  title: 'Music & Dance',          description: 'Joyful children singing and dancing together.', url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80', category: 'Events', date: '2026-01-06' },
  { id: 'g-7',  title: 'Painting Session',       description: 'Kids expressing creativity with colours.', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Art', date: '2026-01-07' },
  { id: 'g-8',  title: 'Building Blocks',        description: 'Young engineers constructing with blocks.', url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80', category: 'Classroom', date: '2026-01-08' },
  { id: 'g-9',  title: 'Sports Day',             description: 'Children competing in a fun sports event.', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80', category: 'Events', date: '2026-01-09' },
  { id: 'g-10', title: 'Science Fun',            description: 'Little scientists doing simple experiments.', url: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80', category: 'Classroom', date: '2026-01-10' },
  { id: 'g-11', title: 'Lunch Break',            description: 'Happy meal time with friends.', url: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80', category: 'Playground', date: '2026-01-11' },
  { id: 'g-12', title: 'Fancy Dress',            description: 'Adorable kids in colourful costumes.', url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80', category: 'Events', date: '2026-01-12' },
  { id: 'g-13', title: 'Reading Corner',         description: 'Quiet reading time in the library corner.', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', category: 'Classroom', date: '2026-01-13' },
  { id: 'g-14', title: 'Circle Time',            description: 'Children gathered for morning circle time.', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80', category: 'Classroom', date: '2026-01-14' },
  { id: 'g-15', title: 'Slide & Swing',          description: 'Pure joy on the playground equipment.', url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80', category: 'Playground', date: '2026-01-15' },
];

const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADtH0lMAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAAaAAAAKAAAAFoAAAAbAAAARQG8cN9AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABYSURBVEhL7c4hDQAgCAMQD3b/1m3g7YwVJkZQpUqQe+uXyB8uHcS7rV9DCC3xkGAGK3WwG4V3hYj8hDgOQJcD+gZzIAU7zJvL+AAAAABJRU5ErkJggg==";

export const Gallery = () => {
  const gallery = dummyGallery;
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
                src={item.url || placeholder}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.src = placeholder; }}
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
