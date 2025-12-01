import React from "react";
import { Video, Users, Clock, BookOpen } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Video className="w-12 h-12" />,
      title: "Weekly Live Q&A Sessions",
      description:
        "Join interactive sessions with expert coaches every week. Get your questions answered in real-time and learn from other students.",
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12" />,
      title: "Expert Instructors",
      description:
        "Learn from experienced chess coaches and grandmasters who are passionate about helping you improve your game.",
    },
    {
      id: 3,
      icon: <Clock className="w-12 h-12" />,
      title: "Lifetime Access",
      description:
        "Purchase once and access your courses forever. Learn at your own pace, anytime and anywhere you want.",
    },
    {
      id: 4,
      icon: <BookOpen className="w-12 h-12" />,
      title: "Comprehensive Content",
      description:
        "Access a vast library of chess books and structured courses all in one place. Everything you need to master chess.",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Environment to support your chess journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to elevate your chess skills with
            expert guidance and quality resources.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
