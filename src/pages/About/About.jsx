import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import OurStory from "../../components/OurStory/OurStory";
import Values from "../../components/Values/Values";
import CallToAction from "../../components/CallToAction/CallToAction";

const About = () => {
  return (
    <div className="">
      <AboutHero></AboutHero>
      <OurStory></OurStory>
      <Values></Values>
      <CallToAction></CallToAction>
    </div>
  );
};

export default About;
