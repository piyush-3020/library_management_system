
const API_URL = process.env.REACT_APP_API_URL

export async function fetchAllBooks() {
    try {
      const response = await fetch(API_URL + "api/books/allbooks");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const bookdata = await response.json();
      return bookdata;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  }