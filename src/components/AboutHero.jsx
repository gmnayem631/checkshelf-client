import React from "react";
import aboutHeroBg from "../assets/hero-bg-1.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Small label */}
        <p className="text-accent font-semibold tracking-widest mb-4 uppercase">
          Who We Are
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          About CheckShelf
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
          Empowering Chess Players Through Quality Education
        </p>

        {/* Description */}
        <p className="text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
          At CheckShelf, we believe that everyone deserves access to world-class
          chess education. We're dedicated to helping players of all levels
          improve their game through expertly crafted courses, comprehensive
          books, and a supportive learning community.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
