import React from "react";
import heroBg from "../assets/hero-bg-1.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import StatsBanner from "../components/StatsBanner";
import DescriptionHome from "../components/DescriptionHome";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import TestimonialCarousel from "../components/TestimonialCarousal";
import JoinUs from "../components/JoinUs";

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
      <div className="max-w-7xl mx-auto">
        <DescriptionHome />
        <StatsBanner />
      </div>
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <TestimonialCarousel />
      <JoinUs />
    </div>
  );
};

export default Home;
