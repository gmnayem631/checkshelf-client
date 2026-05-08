import React from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const tagsList = [
    "strategy",
    "positional",
    "training",
    "calculation",
    "endgame",
    "tactics",
    "analysis",
    "openings",
    "attack",
    "beginner",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your books is added successfully!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Page Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#5E4B29]">
          Add a New Chess Book
        </h1>
        <p className="text-gray-500 mt-2">
          Fill in the details below to list your chess book on CheckShelf.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Basic Info */}
        <div className="bg-white shadow-md rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#5E4B29]">
              Basic Information
            </h2>
            <p className="text-sm text-gray-500">
              Main details about your book.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Book Title</span>
              </label>

              <input
                type="text"
                placeholder="My System"
                className="input input-bordered w-full rounded-xl focus:outline-none"
              />
            </div>

            {/* Author */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Author</span>
              </label>

              <input
                type="text"
                placeholder="Aron Nimzowitsch"
                className="input input-bordered w-full rounded-xl focus:outline-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Price ($)</span>
              </label>

              <input
                type="number"
                step="0.01"
                placeholder="15.99"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            {/* Pages */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Number of Pages</span>
              </label>

              <input
                type="number"
                placeholder="376"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Stock</span>
              </label>

              <input
                type="number"
                placeholder="10"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Rating</span>
              </label>

              <select className="select select-bordered w-full rounded-xl">
                <option disabled selected>
                  Select rating
                </option>

                <option>4.0</option>
                <option>4.1</option>
                <option>4.2</option>
                <option>4.3</option>
                <option>4.4</option>
                <option>4.5</option>
                <option>4.6</option>
                <option>4.7</option>
                <option>4.8</option>
                <option>4.9</option>
                <option>5.0</option>
              </select>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="bg-white shadow-md rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#5E4B29]">
              Classification
            </h2>

            <p className="text-sm text-gray-500">
              Help users discover your book more easily.
            </p>
          </div>

          {/* Level */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Level</span>
            </label>

            <select className="select select-bordered w-full rounded-xl">
              <option disabled selected>
                Select difficulty level
              </option>

              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Tags</span>
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
              {tagsList.map((tag) => (
                <label
                  key={tag}
                  className="flex items-center gap-2 bg-gray-50 border rounded-xl px-4 py-3 cursor-pointer hover:border-[#5E4B29] transition"
                >
                  <input type="checkbox" className="checkbox checkbox-sm" />

                  <span className="capitalize text-sm">{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white shadow-md rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#5E4B29]">
              Description
            </h2>

            <p className="text-sm text-gray-500">
              Explain why readers should buy this book.
            </p>
          </div>

          <textarea
            rows={6}
            placeholder="Write a detailed description..."
            className="textarea textarea-bordered w-full rounded-2xl"
          ></textarea>
        </div>

        {/* Media */}
        <div className="bg-white shadow-md rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#5E4B29]">Media</h2>

            <p className="text-sm text-gray-500">
              Add a cover image for your book.
            </p>
          </div>

          <input
            type="url"
            placeholder="https://example.com/book-cover.jpg"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Chess Position */}
        <div className="bg-white shadow-md rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#5E4B29]">
              Chess Position
            </h2>

            <p className="text-sm text-gray-500">
              Add a meaningful position from the book using FEN notation.
            </p>
          </div>

          {/* FEN */}
          <div>
            <label className="label">
              <span className="label-text font-medium">FEN String</span>
            </label>

            <textarea
              rows={1}
              placeholder="r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 3"
              className="textarea textarea-bordered w-full rounded-2xl"
            ></textarea>

            <p className="text-xs text-gray-500 mt-2">
              Paste a valid FEN string representing a chess position.
            </p>
          </div>

          {/* Caption */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Position Caption</span>
            </label>

            <input
              type="text"
              placeholder="Control of the center and rapid development"
              className="input input-bordered w-full rounded-xl"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button className="btn bg-accent hover:bg-black text-black hover:text-accent px-10 rounded-2xl h-14 text-base">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
