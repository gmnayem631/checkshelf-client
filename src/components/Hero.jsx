import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="text-white py-36 px-5 relative">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6">
        <p className="tracking-widest text-accent font-semibold">
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
          <Link className="btn rounded-xl bg-accent text-black border-none hover:bg-black hover:text-accent px-8">
            Discover More
          </Link>

          <Link
            to={"/courses"}
            className="btn btn-outline rounded-xl border-2 border-accent text-accent px-8 hover:bg-accent hover:text-black"
          >
            View Courses
          </Link>
        </div>

        {/* Social icons (right side on large screens) */}
        <div className="hidden md:flex flex-col gap-6 absolute right-10 top-1/2 -translate-y-1/2">
          <div className="bg-accent text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-accent duration-200">
            <FaGithub size={30} />
          </div>
          <div className="bg-accent text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-accent duration-200">
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
