import React from "react";
import { useLoaderData } from "react-router";

const Courses = () => {
  const initialCourses = useLoaderData();
  console.log(initialCourses);
  return (
    <div className="max-w-11/12 mx-auto my-20">
      Explore Chess Courses from Top Teachers
    </div>
  );
};

export default Courses;
