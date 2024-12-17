import React, { useState } from 'react';

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('dashboard');

  const categories = {
    dashboard: {
      title: "Intelligent Dashboard",
      description: "Your command center for client care and practice management",
      features: [
        {
          title: "Real-Time Overview",
          description: "Live updates and key metrics at a glance",
          details: [
            "Client status monitoring",
            "Staff availability tracker",
            "Upcoming appointments",
            "Task priorities",
            "Alert notifications"
          ],
          icon: "📊"
        },
        {
          title: "Customizable Views",
          description: "Personalize your dashboard for your specific needs",
          details: [
            "Role-based layouts",
            "Drag-and-drop widgets",
            "Custom metric tracking",
            "Favorite actions",
            "Quick access tools"
          ],
          icon: "🎯"
        },
        {
          title: "Performance Metrics",
          description: "Track and analyze key performance indicators",
          details: [
            "Care quality metrics",
            "Staff utilization",
            "Client satisfaction",
            "Response times",
            "Financial overview"
          ],
          icon: "📈"
        }
      ]
    },
    clinical: {
      title: "Clinical Tools",
      description: "Comprehensive care management features",
      features: [
        {
          title: "Care Planning",
          description: "Create and manage detailed care plans",
          details: [
            "Template library",
            "Progress tracking",
            "Risk assessments",
            "Goal setting",
            "Outcome monitoring"
          ],
          icon: "🏥"
        }
      ]
    },
    management: {
      title: "Practice Management",
      description: "Tools to run your practice efficiently",
      features: [
        {
          title: "Staff Management",
          description: "Comprehensive team coordination tools",
          details: [
            "Scheduling system",
            "Qualification tracking",
            "Performance reviews",
            "Training management",
            "Communication tools"
          ],
          icon: "👥"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -right-1/4 top-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -left-1/4 bottom-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Powerful Features for
            <br />
            <span className="text-emerald-500">Every Stage of Growth</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            From individual practitioners to large agencies, our intelligent dashboard 
            and comprehensive features adapt to your needs
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="sticky top-16 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4 py-4 overflow-x-auto">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-lg transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-emerald-50 text-slate-600 hover:bg-emerald-100'
                }`}
              >
                {categories[category].title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Feature Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {categories[activeCategory].title}
            </h2>
            <p className="text-xl text-slate-600">
              {categories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories[activeCategory].features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mt-2">{feature.description}</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-4 bg-slate-50">
                  <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-lg mb-8">Start with the features you need now and add more as you grow</p>
          <button className="bg-white text-emerald-500 px-8 py-3 rounded-full text-lg hover:bg-emerald-50 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}