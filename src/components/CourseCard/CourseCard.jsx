// import React from "react";

// const CourseCard = ({ course }) => {
//   return <div className="my-10">Course Card</div>;
// };

// export default CourseCard;

import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { _id, title, thumbnail, price, level, rating, duration, students } =
    course;

  const levelColor = {
    Beginner: "bg-emerald-100 text-emerald-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <figure className="relative overflow-hidden rounded-t-2xl h-44">
        <img src={thumbnail} alt={title} className="h-auto object-cover" />
        {/* Level pill on image */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${levelColor[level] || "bg-gray-100 text-gray-600"}`}
        >
          {level}
        </span>
      </figure>

      <div className="card-body p-4 gap-3">
        {/* Title */}
        <h2 className="font-bold text-sm leading-snug line-clamp-2">{title}</h2>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-base-content/50">
          <span>⏱ {duration}</span>
          <span>•</span>
          <span>👥 {students.toLocaleString()} students</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="font-semibold">{rating}</span>
        </div>

        {/* Price + Buttons */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <Link to={`/courses/${_id}`} className="btn btn-outline btn-xs">
              Details
            </Link>
            <button className="btn btn-primary btn-xs">Enroll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
