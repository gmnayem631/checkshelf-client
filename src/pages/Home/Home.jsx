import React from "react";
import Hero from "../../components/Hero/Hero";
import StatsBanner from "../../components/StatsBanner/StatsBanner";
import DescriptionHome from "../../components/DescriptionHome/DescriptionHome";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TestimonialCarousel from "../../components/TestimonialCarousal/TestimonialCarousal";
import JoinUs from "../../components/JoinUs/JoinUs";

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
