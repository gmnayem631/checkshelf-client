import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Beginner Player",
      rating: 5,
      review:
        "CheckShelf transformed my chess game completely! The structured courses and weekly live sessions helped me go from knowing just the basics to confidently competing in local tournaments.",
      initials: "SJ",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Intermediate Player",
      rating: 5,
      review:
        "The expert instructors really know their stuff. I love how they break down complex strategies into digestible lessons. The book collection is fantastic too!",
      initials: "MC",
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Chess Enthusiast",
      rating: 4,
      review:
        "Best investment I've made in my chess journey. The lifetime access means I can revisit lessons whenever I need. The live Q&A sessions are incredibly valuable!",
      initials: "EW",
      bgColor: "bg-purple-500",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h5 border-none ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of chess players who have improved their game with
            CheckShelf
          </p>
        </div>

        {/* Staggered Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
                index === 1 ? "md:mt-8" : ""
              } ${index === 2 ? "md:mt-16" : ""}`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-accent text-black p-3 rounded-full">
                <Quote className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                {/* Avatar with Initials */}
                <div
                  className={`${testimonial.bgColor} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.initials}
                </div>

                {/* Name and Role */}
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
