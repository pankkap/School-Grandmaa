import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaTimes, FaBookOpen } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Blog = () => {
  const { blogs } = useCMS();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          READ & LEARN
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Parenting & Early Education Blog
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Helpful suggestions, feeding charts, sensory guidelines, and child psychology notes.
        </p>
      </div>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {blogs.map(blog => (
          <motion.div
            key={blog.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 flex flex-col justify-between hover:border-pink-300 transition-colors"
          >
            <div
              className="h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className="p-6 flex flex-col items-start gap-3 text-left">
              <div className="flex gap-4 text-[10px] font-body text-slate-400 font-bold">
                <span className="flex items-center gap-1"><FaUser /> {blog.author}</span>
                <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
              </div>
              <h3 className="font-heading text-base md:text-lg text-slate-800 leading-tight">
                {blog.title}
              </h3>
              <p className="font-body text-xs text-slate-500 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
            <div className="p-6 pt-0 flex justify-end">
              <button
                onClick={() => setSelectedBlog(blog)}
                className="font-heading text-xs font-bold text-pink-500 border-0 bg-transparent cursor-pointer hover:underline flex items-center gap-1"
              >
                Read Article <FaBookOpen />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 z-50 bg-slate-950/75 flex justify-center items-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-white p-6 md:p-8 rounded-2xl max-w-2xl max-h-[85vh] overflow-y-auto relative flex flex-col gap-6 text-left shadow-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-slate-400 bg-transparent border-0 text-2xl cursor-pointer hover:text-pink-500"
              >
                <FaTimes />
              </button>

              <div
                className="h-56 md:h-64 rounded-xl bg-cover bg-center mt-4"
                style={{ backgroundImage: `url(${selectedBlog.image})` }}
              />

              <div className="flex flex-col gap-2">
                <div className="flex gap-4 text-[10px] font-body text-slate-400 font-bold">
                  <span className="flex items-center gap-1"><FaUser /> {selectedBlog.author}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt /> {selectedBlog.date}</span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-slate-800 leading-tight">
                  {selectedBlog.title}
                </h2>
              </div>

              <div className="font-body text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-dashed border-slate-200 pt-4">
                {selectedBlog.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
