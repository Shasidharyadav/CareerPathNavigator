import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import AddCareerPath from './pages/AddCareerPath';
import Quizzes from './pages/Quizzes';
import Mentors from './pages/Mentors';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCareerPath" element={<AddCareerPath />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
