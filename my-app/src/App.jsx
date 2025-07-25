import './App.css'; 
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    const toggleDarkMode = () => {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  };

  return (

    <div className="app-layout">
              <div className="text-end p-2">
        <button className="btn btn-sm btn-dark" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
       </div>

      <BrowserRouter>
        <Navbar />


        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home name="Hifza Nadeem" />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
