import React from "react";
import { 
  BarChart, 
  DollarSign, 
  Shield, 
  Brain, 
  Calendar,
  Users,
  MessageSquare,
  Star,
  Activity,
  CheckCircle,
  Clock
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200 group">
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-emerald-500" />
    </div>
    <h3 className="text-xl font-bold text-emerald-700 mb-3">
      {title.split(' ').map((word, i) => 
        i === title.split(' ').length - 1 ? 
        <span key={i} className="text-[#A390E4]">{word} </span> : 
        <span key={i}>{word} </span>
      )}
    </h3>
    <p className="text-slate-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
          <span className="text-slate-600 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StatBlock = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <div>
      <div className="text-2xl font-bold text-[#A390E4]">{value}</div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  </div>
);

const ServicesForNurses = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Matching System",
      description: "Our intelligent platform connects you with ideal clients based on your expertise and preferences.",
      features: [
        "Smart client matching algorithms",
        "Preference-based recommendations",
        "Specialty matching",
        "Location-aware suggestions"
      ]
    },
    {
      icon: Calendar,
      title: "Intelligent Practice Management",
      description: "Streamline your practice operations with our comprehensive management tools.",
      features: [
        "Automated scheduling",
        "Real-time availability updates",
        "Appointment reminders",
        "Calendar sync"
      ]
    },
    {
      icon: Shield,
      title: "Complete Compliance Suite",
      description: "Ensure your practice meets all regulatory requirements with our integrated compliance tools.",
      features: [
        "HIPAA compliance tools",
        "Documentation templates",
        "Audit trail tracking",
        "Regular updates"
      ]
    },
    {
      icon: BarChart,
      title: "Advanced Analytics Dashboard",
      description: "Gain valuable insights into your practice performance with detailed analytics.",
      features: [
        "Performance metrics",
        "Growth tracking",
        "Satisfaction monitoring",
        "Revenue forecasting"
      ]
    },
    {
      icon: DollarSign,
      title: "Seamless Financial Management",
      description: "Handle all financial aspects of your practice efficiently and securely.",
      features: [
        "Automated invoicing",
        "Secure payments",
        "Financial reporting",
        "Revenue tracking"
      ]
    },
    {
      icon: MessageSquare,
      title: "Professional Communication Tools",
      description: "Stay connected with clients and team members through secure channels.",
      features: [
        "HIPAA-compliant messaging",
        "Video consultations",
        "Client portal",
        "Team collaboration"
      ]
    }
  ];

  const stats = [
    {
      icon: Star,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Activity,
      value: "45%",
      label: "Revenue Growth"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Platform Support"
    },
    {
      icon: Users,
      value: "5000+",
      label: "Active Providers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Comprehensive Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
            Professional Healthcare
            <span className="block text-[#A390E4]">Provider Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Empower your practice with cutting-edge tools and support designed specifically 
            for healthcare professionals.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <StatBlock key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-[#A390E4] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who are already benefiting from 
            our comprehensive suite of services.
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-all gap-2"
          >
            Get Started <span className="text-[#A390E4]">Today</span>
          </a>
          <p className="text-white/80 mt-4 text-sm">
            No commitment required • Free 30-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesForNurses;