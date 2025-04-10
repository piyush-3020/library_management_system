import React from "react";
import "./News.css";

export default function News() {
  const data = {
    recommendations: [
      { id: 1, title: "The Pragmatic Programmer", author: "Andy Hunt" },
      { id: 2, title: "Clean Code", author: "Robert C. Martin" }
    ],
    returnReminders: [
      { bookId: 3, title: "Design Patterns", dueDate: "2025-04-12" }
    ],
    announcements: [
      "New arrivals in Computer Science section.",
      "Library will be closed on April 14 (Ambedkar Jayanti)."
    ]
  };

  return (
    <div className="news-wrapper">
      <div className="news-widget">
        <h2 className="news-title">📚 News & Updates</h2>

        {data.recommendations.length > 0 && (
          <div className="news-section">
            <p className="section-heading">📖 Recommended for you:</p>
            <ul className="news-list">
              {data.recommendations.map((book) => (
                <li key={book.id}>
                  <span className="book-title">{book.title}</span> by {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.returnReminders.length > 0 && (
          <div className="news-section">
            <p className="section-heading return">⏰ Return Reminders:</p>
            <ul className="news-list">
              {data.returnReminders.map((item) => (
                <li key={item.bookId}>
                  <span className="book-title">{item.title}</span> (due on {item.dueDate})
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.announcements.length > 0 && (
          <div className="news-section">
            <p className="section-heading announce">📢 Announcements:</p>
            <ul className="news-list">
              {data.announcements.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
