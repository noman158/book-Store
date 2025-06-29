// CS.js

import React from 'react';

const CS = () => {
  return (
    <div>
      <h1>Computer Science Books</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pol">Political Science Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Engish">English Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ML">Machine Learning Books</a>
          </li>
        </ul>
      </nav>
      <div className="book-list">
        <div className="book-item">Introduction to Algorithms by Thomas H. Cormen</div>
        <div className="book-item">Computer Networking: A Top-Down Approach by James F. Kurose</div>
        <div className="book-item">Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin</div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <button type="button"><a href="/Order">Order Online</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS;
