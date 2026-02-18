import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column min-vh-100 h-100 vw-100"
        style={{ backgroundColor: 'var(--bg-light)' }}
      >
        <Navbar />
        {/* <main className="flex-grow-1 d-flex flex-column">   */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </main> */}
        <Footer className="mt-auto" />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
