import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt="Library"
          />
        </div>
        <div>
          <p className="about-text">
            Welcome to <strong>LibraryConnect</strong> – your gateway to smarter reading and seamless book management.
            <br />
            <br />
            Discover, borrow, and explore a world of knowledge—all in one place. Our Library Management System is
            designed to make your reading journey easier and more personalized. Whether you're a student, a faculty
            member, or just an avid reader, you can:
            <br />
            <br />
            🔍 <strong>Search and reserve books effortlessly</strong><br />
            🗓️ <strong>Track your due dates and return history</strong><br />
            💬 <strong>Leave reviews and get smart recommendations</strong><br />
            🎯 <strong>Receive personalized suggestions based on your course & semester</strong>
            <br />
            <br />
            Join us in building a smarter, more connected reading community. Your suggestions for improvement are always
            welcome!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
