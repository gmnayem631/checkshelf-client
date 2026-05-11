import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import heroBg from "../../assets/hero-bg-1.jpg";
import { AuthContext } from "../../context/AuthContext";

const Hero = () => {
  return (
    <section
      className="text-white py-24 sm:py-32 md:py-36 px-5 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-6 text-center sm:text-left ">
        <p className="tracking-widest text-accent font-semibold text-center sm:text-left">
          WELCOME TO CHECKSHELF
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center sm:text-left ">
          Train Your Mind, <br />
          Master the Game
        </h1>

        <p className="max-w-xl text-center sm:text-left text-lg text-gray-200">
          Sharpen your strategy, improve your focus, and grow as a chess player
          through guided learning, structured courses, and real-game analysis,
          built for players who want to level up with purpose.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4">
          <Link
            to={"/books"}
            className="btn rounded-xl bg-accent text-black border-none hover:bg-black hover:text-accent px-5 sm:px-8"
          >
            Discover More
          </Link>

          <Link
            to={"/courses"}
            className="btn btn-outline rounded-xl border-2 border-accent text-accent px-5 sm:px-8 hover:bg-accent hover:text-black"
          >
            View Courses
          </Link>
        </div>

        {/* Social icons (right side on large screens) */}
        <div className="hidden md:flex flex-col gap-6 absolute right-4 lg:right-10 top-1/2 -translate-y-1/2">
          <div className="bg-accent text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-accent duration-200">
            <a href="https://github.com/gmnayem631" target="_blank">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="bg-accent text-black p-3 rounded-full cursor-pointer hover:bg-black hover:text-accent duration-200">
            <a
              href="https://linkedin.com/in/gulam-mustafa-nayem/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
