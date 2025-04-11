import React, { useEffect, useState } from "react";
import "./Allbooks.css";
import { fetchAllBooks } from "../data/fetchallbooks.js";
import BookCard from "../Components/BookCard";

function Allbooks() {


  const [booksData, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchAllBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

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
