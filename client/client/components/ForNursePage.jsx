import React from "react";
import ForNurseHeader from "./ForNurseHeader"; // Specific header for For Nurse Page

const compositeImage = "/images/users/fornurse1.jpg"; // Corrected path for the image

const CategoryCard = ({ title, description, onClick }) => (
  <div
    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-emerald-500"
    onClick={onClick}
  >
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 text-lg">{description}</p>
  </div>
);

const ForNursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Header */}
      <ForNurseHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-600 mb-6">
              Empower Your Nursing Journey
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Choose your path and let us provide the tools and support to help you thrive in the
              ever-evolving healthcare industry.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-full text-lg hover:bg-emerald-600 transition">
                Explore Tools
              </button>
              <button className="bg-white border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-full text-lg hover:bg-emerald-50 transition">
                Join Us
              </button>
            </div>
          </div>
          <div>
            <img
              src={compositeImage}
              alt="Empowering Nurses"
              className="w-full rounded-xl shadow-lg object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">
            How Can We Empower You?
          </h2>
          <p className="text-lg text-center text-slate-600 mb-16">
            Select the option that best describes your goals and let us guide you to success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
              title="Private Nurse - Build Your Business"
              description="Grow your independent nursing business with tools for client management, scheduling, and seamless invoicing."
              onClick={() => console.log("Redirect to Business Tools")}
            />
            <CategoryCard
              title="Private Nurse - Join Our Team"
              description="Become a part of our trusted remote nursing team, delivering exceptional care to clients."
              onClick={() => console.log("Redirect to Join Our Team")}
            />
            <CategoryCard
              title="Small Nursing Agencies"
              description="Expand your agency’s reach with scheduling, client management, and invoicing solutions."
              onClick={() => console.log("Redirect to Agency Features")}
            />
            <CategoryCard
              title="Large-Scale Organizations"
              description="Utilize enterprise-grade solutions to optimize operations and deliver exceptional care on a larger scale."
              onClick={() => console.log("Redirect to Enterprise Solutions")}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-emerald-600 mb-8">
            What Our Nurses Are Saying
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Hear how Nurse-Sync has transformed the way nurses work and connect with clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-xl shadow-lg">
              <p className="text-slate-600 mb-4">
                "Nurse-Sync has completely changed my business. The tools are so easy to use, and my
                clients love the seamless experience!"
              </p>
              <h4 className="text-lg font-semibold text-emerald-600">- Emily R., Private Nurse</h4>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl shadow-lg">
              <p className="text-slate-600 mb-4">
                "Joining the Nurse-Sync team was the best decision of my career. The platform makes
                managing care so much easier."
              </p>
              <h4 className="text-lg font-semibold text-emerald-600">- David T., Remote Nurse</h4>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl shadow-lg">
              <p className="text-slate-600 mb-4">
                "Our agency has grown significantly thanks to Nurse-Sync’s innovative tools and
                solutions."
              </p>
              <h4 className="text-lg font-semibold text-emerald-600">- Sarah K., Agency Owner</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">
            Join Nurse-Sync today and discover the tools and support to achieve your goals.
          </p>
          <button className="bg-white text-emerald-500 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForNursePage;
