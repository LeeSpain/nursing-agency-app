import React from 'react';
import ForNurseHeader from '../../components/layout/ForNurseHeader'; // Adjusted path
import {
  ArrowRight,
  Shield,
  Calendar,
  Heart,
  Stethoscope,
  Users,
  Brain,
  MessageCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  ClipboardCheck,
  Zap,
  Rocket,
  GraduationCap,
  BarChart,
  DollarSign,
  Medal,
  Target
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all">
    <Icon className="w-10 h-10 text-emerald-500 mb-4" />
    <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const BenefitSection = ({ icon: Icon, title, description, points }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-emerald-700">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
    <div className="space-y-3">
      {points.map((point, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
          <p className="text-slate-600">{point}</p>
        </div>
      ))}
    </div>
  </div>
);

const MembershipCard = ({ title, subtitle, price, features, recommended, href }) => (
  <div className={`relative ${recommended ? 'scale-105' : ''}`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Recommended
        </div>
      </div>
    )}
    <div className={`p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all ${
      recommended ? 'border-2 border-emerald-500' : 'border border-slate-200'
    }`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-emerald-700 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{subtitle}</p>
        <div className="text-3xl font-bold text-emerald-600 mb-2">{price}</div>
      </div>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <span className="text-slate-600">{feature}</span>
          </div>
        ))}
      </div>
      <a
        href={href}
        className={`block text-center py-3 px-6 rounded-xl font-medium transition-all ${
          recommended
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
        }`}
      >
        Get Started
      </a>
    </div>
  </div>
);

const ForNurseHomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <ForNurseHeader />
      <main className="relative pt-28 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 to-white/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-100/20 to-transparent"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="text-left lg:pr-8">
                <div className="inline-flex items-center px-6 py-2 bg-emerald-600/5 rounded-full mb-6 backdrop-blur-sm">
                  <Stethoscope className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-emerald-600 font-medium">Your Success Journey Starts Here</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-6 leading-tight">
                  Build Your Healthcare
                  <span className="text-violet-500 block">Practice Your Way</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8">
                  Take control of your career with our comprehensive platform that puts you in charge 
                  of your growth, schedule, and earnings.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="/register"
                    className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-all gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Watch Demo
                  </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Users className="w-6 h-6 text-emerald-500 mb-2" />
                    <div className="text-2xl font-bold text-emerald-700">5,000+</div>
                    <div className="text-slate-600">Active Providers</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <DollarSign className="w-6 h-6 text-emerald-500 mb-2" />
                    <div className="text-2xl font-bold text-emerald-700">40%+</div>
                    <div className="text-slate-600">Revenue Growth</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Medal className="w-6 h-6 text-emerald-500 mb-2" />
                    <div className="text-2xl font-bold text-emerald-700">98%</div>
                    <div className="text-slate-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative lg:h-[500px] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/ForNurseHome1.jpg"
                  alt="Nurse working with healthcare platform"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="max-w-7xl mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <BenefitSection
              icon={Rocket}
              title="Business Growth Tools"
              description="Everything you need to build and scale your practice"
              points={[
                "Complete client management dashboard for tracking appointments and care plans",
                "Automated scheduling and calendar management tools",
                "Integrated invoicing and payment processing systems",
                "Marketing tools to showcase your services and expertise"
              ]}
            />
            <BenefitSection
              icon={Target}
              title="Revenue & Growth"
              description="Maximize your earnings and expand your practice"
              points={[
                "Keep the majority of your earnings with transparent platform fees",
                "Opportunities for premium services and additional revenue streams",
                "Marketing support to attract your ideal clients",
                "Tools to scale from individual practice to larger operations"
              ]}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-emerald-600 mb-4">
              Tools for Success
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Everything you need to run and grow your healthcare practice efficiently.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Brain}
                title="Smart Client Matching"
                description="AI-powered system connects you with clients that match your expertise and preferences."
              />
              <FeatureCard
                icon={Calendar}
                title="Intelligent Scheduling"
                description="Manage your time effectively with automated scheduling and calendar optimization."
              />
              <FeatureCard
                icon={MessageCircle}
                title="Secure Communication"
                description="HIPAA-compliant messaging system for client and team communication."
              />
              <FeatureCard
                icon={BarChart}
                title="Practice Analytics"
                description="Track your growth with detailed insights and performance metrics."
              />
              <FeatureCard
                icon={Shield}
                title="Compliance & Security"
                description="Built-in tools ensure your practice meets all regulatory requirements."
              />
              <FeatureCard
                icon={GraduationCap}
                title="Professional Growth"
                description="Access training resources and earn certifications to enhance your practice."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-emerald-500 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Success Story Today
            </h2>
            <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who are growing their practices and 
              achieving professional independence.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 p-4 bg-emerald-600/50 rounded-2xl">
            <a
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-medium hover:bg-emerald-50 transition-all gap-2"
                >
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-xl text-lg font-medium hover:bg-emerald-700 transition-all"
                >
                  Request Demo
                </a>
            </div>
            <p className="text-emerald-100 mt-4">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForNurseHomePage;

