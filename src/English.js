// English.js

import React from 'react';

const English = () => {
  return (
    <div>
      <h1>English Books</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/CS">Computer Science Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pol">Political Science Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ML">Machine Learning Books</a>
          </li>
        </ul>
      </nav>
      <div className="book-list">
        <div className="book-item">To Kill a Mockingbird by Harper Lee</div>
        <div className="book-item">Pride and Prejudice by Jane Austen</div>
        <div className="book-item">1984 by George Orwell</div>
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

export default English;
