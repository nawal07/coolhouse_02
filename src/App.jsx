import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 h-100 vw-100" style={{ backgroundColor: 'var(--bg-light)' }}>
        <Navbar />
        <main className="flex-grow-1 d-flex flex-column">  {/* Added d-flex flex-column to allow inner growth */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />  {/* Ensure mt-auto for bottom push */}
      </div>
    </Router>
  );
}

export default App;