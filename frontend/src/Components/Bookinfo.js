import React, { useEffect, useState } from "react";
import "./Bookinfo.css";
import { useParams } from "react-router-dom";

const BookInfo = () => {
    const API_URL = process.env.REACT_APP_API_URL

    const { id } = useParams(); // 
    console.log(id);
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      // fetch book data by id
      const fetchBook = async () => {
        try {
          const response = await fetch(API_URL + `api/books/getbook/${id}`);
          const data = await response.json();
          setBook(data);
        } catch (err) {
          console.error("Error fetching book:", err);
        }
      };
  
      fetchBook();
    }, [id]);
  
    if (!book) return <p>Loading book info...</p>;

  return (
    <div className="book-container">
      <img className="book-image" src={book.photourl} alt={book.title} />
      <div className="book-details">
        <h2 className="book-title">{book.bookName}</h2>
        <p className="book-author"><strong>Author:</strong> {book.author}</p>
        <p className="book-info"><strong>Publisher:</strong> {book.publisher}</p>
        <p className="book-info"><strong>Language:</strong> {book.language}</p>
        <p className="book-info"><strong>Genre:</strong> {book.categories[0].categoryName}</p>
        <p className="book-info"><strong>Copies Available:</strong> {book.bookCountAvailable}</p>

        <div className="issued-section">
          <strong>Issued To:</strong>
          {book?.issuedTo?.length > 0 ? (
            <ul className="issued-list">
              {book.issuedTo.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          ) : (
            <p className="no-issued">This book hasn't been issued to anyone yet.</p>
          )}
        </div>

        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookInfo;