import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaEye, FaAward, FaUserFriends, FaRegLightbulb } from 'react-icons/fa';

export const About = () => {
  const values = [
    { icon: <FaHeart className="text-amber-600" />, title: "Experiential Growth", desc: "Our methodology centers on cognitive discovery, utilizing tactile materials and sensory labs over rote worksheets." },
    { icon: <FaEye className="text-amber-600" />, title: "Institutional Safety", desc: "Rigorous vetting systems, background checks, continuous CCTV, and female nurse supervision on campus." },
    { icon: <FaUserFriends className="text-amber-600" />, title: "Collaborative Values", desc: "Nurturing early social sharing, respect for peer dynamics, emotional safety, and group coordination." },
    { icon: <FaRegLightbulb className="text-amber-600" />, title: "Scientific Inquiry", desc: "Encouraging early questioning patterns, observation habits, and guided botanical/gardening logs." }
  ];

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 text-left">
      {/* Intro section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="font-heading text-[10px] text-amber-600 font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded w-max">
            Overview
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-slate-900 leading-tight">
            Nurturing Young Minds for <span className="text-amber-600">Educational Legacy</span>
          </h1>
          <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
            Established in 2010 in Noida, Illusion Play School is Noida's premier preschool offering expert daycare, innovative curriculum & holistic development programs. We blend Montessori philosophies with modern early-years frameworks to foster high cognitive performance, fluent speech, and spatial logical skills.
          </p>
          <p className="font-body text-xs md:text-sm text-slate-500 leading-relaxed">
            Our campus serves as a second home where intellectual curiosity is paired with security check coordinates. We prepare children to transit smoothly into leading international schools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft h-[350px]"
        >
          <img
            src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&auto=format&fit=crop"
            alt="Academy Classroom"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Vision & Values */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center flex flex-col items-center gap-10">
        <div className="max-w-xl flex flex-col gap-3">
          <h2 className="font-heading text-2xl md:text-3xl text-slate-900">Foundational Pillars</h2>
          <p className="font-body text-xs text-slate-500">The guidelines governing our early development parameters and faculty training.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft flex flex-col gap-3">
              <span className="text-3xl">{v.icon}</span>
              <h4 className="font-heading text-base text-slate-900">{v.title}</h4>
              <p className="font-body text-xs text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assembly details */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft h-[350px] lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&auto=format&fit=crop"
            alt="Assembly session"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-heading text-[10px] text-amber-600 font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded w-max">
            Daily Assembly Routine
          </span>
          <h3 className="font-heading text-2xl md:text-3xl text-slate-900">
            Structured Morning Circle Routine
          </h3>
          <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
            Morning circles establish routine confidence. We bypass static assemblies, opting for a highly interactive group structure:
          </p>
          <ul className="font-body text-xs md:text-sm text-slate-500 flex flex-col gap-3 pl-5 list-disc">
            <li><strong>Linguistic Recitation:</strong> Structured phonics singing and vocabulary drills under the coordinator.</li>
            <li><strong>Somatic Coordination:</strong> 15 minutes of light motor stretches to align focus.</li>
            <li><strong>Habit Integration:</strong> Discussion of hygiene habits (disposal, washing, speech greetings) led by our guide.</li>
            <li><strong>Showcase Circle:</strong> Individual presentation by a child to foster speech capabilities.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
