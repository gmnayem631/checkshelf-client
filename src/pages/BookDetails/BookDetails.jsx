import { Star } from "lucide-react";
import { Chessboard } from "react-chessboard";
import { Link, useLoaderData } from "react-router";

const tagColors = {
  strategy: "bg-blue-100 text-blue-700",
  positional: "bg-indigo-100 text-indigo-700",
  tactics: "bg-red-100 text-red-700",
  endgame: "bg-amber-100 text-amber-700",
  openings: "bg-pink-100 text-pink-700",
  beginner: "bg-lime-100 text-lime-700",
  analysis: "bg-cyan-100 text-cyan-700",
  attack: "bg-orange-100 text-orange-700",
};

const BookDetails = () => {
  const book = useLoaderData();
  const {
    title,
    author,
    price,
    tags,
    level,
    description,
    image,
    rating,
    stock,
    pages,
    chessPosition,
  } = book;
  console.log(chessPosition);

  const chessBoardOptions = {
    position: chessPosition.fen,
    boardWidth: 560,
    arePiecesDraggable: false,
    boardOrientation: "white",

    customBoardStyle: {
      borderRadius: "8px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <div className="min-h-screen bg-[#fefce8]">
      {/* Hero Strip */}
      <div className="bg-neutral text-neutral-content py-4 px-6 text-xs tracking-widest uppercase font-mono text-center opacity-70">
        <Link to={"/"}>CheckShelf</Link> &nbsp;/&nbsp;{" "}
        <Link to={"/books"}>Books</Link> &nbsp;/&nbsp; {title}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-neutral rounded-xl" />
              <img
                src={image}
                alt={title}
                className="relative w-72 h-96 object-cover rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="flex flex-col gap-6">
            {/* Level badge */}
            <span className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-neutral text-[#fefce8]">
              {level}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-neutral">
              {title}
            </h1>

            {/* Author */}
            <p className="text-base text-neutral/60 font-medium -mt-3">
              by <span className="text-neutral font-semibold">{author}</span>
            </p>

            {/* Divider */}
            <div className="border-t border-neutral/10" />

            {/* Rating + Pages + Stock row */}
            <div className="flex gap-6 text-sm text-neutral/70">
              <div className="flex flex-col gap-0.5">
                <span className="inter text-xs uppercase tracking-widest font-mono opacity-50">
                  Rating
                </span>
                <span className="inter font-bold flex items-center gap-1 text-neutral text-base">
                  <Star size={14} /> {rating}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="inter text-xs uppercase tracking-widest font-mono opacity-50">
                  Pages
                </span>
                <span className="inter font-bold text-neutral text-base">
                  {pages}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="inter text-xs uppercase tracking-widest font-mono opacity-50">
                  Stock
                </span>
                <span className="font-bold text-base text-emerald-600">
                  {stock} left
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral/70 leading-relaxed ">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${tagColors[tag] || "bg-gray-100 text-gray-600"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral/10" />

            {/* Price + CTA */}
            <div className="flex items-center justify-between">
              <span className="inter text-4xl font-black text-neutral">
                ${price.toFixed(2)}
              </span>
              <div className="flex gap-3">
                <button className="btn btn-outline btn-neutral">
                  Add to Cart
                </button>
                <button className="btn bg-neutral text-[#fefce8] hover:bg-neutral/80 border-none">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Chess position */}
        <div className="w-[600px] mx-auto mt-16 border-2 border-dashed border-neutral/30 rounded-xl p-4 text-center bg-white/60">
          <p className="text-lg font-bold text-neutral/40 font-mono uppercase tracking-widest mb-2">
            A key position from this book
          </p>

          <Chessboard options={chessBoardOptions} />

          <p className="text-sm text-neutral/50 mt-2 italic">
            {chessPosition.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
