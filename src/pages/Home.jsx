import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaGamepad, FaAppleAlt, FaShieldAlt, FaHeart, FaUserMd, FaBus, FaUserCheck, FaStar } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';
import { FloatingClouds } from '../components/animations/FloatingElements';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Home = () => {
  const {
    programs,
    faq,
    homepageSettings
  } = useCMS();

  const kidsPrograms = programs ? programs.filter(p => p.id !== 'p-7') : [];
  const { heroSlides } = homepageSettings;

  // Hero Slider index
  const [heroIndex, setHeroIndex] = useState(0);

  // Features Slider (Modern Daycare, Educators, Foundational)
  const [featureIndex, setFeatureIndex] = useState(0);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides]);

  const nextSlide = () => setHeroIndex(prev => (prev + 1) % heroSlides.length);
  const prevSlide = () => setHeroIndex(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  const featureItems = [
    {
      title: "Modern Daycare Solutions",
      desc: "At Grand Maa's Pre School, we believe that a high-quality daycare program should offer a well-structured curriculum to engage children meaningfully. Our daycare environment encourages little ones to explore, interact with peers, and discover their interests. This fosters emotional intelligence, independence, and self-esteem, helping children grow into confident individuals.",
      image: "https://rhythmplayschool.com/assets/images/about/modern%20daycare.png"
    },
    {
      title: "Expert Educators",
      desc: "Grand Maa's Pre School is proud to have a team of trained and experienced facilitators who create a nurturing environment for children. Our educators ensure that the right messages are delivered in a structured, child-centric setting. This approach helps children develop holistically, laying a strong foundation for their future learning and growth.",
      image: "https://rhythmplayschool.com/assets/images/about/expert%20facilitator.png"
    },
    {
      title: "Foundational Learning",
      desc: "At Grand Maa's Pre School, we focus on early childhood education that ensures consistent learning through a well-designed curriculum. Our programs include tools for communication and collaboration, empowering parents to stay involved in their child's educational journey. This holistic approach helps children thrive academically and socially.",
      image: "https://rhythmplayschool.com/assets/images/about/learning.png"
    }
  ];

  const facilityItems = [
    {
      title: "Child Friendly Infrastructure",
      desc: "Grand Maa's Pre School's child-friendly infrastructure prioritizes holistic development, fostering a love for learning and a sense of belonging in every child who walks through its doors.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
      bg: '#ffebee'
    },
    {
      title: "Play Zone",
      desc: "Our Play Zones are equipped with age-appropriate toys, games and learning materials that encourage sensory exploration, problem-solving and fine motor skills development.",
      image: "https://images.unsplash.com/photo-1536437075651-01d675529a3a?w=600&auto=format&fit=crop&q=80",
      bg: '#f3eafb'
    },
    {
      title: "Water Play Zone",
      desc: "The Water Play Zone at Grand Maa's Pre School is not just a splash of fun; it's an immersive learning experience that fosters exploration, creativity and sensory development in young minds.",
      image: "https://images.unsplash.com/photo-1601946426009-b685c1b0b4fc?w=600&auto=format&fit=crop&q=80",
      bg: '#fff3e0'
    },
    {
      title: "Focus Group Program",
      desc: "Focus Group Program at Grand Maa's Pre School sets the stage for lifelong learning, curiosity, and achievement. It's not just education; it's empowerment tailored to every child's unique journey.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
      bg: '#e0f7fa'
    }
  ];

  const activities = [
    { title: "Learning With Fun", desc: "Interactive learning through fun activities for toddlers", icon: "/icon_learning.gif" },
    { title: "Healthy Food", desc: "100% organic, fresh and nutritious food provided to kids", icon: "/icon_food.gif" },
    { title: "Safety & Security", desc: "Live CCTV Camera Footage for safety and supervision", icon: "/icon_safety.gif" },
    { title: "Love & Care", desc: "Kids get their daily dose of love and care", icon: "/icon_love.gif" },
    { title: "Doctor on Call", desc: "Experienced Child Care Specialists are just a call away", icon: "/icon_doctor.gif" },
    { title: "Bus Service", desc: "Cab and bus service is also provided with reliable staff", icon: "/icon_van.gif" },
    { title: "Personal Care", desc: "World-class student-teacher ratio for perfect learning", icon: "/icon_daycare.gif" },
    { title: "Great Reviews", desc: "It is one of the most rated play schools in Noida", icon: "/icon_rate.gif" }
  ];

  return (
    <div className="relative w-full" style={{ width: '100%' }}>
      {/* A. HERO SLIDER (Direct HTML & local images, fully visible) */}
      <section className="about-section-two" style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden', backgroundColor: '#21409b' }}>
        <FloatingClouds />

        {heroSlides.map((slide, idx) => {
          const isFirstSlide = idx === 0;
          const bgImage = isFirstSlide ? '/slider_boy.png' : '/slider_girl.png';
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: idx === heroIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: idx === heroIndex ? 10 : 0
              }}
            >
              {/* Banner Image */}
              <img
                src={bgImage}
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: isFirstSlide ? 'center' : 'center top' }}
              />

              {/* Soft Left Fading Vignette Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '55%',
                  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0) 100%)',
                  zIndex: 15,
                  pointerEvents: 'none'
                }}
              ></div>

              {/* Overlay Content Panel (matching mockup layout, borderless & background-less) */}
              <div 
                style={{ 
                  position: 'absolute',
                  left: '8%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  maxWidth: '440px',
                  width: '90%',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 20
                }}
              >
                {isFirstSlide ? (
                  <>
                    <h2 className="font-heading" style={{ fontSize: '32px', fontWeight: 'bold', color: '#f84554', margin: 0, lineHeight: 1.2 }}>
                      Fun Learning <br/>
                      <span style={{ backgroundColor: '#f84554', color: '#fef08a', padding: '2px 8px', borderRadius: '6px', display: 'inline-block', marginTop: '4px' }}>Every Day</span>
                    </h2>
                    <div style={{ backgroundColor: '#f59e0b', height: '4px', width: '100px', margin: '4px 0 8px 0', borderRadius: '2px' }}></div>
                    <p className="font-heading" style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
                      Enroll Now! With the Best Daycare in Noida
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-heading" style={{ fontSize: '32px', fontWeight: 'bold', color: '#f84554', margin: 0, lineHeight: 1.2 }}>
                      Admission Open <br/>
                      <span style={{ backgroundColor: '#f84554', color: '#fef08a', padding: '2px 8px', borderRadius: '6px', display: 'inline-block', marginTop: '4px' }}>for AY 2026-27</span>
                    </h2>
                    <div style={{ backgroundColor: '#f59e0b', height: '4px', width: '100px', margin: '4px 0 8px 0', borderRadius: '2px' }}></div>
                    <p className="font-heading" style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
                      Enroll Now! With the Best Preschool in Noida
                    </p>
                  </>
                )}
                
                <Link
                  to="/admissions"
                  className="no-underline"
                  style={{
                    backgroundColor: '#f84554',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    padding: '10px 26px',
                    borderRadius: '20px',
                    width: 'fit-content',
                    marginTop: '12px',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(248, 69, 84, 0.3)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          );
        })}

        {/* Hero Controls (Exactly Styled) */}
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '96%', left: '2%', right: '2%', display: 'flex', justifyContent: 'space-between', zIndex: 30, pointerEvents: 'none' }}>
          <div
            className="prevBannerCaro"
            onClick={prevSlide}
            style={{
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #f84554',
              pointerEvents: 'auto',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
          >
            <FaChevronLeft style={{ color: '#f84554', fontSize: '16px' }} />
          </div>
          <div
            className="nextBannerCaro"
            onClick={nextSlide}
            style={{
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #f84554',
              pointerEvents: 'auto',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
          >
            <FaChevronRight style={{ color: '#f84554', fontSize: '16px' }} />
          </div>
        </div>
      </section>

      {/* B. MAIN SECTION HEADING */}
      <section className="py-14 px-6 md:px-12 text-center max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="font-heading text-xl md:text-3xl text-slate-800 uppercase tracking-wide">
          Grand Maa's Pre School - Best Playschool & Daycare in Noida
        </h1>
        <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px' }}></div>
      </section>

      {/* C. FEATURES SLIDER SECTION (CAROUSEL WITH SWIPER) */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div style={{ position: 'relative', width: '100%', padding: '0 40px' }}>
          
          {/* Left Arrow Button */}
          <button
            className="feat-prev-btn"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 0,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'opacity 0.2s',
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
          >
            <FaChevronLeft style={{ fontSize: '14px' }} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.feat-next-btn',
              prevEl: '.feat-prev-btn',
            }}
            style={{ width: '100%' }}
          >
            {featureItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 992 ? 'column' : 'row',
                    gap: '40px',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                    textAlign: 'left'
                  }}
                  className="feature-slide-card"
                >
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h2 className="font-heading" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
                      {item.title}
                    </h2>
                    <div className="underline" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', margin: 0 }}></div>
                    <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed" style={{ margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ flex: 1, width: '100%', height: '280px', borderRadius: '16px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow Button */}
          <button
            className="feat-next-btn"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 0,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'opacity 0.2s',
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
          >
            <FaChevronRight style={{ fontSize: '14px' }} />
          </button>

        </div>
      </section>

      {/* D. ABOUT BOX SECTION */}
      <section className="py-16 bg-[#FDFFF9] border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="about-box-card">
            <div className="about-box-grid">
              <div className="about-box-image-col">
                <img
                  src="https://rhythmplayschool.com/assets/images/about/about%201.png"
                  alt="About us"
                />
              </div>
              <div className="about-box-text-col">
                <h3 className="font-heading text-lg md:text-2xl" style={{ color: '#1e3a8a', fontWeight: 'bold' }}>About Grand Maa's Pre School</h3>
                <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
                  Grand Maa's, a renowned play school in Noida Sec. 51, offers expert daycare with experienced staff. We prioritize early education, making us a top nursery and daycare choice. Our engaging, fun-based teaching approach nurtures skills and prepares kids for learning. If you seek quality education with interactive activities that enhance development, Grand Maa's Preschool in Noida is your ideal choice.
                </p>
                <h4 className="font-heading text-sm text-slate-900 mt-2" style={{ fontWeight: 'bold', color: '#1e293b' }}>What do we want to be?</h4>
                <p className="font-body text-xs text-slate-600 leading-relaxed" style={{ margin: 0 }}>
                  An enriching learning environment where children, parents, and educators come together to nurture growth, curiosity, and independence.
                </p>
                <div style={{ marginTop: '8px' }}>
                  <Link
                    to="/about"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none',
                      color: '#1e293b',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      fontFamily: 'var(--font-heading)'
                    }}
                    className="hover:underline"
                  >
                    read more &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. OUR LEARNING PROGRAMS (SLIDER CAROUSEL WITH SWIPER) */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center relative">
        <h4 className="font-heading text-lg md:text-2xl text-slate-800">Our Learning Programs</h4>
        <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '32px' }}></div>

        {/* Carousel Container */}
        <div style={{ position: 'relative', width: '100%', padding: '0 40px' }}>
          
          {/* Left Arrow Button */}
          <button
            className="prog-prev-btn"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 0,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'opacity 0.2s',
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
          >
            <FaChevronLeft style={{ fontSize: '14px' }} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.prog-next-btn',
              prevEl: '.prog-prev-btn',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ width: '100%', padding: '4px 0' }}
          >
            {kidsPrograms.map((prog) => {
              const imageUrl = prog.id === 'p-1' ? '/program_daycare.png' :
                               prog.id === 'p-2' ? '/program_playgroup.png' :
                               prog.id === 'p-3' ? '/program_prenursery.png' :
                               prog.id === 'p-4' ? '/program_nursery.png' :
                               prog.id === 'p-5' ? '/program_kindergarten.png' :
                               '/program_toddler.png';

              return (
                <SwiperSlide key={prog.id} style={{ height: 'auto', display: 'flex' }}>
                  {/* Dashed Program Card */}
                  <div
                    style={{
                      border: '2px dashed #f84554',
                      borderRadius: '16px',
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      textAlign: 'left',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                      width: '100%'
                    }}
                  >
                    <div>
                      {/* Image Wrapper with orange border */}
                      <div
                        style={{
                          border: '3px solid #f59e0b',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          marginBottom: '20px',
                          aspectRatio: '1.5',
                          width: '100%'
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={prog.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>

                      <h4
                        className="font-heading"
                        style={{
                          textAlign: 'center',
                          fontSize: '18px',
                          color: '#1e3a8a',
                          marginBottom: '4px',
                          fontWeight: 'bold'
                        }}
                      >
                        {prog.title}
                      </h4>
                      
                      <h5
                        className="font-heading"
                        style={{
                          textAlign: 'center',
                          fontSize: '12px',
                          color: '#d97706',
                          marginBottom: '16px',
                          fontWeight: 'bold'
                        }}
                      >
                        {prog.ageGroup}
                      </h5>

                      <p
                        className="font-body"
                        style={{
                          fontSize: '12px',
                          color: '#475569',
                          lineHeight: '1.6',
                          height: '76px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          marginBottom: '16px'
                        }}
                      >
                        {prog.learningObjectives}
                      </p>
                    </div>

                    <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                      <Link
                        to="/programs"
                        style={{
                          textDecoration: 'none',
                          color: '#1e293b',
                          fontWeight: 'bold',
                          fontSize: '12px',
                          fontFamily: 'var(--font-heading)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                        className="hover:underline"
                      >
                        Read More &gt;
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Right Arrow Button */}
          <button
            className="prog-next-btn"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 0,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'opacity 0.2s',
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
          >
            <FaChevronRight style={{ fontSize: '14px' }} />
          </button>

        </div>
      </section>

      {/* F. ACTIVITIES GRID (COMPACT VECTOR TILES - DOWNSIZED) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h3 className="font-heading text-lg md:text-2xl text-slate-800">Join us in playing and learning together</h3>
          <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '16px' }}></div>
          <p className="font-body text-xs md:text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Grand Maa's Pre School is one of the best and largest pre-schools in Noida. Managed by IIM – IIFT Alumni, the playschool offers best in class education to kids and provide them classes for cultural and sports activities. Some of the things that makes Grand Maa's different from other playschools are – organic food, professional day care staff, well-trained and experienced teachers and highly secured and safe environment.
          </p>

          {/* 4x2 responsive card grid */}
          <div className="activities-grid">
            {activities.map((item, index) => (
              <div key={index} className="activity-card">
                <img src={item.icon} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. WHY CHOOSE US SIDE-BY-SIDE */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="why-choose-grid">
          <div className="why-choose-text-col">
            <h4 className="font-heading text-lg md:text-2xl" style={{ color: '#1e3a8a', fontWeight: 'bold', margin: 0 }}>Why Choose Us?</h4>
            <div className="underline" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '16px' }}></div>
            
            <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
              At Grand Maa's Pre School & Day Care, we understand that early childhood is a crucial phase for cognitive, social, and emotional development. Our goal is to provide a nurturing and stimulating environment where children can explore, learn, and grow at their own pace. With a balanced approach to academics, creativity, and life skills, we ensure that every child receives a strong foundation for future success. Our thoughtfully designed programs cater to different age groups, allowing children to experience structured learning while enjoying the freedom to express themselves.
            </p>
            <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed">
              We believe in fostering a safe, inclusive, and engaging environment where children develop confidence, curiosity, and independence. Our team of qualified educators and caregivers ensures that each child receives personalized attention and care. Whether you are looking for a play school or a reliable day care, Grand Maa's Pre School is the perfect choice for parents who seek quality early education and holistic child development.
            </p>
          </div>
          <div className="why-choose-image-col">
            <img
              src="https://rhythmplayschool.com/assets/images/about/why%20choose%20us.png"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </section>

      {/* H. OUR FACILITIES GRID (SLIDER CAROUSEL WITH SWIPER) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h3 className="font-heading text-lg md:text-2xl text-slate-800">Our Facilities</h3>
          <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '32px' }}></div>

          {/* Carousel Container */}
          <div style={{ position: 'relative', width: '100%', padding: '0 40px' }}>
            
            {/* Left Arrow Button */}
            <button
              className="fac-prev-btn"
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'opacity 0.2s',
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <FaChevronLeft style={{ fontSize: '14px' }} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.fac-next-btn',
                prevEl: '.fac-prev-btn',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{ width: '100%', padding: '4px 0' }}
            >
              {facilityItems.map((fac, idx) => (
                <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex' }}>
                  {/* Styled Rounded Card */}
                  <div
                    style={{
                      borderRadius: '24px',
                      padding: '32px 24px',
                      backgroundColor: fac.bg,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      textAlign: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                      width: '100%'
                    }}
                  >
                    {/* Image Wrapper with orange border */}
                    <div
                      style={{
                        border: '3px solid #f59e0b',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        aspectRatio: '1.5',
                        width: '100%'
                      }}
                    >
                      <img
                        src={fac.image}
                        alt={fac.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    <h4
                      className="font-heading"
                      style={{
                        fontSize: '18px',
                        color: '#1e3a8a',
                        marginBottom: '12px',
                        fontWeight: 'bold'
                      }}
                    >
                      {fac.title}
                    </h4>

                    <p
                      className="font-body"
                      style={{
                        fontSize: '13px',
                        color: '#475569',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {fac.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Arrow Button */}
            <button
              className="fac-next-btn"
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'opacity 0.2s',
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <FaChevronRight style={{ fontSize: '14px' }} />
            </button>

          </div>
        </div>
      </section>

      {/* I. ADMISSION OPEN FORM SECTION */}
      <section className="py-20 bg-[#fffbeb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h3 className="font-heading text-lg md:text-2xl text-slate-800">Admission Open for 2026-27</h3>
          <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '32px' }}></div>

          <div 
            style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 992 ? 'column' : 'row', 
              gap: '40px', 
              alignItems: 'center', 
              width: '100%', 
              textAlign: 'left' 
            }}
          >
            {/* Left Column: Form Card */}
            <div 
              style={{ 
                flex: 1, 
                backgroundColor: '#ffffff', 
                padding: '32px', 
                borderRadius: '24px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                width: '100%'
              }}
            >
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your enrollment application has been submitted successfully.");
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{ display: 'flex', gap: '16px', flexDirection: window.innerWidth < 640 ? 'column' : 'row' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Parent Name *</label>
                    <input required type="text" placeholder="Parent Name" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Email Address *</label>
                    <input required type="email" placeholder="Email Address" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexDirection: window.innerWidth < 640 ? 'column' : 'row' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Child Name (Optional)</label>
                    <input type="text" placeholder="Child Name" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Phone Number *</label>
                    <input required type="tel" placeholder="Phone Number" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexDirection: window.innerWidth < 640 ? 'column' : 'row' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Relation to Child *</label>
                    <select required style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px', backgroundColor: '#fff' }}>
                      <option value="">Select Relation</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Program *</label>
                    <select required style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px', backgroundColor: '#fff' }}>
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', fontFamily: 'var(--font-heading)' }}>Message (Optional)</label>
                  <textarea placeholder="Your Message" rows="3" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px', resize: 'none' }}></textarea>
                </div>

                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#f84554',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 0,
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 4px 10px rgba(248, 69, 84, 0.25)',
                    textAlign: 'center'
                  }}
                >
                  Enrol Now
                </button>
              </form>
            </div>

            {/* Right Column: School Building Picture */}
            <div style={{ flex: 1, width: '100%', borderRadius: '24px', overflow: 'hidden', height: '340px' }}>
              <img 
                src="/building_new.png" 
                alt="School Building" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* J. WHAT OUR PARENTS SAY (TESTIMONIALS SLIDER) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h3 className="font-heading text-lg md:text-2xl text-slate-800">What Our Parents Say</h3>
          <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px', marginBottom: '32px' }}></div>

          <div style={{ position: 'relative', width: '100%', padding: '0 40px' }}>
            
            {/* Left Arrow Button */}
            <button
              className="test-prev-btn"
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'opacity 0.2s',
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <FaChevronLeft style={{ fontSize: '14px' }} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.test-next-btn',
                prevEl: '.test-prev-btn',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{ width: '100%', padding: '8px 0' }}
            >
              {[
                {
                  name: "Devyani singh",
                  role: "Parent",
                  comment: "All the teachers, principal & coordinators are so creative and talented. Whether celebrating Krishna Janmotsav, Christmas, Ram Janmotsav or organising other activities they enjoy doing what they do and kids love it. Best part is kids know the story behind every festival/celebration that is happening in the school. The amount of personal care and attention they give to each child is commendable. Highly recommended!",
                  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop"
                },
                {
                  name: "Deepak Kashyap",
                  role: "Parent",
                  comment: "Grand Maa's Pre School has helped me raise my both children Shaurya and Pihu. They are very happy to go to school every day. The teachers are really good and dedicated, I will always be grateful to this wonderful school.",
                  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop"
                },
                {
                  name: "Archit Goel",
                  role: "Archit Goel",
                  comment: "Totally satisfied with Grand Maa's and special thanks to Madhu Ma'am and Sakshi Ma'am along with all other teachers/staff for such an exceptional experience and for taking care of our son. Special highlight was the recent fancy dress show, it was a great moment for us to see our little ones on stage!",
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop"
                }
              ].map((t, idx) => (
                <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex' }}>
                  {/* Testimonial Card */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%',
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Avatar */}
                      <img 
                        src={t.avatar} 
                        alt={t.name}
                        style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '3px solid #f59e0b' }}
                      />
                      
                      {/* Comment */}
                      <p 
                        style={{ 
                          fontSize: '12.5px', 
                          color: '#475569', 
                          lineHeight: '1.6', 
                          fontStyle: 'italic', 
                          margin: '0 0 16px 0',
                          minHeight: '120px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        "{t.comment}"
                      </p>
                    </div>

                    <div>
                      {/* Star Rating */}
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', color: '#fbbf24', fontSize: '14px', marginBottom: '8px' }}>
                        {"★".repeat(5)}
                      </div>

                      {/* Parent Details */}
                      <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 2px 0' }}>{t.name}</h5>
                      <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>{t.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Arrow Button */}
            <button
              className="test-next-btn"
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 0,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'opacity 0.2s',
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <FaChevronRight style={{ fontSize: '14px' }} />
            </button>

          </div>
        </div>
      </section>

      {/* K. FREQUENTLY ASKED QUESTIONS + ACCORDION */}
      <section className="py-20" style={{ background: 'linear-gradient(0deg, #E5F0FF 0%, rgba(255, 255, 255, 0) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center flex flex-col items-center mb-10">
            <h1 className="font-heading text-xl md:text-3xl text-slate-900">Frequently Asked Questions</h1>
            <div className="underline mx-auto" style={{ backgroundColor: '#f59e0b', width: '60px', height: '3px', marginTop: '8px' }}></div>
          </div>

          <div className="faq-responsive-layout">
            <div className="faq-image-column flex justify-center">
              <div className="faq-thumbs">
                <img
                  src="/faq_new.png"
                  alt="Frequently Asked Questions - Grand Maa's Pre School"
                  className="rounded-2xl shadow-soft object-cover"
                  style={{ borderRadius: '24px', width: '100%' }}
                />
              </div>
            </div>
            <div className="faq-accordion-column flex flex-col gap-2">
              <h4 className="font-heading text-sm text-amber-600 uppercase tracking-widest font-bold mb-4">Empowering Young Minds Through Playful Learning</h4>
              <div className="flex flex-col gap-3">
                {[
                  {
                    question: "What age groups do you cater to at Grand Maa's Pre School?",
                    answer: "We offer programs for children aged 6 months to 9 years, including Toddler Programs, Playgroup, Pre-Nursery, Nursery, and Kindergarten."
                  },
                  {
                    question: "What are the daycare timings?",
                    answer: "Our daycare operates Monday to Friday from 8:30 AM to 7:00 PM and on Saturdays from 8:30 AM to 5:00 PM."
                  },
                  {
                    question: "How do you ensure the safety and security of children?",
                    answer: "We provide live CCTV camera access for parents, a highly secured environment, and professional daycare staff for constant supervision."
                  },
                  {
                    question: "What extracurricular activities do you offer?",
                    answer: "We provide Yoga, Music, Painting, Skating, Judo, Swimming, and Drama classes to enhance children's overall development."
                  },
                  {
                    question: "Do you offer meals for children?",
                    answer: "Yes, we provide fresh, organic, and nutritious meals to ensure a healthy diet for kids."
                  },
                  {
                    question: "How can I enroll my child at Grand Maa's Pre School?",
                    answer: "You can enroll your child by contacting us at +91-9899852000 or filling out the online admission form on our website."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`accordion-single ${activeFaq === idx ? 'active' : ''}`}
                  >
                    <h3 className="header-area">
                      <button
                        className="accordion-btn"
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      >
                        {item.question}
                        <span className="icon">+</span>
                      </button>
                    </h3>
                    <div
                      className="content-area"
                      style={{
                        display: activeFaq === idx ? 'block' : 'none',
                        opacity: activeFaq === idx ? 1 : 0
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
