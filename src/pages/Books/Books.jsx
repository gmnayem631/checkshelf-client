import { useLoaderData } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import { useState } from "react";

const Book = () => {
  const initialBooks = useLoaderData();

  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-11/12 mx-auto my-20">
      <h2 className="text-center text-2xl md:text-4xl my-5">
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
              placeholder="Search by book name, author, or tag..."
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#fefce8] rounded-lg"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="w-full md:w-52">
            <select
              defaultValue="Sort by (Low to High)"
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#fefce8] rounded-lg"
            >
              <option disabled={true}>Sort by (Low to High)</option>
              <option>Price</option>
              <option>Number of Pages</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => {
          return <BookCard key={book._id} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Book;
