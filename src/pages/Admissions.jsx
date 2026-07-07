import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaClipboardList } from 'react-icons/fa';
import { triggerConfetti } from '../components/animations/FloatingElements';

export const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childDob: '',
    program: 'Play Group',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName) {
      alert("Please fill in the required fields!");
      return;
    }

    const enquiries = JSON.parse(localStorage.getItem('admission_enquiries') || '[]');
    enquiries.push({ id: Date.now(), ...formData, date: new Date().toISOString() });
    localStorage.setItem('admission_enquiries', JSON.stringify(enquiries));

    setSubmitted(true);
    triggerConfetti();

    setFormData({
      parentName: '',
      phone: '',
      email: '',
      childName: '',
      childDob: '',
      program: 'Play Group',
      message: ''
    });
  };

  const steps = [
    { num: "01", title: "Registration Request", desc: "Submit the online admissions inquiry form or connect with our Bangalore coordinator." },
    { num: "02", title: "Campus Interaction Slot", desc: "Coordinate a physical tour. A coordinator conducts a readiness assessment interaction with the child." },
    { num: "03", title: "Verification of Credentials", desc: "Submit birth coordinates, medical immunization cards, passport pictures, and parent ID logs." },
    { num: "04", title: "Enrolment Confirmation", desc: "Clear registration ledger deposits. The student welcome folder and curriculum checklist are then released." }
  ];

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 text-left">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-[10px] text-amber-600 font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded">
          Admissions
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-900">
          Admission Guidelines & Registration
        </h1>
        <p className="font-body text-xs md:text-sm text-slate-500 max-w-xl">
          Complete the inquiry steps to coordinate campus tours for the 2026-27 term.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Criteria & Steps */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-heading text-lg text-slate-900 mb-6 flex items-center gap-2">
              <FaClipboardList className="text-amber-600 text-base" /> Age Criteria Logs
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-heading text-sm text-slate-800 mb-1">Play Group</h4>
                <span className="font-body text-[11px] text-slate-500 font-bold">2.0 to 3.0 Years</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-heading text-sm text-slate-800 mb-1">Nursery</h4>
                <span className="font-body text-[11px] text-slate-500 font-bold">3.0 to 4.0 Years</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-heading text-sm text-slate-800 mb-1">LKG</h4>
                <span className="font-body text-[11px] text-slate-500 font-bold">4.0 to 5.0 Years</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-heading text-sm text-slate-800 mb-1">UKG</h4>
                <span className="font-body text-[11px] text-slate-500 font-bold">5.0 to 6.0 Years</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-slate-900 mb-6 flex items-center gap-2">
              <FaClipboardList className="text-amber-600 text-base" /> Enrolment Milestones
            </h3>
            <div className="flex flex-col gap-5">
              {steps.map(step => (
                <div key={step.num} className="flex gap-4 items-start">
                  <span className="font-heading text-xs font-bold text-amber-600 bg-amber-50 w-7 h-7 rounded border border-amber-200 flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-heading text-sm text-slate-900">{step.title}</h4>
                    <p className="font-body text-xs text-slate-500 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <motion.div
          id="enquiry-card"
          className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-soft"
        >
          <h3 className="font-heading text-lg text-slate-900 mb-6 pb-2 border-b">Request Enrolment Tour</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Parent Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Helpline Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="10 digit mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Child's Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter child's name"
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Date of Birth</label>
                <input
                  type="date"
                  value={formData.childDob}
                  onChange={(e) => setFormData({...formData, childDob: e.target.value})}
                  className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Syllabus Program</label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({...formData, program: e.target.value})}
                className="font-body text-xs p-3 rounded border border-slate-200 bg-white outline-none focus:border-amber-600"
              >
                <option value="Play Group">Play Group (2-3 Yrs)</option>
                <option value="Nursery">Nursery (3-4 Yrs)</option>
                <option value="LKG">LKG (4-5 Yrs)</option>
                <option value="UKG">UKG (5-6 Yrs)</option>
                <option value="Day Care">Day Care & After School</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[10px] uppercase tracking-wide text-slate-500">Questions or Notes</label>
              <textarea
                rows="3"
                placeholder="Message details..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="font-body text-xs p-3 rounded border border-slate-200 outline-none focus:border-amber-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-heading text-xs font-bold text-white py-3 rounded uppercase tracking-wider shadow transition-colors"
              style={{
                backgroundColor: 'var(--sky-blue)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Submit Admissions Enquiry
            </button>
          </form>

          {/* Success overlay */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 max-w-sm text-center flex flex-col items-center gap-4 shadow-lg"
                >
                  <FaCheckCircle className="text-5xl text-emerald-600" />
                  <h3 className="font-heading text-lg text-slate-900">Enquiry Dispatched</h3>
                  <p className="font-body text-xs text-slate-500">
                    We have successfully logged your admissions lead. A school representative will coordinate a calendar slot for your physical campus visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-slate-900 text-white font-heading text-xs font-bold rounded border-none cursor-pointer"
                    style={{ backgroundColor: 'var(--sky-blue)' }}
                  >
                    Continue
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};
