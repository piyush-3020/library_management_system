import React, { useEffect, useState } from 'react'
import './RecentAddedBooks.css'
import { fetchAllBooks } from '../data/fetchallbooks';
import { useNavigate } from 'react-router-dom';

function RecentAddedBooks() {
   const [bookImagesData, setBooks] = useState([]);
   const navigate=useNavigate();
   
     useEffect(() => {
       const getBooks = async () => {
         const data = await fetchAllBooks();
         setBooks(data);
       };
       getBooks();
     }, []);

     const handleClick = (id) => {
        navigate(`/book/${id}`);
      };
    return (
        <div className='recentaddedbooks-container'>
            <h className='recentbooks-title'>Recent Uploads</h>
            <div className='recentbooks'>
                <div className='images'>
                {bookImagesData.map((url, index) => (
                    <img key={index} className='recent-book' src={url.photourl} alt={`Book ${index + 1}`} onClick={()=>handleClick(url._id)}/>
                ))}
                </div>
                
            </div>
        </div>
    )
}

export default RecentAddedBooks