import React from "react";
import { useLoaderData } from "react-router";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return <div className="max-w-11/12 mx-auto my-20">Order and Buy Books</div>;
};

export default Books;
