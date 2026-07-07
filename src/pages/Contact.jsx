import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';
import { triggerConfetti } from '../components/animations/FloatingElements';

export const Contact = () => {
  const { homepageSettings } = useCMS();
  const { siteSettings } = homepageSettings;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Admissions Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in the required fields!");
      return;
    }

    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    messages.push({ id: Date.now(), ...formData, date: new Date().toISOString() });
    localStorage.setItem('contact_messages', JSON.stringify(messages));

    setSubmitted(true);
    triggerConfetti();

    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'Admissions Inquiry',
      message: ''
    });
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-xs text-pink-500 font-bold uppercase tracking-widest bg-pink-100 px-3 py-1 rounded-full">
          GET IN TOUCH
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-800">
          Contact Our Admissions Desk
        </h1>
        <p className="font-body text-sm text-slate-500 max-w-xl">
          Coordinate class tours, ask about daycare seat availability, or clear fee structure doubts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Coordinates */}
        <div className="flex flex-col gap-8 text-left justify-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="bg-sky-100 text-sky-600 p-4 rounded-2xl text-2xl shrink-0">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-heading text-base text-slate-800 mb-1">Campus Location</h4>
                <p className="font-body text-xs md:text-sm text-slate-500 leading-relaxed">
                  {siteSettings.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-500 p-4 rounded-2xl text-2xl shrink-0">
                <FaPhoneAlt />
              </span>
              <div>
                <h4 className="font-heading text-base text-slate-800 mb-1">Phone Helpline</h4>
                <p className="font-body text-xs md:text-sm text-slate-500 leading-relaxed">
                  {siteSettings.phone} (Reception)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-yellow-50 text-yellow-600 p-4 rounded-2xl text-2xl shrink-0 border border-yellow-100">
                <FaEnvelope />
              </span>
              <div>
                <h4 className="font-heading text-base text-slate-800 mb-1">Email Coordinates</h4>
                <p className="font-body text-xs md:text-sm text-slate-500 break-all leading-relaxed">
                  {siteSettings.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl text-2xl shrink-0">
                <FaClock />
              </span>
              <div>
                <h4 className="font-heading text-base text-slate-800 mb-1">Working Hours</h4>
                <p className="font-body text-xs md:text-sm text-slate-500 leading-relaxed">
                  {siteSettings.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Chat */}
          <div className="bg-emerald-50/50 p-6 rounded-2xl border-2 border-dashed border-emerald-200 flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
            <div>
              <h4 className="font-heading text-base text-emerald-800 flex items-center gap-1.5"><FaWhatsapp className="text-xl" /> WhatsApp Assistant</h4>
              <p className="font-body text-xs text-slate-500 mt-1">Get immediate automated responses for Fee circulars and forms.</p>
            </div>
            <a
              href={`https://wa.me/${siteSettings.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-5 py-2.5 bg-emerald-500 text-white font-heading text-xs font-bold rounded-xl shadow-soft hover:bg-emerald-600 transition-colors shrink-0"
              style={{ backgroundColor: 'var(--mint-green)', color: 'white', borderRadius: '12px' }}
            >
              CHAT NOW
            </a>
          </div>
        </div>

        {/* Right: Quick Enquiry form */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border-4 border-dashed border-sky-200 shadow-soft">
          <h3 className="font-heading text-lg text-slate-800 mb-6 text-left">Send Us A Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-left">
              <label className="font-heading text-xs text-slate-600">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 text-left">
                <label className="font-heading text-xs text-slate-600">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10 digit mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400"
                />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <label className="font-heading text-xs text-slate-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Optional"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="font-heading text-xs text-slate-600">Subject Of Inquiry</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="font-body text-xs p-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-sky-400"
              >
                <option value="Admissions Inquiry">Admissions Inquiry</option>
                <option value="Daycare Slots">Daycare Slots</option>
                <option value="Faculty Application">Faculty Application</option>
                <option value="Feedback / Complaint">Feedback / Complaint</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="font-heading text-xs text-slate-600">Your Message *</label>
              <textarea
                rows="4"
                required
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-heading text-sm font-bold text-white py-3 rounded-xl shadow hover:scale-[1.01] transition-transform"
              style={{
                backgroundColor: 'var(--coral-orange)',
                backgroundImage: 'linear-gradient(to right, var(--coral-orange), var(--soft-pink))',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              SEND INQUIRY MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Full-width Map Frame */}
      <section className="h-96 rounded-2xl overflow-hidden border-4 border-yellow-200 shadow-soft">
        <iframe
          src={siteSettings.mapUrl}
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          title="Campus Address Location"
        />
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-2xl border-4 border-dashed border-emerald-300 max-w-sm text-center flex flex-col items-center gap-4 shadow-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <FaCheckCircle className="text-6xl text-emerald-500" />
              <h3 className="font-heading text-xl text-slate-800">Message Dispatched!</h3>
              <p className="font-body text-xs text-slate-500">
                Thank you for mailing us. We have received your query, and a coordinator will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-emerald-500 text-white font-heading text-xs font-bold rounded-full border-none cursor-pointer"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
