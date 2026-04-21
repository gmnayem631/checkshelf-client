import { Link, useLoaderData } from "react-router";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

const titleColors = {
  GM: "bg-yellow-100 text-yellow-800",
  IM: "bg-slate-100 text-slate-700",
  FM: "bg-amber-100 text-amber-700",
  CM: "bg-zinc-100 text-zinc-600",
};

const InstructorDetails = () => {
  const instructor = useLoaderData();
  const {
    name,
    image,
    bio,
    specialty,
    experience,
    totalCourses,
    totalStudents,
    rating,
    instructorTitle,
    stats,
  } = instructor;

  // Shape data for recharts
  const ratingData = stats.ratingsOverTime.map((r, i) => ({
    period: `Q${i + 1}`,
    rating: r,
  }));

  const studentsData = stats.studentsPerCourse.map((s, i) => ({
    course: `Course ${i + 1}`,
    students: s,
  }));

  return (
    <div className="min-h-screen bg-[#fefce8]">
      {/* Breadcrumb */}
      <div className="bg-neutral text-neutral-content py-3 px-6 text-xs tracking-widest uppercase font-mono text-center opacity-70">
        <Link to={"/"}>CheckShelf</Link> &nbsp;/&nbsp;{" "}
        <Link to={"/courses"}>Courses</Link> &nbsp;/&nbsp; Course Instructor:{" "}
        {name}
      </div>

      <div className="px-6 py-16 flex flex-col gap-12 max-w-11/12 mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-neutral rounded-full" />
            <img
              src={image}
              alt={name}
              className="relative w-32 h-32 rounded-full object-cover z-10 border-4 border-[#fefce8] shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            {/* Title badge + name */}
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${titleColors[instructorTitle] || "bg-gray-100 text-gray-700"}`}
              >
                {instructorTitle}
              </span>
              <h1 className="text-4xl font-black text-neutral">{name}</h1>
            </div>

            <p className="text-neutral/60 font-medium">
              Specialty: {specialty}
            </p>
            <p className="text-sm text-neutral/60 max-w-lg leading-relaxed">
              {bio}
            </p>

            {/* Quick stats row */}
            <div className="inter flex gap-6 justify-center sm:justify-start mt-2 flex-wrap">
              {[
                { label: "Experience", value: `${experience} yrs` },
                { label: "Courses", value: totalCourses },
                { label: "Students", value: totalStudents.toLocaleString() },
                { label: "Rating", value: `${rating}` },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center sm:items-start"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral/40">
                    {label}
                  </span>
                  <span className="text-lg font-black text-neutral">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral/10" />

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rating Over Time */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-neutral/10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral/50 mb-4 font-mono">
              Rating Over Time
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={ratingData}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis domain={[4, 5]} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="#1c1917"
                  fill="#fefce8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Students Per Course */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-neutral/10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral/50 mb-4 font-mono">
              Students Per Course
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={studentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#5E4B29" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to={"/courses"}
            className="btn bg-neutral text-[#fefce8] hover:bg-neutral/80 border-none px-10"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
