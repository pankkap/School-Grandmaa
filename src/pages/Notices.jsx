import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaSearch, FaPaperclip, FaThumbtack } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Notices = () => {
  const { notices } = useCMS();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = ['All', ...new Set(notices.map(n => n.category))];

  // Filter criteria
  const filteredNotices = notices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          CIRCULARS
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          School Notice Board
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Stay updated with official schedules, exam calendars, and festive closure notices.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-6 rounded-2xl border border-slate-100">
        {/* Search */}
        <div className="relative w-full md:max-w-xs flex items-center bg-white rounded-xl border border-slate-200 px-3 py-2.5">
          <FaSearch className="text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search circulars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-0 outline-none font-body text-xs text-slate-700"
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-heading text-xs font-semibold px-4 py-2 rounded-full border-0 cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-sky-50 border border-slate-200'
              }`}
              style={{
                backgroundColor: selectedCategory === cat ? 'var(--soft-pink)' : 'white',
                color: selectedCategory === cat ? 'white' : '#475569'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Notices List */}
      <section className="flex flex-col gap-6 mt-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map(notice => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl shadow-soft border-2 flex flex-col items-start gap-3 text-left relative ${
                notice.isPinned
                  ? 'bg-yellow-50/50 border-yellow-300'
                  : 'bg-white border-slate-100 hover:border-sky-200'
              }`}
            >
              {/* Pin badge */}
              {notice.isPinned && (
                <span className="absolute top-4 right-4 text-yellow-600 bg-yellow-100 p-2 rounded-full text-xs">
                  <FaThumbtack className="animate-pulse" />
                </span>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-heading text-[10px] font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full uppercase">
                  {notice.category}
                </span>
                <span className="font-body text-[10px] text-slate-400 font-bold">
                  Date: {notice.date}
                </span>
              </div>

              <h3 className="font-heading text-base md:text-lg text-slate-800 pr-10">{notice.title}</h3>
              <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
                {notice.content}
              </p>

              {/* Attachment link */}
              {notice.attachment && (
                <div className="flex items-center gap-1.5 mt-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold font-body text-slate-600">
                  <FaPaperclip className="text-slate-400" />
                  <span>{notice.attachment}</span>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert(`Simulated attachment download for: ${notice.attachment}`); }}
                    className="text-pink-500 hover:underline ml-2"
                  >
                    Download
                  </a>
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border-2 border-dashed border-slate-200">
            <p className="font-body text-sm text-slate-400">No circulars match your search or filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};
