import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useCMS } from '../../context/CMSContext';

export const Footer = () => {
  const { homepageSettings } = useCMS();
  const { siteSettings } = homepageSettings;

  return (
    <footer className="relative bg-slate-900 text-slate-300 mt-20 pt-16 pb-24 md:pb-12 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About School */}
        <div className="flex flex-col gap-4 text-left">
          <Link to="/" className="flex items-center gap-2.5 no-underline mb-2">
            <div className="text-2xl text-amber-500">
              <FaGraduationCap />
            </div>
            <span className="font-heading text-base tracking-wide flex flex-col items-start leading-none">
              <span className="text-white font-bold uppercase tracking-widest text-xs">ILLUSION</span>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-[8px] mt-1">PLAY SCHOOL</span>
            </span>
          </Link>
          <p className="font-heading text-xs text-amber-500 italic tracking-wider">
            {siteSettings.motto || 'Blooming Hearts, Shining Minds'}
          </p>
          <p className="font-body text-xs text-slate-400 mt-2 leading-relaxed">
            Illusion Play School is Noida's premier preschool offering expert daycare, innovative curriculum & holistic development programs.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-3">
            <a href={siteSettings.facebook} className="text-slate-400 hover:text-amber-500 text-base transition-colors"><FaFacebook /></a>
            <a href={siteSettings.instagram} className="text-slate-400 hover:text-amber-500 text-base transition-colors"><FaInstagram /></a>
            <a href={siteSettings.youtube} className="text-slate-400 hover:text-amber-500 text-base transition-colors"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 text-left">
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-2">Navigation</h4>
          <Link to="/about" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">About Academy</Link>
          <Link to="/programs" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">Early Programs</Link>
          <Link to="/curriculum" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">Learning Method</Link>
          <Link to="/facilities" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">Facilities</Link>
          <Link to="/notices" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">Notice Board</Link>
          <Link to="/downloads" className="text-slate-400 hover:text-amber-500 text-xs no-underline font-body transition-colors">Forms & Circulars</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-2">Get in Touch</h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-400">
            <FaMapMarkerAlt className="text-amber-500 mt-1 shrink-0" />
            <span className="font-body leading-relaxed">{siteSettings.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <FaPhone className="text-amber-500 shrink-0" />
            <span className="font-body">{siteSettings.phone}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <FaEnvelope className="text-amber-500 shrink-0" />
            <span className="font-body break-all">{siteSettings.email}</span>
          </div>
        </div>

        {/* Campus Hours */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-2">Hours of Operation</h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-400">
            <FaClock className="text-amber-500 mt-1 shrink-0" />
            <div className="flex flex-col font-body gap-1 leading-relaxed">
              <span>{siteSettings.hours}</span>
              <span className="text-[10px] text-amber-500 mt-2 font-bold uppercase">Campus tours by appointment.</span>
            </div>
          </div>

          {/* Quick WhatsApp button */}
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-heading text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-soft no-underline transition-colors mt-2"
          >
            <FaWhatsapp className="text-sm" /> WhatsApp Desk
          </a>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} Illusion Play School. All rights reserved. Managed by IIM - IIFT Alumni.
        </p>
        <div className="flex gap-4">
          <Link to="/privacy" className="text-slate-500 hover:text-slate-400 text-[11px] no-underline font-body">Privacy Policy</Link>
          <span className="text-slate-700">|</span>
          <Link to="/admin" className="text-slate-500 hover:text-amber-500 text-[11px] no-underline font-body font-bold">Portal Access</Link>
        </div>
      </div>
    </footer>
  );
};
