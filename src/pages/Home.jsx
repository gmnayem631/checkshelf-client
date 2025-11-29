import React from "react";
import heroBg from "../assets/hero-bg-1.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Navbar />
        <Hero />
      </header>
      <div className="max-w-7xl mx-auto"></div>
    </div>
  );
};

export default Home;
