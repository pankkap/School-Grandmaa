import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Faculty = () => {
  const { faculty } = useCMS();

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-sky-500 font-bold uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full">
          OUR EDUCATORS
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Meet Our Loving Educators
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Montessori-certified child coordinators and caregivers trained in early pediatric first-aid.
        </p>
      </div>

      {/* Faculty Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {faculty.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border-2 border-slate-50 flex flex-col hover:border-pink-300 transition-colors"
          >
            {/* Image Box */}
            <div className="h-64 bg-slate-100 overflow-hidden relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-heading font-bold text-slate-800 px-3 py-1 rounded-full">
                🎓 {member.experience} Exp
              </span>
            </div>

            {/* Description */}
            <div className="p-6 flex flex-col items-start gap-3 text-left">
              <div>
                <h3 className="font-heading text-base md:text-lg text-slate-800">{member.name}</h3>
                <span className="font-body text-[10px] text-pink-500 font-bold uppercase tracking-wide">
                  {member.role}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-heading text-[10px] text-slate-400 font-bold flex items-center gap-1.5 uppercase">
                  <FaGraduationCap /> Degrees & Skills:
                </span>
                <p className="font-body text-xs text-slate-600 font-bold">
                  {member.qualification} | {member.subject}
                </p>
              </div>

              <p className="font-body text-xs text-slate-500 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Quick Links */}
              {member.socialLinks && (
                <div className="flex items-center gap-3.5 mt-4 pt-3 border-t border-dashed border-slate-100 w-full">
                  {member.socialLinks.facebook && (
                    <a href={member.socialLinks.facebook} className="text-slate-400 hover:text-sky-500 text-base transition-colors">
                      <FaFacebook />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a href={member.socialLinks.instagram} className="text-slate-400 hover:text-pink-500 text-base transition-colors">
                      <FaInstagram />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-slate-400 hover:text-sky-600 text-base transition-colors">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
