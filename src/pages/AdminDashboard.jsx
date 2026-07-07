import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaUserShield, FaSignOutAlt, FaPlus, FaTrash, FaEdit, FaThumbtack, FaCog, FaAd, FaListAlt } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const AdminDashboard = () => {
  const cms = useCMS();

  // Login States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Teacher');

  // Dashboard Active Tab
  const [activeTab, setActiveTab] = useState('notices');

  // Form Modals / Inputs
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form state fields
  const [noticeForm, setNoticeForm] = useState({ title: '', content: '', category: 'Academics', isPinned: false, expiryDate: '', attachment: '' });
  const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', time: '', location: '', banner: '', registrationLink: '', countdownTarget: '' });
  const [galleryForm, setGalleryForm] = useState({ title: '', description: '', url: '', category: 'Playtime' });
  const [videoForm, setVideoForm] = useState({ title: '', description: '', youtubeUrl: '', category: 'Campus Tour' });
  const [programForm, setProgramForm] = useState({ title: '', ageGroup: '', duration: '', learningObjectives: '', activities: '', image: '', category: 'Early Years' });
  const [downloadForm, setDownloadForm] = useState({ title: '', description: '', fileName: '', fileSize: '1.2 MB', category: 'Admission Documents' });

  // Settings state fields
  const [settingsForm, setSettingsForm] = useState({ phone: cms.homepageSettings.siteSettings.phone, email: cms.homepageSettings.siteSettings.email, motto: cms.homepageSettings.siteSettings.motto });
  const [starStudentForm, setStarStudentForm] = useState({ name: cms.homepageSettings.starStudent.name, className: cms.homepageSettings.starStudent.className, reason: cms.homepageSettings.starStudent.reason, photo: cms.homepageSettings.starStudent.photo });
  const [birthdayForm, setBirthdayForm] = useState({ name: '', age: 3, date: '' });
  const [activityForm, setActivityForm] = useState({ time: '', title: '', desc: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials! (Try: username 'admin' and password 'admin123')");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const openAddModal = () => {
    setEditingItem(null);
    setNoticeForm({ title: '', content: '', category: 'Academics', isPinned: false, expiryDate: '', attachment: '' });
    setEventForm({ title: '', description: '', date: '', time: '', location: '', banner: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop', registrationLink: '', countdownTarget: '' });
    setGalleryForm({ title: '', description: '', url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop', category: 'Playtime' });
    setVideoForm({ title: '', description: '', youtubeUrl: '', category: 'Campus Tour' });
    setProgramForm({ title: '', ageGroup: '', duration: '', learningObjectives: '', activities: '', image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&auto=format&fit=crop', category: 'Early Years' });
    setDownloadForm({ title: '', description: '', fileName: '', fileSize: '1.5 MB', category: 'Admission Documents' });
    setIsFormOpen(true);
  };

  const openEditModal = (item, type) => {
    setEditingItem(item);
    if (type === 'notices') setNoticeForm(item);
    if (type === 'events') setEventForm(item);
    if (type === 'programs') setProgramForm(item);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'notices') {
      if (editingItem) {
        cms.editNotice(noticeForm);
      } else {
        cms.addNotice(noticeForm);
      }
    } else if (activeTab === 'events') {
      if (editingItem) {
        cms.editEvent(eventForm);
      } else {
        cms.addEvent(eventForm);
      }
    } else if (activeTab === 'gallery') {
      cms.addGalleryItem(galleryForm);
    } else if (activeTab === 'videos') {
      cms.addVideo(videoForm);
    } else if (activeTab === 'programs') {
      if (editingItem) {
        cms.editProgram(programForm);
      } else {
        cms.addProgram(programForm);
      }
    } else if (activeTab === 'downloads') {
      cms.addDownload(downloadForm);
    }
    setIsFormOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col gap-8">
      {/* 1. LOGIN SKELETON */}
      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl border-4 border-dashed border-sky-300 max-w-md mx-auto shadow-soft w-full text-left"
        >
          <div className="flex flex-col items-center gap-2 mb-6 text-center">
            <FaLock className="text-4xl text-pink-500" />
            <h2 className="font-heading text-xl text-slate-800">Preschool Teacher Portal</h2>
            <p className="font-body text-xs text-slate-400">Enter credentials or choose quick roles</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-heading text-xs text-slate-600">Portal Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Type 'admin'"
                className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-xs text-slate-600">Access Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type 'admin123'"
                className="font-body text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-sky-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-xs text-slate-600">Select Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="font-body text-xs p-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-sky-400"
              >
                <option value="Teacher">Teacher / Faculty</option>
                <option value="Principal">Principal Ma'am</option>
                <option value="Administrator">Administrator</option>
              </select>
            </div>

            <button
              type="submit"
              className="font-heading text-sm font-bold text-white py-3 rounded-xl shadow-soft hover:shadow-lg transition-transform hover:scale-[1.01]"
              style={{
                backgroundColor: 'var(--coral-orange)',
                backgroundImage: 'linear-gradient(to right, var(--coral-orange), var(--soft-pink))',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              AUTHENTICATE PORTAL
            </button>
          </form>

          {/* Role Bypass Button */}
          <div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
            <span className="font-body text-slate-400">Quick Test Bypass:</span>
            <button
              onClick={() => { setIsLoggedIn(true); setUsername('admin'); }}
              className="px-4 py-1.5 bg-slate-100 font-heading text-[10px] text-slate-600 rounded-full border-0 cursor-pointer"
            >
              Click to Auto Login
            </button>
          </div>
        </motion.div>
      ) : (
        /* 2. AUTHENTICATED CMS INTERFACE */
        <div className="flex flex-col gap-6 text-left">
          {/* Dashboard Header bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800 text-white p-6 rounded-2xl shadow-soft border-b-4 border-yellow-300">
            <div className="flex items-center gap-3">
              <FaUserShield className="text-3xl text-yellow-400" />
              <div>
                <h2 className="font-heading text-lg">Portal Dashboard</h2>
                <p className="font-body text-[10px] text-slate-300">Logged in as <strong>{selectedRole}</strong> (Session Verified)</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white font-heading text-xs font-bold rounded-xl flex items-center gap-1.5 border-none cursor-pointer"
            >
              <FaSignOutAlt /> Terminate Portal
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Tabs Selector */}
            <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-soft h-max">
              {[
                { id: 'notices', name: 'Manage Notice Board' },
                { id: 'events', name: 'School Events Calendar' },
                { id: 'gallery', name: 'Photo Gallery Library' },
                { id: 'videos', name: 'YouTube Video embeds' },
                { id: 'programs', name: 'Early Year Programs' },
                { id: 'downloads', name: 'School PDFs & Leaflets' },
                { id: 'settings', name: 'Motto & Staff Spotlights' },
                { id: 'todayAndBdays', name: 'Today\'s Schedule & Birthdays' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-heading text-xs font-semibold p-3 rounded-xl border-0 text-left cursor-pointer transition-colors ${
                    activeTab === tab.id
                      ? 'bg-pink-100 text-pink-600'
                      : 'bg-transparent text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Main Editor Canvas */}
            <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-soft">
              {/* Tab: Notices */}
              {activeTab === 'notices' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">Notice Board Collections</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add Notice
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cms.notices.map(notice => (
                      <div key={notice.id} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between gap-4 border border-slate-200">
                        <div className="text-left flex flex-col gap-1">
                          <span className="text-[9px] font-heading font-bold text-sky-500 bg-sky-100 px-2 py-0.5 rounded-full w-max">
                            {notice.category}
                          </span>
                          <h4 className="font-heading text-xs md:text-sm text-slate-800 flex items-center gap-1">
                            {notice.isPinned && <FaThumbtack className="text-yellow-600 text-xs shrink-0" />} {notice.title}
                          </h4>
                          <span className="font-body text-[9px] text-slate-400">Date: {notice.date}</span>
                        </div>

                        <div className="flex gap-2 shrink-0">
                          <button
                            onClick={() => cms.pinNotice(notice.id)}
                            className="p-2 bg-yellow-100 text-yellow-700 rounded-lg border-0 cursor-pointer"
                          >
                            Pin
                          </button>
                          <button
                            onClick={() => openEditModal(notice, 'notices')}
                            className="p-2 bg-sky-100 text-sky-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => { if (confirm("Delete?")) cms.deleteNotice(notice.id); }}
                            className="p-2 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Events */}
              {activeTab === 'events' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">Events Calendar</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add Event
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cms.events.map(event => (
                      <div key={event.id} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between gap-4 border border-slate-200">
                        <div className="text-left flex flex-col gap-1">
                          <h4 className="font-heading text-xs md:text-sm text-slate-800">{event.title}</h4>
                          <span className="font-body text-[9px] text-slate-400">Scheduled: {event.date} ({event.time})</span>
                        </div>

                        <div className="flex gap-2 shrink-0">
                          <button
                            onClick={() => openEditModal(event, 'events')}
                            className="p-2 bg-sky-100 text-sky-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => { if (confirm("Delete?")) cms.deleteEvent(event.id); }}
                            className="p-2 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Gallery */}
              {activeTab === 'gallery' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">Photo Library</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add Image Link
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {cms.gallery.map(g => (
                      <div key={g.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 relative flex flex-col justify-between">
                        <img src={g.url} className="h-28 w-full object-cover" alt="" />
                        <div className="p-3 text-left">
                          <h4 className="font-heading text-[10px] text-slate-800 line-clamp-1">{g.title}</h4>
                          <span className="text-[8px] font-body text-pink-500 font-bold">{g.category}</span>
                        </div>
                        <button
                          onClick={() => { if (confirm("Delete?")) cms.deleteGalleryItem(g.id); }}
                          className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full border-0 cursor-pointer shadow"
                        >
                          <FaTrash className="text-[10px]" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Videos */}
              {activeTab === 'videos' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">YouTube Embeds</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add YouTube Link
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cms.videos.map(v => (
                      <div key={v.id} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between gap-4 border border-slate-200">
                        <div className="text-left flex flex-col gap-1">
                          <h4 className="font-heading text-xs md:text-sm text-slate-800">{v.title}</h4>
                          <span className="font-body text-[9px] text-slate-400 break-all">{v.youtubeUrl}</span>
                        </div>
                        <button
                          onClick={() => { if (confirm("Delete?")) cms.deleteVideo(v.id); }}
                          className="p-2 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer shrink-0"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Programs */}
              {activeTab === 'programs' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">Early Groups Programs</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add Program
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cms.programs.map(prog => (
                      <div key={prog.id} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between gap-4 border border-slate-200">
                        <div className="text-left flex flex-col gap-1">
                          <h4 className="font-heading text-xs md:text-sm text-slate-800">{prog.title}</h4>
                          <span className="font-body text-[9px] text-slate-400">Ages: {prog.ageGroup} | {prog.duration}</span>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <button
                            onClick={() => openEditModal(prog, 'programs')}
                            className="p-2 bg-sky-100 text-sky-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => { if (confirm("Delete?")) cms.deleteProgram(prog.id); }}
                            className="p-2 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Downloads */}
              {activeTab === 'downloads' && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading text-base text-slate-800">Circulars PDF Library</h3>
                    <button
                      onClick={openAddModal}
                      className="px-4 py-2 bg-sky-500 text-white font-heading text-xs font-bold rounded-full flex items-center gap-1.5 border-none cursor-pointer"
                      style={{ backgroundColor: 'var(--sky-blue)' }}
                    >
                      <FaPlus /> Add Document
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cms.downloads.map(d => (
                      <div key={d.id} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between gap-4 border border-slate-200">
                        <div className="text-left flex flex-col gap-1">
                          <h4 className="font-heading text-xs md:text-sm text-slate-800">{d.title}</h4>
                          <span className="font-body text-[9px] text-slate-400">File: {d.fileName} ({d.fileSize})</span>
                        </div>
                        <button
                          onClick={() => { if (confirm("Delete?")) cms.deleteDownload(d.id); }}
                          className="p-2 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer shrink-0"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: School settings */}
              {activeTab === 'settings' && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-heading text-base text-slate-800 border-b pb-2">Global School Info & Spotlights</h3>

                  {/* General Info */}
                  <form onSubmit={(e) => { e.preventDefault(); cms.updateHomepageSettings(settingsForm); alert("Saved general details!"); }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b pb-6">
                    <div className="flex flex-col gap-1">
                      <label className="font-heading text-xs text-slate-500">Helpline Phone</label>
                      <input
                        type="text"
                        value={settingsForm.phone}
                        onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-heading text-xs text-slate-500">Email Address</label>
                      <input
                        type="text"
                        value={settingsForm.email}
                        onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-end">
                      <button type="submit" className="py-2.5 bg-sky-500 text-white font-heading text-xs font-bold rounded-lg border-0 cursor-pointer hover:bg-sky-600 transition-colors">
                        Save Contacts
                      </button>
                    </div>
                  </form>

                  {/* Star student */}
                  <form onSubmit={(e) => { e.preventDefault(); cms.updateStarStudent(starStudentForm); alert("Star Student Spotlight Updated!"); }} className="flex flex-col gap-4 text-left">
                    <h4 className="font-heading text-xs font-bold text-yellow-700 bg-yellow-100 py-1 px-3 rounded w-max">
                      ⭐ Star Student of the Week Spotlight
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Student Name</label>
                        <input
                          type="text"
                          value={starStudentForm.name}
                          onChange={(e) => setStarStudentForm({ ...starStudentForm, name: e.target.value })}
                          className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Class Block</label>
                        <input
                          type="text"
                          value={starStudentForm.className}
                          onChange={(e) => setStarStudentForm({ ...starStudentForm, className: e.target.value })}
                          className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Spotlight Citation (Reason)</label>
                      <textarea
                        rows="2"
                        value={starStudentForm.reason}
                        onChange={(e) => setStarStudentForm({ ...starStudentForm, reason: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg resize-none"
                      />
                    </div>
                    <button type="submit" className="py-2.5 bg-yellow-500 text-white font-heading text-xs font-bold rounded-lg border-0 cursor-pointer hover:bg-yellow-600 transition-colors w-max px-6">
                      Update Student Spotlight
                    </button>
                  </form>
                </div>
              )}

              {/* Tab: Today schedule and birthdays */}
              {activeTab === 'todayAndBdays' && (
                <div className="flex flex-col gap-8 text-left">
                  {/* Birthdays */}
                  <div>
                    <h3 className="font-heading text-base text-slate-800 border-b pb-2 mb-4">🎂 Birthday Wishes List</h3>
                    <form onSubmit={(e) => { e.preventDefault(); cms.addBirthday(birthdayForm); setBirthdayForm({ name: '', age: 3, date: '' }); }} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end mb-6">
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Kid's Name</label>
                        <input
                          type="text"
                          required
                          value={birthdayForm.name}
                          onChange={(e) => setBirthdayForm({ ...birthdayForm, name: e.target.value })}
                          className="font-body text-xs p-2 border border-slate-200 rounded-lg"
                          placeholder="e.g. Rahul Gupta"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Celebrating Age</label>
                        <input
                          type="number"
                          required
                          value={birthdayForm.age}
                          onChange={(e) => setBirthdayForm({ ...birthdayForm, age: parseInt(e.target.value) || 3 })}
                          className="font-body text-xs p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Date</label>
                        <input
                          type="text"
                          required
                          value={birthdayForm.date}
                          placeholder="e.g. 10 July"
                          onChange={(e) => setBirthdayForm({ ...birthdayForm, date: e.target.value })}
                          className="font-body text-xs p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <button type="submit" className="py-2.5 bg-pink-500 text-white font-heading text-xs font-bold rounded-lg border-0 cursor-pointer hover:bg-pink-600 transition-colors">
                        Add Birthday
                      </button>
                    </form>

                    <div className="flex flex-col gap-2">
                      {cms.homepageSettings.birthdays.map(b => (
                        <div key={b.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                          <span className="font-body text-xs text-slate-700">🎉 <strong>{b.name}</strong> turning {b.age} on {b.date}</span>
                          <button
                            onClick={() => cms.deleteBirthday(b.id)}
                            className="p-1.5 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today Activities */}
                  <div>
                    <h3 className="font-heading text-base text-slate-800 border-b pb-2 mb-4">⏰ Circle Routine / Activities</h3>
                    <form onSubmit={(e) => { e.preventDefault(); cms.addActivity(activityForm); setActivityForm({ time: '', title: '', desc: '' }); }} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end mb-6">
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Timing Slot</label>
                        <input
                          type="text"
                          required
                          value={activityForm.time}
                          onChange={(e) => setActivityForm({ ...activityForm, time: e.target.value })}
                          className="font-body text-xs p-2 border border-slate-200 rounded-lg"
                          placeholder="e.g. 09:30 AM"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-xs text-slate-500">Activity Title</label>
                        <input
                          type="text"
                          required
                          value={activityForm.title}
                          onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
                          className="font-body text-xs p-2 border border-slate-200 rounded-lg"
                          placeholder="e.g. Sand Play"
                        />
                      </div>
                      <div className="flex flex-col gap-1 sm:col-span-2">
                        <label className="font-body text-xs text-slate-500">Short Details</label>
                        <div className="flex gap-2 w-full">
                          <input
                            type="text"
                            required
                            value={activityForm.desc}
                            onChange={(e) => setActivityForm({ ...activityForm, desc: e.target.value })}
                            className="font-body text-xs p-2 border border-slate-200 rounded-lg flex-grow"
                            placeholder="Briefly describe sensory steps..."
                          />
                          <button type="submit" className="py-2 px-4 bg-sky-500 text-white font-heading text-xs font-bold rounded-lg border-0 cursor-pointer hover:bg-sky-600 transition-colors shrink-0">
                            Add Slot
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="flex flex-col gap-2">
                      {cms.homepageSettings.todayActivities.map(a => (
                        <div key={a.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                          <span className="font-body text-xs text-slate-700">⏱️ <strong>{a.time}</strong> - {a.title} ({a.desc})</span>
                          <button
                            onClick={() => cms.deleteActivity(a.id)}
                            className="p-1.5 bg-red-100 text-red-700 rounded-lg border-0 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Editor Modal Overlays */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 flex justify-center items-center p-6"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.form
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onSubmit={handleFormSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl max-w-md w-full flex flex-col gap-4 text-left shadow-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-heading text-base text-slate-800 border-b pb-2 mb-2">
                {editingItem ? 'Modify Item Info' : 'Create New Collection entry'}
              </h3>

              {/* Form schema bindings depending on Active Tab */}
              {activeTab === 'notices' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Notice Title</label>
                    <input
                      type="text"
                      required
                      value={noticeForm.title}
                      onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Content Detail</label>
                    <textarea
                      rows="3"
                      required
                      value={noticeForm.content}
                      onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Category</label>
                      <select
                        value={noticeForm.category}
                        onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="Academics">Academics</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Events">Events</option>
                        <option value="Circulars">Circulars</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Attachment File</label>
                      <input
                        type="text"
                        value={noticeForm.attachment}
                        placeholder="e.g. Schedule.pdf"
                        onChange={(e) => setNoticeForm({ ...noticeForm, attachment: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Event Title</label>
                    <input
                      type="text"
                      required
                      value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Description</label>
                    <textarea
                      rows="2"
                      required
                      value={eventForm.description}
                      onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Date (e.g. 2026-07-20)</label>
                      <input
                        type="text"
                        required
                        value={eventForm.date}
                        onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Time Range</label>
                      <input
                        type="text"
                        required
                        value={eventForm.time}
                        onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Location</label>
                      <input
                        type="text"
                        required
                        value={eventForm.location}
                        onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Countdown ISO</label>
                      <input
                        type="text"
                        required
                        value={eventForm.countdownTarget}
                        placeholder="2026-07-20T09:00:00"
                        onChange={(e) => setEventForm({ ...eventForm, countdownTarget: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Image Title</label>
                    <input
                      type="text"
                      required
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Category Tag</label>
                    <select
                      value={galleryForm.category}
                      onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg bg-white"
                    >
                      <option value="Playtime">Playtime</option>
                      <option value="Classroom">Classroom</option>
                      <option value="Arts & Craft">Arts & Craft</option>
                      <option value="Academics">Academics</option>
                      <option value="Sports & Health">Sports & Health</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Unsplash Photo URL Link</label>
                    <input
                      type="text"
                      required
                      value={galleryForm.url}
                      onChange={(e) => setGalleryForm({ ...galleryForm, url: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Video Title</label>
                    <input
                      type="text"
                      required
                      value={videoForm.title}
                      onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">YouTube URL Link</label>
                    <input
                      type="text"
                      required
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={videoForm.youtubeUrl}
                      onChange={(e) => setVideoForm({ ...videoForm, youtubeUrl: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Brief Description</label>
                    <textarea
                      rows="2"
                      value={videoForm.description}
                      onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg resize-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'programs' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Program Title</label>
                    <input
                      type="text"
                      required
                      value={programForm.title}
                      onChange={(e) => setProgramForm({ ...programForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Age Group</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 2 - 3 Years"
                        value={programForm.ageGroup}
                        onChange={(e) => setProgramForm({ ...programForm, ageGroup: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-xs text-slate-500">Daily Duration</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 3 Hours/Day"
                        value={programForm.duration}
                        onChange={(e) => setProgramForm({ ...programForm, duration: e.target.value })}
                        className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Learning Objectives</label>
                    <textarea
                      rows="2"
                      required
                      value={programForm.learningObjectives}
                      onChange={(e) => setProgramForm({ ...programForm, learningObjectives: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg resize-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'downloads' && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Document Title</label>
                    <input
                      type="text"
                      required
                      value={downloadForm.title}
                      onChange={(e) => setDownloadForm({ ...downloadForm, title: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">Category</label>
                    <select
                      value={downloadForm.category}
                      onChange={(e) => setDownloadForm({ ...downloadForm, category: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg bg-white"
                    >
                      <option value="Admission Documents">Admission Documents</option>
                      <option value="Academic Documents">Academic Documents</option>
                      <option value="Circulars">Circulars</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-xs text-slate-500">PDF Filename (Simulation)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Schedule_2026.pdf"
                      value={downloadForm.fileName}
                      onChange={(e) => setDownloadForm({ ...downloadForm, fileName: e.target.value })}
                      className="font-body text-xs p-2.5 border border-slate-200 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2 bg-slate-100 text-slate-600 font-heading text-xs font-bold rounded-xl border-none cursor-pointer hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-pink-500 text-white font-heading text-xs font-bold rounded-xl border-none cursor-pointer hover:bg-pink-600"
                  style={{ backgroundColor: 'var(--soft-pink)', color: 'white' }}
                >
                  Submit Changes
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
