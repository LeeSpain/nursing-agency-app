import { useState } from 'react';
import nurseInterface from '../assets/nurse-interface.jpg';

const FeatureCard = ({ icon, title, description, isActive, onClick }) => (
  <div
    className={`p-8 rounded-xl transition-all duration-300 cursor-pointer ${
      isActive 
        ? 'bg-emerald-500 text-white' 
        : 'bg-white hover:bg-emerald-50'
    } border border-slate-200 hover:border-emerald-200`}
    onClick={onClick}
  >
    <div className="text-4xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold my-4">{title}</h3>
    <p className={isActive ? 'text-white/90' : 'text-slate-600'}>
      {description}
    </p>
  </div>
);

const StatCard = ({ title, value, trend }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-slate-600 mb-2">{title}</h3>
    <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className={`text-sm ${trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
      {trend} vs last month
    </div>
  </div>
);

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: "👥",
      title: "Client Access",
      description: "Secure portal for clients to view care plans and schedules"
    },
    {
      icon: "📊",
      title: "Staff Management",
      description: "Complete workforce management with auto-invoicing"
    },
    {
      icon: "📝",
      title: "Document Management",
      description: "Digital documentation and record keeping system"
    },
    {
      icon: "💳",
      title: "Auto-Invoicing",
      description: "Automated billing and payment processing"
    },
    {
      icon: "📈",
      title: "Advanced Analytics",
      description: "Real-time insights and performance metrics"
    },
    {
      icon: "📅",
      title: "Care Planning",
      description: "Comprehensive care plan management"
    }
  ];

  const stats = [
    { title: "Patient Satisfaction", value: "94%", trend: "+2.5%" },
    { title: "Staff Efficiency", value: "87%", trend: "+4.3%" },
    { title: "Documentation Rate", value: "98%", trend: "+1.2%" },
    { title: "Response Time", value: "15min", trend: "-22%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-500">
              <span className="mr-2">💚</span>
              Nurse-Sync
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-emerald-500">Features</a>
              <a href="#analytics" className="text-slate-600 hover:text-emerald-500">Analytics</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-500">Contact</a>
            </div>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="text-left">
        <div className="inline-block px-6 py-2 bg-emerald-100 rounded-full text-emerald-600 font-medium mb-4">
          Next-Gen Healthcare Management
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          From Single Client<br />
          To Global Agency<br />
          <span className="text-emerald-500">We Grow With You</span>
        </h1>

        <p className="text-slate-600 text-xl mb-8">
          Whether you're caring for one person or managing multiple teams worldwide,
          Nurse-Sync scales to meet your needs with advanced AI-powered solutions.
        </p>

        <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-600 transition-colors">
          Start Your Journey
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-2xl"></div>
        <img
          src={nurseInterface}
          alt="Nurse Sync Advanced Interface"
          className="w-full rounded-2xl shadow-2xl relative object-cover"
        />
      </div>
    </div>
  </div>
</main>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Advanced Features
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto text-center mb-16">
            Experience the future of healthcare management with our cutting-edge features
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                {...feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-emerald-50" id="analytics">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Advanced Analytics & Insights
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto text-center mb-16">
            Make data-driven decisions with our comprehensive analytics dashboard
          </p>

          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-2xl"></div>
            <img
              src={nurseInterface}
              alt="Analytics Dashboard"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl relative"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <button className="bg-white text-emerald-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Nurse-Sync</h3>
              <p className="text-slate-400">Next-generation healthcare management platform</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Features</li>
                <li>Analytics</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;