import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Company from './components/Company';
import Designer from './components/Designer';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Company />
      <Designer />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
