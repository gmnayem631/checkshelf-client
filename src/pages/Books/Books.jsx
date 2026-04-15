// import React from "react";
// import { useLoaderData } from "react-router";

import { useLoaderData } from "react-router";
import BookCard from "../../components/BookCard/BookCard";

// const Books = () => {
//   const books = useLoaderData();
//   console.log(books);
//   return <div className="max-w-11/12 mx-auto my-20">Order and Buy Books</div>;
// };

// export default Books;

const Book = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="max-w-11/12 mx-auto my-20">
      <h2 className="text-center text-2xl md:text-4xl my-5">
        Order and Buy Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => {
          return <BookCard key={book._id} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Book;
