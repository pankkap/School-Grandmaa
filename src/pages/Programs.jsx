import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaClock, FaChild, FaBookOpen } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

export const Programs = () => {
  const { programId } = useParams();

  // All 7 programs mapped
  const programsData = {
    'daycare': {
      title: 'Daycare',
      ageGroup: '6 Months - 9 Years',
      duration: 'Full Day / Flexible',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/Day-care.jpg',
      desc: 'A safe, nurturing space where children grow and explore. With sensory play, early learning, and social interactions, we foster development and confidence.',
      objectives: 'Encourage visual-somatic coordination, sensory vocabulary growth, and stable sleep/meal habits.',
      activities: 'Nap loops, organic fresh purees, crawling mats exploration, voice tracking play.'
    },
    'playgroup': {
      title: 'Play Group',
      ageGroup: '2.3 - 3.4 Years',
      duration: '3.5 Hours/Day',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/Playgroup.jpg',
      desc: 'At Grand Maa\'s Pre School, our Play Group program is designed to ignite curiosity and creativity in children aged 2.3 to 3.4 years. Through a blend of structured play, music, art, and guided activities, we encourage exploration, social interaction, and self-expression. Our nurturing environment helps children build confidence, develop early skills, and foster a love for learning.',
      objectives: 'Fostering peer sharing habits, early verbal phrasal structures, tactile play methods, and shape matching.',
      activities: 'Sand turf molds, building block structures, animal sound matching, coloring labs.'
    },
    'pre-nursery': {
      title: 'Pre-Nursery',
      ageGroup: '2.3 - 3.4 Years',
      duration: '3.5 Hours/Day',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/pre-nursery.jpg',
      desc: 'With hands-on activities and storytelling, children develop communication and social skills, preparing them for structured learning in a fun setting. We focus on active cognitive milestones and phonetics.',
      objectives: 'Building visual word association cards, phonics recitation, crayon coordination, and fine motor tasks.',
      activities: 'Clay manipulation, interactive story reading loops, block stacking challenges.'
    },
    'nursery': {
      title: 'Nursery',
      ageGroup: '3.5 Years onwards',
      duration: '4 Hours/Day',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/Nursery.jpg',
      desc: 'This program builds strong language and cognitive skills. Interactive storytelling, structured play, and creative exercises make learning exciting, preparing them for kindergarten levels.',
      objectives: 'Introduction to primary pre-writing patterns, counting integers up to 20, phonetic alphabet blending.',
      activities: 'Alphabet tracing logs, botanical leaf prints, safety routines drills, nursery rhymes recitations.'
    },
    'kindergarten': {
      title: 'Kindergarten',
      ageGroup: '4.5 Years onwards',
      duration: '4.5 Hours/Day',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/kg.jpg',
      desc: 'Designed for school readiness, this program develops numeracy, literacy, and problem-solving skills through engaging lessons, games, and exploration. Smooth transition to primary boards.',
      objectives: 'Fluent elementary sentence reading, adding simple numbers, primary science logs, creative drama coordination.',
      activities: 'Role play scenarios, basic word math worksheets, computer lab introduction, team puzzles.'
    },
    'toddler': {
      title: 'Toddler Program',
      ageGroup: '10 Months - 1.5 Years',
      duration: 'Flexible / Hourly',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/Toodler-programm.jpg',
      desc: 'Focusing on sensory play and motor development, our toddler program helps young minds build confidence and early social skills in a fun environment under close nanny care.',
      objectives: 'Visual coordination, basic muscle crawling exercises, musical pattern responses, tactile object grabs.',
      activities: 'Soft crawl tunnels, bubble chase games, rattle shaking rhythm circles, texture touch boards.'
    },
    'teachers-training': {
      title: 'Teachers Training Program',
      ageGroup: '18+ Years',
      duration: '1 Year Certification',
      image: 'https://rhythmplayschool.com/assets/images/our%20learning%20programs/pre-nursery.jpg', // Fallback
      desc: 'Professional certification course in Nursery Teacher Training (NTT) and early childhood methodologies, offering placement logs and hands-on internship rounds at Grand Maa\'s.',
      objectives: 'Early education frameworks, children psychology concepts, lesson plan structuring, parent consulting methods.',
      activities: 'Seminar presentations, play lab observations, nursery mock sessions, educational material audits.'
    }
  };

  // Get active program, fallback to daycare
  const activeKey = programId && programsData[programId.toLowerCase()] ? programId.toLowerCase() : 'daycare';
  const activeProg = programsData[activeKey];

  // List of other programs for the slider
  const otherPrograms = Object.keys(programsData).map(key => ({
    id: key,
    ...programsData[key]
  }));

  // Force scroll to top on program selection change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      {/* 1. Dynamic Banner Area */}
      <div className="about-banner-area">
        <div className="about-banner-overlay">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={activeKey}
              className="about-banner-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {activeProg.title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Program Details Section */}
      <section className="about-section max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="about-grid-row">
          {/* Left Column: Image with scale animation */}
          <motion.div 
            key={`${activeKey}-img`}
            className="about-col-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={activeProg.image}
              alt={activeProg.title}
              className="about-img-design"
              style={{ maxHeight: '340px', width: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right Column: Copy text with slide-in animation */}
          <motion.div 
            key={`${activeKey}-text`}
            className="about-col-8"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold">{activeProg.title}</h2>
            <h5 className="font-heading text-sm text-amber-600 font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
              <FaChild /> {activeProg.ageGroup} | <FaClock /> {activeProg.duration}
            </h5>
            <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginBottom: '16px' }}></div>
            
            <p className="font-body text-slate-600 text-sm leading-relaxed mb-6">
              {activeProg.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="font-heading text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
                  <FaBookOpen className="text-amber-500" /> Syllabus Objectives
                </span>
                <p className="font-body text-xs text-slate-500 leading-relaxed">
                  {activeProg.objectives}
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="font-heading text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
                  <FaBookOpen className="text-amber-500" /> Typical Play Labs
                </span>
                <p className="font-body text-xs text-slate-500 leading-relaxed italic">
                  {activeProg.activities}
                </p>
              </div>
            </div>

            <Link 
              to="/admissions"
              className="bg-[#f84554] text-white font-bold font-heading text-xs px-6 py-3 rounded-xl hover:bg-[#e13a48] transition-colors w-max no-underline block text-center"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Slider/Carousel Section of Learning Programs */}
      <section className="about-section about-section-gray w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold mb-2">Our Learning Programs</h2>
          <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', margin: '0 auto 40px auto' }}></div>

          <div className="relative w-full max-w-5xl mx-auto px-10">
            {/* Custom Navigation Arrows */}
            <button
              className="prog-prev-btn"
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#21409b',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                boxShadow: '0 4px 10px rgba(33, 64, 155, 0.3)'
              }}
            >
              <FaChevronLeft />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.prog-prev-btn',
                nextEl: '.prog-next-btn'
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false
              }}
              loop={true}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="w-full"
            >
              {otherPrograms.map((prog) => (
                <SwiperSlide key={prog.id}>
                  <div 
                    className="about-box-card flex flex-col justify-between h-[380px] text-center"
                    style={{ padding: '20px' }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-slate-100 shadow-sm flex items-center justify-center bg-slate-50">
                        <img 
                          src={prog.image} 
                          alt={prog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-heading text-base font-bold text-slate-800 mb-0.5">{prog.title}</h4>
                      <span className="font-heading text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
                        {prog.ageGroup}
                      </span>
                      <p className="font-body text-slate-500 text-xs leading-relaxed line-clamp-4">
                        {prog.desc}
                      </p>
                    </div>

                    <Link 
                      to={`/programs/${prog.id}`}
                      className="text-amber-600 hover:text-amber-700 font-heading text-xs font-bold uppercase tracking-wider no-underline mt-3 flex items-center justify-center gap-1"
                    >
                      Read More <FaChevronRight style={{ fontSize: '8px' }} />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="prog-next-btn"
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#21409b',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                boxShadow: '0 4px 10px rgba(33, 64, 155, 0.3)'
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Admissions Form */}
      <section className="py-20 bg-[#fffbeb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h3 className="font-heading text-lg md:text-2xl text-slate-800">Admission Open for 2026-27</h3>
          <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '32px' }}></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left w-full">
            {/* Left Column: Form Card */}
            <motion.div 
              className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-soft w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your enrollment application has been submitted successfully.");
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Parent Name *</label>
                    <input required type="text" placeholder="Parent Name" className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Email Address *</label>
                    <input required type="email" placeholder="Email Address" className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Child Name (Optional)</label>
                    <input type="text" placeholder="Child Name" className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Phone Number *</label>
                    <input required type="tel" placeholder="Phone Number" className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Relation to Child *</label>
                    <select required className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white">
                      <option value="">Select Relation</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-600 font-heading">Program *</label>
                    <select required className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white">
                      <option value="">Select Program</option>
                      <option value="Daycare">Daycare</option>
                      <option value="Playgroup">Playgroup</option>
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="Toddler Program">Toddler Program</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-600 font-heading">Message (Optional)</label>
                  <textarea placeholder="Your Message" rows="3" className="p-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-[#f84554] text-white font-bold font-heading text-xs py-3 rounded-xl hover:bg-[#e13a48] transition-colors mt-2"
                >
                  Enroll Now
                </button>
              </form>
            </motion.div>

            {/* Right Column: Building Image */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/building.png"
                alt="Grand Maa's Pre School Playzone Building"
                className="w-full rounded-3xl shadow-soft object-cover"
                style={{ borderRadius: '24px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
