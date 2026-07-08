import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const saregamaCards = [
    {
      title: "Emotional Well Being of the Child",
      img: "https://rhythmplayschool.com/assets/images/about/Emotional.png"
    },
    {
      title: "Physical Well Being of the Child",
      img: "https://rhythmplayschool.com/assets/images/about/Physical-1.png"
    },
    {
      title: "Mental Well Being of the Child",
      img: "https://rhythmplayschool.com/assets/images/about/Mental.png"
    },
    {
      title: "Moral Well Being of the Child",
      img: "https://rhythmplayschool.com/assets/images/about/Take-lesson.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      {/* 1. Banner Area */}
      <div className="about-banner-area">
        <div className="about-banner-overlay">
          <motion.h1 
            className="about-banner-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* 2. Our Philosophy */}
      <section className="about-section max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="about-grid-row">
          <motion.div 
            className="about-col-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://rhythmplayschool.com/assets/images/about/Our%20Philosophy.png"
              alt="Our Philosophy - Grand Maa's Pre School"
              className="about-img-circular"
            />
          </motion.div>
          <motion.div 
            className="about-col-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold">Our Philosophy</h2>
            <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '2px' }}></div>
            
            <p className="font-body text-slate-700 italic border-l-4 border-amber-500 pl-4 py-2 my-2 bg-amber-50/50 rounded-r-lg" style={{ fontSize: '14px', lineHeight: '1.7' }}>
              "Let us liberate ourselves from any form of control. Let us focus at the inner drum, where the Rhythm aligns with that of our heart. The measure of responsibility, equals to the need for evolution. Just listen, the inner child, let it whisper in your ear" - Grigoris Deoudis
            </p>
            
            <p className="font-body text-slate-600 text-sm leading-relaxed">
              At Grand Maa's Pre School, we parent our kids to enjoy themselves and be themselves. We believe in providing a home away from home surroundings to our children so that they grow in a free environment, learn to express themselves, and find their unique talent in a warm, conducive, healthy, and natural environment. We also recognize the individuality of each child and so, we encourage our children to discover their hobbies, passion, and be nurtured into a confident and happy child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section className="about-section about-section-gray w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="about-grid-row">
            <motion.div 
              className="about-col-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold">Our Approach</h2>
              <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '2px' }}></div>
              
              <p className="font-body text-slate-600 text-sm leading-relaxed">
                Our pedagogy is a blend of Montessori and Playway methods, ensuring a holistic and engaging learning experience for young minds. We recognize that early education plays a pivotal role in shaping a child's cognitive, social, and emotional growth. During the first six years, brain development is at its peak, making it essential to provide a nurturing and stimulating environment. Our methodology integrates diverse learning modules, including social interaction, linguistic development, play-based learning, logical reasoning, problem-solving, fine and gross motor skills, and behavioral development. This comprehensive approach fosters creativity, curiosity, and a lifelong love for learning.
              </p>
              <p className="font-body text-slate-600 text-sm leading-relaxed">
                Additionally, we emphasize hands-on activities, sensory exploration, and experiential learning to develop critical thinking, confidence, and independence, preparing children for future academic and social success. Our curriculum is designed to cater to individual learning styles, ensuring personalized attention and engagement. Through storytelling, music, art, and role-playing, we make learning a joyful experience while enhancing memory retention and communication skills. We also incorporate outdoor activities, collaborative projects, and real-world experiences to instill teamwork, resilience, and adaptability in young learners, setting a strong foundation for lifelong success.
              </p>
            </motion.div>
            <motion.div 
              className="about-col-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://rhythmplayschool.com/assets/images/about/Our%20apprach.jpg"
                alt="Our Approach - Grand Maa's Pre School"
                className="about-img-design"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Discipline */}
      <section className="about-section max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="about-grid-row">
          <motion.div 
            className="about-col-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://rhythmplayschool.com/assets/images/about/descipline.jpg"
              alt="Discipline - Grand Maa's Pre School"
              className="about-img-circular"
            />
          </motion.div>
          <motion.div 
            className="about-col-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold">Discipline</h2>
            <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '2px' }}></div>
            
            <p className="font-body text-slate-600 text-sm leading-relaxed">
              Good discipline is more than laying down the law. It is liking children and letting them see that they are liked. It is caring enough about them to provide good, clear rules for their protection and well-being. And since our children mimic us, we create a disciplined and well organized environment for them. We believe that each child has an individual spirit & potential. Classmates are never compared with each other to praise one at the cost of denigrating the other. Spiritual development is as important as learning the three R's. Parental involvement is essential. No wonder, our children leave smiling when they graduate to bigger schools.
            </p>
            <p className="font-body text-slate-600 text-sm leading-relaxed">
              Our primary goal is to surround all children with love and warmth where they feel school is an extension of their home. We believe in the fact that children are like young plants that need nurturing and guidance, encouraging us to provide an environment that is developmentally-appropriate and responsive to the needs of each child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Basic Notes of Grand Maa */}
      <section className="about-section about-section-gray w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="about-grid-row">
            <motion.div 
              className="about-col-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold">Basic Notes of Grand Maa</h2>
              <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '2px' }}></div>
              
              <p className="font-body text-slate-600 text-sm leading-relaxed">
                <strong>Love</strong> – Accept the children the way we accept trees—with gratitude, because they are a blessing—but do not have expectations or desires. You don't expect trees to change, you love them as they are! Give kids atmosphere and blanket of love, and see them blossom!
              </p>
              <p className="font-body text-slate-600 text-sm leading-relaxed">
                <strong>Embrace your uniqueness</strong> - We tell our kids "You are a marvel! You are unique. In all the years that have passed, there has never been another child like you. You may become a Shakespeare, a Michelangelo, a Beethoven. You have the infinite capacity for anything". Kids choose their activities according to their interest so that they can venture out on an unguided journey of discovering themselves!
              </p>
            </motion.div>
            <motion.div 
              className="about-col-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://rhythmplayschool.com/assets/images/about/saregama.jpg"
                alt="Basic Notes - Grand Maa's Pre School"
                className="about-img-design"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Sa Re Ga Ma of Grand Maa */}
      <section className="about-section max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-slate-900 font-bold mb-2">Sa Re Ga Ma of Grand Maa</h2>
        <div style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', margin: '0 auto 48px auto' }}></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {saregamaCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="about-box-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <img
                src={card.img}
                alt={card.title}
              />
              <h5 className="font-heading text-base font-bold text-slate-800">{card.title}</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Admissions Form */}
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
