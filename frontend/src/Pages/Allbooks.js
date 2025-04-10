import React from "react";
import "./Allbooks.css";
import booksData from '../data/bookData'; // assuming booksData.js is in same folder
import BookCard from "../Components/BookCard";

function Allbooks() {
  return (
    <div className="books-page">
      <div className="books">
        {booksData.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Allbooks;
