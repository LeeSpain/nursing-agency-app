import React, { useState } from 'react';

const ForClientPricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedFaq, setSelectedFaq] = useState(null);

  const getPrice = (basePrice) => {
    return billingCycle === 'annual' 
      ? Math.round(basePrice * 0.9) 
      : basePrice;
  };

  const plans = [
    {
      name: "Essential Care",
      basePrice: 100,
      description: "Perfect for basic remote nursing support",
      features: [
        "2 scheduled video consultations monthly",
        "Text support during business hours",
        "Single language support",
        "Basic health monitoring",
        "Emergency consultations (€75 each)",
        "Health resource library access"
      ]
    },
    {
      name: "Advanced Care",
      basePrice: 250,
      description: "Comprehensive care for regular health monitoring",
      features: [
        "5 scheduled video consultations monthly",
        "24/7 text-based support",
        "Two language options",
        "Full health monitoring dashboard",
        "2 emergency consultations included",
        "Family access (1 member)",
        "Health document review",
        "Medication management support"
      ],
      highlight: true
    },
    {
      name: "Premium Care",
      basePrice: 500,
      description: "Complete care with unlimited support",
      features: [
        "Unlimited video consultations",
        "24/7 dedicated nursing team",
        "All language options",
        "Comprehensive health monitoring",
        "Unlimited emergency support",
        "Family access (3 members)",
        "Regular health assessments",
        "Specialist referral support",
        "Monthly health reports",
        "Wellness coaching sessions"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do video consultations work?",
      answer: "Video consultations are conducted through our secure platform. Schedule at your convenience and connect with your nurse via high-quality video chat. All consultations are encrypted and private."
    },
    {
      question: "Can I choose my nurse's language?",
      answer: "Yes! Essential Care includes one language, Advanced Care includes two languages, and Premium Care gives access to all available languages. Additional languages can be added to Essential and Advanced plans."
    },
    {
      question: "What happens in an emergency?",
      answer: "Emergency support is available 24/7. Essential members pay per consultation, Advanced includes 2 monthly, and Premium includes unlimited emergency support. Our nurses can assess situations and provide immediate guidance."
    },
    {
      question: "Can I change my nurse?",
      answer: "Yes, you can request a change at any time. We'll match you with another qualified nurse based on your preferences and care needs. Premium members get priority matching."
    },
    {
      question: "How does family access work?",
      answer: "Family members can view health updates, join consultations, and communicate with nurses through their own login. Advanced plan includes 1 family member, Premium includes 3 members."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Perfect Care Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Select from our range of comprehensive nursing care plans, designed to provide professional support whenever you need it.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-emerald-100">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing (Save 10%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300
                ${plan.highlight 
                  ? 'bg-emerald-500 text-white shadow-xl scale-105' 
                  : 'bg-white hover:shadow-lg hover:scale-105 border border-emerald-100'
                }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-emerald-600'}`}>
                  €{getPrice(plan.basePrice)}
                </span>
                <span className={plan.highlight ? 'text-white/90' : 'text-slate-600'}>
                  /month
                </span>
                {billingCycle === 'annual' && (
                  <div className={`text-sm mt-2 ${plan.highlight ? 'text-white/90' : 'text-emerald-600'}`}>
                    Save €{plan.basePrice * 12 * 0.1} annually
                  </div>
                )}
              </div>

              <ul className={`space-y-4 mb-8 ${plan.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={plan.highlight ? 'text-emerald-300' : 'text-emerald-500'}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-full transition-colors duration-300
                  ${plan.highlight 
                    ? 'bg-white text-emerald-500 hover:bg-emerald-50' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-emerald-100 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full px-6 py-4 text-left hover:bg-emerald-50 transition-colors flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${selectedFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`px-6 py-4 text-slate-600 bg-emerald-50/50 transition-all duration-300
                    ${selectedFaq === idx ? 'block' : 'hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Need help choosing the right plan? We're here to assist you!
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForClientPricing;