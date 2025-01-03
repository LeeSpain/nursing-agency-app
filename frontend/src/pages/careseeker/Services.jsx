import React from "react";
import { UserPlus, Pill, Phone, HeartPulse, Users, Video, Heart, ArrowRight } from "lucide-react";
import CareSeekerHeader from "../../components/layout/CareSeekerHeader";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-200 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 via-white to-emerald-50/30 blur-2xl opacity-50"></div>
    <div className="relative z-10">
      <Icon className="w-12 h-12 text-[#A390E4] mb-4" />
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const ServicesHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#A390E4]/5 via-white to-[#A390E4]/5 pb-8"> {/* Reduced bottom padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20"> {/* Reduced vertical padding */}
          {/* Hero Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-5 py-2.5 bg-[#A390E4]/10 rounded-full mb-6">
              <Heart className="w-5 h-5 text-[#A390E4] mr-2" />
              <span className="text-[#A390E4] font-medium text-lg">
                Comprehensive Care Services
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#A390E4] leading-tight mb-6">
              Discover <span className="text-emerald-600">Personalized Care</span> for Your Unique Needs
            </h1>
            <p className="text-xl text-slate-600 mb-6"> {/* Reduced bottom margin */}
              From tailored care plans to advanced wellness monitoring, our
              services are designed to provide seamless and compassionate support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-[#A390E4] text-white rounded-xl text-lg font-medium shadow-lg hover:bg-[#8B76D1] transition gap-2"
              >
                Explore Services
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-emerald-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[360px] lg:h-[400px]"> {/* Reduced height */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#A390E4]/20 to-emerald-400/20 rounded-2xl blur-2xl"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-xl">
              <img
                src="/images/Nurse-care1.jpg" // Updated to your specified image path
                alt="Compassionate Care Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: UserPlus,
      title: "Personalized Care",
      description:
        "Receive support from a dedicated nurse who understands your unique needs and creates tailored care plans.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Stay on track with reminders, schedules, and professional guidance to ensure safe medication use.",
    },
    {
      icon: Phone,
      title: "24/7 AI Assistance",
      description:
        "Our AI Nurse Guardian is always on hand, providing advice and support whenever you need it most.",
    },
    {
      icon: HeartPulse,
      title: "Wellness Monitoring",
      description:
        "Track vital health metrics and receive regular check-ins to ensure your continued well-being.",
    },
    {
      icon: Users,
      title: "Family Collaboration",
      description:
        "Work seamlessly with your family and care team to keep everyone informed and involved in your care.",
    },
    {
      icon: Video,
      title: "Video Consultations",
      description:
        "Easily schedule virtual consultations with your dedicated nurse from the comfort of your home.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A390E4]/10 via-white to-[#A390E4]/10">
      <CareSeekerHeader />
      <ServicesHero />
      <main className="max-w-7xl mx-auto px-4 py-12"> {/* Reduced top padding */}
        {/* Services Section */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </section>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#A390E4] to-emerald-500 rounded-2xl p-12 text-center"> {/* Reduced margin */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto"> {/* Reduced bottom margin */}
            Let us help you find the perfect care solution tailored to your unique needs.
          </p>
          <button className="px-8 py-4 bg-white text-[#A390E4] rounded-xl font-medium hover:bg-[#A390E4]/10 transition-all">
            Explore Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Services;
