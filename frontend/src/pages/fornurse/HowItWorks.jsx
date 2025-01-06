import React, { useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Users, 
  Shield, 
  Activity, 
  Calendar, 
  GraduationCap, 
  Heart, 
  MessageSquare 
} from "lucide-react";

const CareerPathCard = ({ icon: Icon, title, description, benefits = [], ctaText, ctaHref }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200">
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-emerald-500" />
    </div>
    <h2 className="text-2xl font-bold text-emerald-700 mb-4">
      {title.split(" ").map((word, i) =>
        i === title.split(" ").length - 1 ? (
          <span key={i} className="text-[#A390E4]">{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h2>
    <p className="text-slate-600 mb-6">{description}</p>
    <div className="space-y-3 mb-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-[#A390E4] mt-1 flex-shrink-0" />
          <span className="text-slate-600">{benefit}</span>
        </div>
      ))}
    </div>
    <a
      href={ctaHref}
      className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-sm hover:bg-emerald-600 transition-all gap-2 font-medium"
    >
      {ctaText}
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-xl font-semibold text-emerald-700 mb-2">
      {title.split(" ").map((word, i) =>
        i === title.split(" ").length - 1 ? (
          <span key={i} className="text-[#A390E4]">{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const HowItWorksForNurses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerPaths = [
    {
      icon: Users,
      title: "Join Platform Nurse",
      description: "Be part of our trusted network providing care through Nurse-Sync and iHealth-Sync platforms.",
      benefits: [
        "Immediate access to diverse client opportunities",
        "Flexible scheduling on your terms",
        "Integrated client management tools",
        "Regular, reliable income",
        "Professional liability coverage",
        "24/7 support team"
      ],
      ctaText: "Join Nurse-Sync",
      ctaHref: "/register"
    },
    {
      icon: Rocket,
      title: "Build Your Practice",
      description: "Launch and grow your independent healthcare practice with our comprehensive business tools.",
      benefits: [
        "Complete practice management suite",
        "Staff recruitment and management",
        "Automated billing and invoicing",
        "Marketing and growth tools",
        "Business analytics dashboard",
        "Scaling support"
      ],
      ctaText: "Start Your Practice",
      ctaHref: "/fornurse/build-your-practice",
    }
  ];

  const platformBenefits = [
    {
      icon: Shield,
      title: "Professional Protection",
      description: "Comprehensive liability coverage and legal support to protect your practice."
    },
    {
      icon: Activity,
      title: "Growth Analytics",
      description: "Track your performance and identify opportunities for expansion."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling system that optimizes your availability."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access to certification programs and professional development."
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Connect with peers and access mentorship opportunities."
    },
    {
      icon: MessageSquare,
      title: "Client Communication",
      description: "HIPAA-compliant messaging and telehealth tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
            Your Journey Starts <span className="block text-[#A390E4]">Here</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of healthcare professionals and build a thriving career with Nurse-Sync.
          </p>
        </div>

        {/* Career Paths */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {careerPaths.map((path, index) => (
            <CareerPathCard key={index} {...path} />
          ))}
        </div>

        {/* Platform Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-emerald-700">Nurse</span>
              <span className="text-[#A390E4]">-Sync</span>?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our platform offers everything you need to succeed in your healthcare career, 
              whether you're just starting out or looking to expand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformBenefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-[#A390E4] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who are growing their careers 
            with Nurse-Sync.
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-all gap-2"
          >
            Get Started <span className="text-[#A390E4]">Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksForNurses;
