import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

export const PrivacyPolicy = () => {
  return (
    <div className="py-12 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-8 text-left text-slate-700">
      <div className="text-center flex flex-col items-center gap-3 mb-6">
        <FaShieldAlt className="text-5xl text-sky-500" />
        <h1 className="font-heading text-3xl text-slate-800">Privacy Policy & Children Safety</h1>
        <p className="font-body text-xs text-slate-400">Last updated: July 2026</p>
      </div>

      <div className="flex flex-col gap-6 font-body text-xs md:text-sm leading-relaxed">
        <p>
          At <strong>Illusion Play School</strong>, children's safety and parent's privacy are our highest values. This policy details how we collect, store, and utilize data, including CCTV footage, photos, and admission details.
        </p>

        <h3 className="font-heading text-base text-slate-800 mt-2">1. Personal Information Collection</h3>
        <p>
          We collect child details (name, date of birth, medical records, vaccine histories) and parent coordinates solely for admissions and communication. We do not sell or trade records with third-party advertising companies.
        </p>

        <h3 className="font-heading text-base text-slate-800 mt-2">2. Campus Security & CCTV Access</h3>
        <p>
          CCTV feeds are monitored in real-time by security personnel. Live-stream logins, if provided to parents, are encrypted and restricted to the parent's enrolled child classroom. Sharing credentials publicly is strictly prohibited.
        </p>

        <h3 className="font-heading text-base text-slate-800 mt-2">3. Media Release & Photos Consent</h3>
        <p>
          Photos or videos captured during activities are uploaded to the gallery only after written consent from parents during admission. If you wish to take down any picture of your child, drop an email to the administrator, and it will be deleted immediately.
        </p>
      </div>
    </div>
  );
};
