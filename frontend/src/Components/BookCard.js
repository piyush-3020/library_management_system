import React from "react";
import "./BookCard.css"; // Create a separate CSS if needed
import { useNavigate } from "react-router-dom";


function BookCard({ book }) {
  console.log(book);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book._id}`);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <img id="bookimg" 
        src={book.photourl}
        alt={book.title || "Book cover"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://st2.depositphotos.com/2815589/5747/v/450/depositphotos_57477791-stock-illustration-loading-bar-with-a-doodle.jpg";
        }}
      />

      <p className="bookcard-title">{book.bookName}</p>
      <p className="bookcard-author">By {book.author}</p>
      <div className="bookcard-category">
        <p>{book?.categories[0]?.categoryName}</p>
      </div>
      <div className="bookcard-rating">
        <p>⭐ 4.6</p>
      </div>
      <div className="bookcard-year">
        <p>{book.bookCountAvailable}</p>
      </div>
     
    </div>
  );
}

export default BookCard;
