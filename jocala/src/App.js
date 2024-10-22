import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Route
import './App.css';
import Banner from './components/Banner';
import Company from './components/Company';
import Designer from './components/Designer';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Services from './components/Services'; // Import Services component

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="App">
        <Banner />
        <Company />
        <Designer />
        <Routes>
          <Route path="/" element={<Projects />} /> {/* Default route to Projects */}
          <Route path="/services" element={<Services />} /> {/* Route to Services */}
          <Route path="/contact" element={<Contact />} /> {/* Optional: Route to Contact */}
        </Routes>
        <Testimonials />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
