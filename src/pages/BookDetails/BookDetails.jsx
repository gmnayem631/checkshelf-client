import React from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div className="max-w-11/12 mx-auto my-20">Book Details</div>;
};

export default BookDetails;
