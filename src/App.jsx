import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyBottomNav } from './components/layout/StickyBottomNav';
import { FloatingBalloons, FloatingBubbles, FloatingButterflies, LionMammaMascot, StickyWhatsApp } from './components/animations/FloatingElements';
import { BackgroundMusicPlayer } from './components/layout/BackgroundMusicPlayer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { Programs } from './pages/Programs';
import { Curriculum } from './pages/Curriculum';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { Videos } from './pages/Videos';
import { Notices } from './pages/Notices';
import { Events } from './pages/Events';
import { Faculty } from './pages/Faculty';
import { Testimonials } from './pages/Testimonials';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Downloads } from './pages/Downloads';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  return (
    <CMSProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative bg-slate-50 overflow-x-hidden pb-16 lg:pb-0">
          {/* Aesthetic animations that persist across pages */}
          <FloatingBalloons />
          <FloatingBubbles />
          <FloatingButterflies />
          <LionMammaMascot />
          <StickyWhatsApp />
          <BackgroundMusicPlayer />

          {/* Sticky Header Nav */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:programId" element={<Programs />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          {/* Curvy Wave Footer */}
          <Footer />

          {/* Thumb-friendly Sticky navigation for mobile layouts */}
          <StickyBottomNav />
        </div>
      </BrowserRouter>
    </CMSProvider>
  );
}

export default App;
