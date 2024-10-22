import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Router and Route
import './App.css';
import Banner from './components/Banner';
import Company from './components/Company';
import Designer from './components/Designer';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Services from './components/Services'; 

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="App">
        <Banner />
        <Company />
        <Designer />
        <Routes>
          <Route path="/projects" element={<Projects />} /> {/* Route for Projects */}
          <Route path="/services" element={<Services />} /> {/* Route for Services */}
          <Route path="*" element={<Navigate to="/projects" />} /> {/* Redirect to Projects for unknown routes */}
        </Routes>
        <Testimonials /> {/* Always rendered */}
        <Contact /> {/* Always rendered */}
      </div>
    </Router>
  );
}

export default App;
