import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-white py-36 px-5 relative">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6">
        <p className="tracking-widest text-[#EBBD67] font-semibold">
          WELCOME TO CHECKSHELF
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
          Train Your Mind, <br />
          Master the Game
        </h1>

        <p className="max-w-xl text-lg text-gray-200">
          Sharpen your strategy, improve your focus, and grow as a chess player
          through guided learning, structured courses, and real-game analysis —
          built for players who want to level up with purpose.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <button className="btn rounded-xl bg-[#EBBD67] text-black border-none hover:bg-black hover:text-[#EBBD67] px-8">
            Discover More
          </button>

          <button className="btn btn-outline rounded-xl border-2 border-[#EBBD67] text-[#EBBD67] px-8 hover:bg-[#EBBD67] hover:text-black">
            View Courses
          </button>
        </div>

        {/* Social icons (right side on large screens) */}
        <div className="hidden md:flex flex-col gap-6 absolute right-10 top-1/2 -translate-y-1/2">
          <div className="bg-[#EBBD67] text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-[#EBBD67] duration-200">
            <FaGithub size={30} />
          </div>
          <div className="bg-[#EBBD67] text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-[#EBBD67] duration-200">
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
