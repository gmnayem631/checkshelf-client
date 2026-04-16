import { useLoaderData } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import { useState } from "react";

const Book = () => {
  const initialBooks = useLoaderData();

  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedBooks = [...filteredBooks];
  if (sortOption === "price") {
    sortedBooks.sort((a, b) => a.price - b.price);
  } else if (sortOption === "pages") {
    sortedBooks.sort((a, b) => a.pages - b.pages);
  }

  return (
    <div className="max-w-11/12 mx-auto my-20">
      <h2 className="text-center text-3xl md:text-4xl my-5 md:font-semibold">
        Order and Buy Books
      </h2>

      {/*search and filter */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          {/* Search Input */}
          <div className="w-1/4">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              value={search}
              placeholder="Search by book name, or author..."
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#fefce8] rounded-lg"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="w-full md:w-52">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="">Sort by</option>
              <option value="price">Price</option>
              <option value="pages">Number of Pages</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBooks.map((book) => {
          return <BookCard key={book._id} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Book;
