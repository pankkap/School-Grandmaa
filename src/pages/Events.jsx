import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Events = () => {
  const { events } = useCMS();

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          WHAT'S COMING
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Upcoming School Events
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Mark your calendars for upcoming parent orientations, festive sports days, and carnivals.
        </p>
      </div>

      {/* Events List */}
      <section className="flex flex-col gap-10 mt-6">
        {events.length > 0 ? (
          events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-sky-300 transition-colors shadow-soft flex flex-col lg:flex-row text-left"
            >
              {/* Event Image */}
              <div
                className="w-full lg:w-96 h-64 lg:h-auto bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${event.banner})` }}
              />

              {/* Event Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="font-heading text-[10px] font-bold text-pink-500 bg-pink-100 px-3 py-1 rounded-full w-max">
                    {event.date}
                  </span>
                  <h3 className="font-heading text-lg md:text-2xl text-slate-800">{event.title}</h3>
                  <p className="font-body text-xs md:text-sm text-slate-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-dashed border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-body">
                    <FaClock className="text-sky-500 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-body">
                    <FaMapMarkerAlt className="text-sky-500 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Apply/Register Button */}
                {event.registrationLink ? (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline px-5 py-2.5 bg-emerald-500 text-white font-heading text-xs font-bold rounded-xl shadow-soft hover:bg-emerald-600 transition-colors w-max flex items-center gap-1.5"
                    style={{
                      backgroundColor: 'var(--mint-green)',
                      color: 'white',
                      borderRadius: '12px'
                    }}
                  >
                    <FaLink /> REGISTER AS VISITOR
                  </a>
                ) : (
                  <span className="font-body text-xs text-slate-400 font-bold bg-slate-50 px-3 py-2 rounded-lg w-max">
                    Free Entry for Registered Parents
                  </span>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border-2 border-dashed border-slate-200">
            <p className="font-body text-sm text-slate-400">No upcoming events are scheduled currently.</p>
          </div>
        )}
      </section>
    </div>
  );
};
