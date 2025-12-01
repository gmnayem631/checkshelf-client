import React from "react";
import featureImg1 from "../assets/chess-4067149_1280.jpg";
import featureImg2 from "../assets/chess-3325010_1280.jpg";

const DescriptionHome = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-9 px-5">
      {/* Description 1 */}
      <div className="flex flex-col gap-4">
        <div className="" data-aos="fade-right">
          <p className="text-accent uppercase text-sm tracking-widest font-bold mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Empowering minds through strategy, skill, and the art of chess.
          </h2>
        </div>
        <div className="">
          <img src={featureImg1} alt="" className="w-3xl rounded-xl" />
        </div>
      </div>

      {/* Description 2 */}
      <div className="my-4 flex flex-col gap-4">
        <div className="">
          <img src={featureImg2} alt="" className="w-3xl rounded-xl" />
        </div>
        <p
          className="font-medium text-lg text-justify mt-4"
          data-aos="fade-left"
        >
          We provide books and guided courses that help beginners and
          intermediate players build strong fundamentals and grow confidently in
          their chess journey.
        </p>
        <div className="mt-3">
          <button className="btn bg-accent rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionHome;
