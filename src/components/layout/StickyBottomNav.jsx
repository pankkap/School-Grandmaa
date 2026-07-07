import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBookOpen, FaBullhorn, FaGraduationCap, FaPhoneAlt } from 'react-icons/fa';

export const StickyBottomNav = () => {
  const items = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Programs', path: '/programs', icon: <FaBookOpen /> },
    { name: 'Inquire', path: '/admissions', icon: <FaGraduationCap />, isSpecial: true },
    { name: 'Notices', path: '/notices', icon: <FaBullhorn /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
      {items.map(item => {
        if (item.isSpecial) {
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `no-underline flex flex-col items-center justify-center -translate-y-3 w-12 h-12 rounded-full border border-slate-200 shadow transition-colors ${
                  isActive ? 'bg-amber-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--sunshine-yellow)' : 'var(--sky-blue)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(30, 58, 138, 0.2)'
              })}
            >
              <span className="text-xl">{item.icon}</span>
            </NavLink>
          );
        }

        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `no-underline flex flex-col items-center gap-1 font-heading text-[9px] font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'text-amber-600' : 'text-slate-500 hover:text-slate-800'
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
