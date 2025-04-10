import React from "react";
import "./BookCard.css"; // Create a separate CSS if needed

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.coverImage}
        alt={book.title || "Book cover"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://st2.depositphotos.com/2815589/5747/v/450/depositphotos_57477791-stock-illustration-loading-bar-with-a-doodle.jpg";
        }}
      />

      <p className="bookcard-title">{book.title}</p>
      <p className="bookcard-author">By {book.author}</p>
      <div className="bookcard-category">
        <p>{book.category}</p>
      </div>
      <div className="bookcard-rating">
        <p>⭐ {book.rating}</p>
      </div>
      <div className="bookcard-year">
        <p>{book.publishedYear}</p>
      </div>
      <div className="bookcard-description">
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
