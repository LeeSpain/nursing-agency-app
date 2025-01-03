import React from "react";
import {
  Brain,
  Users,
  Calendar,
  Shield,
  ArrowRight,
  CheckCircle,
  Activity,
  MessageCircle,
  Heart,
} from "lucide-react";

const Step = ({ number, title, description, icon: Icon }) => (
  <div className="relative">
    {number < 4 && (
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#A390E4]/20 hidden md:block"></div>
    )}
    <div className="flex items-start gap-6">
      <div className="w-12 h-12 rounded-xl bg-[#A390E4] flex items-center justify-center shrink-0">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-[#A390E4]" />
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 mb-4">{description}</p>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
    <div className="w-12 h-12 rounded-xl bg-[#A390E4]/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#A390E4]" />
    </div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const HowItWorksHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#A390E4]/5 via-white to-[#A390E4]/5 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-5 py-2.5 bg-[#A390E4]/10 rounded-full mb-8">
              <Heart className="w-5 h-5 text-[#A390E4] mr-2" />
              <span className="text-[#A390E4] font-medium text-lg">
                Trusted Care Solutions
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#A390E4] mb-6 leading-tight tracking-tight">
              Discover <span className="text-emerald-600">Effortless Care</span> Coordination
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our step-by-step process connects you with the perfect care provider, tailored to your unique needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#steps"
                className="inline-flex items-center px-8 py-4 bg-[#A390E4] text-white rounded-xl text-lg font-medium shadow-lg hover:bg-[#8B76D1] transition gap-2"
              >
                Explore Steps
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/get-started"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-emerald-600 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[480px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A390E4]/20 to-emerald-400/20 rounded-2xl blur-2xl"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-xl">
              <img
                src="/images/Nurse-how1.jpg"
                alt="Effortless Care Coordination"
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
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Step 1: Initial Assessment",
      description:
        "Complete a detailed assessment of your care needs, preferences, and availability. This helps us understand your unique requirements.",
    },
    {
      icon: Brain,
      title: "Step 2: AI Matching",
      description:
        "Our intelligent AI system evaluates your profile and matches you with care providers who align with your specific needs and preferences.",
    },
    {
      icon: Calendar,
      title: "Step 3: Care Plan Creation",
      description:
        "Collaborate with your matched care provider to build a personalized care plan, including schedules, medication reminders, and communication protocols.",
    },
    {
      icon: Shield,
      title: "Step 4: Ongoing Support",
      description:
        "Enjoy continuous care with 24/7 monitoring, regular updates, and seamless family collaboration through our integrated platform.",
    },
  ];

  const benefits = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description:
        "Track health metrics and care delivery in real-time through our advanced monitoring system.",
    },
    {
      icon: MessageCircle,
      title: "Seamless Communication",
      description:
        "Stay connected with care providers and family members through our integrated messaging platform.",
    },
    {
      icon: Brain,
      title: "AI Guardian",
      description:
        "Benefit from AI-powered insights and recommendations for optimal care outcomes.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Regular quality checks and feedback systems ensure the highest standard of care.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A390E4]/5 via-white to-[#A390E4]/5">
      <HowItWorksHero />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <section id="steps" className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            How It Works
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-[#A390E4]/10 to-emerald-400/10 rounded-2xl px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Key Benefits</h2>
          <p className="text-slate-600 mb-6 max-w-3xl mx-auto">
            Discover the advantages of our system for personalized and seamless care.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
