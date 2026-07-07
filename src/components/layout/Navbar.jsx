import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap, FaChevronDown, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const itemColors = [
    '#f25c27', // Orange-Red
    '#1a65b0', // Vibrant Blue
    '#8e288e', // Violet-Purple
    '#c1272d', // Warm Red-Pink
    '#592b83', // Indigo-Purple
    '#00a896', // Playful Teal
    '#7c3aed'  // Purple-Violet
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Programs',
      dropdown: [
        { name: 'Daycare', path: '/programs' },
        { name: 'Play Group', path: '/programs' },
        { name: 'Pre-Nursery', path: '/programs' },
        { name: 'Nursery', path: '/programs' },
        { name: 'Kindergarten', path: '/programs' },
        { name: 'Toddler Program', path: '/programs' },
        { name: 'Teachers Training Program', path: '/programs' },
      ],
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Franchise', path: '/downloads' },
    {
      name: 'Gallery',
      dropdown: [
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'Video Gallery', path: '/videos' },
      ],
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 999, width: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 10px rgba(0,0,0,0.06)' }}>
      {/* 1. HELPLINE TOPBAR */}
      <div style={{ backgroundColor: '#21409b', padding: '10px 0', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '9px', opacity: 0.9 }}>For Enquiry:</span>
            <a href="https://wa.me/919899852000" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FaWhatsapp style={{ color: '#25D366', fontSize: '13px' }} /> +91 98998 52000
            </a>
            <a href="https://wa.me/919899664000" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FaWhatsapp style={{ color: '#25D366', fontSize: '13px' }} /> 98996 64000
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/admissions" style={{ color: '#ffffff', backgroundColor: '#f05a28', padding: '6px 14px', borderRadius: '50px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.05em', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              Admissions Open 2026-27
            </Link>
            <Link to="/contact" style={{ color: '#ffffff', backgroundColor: '#f05a28', padding: '6px 14px', borderRadius: '50px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.05em', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION NAVBAR */}
      <nav style={{ backgroundColor: '#ffffff', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Grand Maa's Pre School & Day Care Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-nav">
          {navItems.map((item, index) => {
            const itemColor = itemColors[index % itemColors.length];
            if (item.dropdown) {
              const isSubActive = item.dropdown.some(sub => location.pathname === sub.path);
              return (
                <div
                  key={item.name}
                  style={{ position: 'relative', padding: '8px 0' }}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      border: '0',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      color: itemColor,
                      borderBottom: isSubActive ? `2px solid ${itemColor}` : 'none',
                      paddingBottom: isSubActive ? '4px' : 'none',
                      transition: 'color 0.2s'
                    }}
                  >
                    {item.name} <FaChevronDown style={{ fontSize: '8px', color: '#94a3b8' }} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: 'absolute',
                          left: 0,
                          marginTop: '8px',
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                          border: '1px solid #e2e8f0',
                          padding: '8px',
                          minWidth: '220px',
                          zIndex: 99,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px'
                        }}
                      >
                        {item.dropdown.map(subItem => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '12px',
                              fontWeight: '600',
                              padding: '10px 16px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              color: location.pathname === subItem.path ? itemColor : '#475569',
                              backgroundColor: location.pathname === subItem.path ? '#f1f5f9' : 'transparent',
                              transition: 'background-color 0.2s, color 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              if (location.pathname !== subItem.path) {
                                e.currentTarget.style.backgroundColor = '#f8fafc';
                                e.currentTarget.style.color = '#1e293b';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (location.pathname !== subItem.path) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#475569';
                              }
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  color: itemColor,
                  borderBottom: isActive ? `2px solid ${itemColor}` : 'none',
                  paddingBottom: isActive ? '4px' : 'none',
                  transition: 'color 0.2s'
                }}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Portal Access */}
          <Link
            to="/admin"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              color: '#94a3b8',
              marginLeft: '8px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            Portal
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-nav-toggle">
          <Link
            to="/admin"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              color: '#94a3b8'
            }}
          >
            Portal
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              color: '#334155',
              backgroundColor: 'transparent',
              border: 0,
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              style={{
                position: 'fixed',
                top: '95px',
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: '#ffffff',
                zIndex: 999,
                padding: '24px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderTop: '1px solid #f1f5f9',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }}
            >

              {navItems.map((item, index) => {
                const itemColor = itemColors[index % itemColors.length];
                if (item.dropdown) {
                  return (
                    <div key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', color: itemColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '8px' }}>
                        {item.name}
                      </span>
                      <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '1px solid #cbd5e1' }}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              fontWeight: '600',
                              textDecoration: 'none',
                              color: location.pathname === subItem.path ? itemColor : '#475569',
                              padding: '4px 0'
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      padding: '10px 0',
                      borderBottom: '1px solid #f1f5f9',
                      color: itemColor
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: '100%',
                  padding: '14px 0',
                  color: '#ffffff',
                  backgroundColor: '#f05a28',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(240, 90, 40, 0.2)',
                  marginTop: '16px'
                }}
              >
                Admissions open 2026-27
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
