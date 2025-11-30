import React from "react";
import { Users, Book, GraduationCap, Trophy } from "lucide-react";
import CountUp from "react-countup";

const StatsBanner = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={48} />,
      number: 10,
      suffix: "k+",
      label: "Active Learners",
    },
    {
      id: 2,
      icon: <Book size={48} />,
      number: 200,
      suffix: "+",
      label: "Chess Books",
    },
    {
      id: 3,
      icon: <GraduationCap size={48} />,
      number: 50,
      suffix: "+",
      label: "Expert Courses",
    },
    {
      id: 4,
      icon: <Trophy size={48} />,
      number: 95,
      suffix: "%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-accent">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp
                  start={0}
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={5}
                ></CountUp>
              </h3>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
