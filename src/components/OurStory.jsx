import React from "react";
import { Target, Heart, Lightbulb } from "lucide-react";
import storyImg from "../assets/story-img.gif"; // <-- use any premium chess image

const OurStory = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={storyImg}
                alt="Our Story Chess"
                className="w-[128] md:w-2xs group-hover:scale-105 transition-all duration-700"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-700"></div>
            </div>

            {/* Decorative accent bubble */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>

            {/* Floating info box */}
            <div className="absolute -top-8 -left-4 bg-accent text-black p-3 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">2020</p>
              <p className="text-sm font-semibold">Founded</p>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CheckShelf began with a simple idea — to make high-quality chess
              education accessible to everyone, not just elite players.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Today, we bring together expert coaches, structured courses, and
              top-tier learning resources so players at every level can grow
              with clarity and confidence.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {/* Mission */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Target className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Mission</h3>
                  <p className="text-gray-600">
                    Make world-class chess education available for every
                    learner.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Vision</h3>
                  <p className="text-gray-600">
                    Help players unlock their fullest potential with guided
                    learning.
                  </p>
                </div>
              </div>

              {/* Passion */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Heart className="text-accent" size={36} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Passion</h3>
                  <p className="text-gray-600">
                    Driven by our love for chess and the joy of seeing players
                    grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
