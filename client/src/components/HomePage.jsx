import React, { useState } from 'react';
import NurseSyncHero from './assets/nurse-sync-hero.png'; // Replace this path with your actual image path

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <main className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 top-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -left-1/4 bottom-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          {/* Updated Image */}
          <img
            src={NurseSyncHero}
            alt="Nurse Sync Hero"
            className="w-full max-w-3xl mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            From Single Client<br />
            To Global Agency<br />
            <span className="text-emerald-500">We Grow With You</span>
          </h1>
          <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">
            Whether you're caring for one person or managing multiple teams worldwide,
            Nurse-Sync scales to meet your needs.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-600 transform hover:scale-105 transition-all">
            Start Your Journey
          </button>
        </div>
      </main>

      {/* Rest of your content */}
      <section className="py-16 bg-white">
        {/* Existing content... */}
      </section>

      <section className="py-16 bg-emerald-50">
        {/* Global Impact Section */}
      </section>

      <section className="bg-emerald-500 text-white py-16">
        {/* Call to Action */}
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
