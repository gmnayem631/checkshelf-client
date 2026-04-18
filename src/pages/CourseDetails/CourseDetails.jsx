import React from "react";
import { Link, useLoaderData } from "react-router";
import { Clock, Users, Star, Award, PlayCircle, BookOpen } from "lucide-react";

const CourseDetails = () => {
  const course = useLoaderData();

  const {
    title,
    thumbnail,
    price,
    level,
    tags,
    rating,
    duration,
    students,
    instructorName,
  } = course;

  const levelColor = {
    Beginner: "bg-emerald-100 text-emerald-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="mb-10">
      {/* Breadcrumb */}
      <div className="bg-neutral text-neutral-content py-4 px-6 text-xs tracking-widest uppercase font-mono text-center opacity-70">
        <Link to={"/"}>CheckShelf</Link> &nbsp;/&nbsp;
        <Link to={"/courses"}>Courses</Link> &nbsp;/&nbsp; {title}
      </div>

      <div className="grid lg:grid-cols-3 gap-10 max-w-11/12 mx-auto px-4 py-16">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Thumbnail */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span
                className={`inline-block text-sm font-semibold px-4 py-1.5 rounded-full ${levelColor[level]}`}
              >
                {level}
              </span>
            </div>
          </div>

          {/* Title & Rating */}
          <div className="inter">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-3">
              {title}
            </h1>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
                <span className="font-semibold text-lg">{rating}</span>
                <span className="text-gray-500">(1,284 reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Users size={18} />
                {students.toLocaleString()} students
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock size={18} />
                {duration}
              </div>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-4 pb-6">
            <div className="w-14 h-14 bg-[#5E4B29] text-white rounded-full flex items-center justify-center font-bold text-xl">
              GM
            </div>
            <div>
              <p className="font-semibold text-lg">Instructor</p>
              <p className="text-[#5E4B29]">{instructorName}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#5E4B29] mb-2">
              ${price}
            </div>
            <p className="text-green-600 text-sm font-medium mb-6">
              One-time payment • Lifetime access
            </p>

            <button className="btn btn-block bg-[#5E4B29] hover:bg-black text-white text-lg h-14 rounded-2xl mb-3">
              Enroll Now
            </button>

            <Link
              to="/courses"
              className="btn btn-block btn-outline border-[#5E4B29] text-[#5E4B29] hover:bg-[#5E4B29] hover:text-white h-14 rounded-2xl"
            >
              Browse All Courses
            </Link>

            <div className="mt-8 pt-6 border-t text-sm space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Level</span>
                <span className="font-medium text-gray-800">{level}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium text-gray-800">{duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Students</span>
                <span className="font-medium text-gray-800">
                  {students.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Language</span>
                <span className="font-medium text-gray-800">English</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
