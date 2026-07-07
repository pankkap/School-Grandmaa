import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaWater, FaTree, FaShieldAlt, FaBusAlt } from 'react-icons/fa';

export const Facilities = () => {
  const facilityItems = [
    {
      title: "Smart Colorful Classrooms",
      desc: "Fully air-conditioned spaces with child-safe round edge furniture, digital learning smart screens, and rich sensory toy shelves.",
      icon: <FaGraduationCap className="text-pink-500" />,
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&auto=format&fit=crop"
    },
    {
      title: "Monsoon Splash Pool",
      desc: "A shallow, hygienic filtration splash pool for water play, bubble blowing activities, and summer cooling fun.",
      icon: <FaWater className="text-sky-500" />,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop"
    },
    {
      title: "Lush Playpark & Sandbox",
      desc: "Equipped with shock-absorbent turf mats, slides, sensory sand pit pools, swings, and gardening patches for exploration.",
      icon: <FaTree className="text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop"
    },
    {
      title: "Secure Transport Services",
      desc: "GPS enabled school buses equipped with speed locks, female bus monitors, and real-time pickup/drop coordinates.",
      icon: <FaBusAlt className="text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-emerald-500 font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
          CAMPUS TOUR
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Our Premium Campus Facilities
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Constructed keeping child ergonomics, ultimate health hygiene, and security in mind.
        </p>
      </div>

      {/* Facilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {facilityItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border-2 border-slate-50 hover:border-sky-300 transition-colors flex flex-col"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="p-6 flex flex-col items-start gap-3 text-left">
              <span className="bg-sky-50 p-3.5 rounded-full text-2xl shrink-0 mt-[-45px] shadow border-2 border-white bg-white">
                {item.icon}
              </span>
              <h3 className="font-heading text-lg text-slate-800 mt-2">{item.title}</h3>
              <p className="font-body text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
