import React, { use } from "react";
import { StarIcon } from "lucide-react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext/CartContext";
import toast from "react-hot-toast";

const BookCard = ({ book }) => {
  const { _id, title, author, price, tags, rating, image, pages, level } = book;
  const { addToCart } = use(CartContext);
  const tagColors = {
    strategy: "bg-blue-100 text-blue-700",
    positional: "bg-indigo-100 text-indigo-700",
    training: "bg-green-100 text-green-700",
    calculation: "bg-purple-100 text-purple-700",
    endgame: "bg-amber-100 text-amber-700",
    tactics: "bg-red-100 text-red-700",
    analysis: "bg-cyan-100 text-cyan-700",
    openings: "bg-pink-100 text-pink-700",
    attack: "bg-orange-100 text-orange-700",
    beginner: "bg-lime-100 text-lime-700",
  };

  const handleAddToCart = () => {
    addToCart(book);
    toast.success("Added to cart successfully!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="card bg-gray-50 shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <figure className="h-56 w-56 mx-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>

      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        {/* Author */}
        <p className="text-sm text-gray-500">
          by <span className="font-medium">{author}</span>
        </p>

        {/* Tags + Rating */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          {/* Tags */}
          <div className="flex gap-1 flex-wrap">
            {tags?.map((tag, index) => (
              <div
                key={index}
                className={`text-sm badge badge-xs badge-soft border-0 ${
                  tagColors[tag] || "bg-gray-100 text-gray-700"
                }`}
              >
                {tag.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex gap-1 justify-center items-center text-sm font-medium">
            <StarIcon className="text-accent" /> {rating}
          </div>
        </div>

        {/* Extra Info */}
        <div className="flex justify-between text-sm text-gray-500">
          <span> Pages: {pages}</span>
          <span>{level}</span>
        </div>

        {/* Price */}
        <p className="inter text-lg font-bold text-[#5E4B29]">${price}</p>

        {/* Buttons */}
        <div className="card-actions justify-between mt-3">
          <Link
            to={`/books/${_id}`}
            className="btn btn-outline btn-accent hover:text-black"
          >
            View Product
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn rounded-lg bg-accent border-none hover:bg-black hover:text-accent"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
