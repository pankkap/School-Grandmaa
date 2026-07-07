import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookmark, FaClock, FaChild } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Programs = () => {
  const { programs } = useCMS();

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 text-left">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-[10px] text-amber-600 font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded">
          Syllabus Programs
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-900">
          Our Early Years Curriculum Pathways
        </h1>
        <p className="font-body text-xs md:text-sm text-slate-500 max-w-xl">
          Highly structured preparatory streams mapped to cognitive, linguistic, and motor milestones.
        </p>
      </div>

      {/* Programs Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((prog, index) => (
          <motion.div
            key={prog.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-200 flex flex-col justify-between hover:border-amber-600 transition-colors"
          >
            <div
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${prog.image})` }}
            >
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white font-heading text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded flex items-center gap-1">
                <FaChild className="text-amber-500" /> {prog.ageGroup}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-grow">
              <h3 className="font-heading text-base text-slate-900">{prog.title}</h3>

              <div className="flex flex-col gap-1">
                <span className="font-heading text-[10px] font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5"><FaBookmark /> Syllabus Objectives</span>
                <p className="font-body text-xs text-slate-500 leading-relaxed pl-5">
                  {prog.learningObjectives}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-heading text-[10px] font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5"><FaBookmark /> Typical Play Labs</span>
                <p className="font-body text-xs text-slate-400 leading-relaxed pl-5 italic">
                  {prog.activities}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100">
              <span className="font-body text-[10px] text-slate-400 font-bold flex items-center gap-1">
                <FaClock /> {prog.duration}
              </span>
              <Link
                to="/admissions"
                className="no-underline px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-heading text-[10px] font-bold uppercase tracking-widest rounded shadow transition-colors"
                style={{
                  backgroundColor: 'var(--sky-blue)',
                  color: 'white',
                  borderRadius: '4px'
                }}
              >
                Inquire
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
