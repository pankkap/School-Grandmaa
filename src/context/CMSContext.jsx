import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../sanity/client';

const CMSContext = createContext();

const INITIAL_MOCK_DATA = {
  programs: [
    {
      id: 'p-1',
      title: 'Daycare',
      ageGroup: '6 Months - 9 Years',
      duration: 'Full Day / Flexible',
      learningObjectives: 'A safe, nurturing space where children grow and explore. With sensory play, early learning, and social interactions, we foster development and confidence.',
      activities: 'Nap time, organic meals, custom sensory coordination play, safety monitoring loops.',
      image: '/indian_kids_classroom.png',
      category: 'Childcare'
    },
    {
      id: 'p-2',
      title: 'Play Group',
      ageGroup: '2.3 - 3.4 Years',
      duration: '3.5 Hours/Day',
      learningObjectives: 'A program that blends structured play, music, and art to spark curiosity. Through social interactions and guided activities, children explore, learn, and build confidence creatively.',
      activities: 'Sand play, finger painting, music & movement, dollhouse exploration, block stacking.',
      image: '/indian_kids_playground.png',
      category: 'Early Years'
    },
    {
      id: 'p-3',
      title: 'Pre-Nursery',
      ageGroup: '2.3 - 3.4 Years',
      duration: '3.5 Hours/Day',
      learningObjectives: 'With hands-on activities and storytelling, children develop communication and social skills, preparing them for structured learning in a fun setting.',
      activities: 'Story circles, vocabulary cards, block building, shape recognition labs.',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop',
      category: 'Early Years'
    },
    {
      id: 'p-4',
      title: 'Nursery',
      ageGroup: '3.5 Years onwards',
      duration: '4 Hours/Day',
      learningObjectives: 'This program builds strong language and cognitive skills. Interactive storytelling, structured play, and creative exercises make learning exciting.',
      activities: 'Phonetic matching, pre-writing sheets, numbers tracking, botanical walks.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop',
      category: 'Preparatory'
    },
    {
      id: 'p-5',
      title: 'Kindergarten (KG)',
      ageGroup: '4.5 Years onwards',
      duration: '4.5 Hours/Day',
      learningObjectives: 'Designed for school readiness, this program develops numeracy, literacy, and problem-solving skills through engaging lessons, games, and exploration.',
      activities: 'Reading comprehension, addition games, computer exploration, role play events.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop',
      category: 'Kindergarten'
    },
    {
      id: 'p-6',
      title: 'Toddler Program',
      ageGroup: '10 Months - 1.5 Years',
      duration: 'Flexible / Hourly',
      learningObjectives: 'Focusing on sensory play and motor development, our toddler program helps young minds build confidence and early social skills in a fun environment.',
      activities: 'Soft crawling tunnels, sensory mats, musical toys, visual exploration bars.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop',
      category: 'Toddlers'
    },
    {
      id: 'p-7',
      title: 'Teachers Training Program',
      ageGroup: '18+ Years',
      duration: '1 Year Certification',
      learningObjectives: 'Professional certification course in Nursery Teacher Training (NTT) and early childcare methodologies, offering placement logs.',
      activities: 'Pedagogy seminars, nursery curriculum building, interactive lab observation rounds.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop',
      category: 'Vocational'
    }
  ],
  notices: [
    {
      id: 'n-1',
      title: 'Illusion Admissions Open for Academic Year 2026-27!',
      content: 'We are happy to announce that registrations for Daycare, Play Group, Pre-Nursery, Nursery, and Kindergarten are now open. Limited seats are available to maintain an excellent student-to-teacher ratio. Collect prospectus from the school office in Sector 51, Noida.',
      date: '2026-07-05',
      category: 'Admissions',
      isPinned: true,
      expiryDate: '2026-08-31',
      attachment: 'Admissions_Open_2026.pdf'
    },
    {
      id: 'n-2',
      title: 'Noida Security CCTV Feed Live Updates',
      content: 'Dear Parents, our parent portal app now broadcasts live classroom and playarea security CCTV feeds. Please collect your individual login tokens from the Sector 51 office.',
      date: '2026-07-06',
      category: 'Security',
      isPinned: true,
      expiryDate: '2026-12-31',
      attachment: ''
    }
  ],
  events: [
    {
      id: 'e-1',
      title: 'Illusion Monsoon Splash Day 2026',
      description: 'A joyful day filled with splash pool activities, paper boat races, rain dance under the sprinklers, and healthy organic snacks.',
      date: '2026-07-10',
      time: '09:30 AM - 12:30 PM',
      location: 'Noida Sector 51 Playground',
      banner: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop',
      registrationLink: 'https://forms.gle/illusionsplash2026',
      countdownTarget: '2026-07-10T09:30:00'
    }
  ],
  gallery: [
    {
      id: 'g-1',
      title: 'Finger Painting Activity',
      description: 'Illusion children expressing their inner artists with safe organic paints.',
      url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
      category: 'Classroom',
      date: '2026-06-20'
    },
    {
      id: 'g-2',
      title: 'Outdoor Play Molds',
      description: 'Building castles together in our secure sandbox turf.',
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop',
      category: 'Playtime',
      date: '2026-06-25'
    }
  ],
  videos: [
    {
      id: 'v-1',
      title: 'Tour Illusion Play School Noida Campus',
      description: 'Walk through our safe, vibrant, and air-conditioned classrooms, clean play areas, splash pool, and dining hall in Noida Sector 51.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Campus Tour',
      date: '2026-05-15'
    }
  ],
  faculty: [
    {
      id: 'f-1',
      name: 'Mrs. Anjali Sharma',
      role: 'Principal',
      qualification: 'M.Ed in Child Psychology, B.Ed',
      experience: '15+ Years in Early Education',
      subject: 'Administration & Storytelling',
      bio: 'Mrs. Sharma leads the academic operations of Illusion, implementing active discovery and structured early years learning logs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop',
      socialLinks: { facebook: '#', instagram: '#', linkedin: '#' }
    }
  ],
  testimonials: [
    {
      id: 't-1',
      parentName: 'Rohan Malhotra',
      childName: 'Aarav (Play Group)',
      rating: 5,
      comment: 'Sending Aarav to Illusion Play School has been our best decision. Within three months, his vocabulary expanded, and he wakes up excited to go to school every morning! The safety standards are excellent.',
      parentPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop'
    }
  ],
  faq: [
    {
      question: 'What age groups do you cater to at Illusion Play School?',
      answer: 'We offer programs for children aged 6 months to 9 years, including Toddler Programs, Playgroup, Pre-Nursery, Nursery, and Kindergarten.'
    },
    {
      question: 'What are the daycare timings?',
      answer: 'Our daycare operates Monday to Friday from 8:30 AM to 7:00 PM and on Saturdays from 8:30 AM to 5:00 PM.'
    },
    {
      question: 'How do you ensure the safety and security of children?',
      answer: 'We provide live CCTV camera access for parents, a highly secured environment, and professional daycare staff for constant supervision.'
    }
  ],
  blogs: [
    {
      id: 'b-1',
      title: 'The Importance of Organic Food in Early Development',
      excerpt: 'Illusion Play School is proud to supply 100% organic, fresh, and nutritious meals to kids in our daycare program. Learn about the benefits.',
      content: 'At Illusion, child development is supported not just by books, but by clean, chemical-free fuel. We serve organic seasonal fruits, fresh purees, and clean cereals to promote strong growth, prevent digestive strain, and support early immune function.',
      date: '2026-06-15',
      author: 'Mrs. Anjali Sharma',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop'
    }
  ],
  downloads: [
    {
      id: 'd-1',
      title: 'Illusion School Prospectus 2026-27',
      description: 'An exhaustive handbook featuring curriculum design, fee structure structures, teacher profiles, activities, and rules of conduct.',
      fileName: 'Illusion_Play_School_Prospectus.pdf',
      fileSize: '4.2 MB',
      category: 'Admission Documents'
    },
    {
      id: 'd-2',
      title: 'Illusion Student Registration Form',
      description: 'Printable registration form required to apply for daycare or playschool enrollment. Submit physically at Noida Sector 51 reception.',
      fileName: 'Illusion_Registration_Form.pdf',
      fileSize: '1.1 MB',
      category: 'Admission Documents'
    }
  ],
  homepageSettings: {
    heroSlides: [
      {
        id: 'hs-1',
        title: 'Welcome to Illusion Play School',
        subtitle: 'The best-rated playschool & daycare in Noida Sector 51. Nurturing young minds through interactive play, expert care, and organic meals.',
        ctaText: 'Schedule a Tour',
        ctaLink: '/contact',
        image: '/slider1.png'
      },
      {
        id: 'hs-2',
        title: 'Admissions Open: 2026-27',
        subtitle: 'Give your child the foundation of experiential learning, phonetic reading, and creative arts. Managed by IIM - IIFT Alumni!',
        ctaText: 'Enroll Now',
        ctaLink: '/admissions',
        image: '/slider2.png'
      }
    ],
    siteSettings: {
      schoolName: 'Illusion Play School',
      motto: 'Blooming Hearts, Shining Minds',
      phone: '+91 98998 52000',
      email: 'rhythm.futuregeneration@gmail.com',
      address: 'Plot No. 1, Sector 51, Noida, Uttar Pradesh, 201301',
      hours: 'Mon - Fri: 8:30 AM - 7:00 PM | Sat: 8:30 AM - 5:00 PM',
      whatsappNumber: '919899852000',
      instagram: 'https://www.instagram.com/rhythmplayschool/',
      facebook: 'https://www.facebook.com/rhythm.play.school',
      youtube: 'https://www.youtube.com/channel/UCBqClRm_aRSFliHqgOBOqzw',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.111812836696!2d77.35242784534724!3d28.591427181347076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef13e11cfc6b%3A0xe21558bf2a09bd97!2sSector%2051%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719876543210!5m2!1sen!2sin'
    },
    starStudent: {
      name: 'Vihaan Roy',
      className: 'Nursery',
      reason: 'For showing remarkable kindness, helping peers set up blocks, and reciting a beautiful poem on environmental safety.',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop'
    },
    teacherOfMonth: {
      name: 'Mrs. Sonia Verma',
      role: 'Senior Coordinator',
      achievement: 'For crafting 15+ interactive hand puppets to make English storytelling a spellbinding experience for toddlers.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop'
    },
    birthdays: [
      { id: 'b1', name: 'Riya Gupta', age: 3, date: '08 July' },
      { id: 'b2', name: 'Kabir Sen', age: 4, date: '10 July' }
    ],
    todayActivities: [
      { id: 'a1', time: '08:30 AM', title: 'Morning Assembly & Circle Time', desc: 'Clapping somatic coordinates, morning prayers, and interactive rhythm rhymes.' },
      { id: 'a2', time: '10:30 AM', title: 'Sensory Sand Play & Blocks', desc: 'Toddlers explore textures and build spatial structures in sandbox turf.' },
      { id: 'a3', time: '12:00 PM', title: 'Phonics Sound Matching', desc: 'Alphabet sound puzzle quiz and reading cards.' }
    ]
  }
};

export const CMSProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('illusion_school_cms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse local storage', e);
      }
    }
    return INITIAL_MOCK_DATA;
  });

  const [useSanity, setUseSanity] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('illusion_school_cms', JSON.stringify(data));
  }, [data]);

  // Attempt to initialize Sanity connection if environment variables exist
  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    if (projectId) {
      setUseSanity(true);
      fetchSanityContent();
    }
  }, []);

  const fetchSanityContent = async () => {
    setLoading(true);
    try {
      // Define GROQ fetches for various collections
      const sanityPrograms = await client.fetch(`*[_type == "program"]`);
      const sanityNotices = await client.fetch(`*[_type == "notice"] | order(date desc)`);
      const sanityEvents = await client.fetch(`*[_type == "event"] | order(date asc)`);
      const sanityGallery = await client.fetch(`*[_type == "gallery"] | order(date desc)`);
      const sanityVideos = await client.fetch(`*[_type == "video"]`);
      const sanityFaculty = await client.fetch(`*[_type == "faculty"]`);
      const sanityTestimonials = await client.fetch(`*[_type == "testimonial"]`);
      const sanityFAQ = await client.fetch(`*[_type == "faq"]`);
      const sanityBlogs = await client.fetch(`*[_type == "blog"] | order(date desc)`);
      const sanityDownloads = await client.fetch(`*[_type == "download"]`);
      const sanityHomepage = await client.fetch(`*[_type == "homepageSettings"][0]`);

      setData((prev) => ({
        programs: sanityPrograms.length ? sanityPrograms : prev.programs,
        notices: sanityNotices.length ? sanityNotices : prev.notices,
        events: sanityEvents.length ? sanityEvents : prev.events,
        gallery: sanityGallery.length ? sanityGallery : prev.gallery,
        videos: sanityVideos.length ? sanityVideos : prev.videos,
        faculty: sanityFaculty.length ? sanityFaculty : prev.faculty,
        testimonials: sanityTestimonials.length ? sanityTestimonials : prev.testimonials,
        faq: sanityFAQ.length ? sanityFAQ : prev.faq,
        blogs: sanityBlogs.length ? sanityBlogs : prev.blogs,
        downloads: sanityDownloads.length ? sanityDownloads : prev.downloads,
        homepageSettings: sanityHomepage ? sanityHomepage : prev.homepageSettings,
      }));
    } catch (error) {
      console.warn('Sanity fetch failed. Falling back to local storage.', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper actions to manipulate data (CRUD)
  const addNotice = (notice) => {
    const newNotice = { id: `n-${Date.now()}`, date: new Date().toISOString().split('T')[0], ...notice };
    setData(prev => ({
      ...prev,
      notices: [newNotice, ...prev.notices]
    }));
  };

  const editNotice = (updatedNotice) => {
    setData(prev => ({
      ...prev,
      notices: prev.notices.map(n => n.id === updatedNotice.id ? updatedNotice : n)
    }));
  };

  const deleteNotice = (id) => {
    setData(prev => ({
      ...prev,
      notices: prev.notices.filter(n => n.id !== id)
    }));
  };

  const pinNotice = (id) => {
    setData(prev => ({
      ...prev,
      notices: prev.notices.map(n => n.id === id ? { ...n, isPinned: !n.isPinned } : n)
    }));
  };

  // Events CRUD
  const addEvent = (event) => {
    const newEvent = { id: `e-${Date.now()}`, ...event };
    setData(prev => ({
      ...prev,
      events: [...prev.events, newEvent]
    }));
  };

  const editEvent = (updatedEvent) => {
    setData(prev => ({
      ...prev,
      events: prev.events.map(e => e.id === updatedEvent.id ? updatedEvent : e)
    }));
  };

  const deleteEvent = (id) => {
    setData(prev => ({
      ...prev,
      events: prev.events.filter(e => e.id !== id)
    }));
  };

  // Gallery CRUD
  const addGalleryItem = (item) => {
    const newItem = { id: `g-${Date.now()}`, date: new Date().toISOString().split('T')[0], ...item };
    setData(prev => ({
      ...prev,
      gallery: [newItem, ...prev.gallery]
    }));
  };

  const deleteGalleryItem = (id) => {
    setData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(g => g.id !== id)
    }));
  };

  // Videos CRUD
  const addVideo = (video) => {
    const newVideo = { id: `v-${Date.now()}`, date: new Date().toISOString().split('T')[0], ...video };
    setData(prev => ({
      ...prev,
      videos: [newVideo, ...prev.videos]
    }));
  };

  const deleteVideo = (id) => {
    setData(prev => ({
      ...prev,
      videos: prev.videos.filter(v => v.id !== id)
    }));
  };

  // Faculty CRUD
  const addFaculty = (member) => {
    const newMember = { id: `f-${Date.now()}`, ...member };
    setData(prev => ({
      ...prev,
      faculty: [...prev.faculty, newMember]
    }));
  };

  const deleteFaculty = (id) => {
    setData(prev => ({
      ...prev,
      faculty: prev.faculty.filter(f => f.id !== id)
    }));
  };

  // Programs CRUD
  const addProgram = (program) => {
    const newProgram = { id: `p-${Date.now()}`, ...program };
    setData(prev => ({
      ...prev,
      programs: [...prev.programs, newProgram]
    }));
  };

  const editProgram = (updatedProg) => {
    setData(prev => ({
      ...prev,
      programs: prev.programs.map(p => p.id === updatedProg.id ? updatedProg : p)
    }));
  };

  const deleteProgram = (id) => {
    setData(prev => ({
      ...prev,
      programs: prev.programs.filter(p => p.id !== id)
    }));
  };

  // Downloads CRUD
  const addDownload = (download) => {
    const newDl = { id: `d-${Date.now()}`, ...download };
    setData(prev => ({
      ...prev,
      downloads: [...prev.downloads, newDl]
    }));
  };

  const deleteDownload = (id) => {
    setData(prev => ({
      ...prev,
      downloads: prev.downloads.filter(d => d.id !== id)
    }));
  };

  // Testimonial CRUD
  const addTestimonial = (testimonial) => {
    const newT = { id: `t-${Date.now()}`, parentPhoto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop', ...testimonial };
    setData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, newT]
    }));
  };

  // Settings update
  const updateHomepageSettings = (settings) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        siteSettings: { ...prev.homepageSettings.siteSettings, ...settings }
      }
    }));
  };

  // Settings update specifically for star student
  const updateStarStudent = (student) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        starStudent: { ...prev.homepageSettings.starStudent, ...student }
      }
    }));
  };

  // Settings update specifically for teacher of the month
  const updateTeacherOfMonth = (teacher) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        teacherOfMonth: { ...prev.homepageSettings.teacherOfMonth, ...teacher }
      }
    }));
  };

  // Birthday management
  const addBirthday = (bday) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        birthdays: [...prev.homepageSettings.birthdays, { id: `bday-${Date.now()}`, ...bday }]
      }
    }));
  };

  const deleteBirthday = (id) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        birthdays: prev.homepageSettings.birthdays.filter(b => b.id !== id)
      }
    }));
  };

  // Activity management
  const addActivity = (act) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        todayActivities: [...prev.homepageSettings.todayActivities, { id: `act-${Date.now()}`, ...act }]
      }
    }));
  };

  const deleteActivity = (id) => {
    setData(prev => ({
      ...prev,
      homepageSettings: {
        ...prev.homepageSettings,
        todayActivities: prev.homepageSettings.todayActivities.filter(a => a.id !== id)
      }
    }));
  };

  return (
    <CMSContext.Provider value={{
      ...data,
      useSanity,
      loading,
      refreshSanity: fetchSanityContent,
      addNotice,
      editNotice,
      deleteNotice,
      pinNotice,
      addEvent,
      editEvent,
      deleteEvent,
      addGalleryItem,
      deleteGalleryItem,
      addVideo,
      deleteVideo,
      addFaculty,
      deleteFaculty,
      addProgram,
      editProgram,
      deleteProgram,
      addDownload,
      deleteDownload,
      addTestimonial,
      updateHomepageSettings,
      updateStarStudent,
      updateTeacherOfMonth,
      addBirthday,
      deleteBirthday,
      addActivity,
      deleteActivity
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
