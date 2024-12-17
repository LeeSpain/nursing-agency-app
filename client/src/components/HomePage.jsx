import React, { useState } from 'react';

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

      {/* Service Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
            {['individual', 'small-team', 'agency'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-lg transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'bg-emerald-50 text-slate-600 hover:bg-emerald-100'
                }`}
              >
                {tab === 'individual' ? 'Individual Nurse' : tab === 'small-team' ? 'Small Team' : 'Full Agency'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {activeTab === 'individual' && (
              <>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Single Client Care Made Simple</h2>
                  <p className="text-lg text-slate-600">
                    Perfect for independent nurses managing individual client care.
                    Start your private practice with confidence.
                  </p>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <img src="/api/placeholder/80/80" alt="Sarah" className="w-16 h-16 rounded-full" />
                      <div>
                        <p className="text-slate-600 italic">
                          "As a private nurse in London caring for a single client,
                          Nurse-Sync has simplified everything from scheduling to documentation."
                        </p>
                        <p className="font-semibold mt-2">Sarah M.</p>
                        <p className="text-sm text-slate-500">Private Nurse, UK</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Easy Scheduling</h3>
                    <p className="text-slate-600">Manage your appointments and care routines effortlessly</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Documentation</h3>
                    <p className="text-slate-600">Keep all client records organized and secure</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Care Planning</h3>
                    <p className="text-slate-600">Create and manage personalized care plans</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'small-team' && (
              <>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Small Team Management</h2>
                  <p className="text-lg text-slate-600">
                    Perfect for growing practices with multiple nurses and clients.
                  </p>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <img src="/api/placeholder/80/80" alt="Maria" className="w-16 h-16 rounded-full" />
                      <div>
                        <p className="text-slate-600 italic">
                          "Managing our team of 5 nurses has become seamless. The coordination
                          features are perfect for our growing practice."
                        </p>
                        <p className="font-semibold mt-2">Maria R.</p>
                        <p className="text-sm text-slate-500">Team Lead, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Team Coordination</h3>
                    <p className="text-slate-600">Coordinate care across your nursing team</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Resource Management</h3>
                    <p className="text-slate-600">Optimize staff allocation and scheduling</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Performance Tracking</h3>
                    <p className="text-slate-600">Monitor team metrics and client satisfaction</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'agency' && (
              <>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Full Agency Solutions</h2>
                  <p className="text-lg text-slate-600">
                    Enterprise-level management for large nursing agencies.
                  </p>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <img src="/api/placeholder/80/80" alt="James" className="w-16 h-16 rounded-full" />
                      <div>
                        <p className="text-slate-600 italic">
                          "Operating across multiple locations with over 50 nurses requires
                          robust systems. Nurse-Sync delivers everything we need."
                        </p>
                        <p className="font-semibold mt-2">James W.</p>
                        <p className="text-sm text-slate-500">Agency Director, Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Multi-Location Management</h3>
                    <p className="text-slate-600">Manage teams across different locations</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Advanced Analytics</h3>
                    <p className="text-slate-600">Comprehensive reporting and insights</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Compliance Management</h3>
                    <p className="text-slate-600">Stay compliant across multiple jurisdictions</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Making a Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-emerald-500 text-4xl mb-4">5000+</div>
              <h3 className="text-xl font-semibold mb-2">Nurses Worldwide</h3>
              <p className="text-slate-600">Empowering healthcare professionals across the globe</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-emerald-500 text-4xl mb-4">25+</div>
              <h3 className="text-xl font-semibold mb-2">Countries</h3>
              <p className="text-slate-600">Supporting healthcare delivery internationally</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-emerald-500 text-4xl mb-4">1M+</div>
              <h3 className="text-xl font-semibold mb-2">Care Hours</h3>
              <p className="text-slate-600">Facilitating quality healthcare delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg mb-8">Join nurses worldwide who are growing their practice with Nurse-Sync</p>
          <button className="bg-white text-emerald-500 px-8 py-3 rounded-full text-lg hover:bg-emerald-50">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}