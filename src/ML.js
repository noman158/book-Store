// ML.js

import React from 'react';

const ML = () => {
  return (
    <div>
      <h1>Machine Learning Books</h1>
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
            <a className="nav-link" href="/Engish">English Books</a>
          </li>
        </ul>
      </nav>
      <div className="book-list">
        <div className="book-item">Introduction to Machine Learning by Ethem Alpaydin</div>
        <div className="book-item">Pattern Recognition and Machine Learning by Christopher M. Bishop</div>
        <div className="book-item">Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron</div>
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

export default ML;
