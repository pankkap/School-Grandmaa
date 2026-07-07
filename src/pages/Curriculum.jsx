import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaHeartbeat, FaLanguage, FaCalculator, FaSmileWink } from 'react-icons/fa';

export const Curriculum = () => {
  const learningPillars = [
    { icon: <FaLanguage className="text-sky-500 text-3xl" />, title: "Phonics & Language", desc: "Sensory sound puzzles, letter-recognition stories, and action rhymes to develop reading fluency." },
    { icon: <FaCalculator className="text-yellow-500 text-3xl" />, title: "Practical Math & Numbers", desc: "Block count, shape sorting, size measurements, and simple patterns using tactile wooden toys." },
    { icon: <FaBookReader className="text-pink-500 text-3xl" />, title: "Cognitive Curiosity", desc: "Why does the rain fall? What sinks or floats? Simple sandbox science sessions to stimulate thinking." },
    { icon: <FaHeartbeat className="text-emerald-500 text-3xl" />, title: "Social-Emotional Maturity", desc: "Sharing toy blocks, identifying emotions, breathing games, and developing self-help habits." }
  ];

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Intro header */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          LEARNING PATHS
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Our Play-Based Curriculum Design
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Montessori-inspired methodologies structured around child growth milestones.
        </p>
      </div>

      {/* Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningPillars.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border-2 border-slate-50 shadow-soft flex gap-4 items-start hover:border-sky-300 transition-colors">
            <span className="bg-slate-50 p-4 rounded-2xl shrink-0">{p.icon}</span>
            <div className="flex flex-col gap-1.5 text-left">
              <h3 className="font-heading text-base text-slate-800">{p.title}</h3>
              <p className="font-body text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Play vs Study Section */}
      <section className="bg-emerald-50/50 p-8 md:p-12 rounded-2xl border-4 border-dashed border-emerald-200 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <span className="font-heading text-xs text-emerald-600 font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full w-max">
            THE METHODOLOGY
          </span>
          <h2 className="font-heading text-2xl md:text-3xl text-slate-800">
            Learning Through Play
          </h2>
          <p className="font-body text-sm text-slate-600 leading-relaxed text-left">
            Children are natural investigators. Rote memorization can suppress creativity; experiential play awakens it! Our teachers construct concepts using sensory triggers:
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-left">
              <FaSmileWink className="text-emerald-500 mt-1 shrink-0" />
              <p className="font-body text-xs text-slate-500"><strong>Tactile Science:</strong> Rather than reading about shapes, kids mold them from clay or trace them in sand boxes.</p>
            </div>
            <div className="flex gap-2 text-left">
              <FaSmileWink className="text-emerald-500 mt-1 shrink-0" />
              <p className="font-body text-xs text-slate-500"><strong>Story Integration:</strong> Basic vocabulary is taught using puppet plays, letting children dialogue as rabbits or bears.</p>
            </div>
            <div className="flex gap-2 text-left">
              <FaSmileWink className="text-emerald-500 mt-1 shrink-0" />
              <p className="font-body text-xs text-slate-500"><strong>Musical Math:</strong> Counting is connected to clapping beats and step jumps, making numbers highly interactive.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow h-80 border-4 border-emerald-200">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
            alt="Play Learning Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};
