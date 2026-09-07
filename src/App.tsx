import { useState } from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import './App.css';

function App() {
  const [, setCurrentSlide] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <h1>Royal Bath</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="home">
        <Hero onSlideChange={setCurrentSlide} />
        <Collections />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Royal Bath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
