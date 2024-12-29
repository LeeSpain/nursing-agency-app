import React from 'react';
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <main className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-white to-white"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-emerald-50 to-transparent"></div>
        
        {/* Added decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full mb-6 shadow-sm hover:shadow transition-all">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse mr-2"></div>
                <span className="text-emerald-600 font-medium">Healthcare Platform of the Future</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight bg-clip-text">
                Connecting
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent block">Care & Technology</span>
                Seamlessly
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Join the revolution in healthcare delivery. Whether you're seeking exceptional care 
                or looking to grow your nursing practice, we've got you covered.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="/get-started" 
                   className="group bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="/how-it-works" 
                   className="bg-white text-emerald-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-50 transition-all duration-300 border border-emerald-200 hover:border-emerald-300">
                  How It Works
                </a>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 group">
                  <span className="text-3xl font-bold text-emerald-500 group-hover:scale-110 transition-transform">10k+</span>
                  <span className="text-slate-600">Active Users</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex items-center gap-2 group">
                  <span className="text-3xl font-bold text-emerald-500 group-hover:scale-110 transition-transform">98%</span>
                  <span className="text-slate-600">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/60 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img
                  src="/api/placeholder/800/600"
                  alt="Healthcare Platform Interface"
                  className="w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Added overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex items-center gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-medium text-slate-600">Live Platform Activity</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Path Selection - Original Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-slate-600">
              Whether you're seeking care or providing it, we have the tools and support you need to succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Clients */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8 border border-slate-200">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-600 mb-6">
                  For Individuals & Families
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Find Your Perfect Care Match
                </h3>
                
                <p className="text-slate-600 mb-8">
                  Connect with qualified healthcare providers who understand your unique needs 
                  and preferences. Experience care that's truly personalized.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Personalized Matching</h4>
                      <p className="text-slate-600">AI-powered system finds the perfect care provider based on your needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Flexible Scheduling</h4>
                      <p className="text-slate-600">Book appointments that work with your lifestyle and preferences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Secure Communication</h4>
                      <p className="text-slate-600">Stay connected with your care provider through our secure platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Care Coordination</h4>
                      <p className="text-slate-600">All your care details managed in one convenient place</p>
                    </div>
                  </div>
                </div>

                <a href="/find-care" 
                   className="inline-flex items-center justify-center w-full bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-all duration-300">
                  Find Care Now
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* For Nurses */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8 border border-slate-200">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-600 mb-6">
                  For Healthcare Providers
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Grow Your Healthcare Practice
                </h3>
                
                <p className="text-slate-600 mb-8">
                  Access a platform that helps you find clients, manage your practice, and 
                  focus on what matters most - providing exceptional care.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Client Acquisition</h4>
                      <p className="text-slate-600">Steady stream of clients matched to your expertise and availability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Practice Management</h4>
                      <p className="text-slate-600">Comprehensive tools to manage schedules, billing, and documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Payment Processing</h4>
                      <p className="text-slate-600">Automated billing and secure payment handling for your services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Professional Growth</h4>
                      <p className="text-slate-600">Access to continuing education and professional development resources</p>
                    </div>
                  </div>
                </div>

                <a href="/join-as-nurse" 
                   className="inline-flex items-center justify-center w-full bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-all duration-300">
                  Join as a Provider
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;