import React, { useState } from 'react';
import roadmapData from './roadmapData.js';
import './Roadmap.css';
import { useNavigate } from 'react-router-dom';

function Roadmap() {
  const [year, setYear] = useState('');
  
  const [interest, setInterest] = useState('');
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedyear = year.toLowerCase();
    const selectedInterest = interest.toLowerCase();

   console.log(selectedyear,selectedInterest)

    // Find the roadmap from allRoadmaps based on interest or stream
    const selectedRoadmap = roadmapData.find(
      (roadmap) =>
        roadmap?.year?.toLowerCase() === selectedyear &&
        roadmap?.interest?.toLowerCase() === selectedInterest
    );

    if (selectedRoadmap) {
      // 👇 Navigate to progress page and pass roadmap as state
      navigate("/myroadmap", { state: { roadmap: selectedRoadmap } });
    } else {
      alert("No roadmap found for the selected options.");
    }
  };

  return (
    <div className="roadmap-page">
      <h2>Select Your Preferences</h2>
      <form onSubmit={handleSubmit} className="roadmap-form">
        <label>Year:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>


        <label>Interest:</label>
        <select value={interest} onChange={(e) => setInterest(e.target.value)} required>
          <option value="">Select Interest</option>
          <option value="Web Dev">Web Dev</option>
          <option value="AI/ML">AI/ML</option>
          <option value="App Dev">App Dev</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Competitive Programming">Competitive Programming</option>
        </select>

        <button type="submit">Show My Roadmap</button>
      </form>

      
    </div>
  );
}

export default Roadmap;
