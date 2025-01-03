import React from 'react';
import {
  Shield,
  Clock,
  Heart,
  Users,
  MessageCircle,
  Star,
  ArrowRight,
  Calendar,
  CheckCircle,
  Brain,
  CreditCard
} from 'lucide-react';
import CareSeekerHeader from '../../components/layout/CareSeekerHeader'; // Adjusted path

const CareSeekerHomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A390E4]/5 via-white to-[#A390E4]/5">
      <main className="relative pt-28 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-5 py-2.5 bg-[#A390E4]/5 rounded-full mb-8">
                <Heart className="w-5 h-5 text-[#A390E4] mr-2" />
                <span className="text-[#A390E4] font-medium text-lg">Trusted Care Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#A390E4] mb-6 leading-tight tracking-tight">
                Transform Your
                <span className="block text-emerald-600 mt-2">Healthcare Journey</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Experience personalized care that puts you first. Our platform connects you with verified healthcare professionals who understand and adapt to your unique needs.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="/find-care"
                  className="inline-flex items-center px-8 py-4 bg-[#A390E4] text-white rounded-xl text-lg font-medium shadow-lg hover:bg-[#8B76D1] transition gap-2"
                >
                  Find Care Now
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-emerald-600 transition"
                >
                  How It Works
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#A390E4]" />
                  <span className="text-lg font-medium text-slate-700">5000+ Care Providers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-[#A390E4]" />
                  <span className="text-lg font-medium text-slate-700">4.9/5 Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[400px] lg:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#A390E4]/20 to-emerald-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-xl">
                <img
                  src="/images/CareSeekerHome1.jpg" // Updated image path
                  alt="Care Platform Interface"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200/60">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#A390E4]" />
                      <span className="text-sm font-medium text-slate-700">Verified Providers</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#A390E4]" />
                      <span className="text-sm font-medium text-slate-700">Easy Scheduling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Care Matching Works Section */}
        <section className="py-24 bg-emerald-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-100/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-4">
                Find Care in Three Simple Steps
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our intelligent matching system connects you with the perfect healthcare provider
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#A390E4] via-emerald-400 to-emerald-500"></div>

              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-300/20 rounded-2xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all relative">
                  <div className="absolute -top-4 left-8 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-4">Share Your Needs</h3>
                  <p className="text-slate-600">Tell us about your care requirements, schedule preferences, and specific needs.</p>
                </div>
              </div>

              {/* Step 2 - Keeping purple for contrast */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A390E4]/20 to-[#C5B8F0]/20 rounded-2xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#A390E4]/20 shadow-lg hover:shadow-xl transition-all relative">
                  <div className="absolute -top-4 left-8 bg-[#A390E4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                    2
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-[#A390E4]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-[#A390E4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#A390E4] mb-4">AI Matching</h3>
                  <p className="text-slate-600">Our AI analyzes thousands of providers to find your perfect healthcare matches.</p>
                </div>
              </div>

              {/* Step 3 - Back to green */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-300/20 rounded-2xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all relative">
                  <div className="absolute -top-4 left-8 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                    3
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-4">Connect & Book</h3>
                  <p className="text-slate-600">Review matched providers, schedule consultations, and begin your care journey.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a href="/get-started" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-[#A390E4]/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#A390E4] mb-4">Why Choose Us?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experience healthcare that puts your needs first.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Purple */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A390E4]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-[#A390E4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-[#A390E4]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#A390E4] mb-3">Verified Professionals</h3>
                  <p className="text-slate-600 mb-4">100% background verified healthcare providers with complete credential checks.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <Users className="w-4 h-4" />
                    <span>5000+ Active Providers</span>
                  </div>
                  <button className="text-[#A390E4] hover:text-[#8B76D1] text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 2 - Green */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 mb-3">Smart Scheduling</h3>
                  <p className="text-slate-600 mb-4">Intelligent booking system with real-time availability updates.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>24/7 Booking Available</span>
                  </div>
                  <button className="text-emerald-500 hover:text-emerald-600 text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 3 - Purple */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A390E4]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-[#A390E4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-[#A390E4]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#A390E4] mb-3">AI-Powered Matching</h3>
                  <p className="text-slate-600 mb-4">Advanced algorithms ensure perfect provider-patient matches.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <Star className="w-4 h-4" />
                    <span>98% Match Success Rate</span>
                  </div>
                  <button className="text-[#A390E4] hover:text-[#8B76D1] text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 4 - Green */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 mb-3">Secure Communication</h3>
                  <p className="text-slate-600 mb-4">HIPAA-compliant messaging and video consultations.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <Shield className="w-4 h-4" />
                    <span>End-to-End Encryption</span>
                  </div>
                  <button className="text-emerald-500 hover:text-emerald-600 text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 5 - Purple */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A390E4]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-[#A390E4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-8 h-8 text-[#A390E4]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#A390E4] mb-3">Easy Payments</h3>
                  <p className="text-slate-600 mb-4">Secure payment processing with transparent pricing.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Hidden Fees</span>
                  </div>
                  <button className="text-[#A390E4] hover:text-[#8B76D1] text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 6 - Green */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 mb-3">Care Coordination</h3>
                  <p className="text-slate-600 mb-4">Seamless collaboration between providers and family members.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <Heart className="w-4 h-4" />
                    <span>Family-Centered Care</span>
                  </div>
                  <button className="text-emerald-500 hover:text-emerald-600 text-sm flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#A390E4] to-emerald-500">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Find Your Perfect Care Match?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have found their ideal care providers through our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/get-started"
                className="inline-flex items-center px-8 py-4 bg-white text-[#A390E4] rounded-lg shadow-lg hover:bg-[#A390E4]/10 transition gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/browse-providers"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600 transition"
              >
                Browse Providers
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareSeekerHomePage;