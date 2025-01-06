import React from 'react';
import {
  Award,
  FileText,
  Phone,
  Mail,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  Download,
  Users,
  Heart,
  Shield,
  Activity,
  Book,
  MapPin,
  Stethoscope,
  Plus
} from 'lucide-react';

const StatCard = ({ value, label, icon: Icon }) => (
  <div className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 mx-auto flex items-center justify-center mb-3">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <div className="font-bold text-2xl text-slate-900">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

const SkillBadge = ({ label, level }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-[#A390E4]/10 rounded-xl">
    <span className="text-sm font-medium text-slate-900">{label}</span>
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-1.5 h-5 rounded-full ${
            star <= level ? 'bg-emerald-500' : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  </div>
);

const ReviewCard = ({ avatar, name, date, rating, comment }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all">
    <div className="flex items-center gap-3 mb-3">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h4 className="font-medium text-slate-900">{name}</h4>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">{date}</span>
        </div>
      </div>
    </div>
    <p className="text-slate-600">{comment}</p>
  </div>
);

const CertificationCard = ({ icon: Icon, title, issuer, validUntil }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all">
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-emerald-500" />
    </div>
    <div>
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{issuer}</p>
      <p className="text-sm text-emerald-600">Valid until {validUntil}</p>
    </div>
  </div>
);

const NurseProfilePage = () => {
  const stats = [
    { value: "150+", label: "Patients Served", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Heart },
    { value: "24/7", label: "Availability", icon: Clock },
    { value: "15+", label: "Certifications", icon: Award }
  ];

  const skills = [
    { label: "Geriatric Care", level: 5 },
    { label: "Wound Care", level: 4 },
    { label: "Diabetes Management", level: 5 },
    { label: "Pain Management", level: 4 },
    { label: "Alzheimer's Care", level: 5 }
  ];

  const certifications = [
    {
      icon: Award,
      title: "Registered Nurse (RN)",
      issuer: "California Board of Nursing",
      validUntil: "Dec 2025"
    },
    {
      icon: Shield,
      title: "Geriatric Care Certification",
      issuer: "American Nurses Credentialing Center",
      validUntil: "Aug 2024"
    },
    {
      icon: Heart,
      title: "Advanced Cardiac Life Support",
      issuer: "American Heart Association",
      validUntil: "Mar 2025"
    }
  ];

  const reviews = [
    {
      avatar: "/api/placeholder/40/40",
      name: "Robert Wilson",
      date: "2 weeks ago",
      rating: 5,
      comment: "Maria is an exceptional nurse. Her expertise in geriatric care is outstanding, and she shows genuine care for her patients."
    },
    {
      avatar: "/api/placeholder/40/40",
      name: "Sarah Thompson",
      date: "1 month ago",
      rating: 5,
      comment: "Very professional and knowledgeable. Made my father feel comfortable and well-cared for."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-28">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-emerald-500 to-[#A390E4] p-8">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                <img
                  src="/api/placeholder/200/200"
                  alt="Maria Gonzales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">Maria Gonzales, RN</h1>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Verified Professional
                  </div>
                </div>
                <p className="text-emerald-50 text-lg mb-4">Geriatric Care Specialist</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="flex gap-4">
              <button className="flex-1 bg-emerald-500 text-white px-4 py-3 rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Send Message
              </button>
              <button className="flex-1 bg-[#A390E4] text-white px-4 py-3 rounded-xl hover:bg-[#8B7ACC] transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-600 mb-6">
                With over 10 years of experience in geriatric care, I specialize in providing 
                comprehensive nursing care for elderly patients. My approach combines medical 
                expertise with compassionate care, ensuring each patient receives personalized 
                attention and support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Qualifications & Certifications</h2>
                <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                  View all →
                </button>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} {...cert} />
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Patient Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                    4.9 Average
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    View all →
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <a href="tel:+1234567890" className="text-slate-900 hover:text-emerald-600">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <a href="mailto:maria@example.com" className="text-slate-900 hover:text-emerald-600">
                      maria@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Weekly Availability</h2>
              <div className="space-y-3">
                {[
                  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Friday', hours: '9:00 AM - 5:00 PM' }
                ].map(({ day, hours }) => (
                  <div key={day} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                    <span className="text-slate-600">{day}</span>
                    <span className="text-emerald-600 font-medium">{hours}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Check Availability
              </button>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Documents</h2>
              <div className="space-y-3">
                {[
                  { title: 'Professional Resume', icon: FileText },
                  { title: 'Certifications Bundle', icon: Award },
                  { title: 'Background Check', icon: Shield },
                  { title: 'Insurance Documents', icon: FileText }
                ].map((doc, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-200 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                      <doc.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-slate-900 group-hover:text-emerald-600">{doc.title}</span>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 ml-auto" />
                  </button>
                ))}
              </div>
            </div>

            {/* Verifications */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Verifications</h2>
              <div className="space-y-4">
                {[
                  { text: 'Identity Verified', date: 'Jan 2024' },
                  { text: 'Background Check Cleared', date: 'Dec 2023' },
                  { text: 'License Validated', date: 'Jan 2024' },
                  { text: 'COVID-19 Vaccination', date: 'Current' },
                  { text: 'CPR Certification', date: 'Valid' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                    <span className="text-sm text-slate-500">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NurseProfilePage;