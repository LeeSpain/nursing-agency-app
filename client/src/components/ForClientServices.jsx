import React from 'react';

const ForClientServices = () => {
  const services = [
    {
      title: "Personalized Care Plans",
      description: "Receive tailored care plans that meet your specific health and wellness needs.",
      image: "/images/service-care-plan.jpg",
    },
    {
      title: "Caregiver Matching",
      description: "Find the perfect caregiver with advanced matching algorithms based on your preferences.",
      image: "/images/service-matching.jpg",
    },
    {
      title: "Real-Time Support",
      description: "Access 24/7 assistance through our platform for immediate care and advice.",
      image: "/images/service-support.jpg",
    },
    {
      title: "Family Integration",
      description: "Keep your loved ones informed and involved with shared dashboards and updates.",
      image: "/images/service-family.jpg",
    },
    {
      title: "Health Monitoring Tools",
      description: "Track your health metrics with integrated tools and analytics for better outcomes.",
      image: "/images/service-health-monitoring.jpg",
    },
    {
      title: "AI-Driven Insights",
      description: "Leverage AI to gain actionable insights for improving your overall care experience.",
      image: "/images/service-ai-insights.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Discover Our <span className="text-emerald-500">Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Explore a range of services designed to simplify and enhance your care journey.
            </p>
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-600 transition-colors">
              Get Started
            </button>
          </div>
          <div>
            <img
              src="/images/services-hero.jpg"
              alt="Discover Our Services"
              className="w-full h-72 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 rounded-xl shadow-md mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">What Clients Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-slate-600 italic mb-4">"The personalized care plans have made such a difference in my daily life!"</p>
              <h4 className="text-slate-900 font-bold">- Emily R.</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-slate-600 italic mb-4">"The family dashboard keeps everyone updated seamlessly."</p>
              <h4 className="text-slate-900 font-bold">- Mark T.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-white/90">
            Sign up today and discover how our services can empower your care journey.
          </p>
          <button className="bg-white text-emerald-500 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition-colors">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForClientServices;
