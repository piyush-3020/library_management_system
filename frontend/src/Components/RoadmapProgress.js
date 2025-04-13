import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RoadmapProgress.css';

const RoadmapProgress = () => {
  const location = useLocation();
  const { roadmap } = location.state || {};  // Get roadmap data passed via state
  const [completedTasks, setCompletedTasks] = useState([]);

  if (!roadmap) {
    return <div className="roadmap-progress-container">No roadmap data available.</div>;
  }

  // Combine books and courses into a single tasks array
  const allTasks = [...roadmap.books, ...roadmap.courses];

  // Toggle task completion state
  const toggleTask = (task) => {
    setCompletedTasks((prev) =>
      prev.includes(task)
        ? prev.filter((t) => t !== task)
        : [...prev, task]
    );
  };

  // Calculate the completion percentage
  const progressPercent = ((completedTasks.length / allTasks.length) * 100).toFixed(0);

  return (
    <div className="roadmap-progress-container">
      <h2 className="roadmap-title">{roadmap.title} Roadmap</h2>
      <p className="roadmap-description">{roadmap.description}</p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="progress-percent">{progressPercent}% Complete</div>

      <div className="section">
        <h3>📚 Books to Read</h3>
        <ul className="task-list">
          {roadmap.books.map((book, index) => (
            <li
              key={index}
              className={`task-item ${completedTasks.includes(book) ? 'completed' : ''}`}
              onClick={() => toggleTask(book)}
            >
              <input
                type="checkbox"
                checked={completedTasks.includes(book)}
                readOnly
              />
              {book}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>🎓 Courses to Complete</h3>
        <ul className="task-list">
          {roadmap.courses.map((course, index) => (
            <li
              key={index}
              className={`task-item ${completedTasks.includes(course) ? 'completed' : ''}`}
              onClick={() => toggleTask(course)}
            >
              <input
                type="checkbox"
                checked={completedTasks.includes(course)}
                readOnly
              />
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapProgress;
