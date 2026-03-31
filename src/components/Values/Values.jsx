import React from "react";
import { Award, TrendingUp, Users, Globe } from "lucide-react";

const Values = () => {
  const values = [
    {
      id: 1,
      number: "01",
      icon: <Award className="w-10 h-10" />,
      title: "Quality Education",
      description:
        "We deliver expertly crafted courses and carefully curated books that meet the highest educational standards. Every piece of content is designed to provide real value and lasting knowledge.",
    },
    {
      id: 2,
      number: "02",
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Student Success",
      description:
        "Your growth and achievement are at the heart of everything we do. We measure our success by your progress, celebrating every milestone in your chess journey.",
    },
    {
      id: 3,
      number: "03",
      icon: <Users className="w-10 h-10" />,
      title: "Community Focus",
      description:
        "Learning is better together. We foster a supportive, inclusive community where players connect, share insights, and grow through weekly live sessions and collaborative learning.",
    },
    {
      id: 4,
      number: "04",
      icon: <Globe className="w-10 h-10" />,
      title: "Accessibility",
      description:
        "We believe quality chess education should be available to everyone. Our platform breaks down barriers, making world-class instruction accessible regardless of location or background.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape the CheckShelf
            experience
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-accent overflow-hidden"
            >
              {/* Large Number Background */}
              <div className="absolute top-0 right-0 text-9xl font-bold text-gray-100 opacity-50 -mr-4 -mt-4 group-hover:text-accent group-hover:opacity-20 transition-all duration-300">
                {value.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-opacity-10 p-4 rounded-xl text-accent">
                    {value.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-justify">
                  {value.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent opacity-5 rounded-tl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
