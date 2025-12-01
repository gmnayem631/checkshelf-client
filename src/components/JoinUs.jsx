import { ArrowRight } from "lucide-react";
import joinUsFeatured from "../assets/join-us-1.jpg";
import { Link } from "react-router";

const JoinUs = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${joinUsFeatured})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <p className="text-yellow-500 font-medium tracking-wider uppercase text-sm mb-4">
          Get Started
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Start Your Chess
          <br />
          Journey Today
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Master the game of kings with world-class coaches. From beginner
          tactics to grandmaster strategies — elevate your play, one move at a
          time.
        </p>

        <Link to={"/courses"}>
          <button className="bg-accent btn text-black font-semibold px-6 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
            Join Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
