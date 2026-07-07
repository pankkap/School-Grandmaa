import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaVideo } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Videos = () => {
  const { videos } = useCMS();

  // Helper to extract YouTube video ID
  const getYoutubeId = (url) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } catch (e) {
      return null;
    }
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-sky-500 font-bold uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full">
          VIDEO CLIPS
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Campus Video Gallery & Tours
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Watch snippets of our toddlers during morning assembly, splash routines, and theater acts.
        </p>
      </div>

      {/* Video Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {videos.map(vid => {
          const videoId = getYoutubeId(vid.youtubeUrl);
          return (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border-2 border-slate-100 hover:border-sky-300 transition-colors flex flex-col text-left"
            >
              {/* Embed Box */}
              <div className="relative aspect-video bg-slate-900">
                {videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
                    <FaYoutube className="text-5xl text-red-500" />
                    <span className="font-body text-xs">Invalid YouTube Link</span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col gap-3">
                <span className="font-heading text-[10px] font-bold uppercase text-sky-500 bg-sky-50 px-2.5 py-1 rounded-full w-max">
                  {vid.category}
                </span>
                <h3 className="font-heading text-base md:text-lg text-slate-800 flex items-center gap-2">
                  <FaVideo className="text-pink-400" /> {vid.title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed">
                  {vid.description}
                </p>
                <span className="font-body text-[10px] text-slate-400 font-bold self-end">
                  Added: {vid.date}
                </span>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};
