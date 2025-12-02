import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Chess piece decorative elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-5">♜</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-5">♞</div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Small Label */}
        <p className="text-accent font-semibold tracking-widest mb-4 uppercase">
          Join Us Today
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Elevate Your Chess Game?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of chess players who are mastering the game with
          CheckShelf. Start learning today and unlock your full potential on the
          board.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/courses"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            Browse Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent hover:text-black transition-all duration-300 hover:scale-105"
          >
            Explore Books
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Trusted by 10,000+ chess players worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
