import React, { useEffect, useState, useContext } from "react";
import "./RecommendationPage.css"; // External CSS file
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const RecommendationPage = () => {
    const { user } = useContext(AuthContext);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // Step 1: Extract the 0th book ID from the prevTransactions array
        const firstBookId = user.prevTransactions[0];
    
        
        // Step 2: Fetch the book details using /getbook/:id endpoint
        const bookRes = await axios.get(`http://localhost:8000/api/transactions/booknamebytransactions/${firstBookId}`);

        
        // Step 3: Get the book name from the response (assuming the response contains 'bookName')
        const bookName = bookRes.data; // Change this according to your API response structure

        // Step 4: Send the book name to the Python recommendation API
        const pythonRes = await axios.post(
          "http://127.0.0.1:5000/recommend", // Python recommendation API endpoint
          { read_books: [bookName] } // Send the book name in the body
        );
        const cleanedData = pythonRes.data.replace(/NaN/g, 'null');
        const maindata=await JSON.parse(cleanedData);
        //const maindata=await JSON.parse(data)
        
        // Step 5: Set the recommended books from the response
        setRecommendedBooks(maindata); 
        console.log(pythonRes,maindata)
        // Assuming recommendations are in the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [user]); // The effect will re-run when 'user' changes

  return (
    <div className="recommendation-container">
      <h1 className="title">Recommended for You</h1>

      {loading ? (
        <p className="loading">Loading recommendations...</p>
      ) : recommendedBooks?.length === 0 ? (
        <p className="no-recommendation">No recommendations available.</p>
      ) : (
        <div className="books-grid">
          {recommendedBooks?.map((book) => (
            <div key={book.isbn13} className="book-card">
              <img src={book.thumbnail} alt={book.title} className="book-imager" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.authors}</p>
              <p className="book-category">{book.categories}</p>
              <p className="book-rating">⭐ {book.average_rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationPage;
