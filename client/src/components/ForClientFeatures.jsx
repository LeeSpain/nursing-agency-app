import React from 'react';
import ForClientHeader from './ForClientHeader';

const features = [
  {
    title: "Secure Access Portal",
    description:
      "Easily access care plans, track progress, and schedule appointments from any device.",
    icon: "🔒",
  },
  {
    title: "Advanced Search Filters",
    description:
      "Find the perfect nurse by language, specialty, experience, and availability.",
    icon: "🔍",
  },
  {
    title: "Real-Time Nurse Availability",
    description:
      "View live availability of nurses and book instantly for your care needs.",
    icon: "⏰",
  },
  {
    title: "Comprehensive Nurse Profiles",
    description:
      "Access detailed profiles, including qualifications, reviews, and specialties.",
    icon: "📋",
  },
  {
    title: "Personalized Care Options",
    description:
      "Choose care plans tailored to your specific needs and preferences.",
    icon: "🎯",
  },
  {
    title: "Family Dashboard Integration",
    description:
      "Keep family members informed with real-time updates and messaging tools.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const ForClientFeatures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <ForClientHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Transform Your Care Experience
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Discover features designed to empower you and your family, providing seamless care management.
            </p>
          </div>
          <div>
            <img
              src="/images/users/forclient_features.jpg"
              alt="Client Features"
              className="w-full rounded-xl shadow-lg object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Designed With You in Mind
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start today and enjoy all the tools you need for effective care management.
          </p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForClientFeatures;
