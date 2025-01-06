import React, { useEffect } from "react";
import { ArrowRight, CheckCircle, Rocket, Users, Calendar, Activity, MessageSquare, Shield } from "lucide-react";

const BuildYourPractice = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <header className="bg-emerald-600 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Build Your Practice</h1>
          <p className="text-lg">Empowering healthcare professionals to create and grow independent practices.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Section 1: Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Why Build Your Practice with Us?</h2>
          <p className="text-lg text-slate-600 mb-6">
            Our platform provides all the tools you need to start, manage, and grow your healthcare practice. From client management to financial tracking, we've got you covered.
          </p>
        </section>

        {/* Section 2: Benefits */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
            <Shield className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Professional Protection</h3>
            <p className="text-slate-600">Comprehensive liability coverage and support to protect your practice.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
            <Activity className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Business Analytics</h3>
            <p className="text-slate-600">Track key metrics and optimize your practice with detailed insights.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
            <Calendar className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Smart Scheduling</h3>
            <p className="text-slate-600">AI-powered tools to manage appointments and client schedules efficiently.</p>
          </div>
        </section>

        {/* Section 3: How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
              <Rocket className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Step 1: Get Started</h3>
              <p className="text-slate-600">
                Sign up and create your profile. Highlight your expertise and start connecting with clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
              <Users className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Step 2: Build Your Client Base</h3>
              <p className="text-slate-600">Use our tools to attract, manage, and retain clients effectively.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="text-center bg-gradient-to-r from-emerald-500 to-[#A390E4] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white text-lg mb-6">
            Join thousands of healthcare professionals who are building successful practices.
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </main>
    </div>
  );
};

export default BuildYourPractice;
