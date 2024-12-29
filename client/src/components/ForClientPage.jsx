import React from 'react';
import ForClientHeader from './ForClientHeader';

const ForClientPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <ForClientHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Personalized Care Plans
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Choose a nurse, customize your care, and enjoy holistic support enhanced by AI. Your journey to better health starts here.
            </p>
          </div>
          <div>
            <img
              src="/images/users/forclient_care.jpg"
              alt="Empowered Client Care"
              className="w-full rounded-xl shadow-lg object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Step 1: Choose Your Nurse</h3>
              <p className="text-slate-600">
                Browse profiles of experienced nurses and select one who aligns with your needs and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Step 2: Customize Your Care</h3>
              <p className="text-slate-600">
                Select from flexible care plans tailored to your goals and lifestyle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Step 3: Access Holistic Support</h3>
              <p className="text-slate-600">
                Benefit from AI-assisted tools and 24/7 support to stay connected and informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Plan Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Care Plan Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Essential Plan</h3>
              <p className="text-slate-600 mb-6">
                Weekly check-ins and access to self-care tools.
              </p>
              <ul className="text-slate-600 space-y-3">
                <li>Weekly video consultations</li>
                <li>Personalized care resources</li>
                <li>Progress tracking</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Enhanced Plan</h3>
              <p className="text-slate-600 mb-6">
                Bi-weekly video sessions and holistic care planning.
              </p>
              <ul className="text-slate-600 space-y-3">
                <li>Bi-weekly consultations</li>
                <li>Custom wellness plans</li>
                <li>Priority messaging</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Comprehensive Plan</h3>
              <p className="text-slate-600 mb-6">
                Unlimited consultations and 24/7 AI-assisted care.
              </p>
              <ul className="text-slate-600 space-y-3">
                <li>Unlimited video consultations</li>
                <li>24/7 AI assistance</li>
                <li>Family collaboration tools</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Care?
          </h2>
          <p className="text-lg mb-8">
            Join Nurse-Sync today and experience holistic, personalized care.
          </p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForClientPage;
