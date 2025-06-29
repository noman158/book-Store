// Pol.js

import React from 'react';

const Pol = () => {
  return (
    <div>
      <h1>Political Science Books</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/CS">Computer Science Books</a>
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
        <div className="book-item">The Prince by Niccolò Machiavelli</div>
        <div className="book-item">The Communist Manifesto by Karl Marx and Friedrich Engels</div>
        <div className="book-item">The Republic by Plato</div>
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

export default Pol;
