import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaDownload, FaEye, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { useCMS } from '../context/CMSContext';

export const Downloads = () => {
  const { downloads } = useCMS();
  const [previewItem, setPreviewItem] = useState(null);

  const triggerDownload = (fileName) => {
    alert(`Starting download of circular: ${fileName} (simulated PDF)`);
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10 text-left">
      {/* Title */}
      <div className="text-center flex flex-col items-center gap-3">
        <span className="font-heading text-[10px] text-amber-600 font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded">
          circulars
        </span>
        <h1 className="font-heading text-3xl md:text-5xl text-slate-900">
          Academic Downloads & Resources
        </h1>
        <p className="font-body text-xs md:text-sm text-slate-500 max-w-xl">
          Collect administrative circulars, prospectus handbooks, fee structures, and vaccine guidelines.
        </p>
      </div>

      {/* Downloads Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {downloads.map(dl => (
          <motion.div
            key={dl.id}
            whileHover={{ y: -3 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between hover:border-amber-600 transition-colors"
          >
            <div className="flex flex-col gap-4">
              <span className="text-4xl text-amber-600 shrink-0">
                <FaFilePdf />
              </span>
              <div>
                <span className="font-heading text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  {dl.category}
                </span>
                <h3 className="font-heading text-base text-slate-900 leading-tight">{dl.title}</h3>
                <p className="font-body text-xs text-slate-500 mt-2 leading-relaxed h-12 line-clamp-3">
                  {dl.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <span className="font-body text-[9px] text-slate-400 font-bold">Size: {dl.fileSize || '1.1 MB'}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewItem(dl)}
                  className="font-heading text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 border-0 rounded cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <FaEye /> Preview
                </button>
                <button
                  onClick={() => triggerDownload(dl.fileName || 'handbook.pdf')}
                  className="font-heading text-[9px] font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 px-3 py-2 border-0 rounded cursor-pointer flex items-center gap-1 transition-colors"
                  style={{ backgroundColor: 'var(--sky-blue)' }}
                >
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Styled simulated PDF previewer */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 flex justify-center items-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl w-full max-w-2xl h-[85vh] flex flex-col overflow-hidden shadow-lg border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PDF Preview Topbar */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between select-none border-b border-slate-800">
                <span className="font-heading text-xs tracking-wider uppercase flex items-center gap-2">
                  <FaFilePdf className="text-amber-500 text-base" /> {previewItem.title} - Institutional Preview
                </span>
                <button
                  onClick={() => setPreviewItem(null)}
                  className="text-slate-400 bg-transparent border-0 text-lg cursor-pointer hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              {/* PDF Canvas Sheet */}
              <div className="p-8 flex-grow overflow-y-auto flex justify-center bg-slate-100">
                <div className="bg-white w-full max-w-lg min-h-[750px] shadow p-10 flex flex-col gap-6 text-left border border-slate-200 relative text-slate-800 font-body">
                  {/* Paper Header */}
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4 select-none">
                    <div className="flex items-center gap-2.5">
                      <FaGraduationCap className="text-2xl text-slate-800" />
                      <div className="flex flex-col">
                        <span className="font-heading text-xs font-bold text-slate-900 uppercase tracking-widest">ILLUSION PLAY SCHOOL</span>
                        <span className="text-[7px] font-body text-slate-400 uppercase tracking-wide">Plot No. 1, Sector 132, Noida</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-body text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">
                      Official Doc
                    </span>
                  </div>

                  {/* Stamp seal */}
                  <div className="absolute top-[40%] left-[30%] opacity-5 border-4 border-double border-amber-600 rounded-full w-36 h-36 flex items-center justify-center text-amber-600 font-heading text-[10px] font-bold uppercase tracking-widest rotate-[25deg] select-none pointer-events-none">
                    Illusion verified stamp
                  </div>

                  {/* Content title */}
                  <div className="text-center">
                    <h3 className="font-heading text-sm text-slate-900 uppercase tracking-wider underline underline-offset-4">
                      {previewItem.title}
                    </h3>
                    <span className="text-[8px] font-body text-slate-400 mt-1 block">Release Category: {previewItem.category}</span>
                  </div>

                  {/* Document Content */}
                  <div className="flex flex-col gap-4 font-body text-[11px] text-slate-600 leading-relaxed">
                    <p>
                      This document is an administrative announcement concerning <strong>{previewItem.title}</strong> released for parent reference.
                    </p>
                    <p>
                      Please verify the coordinates listed in the annexure. For clarifications, connect with the coordinator office.
                    </p>

                    {/* Dummy Schedule / Data table if it's Calendar or Fee structure */}
                    <div className="border border-slate-200 rounded overflow-hidden mt-2">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="p-2 border-r border-slate-200 font-heading text-[9px] text-slate-700 text-left uppercase tracking-wide">Particulars</th>
                            <th className="p-2 font-heading text-[9px] text-slate-700 text-left uppercase tracking-wide">Timeline/Detail</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="p-2 border-r border-slate-200">Session Commencement</td>
                            <td className="p-2">June 2026</td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="p-2 border-r border-slate-200">Security Clearance Log</td>
                            <td className="p-2">Verified (CCTV Gates)</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-r border-slate-200">Reference Token</td>
                            <td className="p-2">Ref: #IPS-2026-ADM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-6 select-none">
                    <div className="flex flex-col items-center">
                      <span className="font-body text-[8px] text-slate-400">Prepared:</span>
                      <span className="font-heading text-[9px] text-slate-900 italic mt-1">Sonia Nair</span>
                      <span className="text-[6px] font-body text-slate-400">Admin head</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-body text-[8px] text-slate-400">Approved:</span>
                      <span className="font-heading text-[9px] text-slate-900 italic mt-1">Anjali Sharma</span>
                      <span className="text-[6px] font-body text-slate-400">Principal office</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
