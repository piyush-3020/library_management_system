import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from './Pages/Home';
import Signin from './Pages/Signin';
import MemberDashboard from './Pages/Dashboard/MemberDashboard/MemberDashboard';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard';
import Allbooks from './Pages/Allbooks';
import BookInfo from './Components/Bookinfo';
import Header from './Components/Header';
import Roadmap from "./Components/Roadmap.js"; 
import RoadmapProgress from './Components/RoadmapProgress.js';
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={
            user ? (
              user.isAdmin ? <Navigate to="/dashboard@admin" /> : <Navigate to="/dashboard@member" />
            ) : (
              <Signin />
            )
          } />

          <Route path="/dashboard@member" element={
            user ? (
              user.isAdmin === false ? <MemberDashboard /> : <Navigate to="/" />
            ) : (
              <Navigate to="/" />
            )
          } />

          <Route path="/dashboard@admin" element={
            user ? (
              user.isAdmin === true ? <AdminDashboard /> : <Navigate to="/" />
            ) : (
              <Navigate to="/" />
            )
          } />

          <Route path="/books" element={<Allbooks />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/myroadmap" element={<RoadmapProgress />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
