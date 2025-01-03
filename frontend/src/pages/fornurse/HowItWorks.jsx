import React from "react";
import { ArrowRight, ClipboardCheck, CheckCircle, Rocket, GraduationCap, Heart } from "lucide-react";

const HowItWorksForNurses = () => (
  <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
    {/* Spacer to push content below the header */}
    <div className="mt-20"></div>
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-emerald-700 text-center mb-8">
        How It Works for Nurses
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12">
        Start small, grow at your own pace, and join a thriving community of healthcare professionals.
      </p>

      {/* Step-by-Step Workflow */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <Rocket className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Sign Up</h2>
          <p className="text-slate-600">
            Create your profile to showcase your skills, certifications, and availability. Highlight your expertise and connect with clients effortlessly.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <ClipboardCheck className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Get Matched</h2>
          <p className="text-slate-600">
            Our AI-powered matching system connects you with clients tailored to your skills and preferences, ensuring the perfect fit every time.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Grow Your Practice</h2>
          <p className="text-slate-600">
            Manage clients, track schedules, process payments, and scale your practice using our advanced tools.
          </p>
        </div>
      </div>

      {/* Additional Features */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-emerald-700 text-center mb-8">
          Tools to Empower Your Journey
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <GraduationCap className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Continuous Learning</h3>
            <p className="text-slate-600">
              Access training programs and certifications to enhance your skills and boost your career.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <Heart className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Community Support</h3>
            <p className="text-slate-600">
              Join a network of professionals who share insights, tips, and opportunities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <ArrowRight className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Cross-Platform Opportunities</h3>
            <p className="text-slate-600">
              Work across our ecosystem of platforms, including iHealth-Sync and Med-Sync.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20 text-center">
        <a
          href="/register"
          className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl shadow-lg hover:bg-emerald-600 transition gap-2"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </div>
  </div>
);

export default HowItWorksForNurses;
