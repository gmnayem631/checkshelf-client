import React from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div className="max-w-11/12 mx-auto my-20">Course Details</div>;
};

export default CourseDetails;
