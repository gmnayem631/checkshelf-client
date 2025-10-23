import React from "react";
import coaches from "../../public/coaches.json";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-7xl text-center my-3">Meet Our Chess Masters</h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {coaches.map((coach, idx) => {
          return (
            <div key={idx}>
              <img src={coach.image} alt="" className="h-96 rounded-2xl" />
              <p className="font-bold">{coach.name}</p>
              <p>{coach.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
