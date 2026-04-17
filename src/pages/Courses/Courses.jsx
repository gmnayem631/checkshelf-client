import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const initialCourses = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto my-20">
      Explore Chess Courses from Top Teachers
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {initialCourses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
