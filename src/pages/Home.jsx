import React from "react";
import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import DescriptionHome from "../components/DescriptionHome";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialCarousel from "../components/TestimonialCarousal";
import JoinUs from "../components/JoinUs";

const Home = () => {
  return (
    <div>
      <Hero />

      <div>
        <DescriptionHome />
        <StatsBanner />
      </div>
      <WhyChooseUs />
      <TestimonialCarousel />
      <JoinUs />
    </div>
  );
};

export default Home;
