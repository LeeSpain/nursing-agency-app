import { useState } from 'react';

const HomePage = () => {
  const heroImage = '/images/nurse-interface.jpg'; // Update this path to where your image is

  const features = [
    {
      icon: "👥",
      title: "Smart Staff Management",
      description: "Efficiently manage your healthcare staff with intelligent scheduling and performance tracking."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting tools."
    },
    {
      icon: "📝",
      title: "Digital Documentation",
      description: "Streamline your paperwork with our digital documentation and compliance system."
    },
    {
      icon: "💳",
      title: "Automated Billing",
      description: "Simplify your financial operations with automated billing and payment processing."
    },
    {
      icon: "🏥",
      title: "Care Planning",
      description: "Create and manage detailed care plans with our intuitive planning tools."
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description: "Access your platform anywhere with our secure mobile application."
    }
  ];

  const FeatureCard = ({ icon, title, description }) => (
    <div className="relative p-8 bg-white rounded-xl transition-all duration-300 hover:shadow-lg group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300"></div>
      <div className="relative">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-lg">NS</div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                  Nurse-Sync
                </span>
                <span className="text-xs text-slate-500 -mt-1">Healthcare Management</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-emerald-500 transition-colors">Features</a>
              <a href="#guide" className="text-slate-600 hover:text-emerald-500 transition-colors">Step Guide</a>
              <a href="#prices" className="text-slate-600 hover:text-emerald-500 transition-colors">Prices</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-500 transition-colors">Contact</a>
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
                src={heroImage}
                alt="Nurse Sync Platform"
                className="w-full rounded-2xl shadow-2xl relative"
                onError={(e) => {
                  e.target.src = '/api/placeholder/600/400';
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage your healthcare practice efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Step Guide Section */}
      <section id="guide" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Easy to Get Started
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Follow our simple process to transform your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-slate-600">Set up your profile in minutes</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Add Your Team</h3>
              <p className="text-slate-600">Invite staff and set roles</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Start Managing</h3>
              <p className="text-slate-600">Begin using our powerful tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions? Our team is here to help
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  className="mt-1 w-full rounded-md border-slate-300 shadow-sm p-3"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 w-full rounded-md border-slate-300 shadow-sm p-3"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  rows={4} 
                  className="mt-1 w-full rounded-md border-slate-300 shadow-sm p-3"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
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
                <li>Pricing</li>
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