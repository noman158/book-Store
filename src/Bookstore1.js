import React from 'react';
import CSBooksImage from './CSbooks.avif';
import MLBooksImage from './MLbooks.jpg';
import PolBooksImage from './Polbooks.jpg';
import EngBooksImage from './EngBooks.avif';
import { Link } from 'react-router-dom';
import './Bookstore1.css';

const Bookstore1 = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Shelf Book Store</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/home">Admin</Link></li>
          </ul>
        </nav>
      </header>

      {/* Books grid */}
      <div className="book-grid">
        <div className="book-item">
          <img src={CSBooksImage} className="book-image" width="400" height="300" alt="Computer Science Books" />
          <Link to="/cs">
            <h2>Computer Science Books</h2>
          </Link>
          <p>Java, CSS, HTML</p>
        </div>
        <div className="book-item">
          <img src={MLBooksImage} className="book-image" width="400" height="300" alt="Machine Learning Books" />
          <Link to="/ml">
            <h2>Machine Learning Books</h2>
          </Link>
          <p>Python, TensorFlow, Data Science</p>
        </div>
        <div className="book-item">
          <img src={PolBooksImage} className="book-image" width="400" height="300" alt="Political Science Books" />
          <Link to="/pol">
            <h2>Political Science Books</h2>
          </Link>
          <p>Politics, Government, History</p>
        </div>
        <div className="book-item">
          <img src={EngBooksImage} className="book-image" width="400" height="300" alt="English Books" />
          <Link to="/english">
            <h2>English Books</h2>
          </Link>
          <p>Literature, Poetry, Fiction</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <button className="order-button"><Link to="/order">Order Online</Link></button>
      </footer>
    </div>
  );
};

export default Bookstore1;
