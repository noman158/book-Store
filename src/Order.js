import React from 'react';
import './Order.css';

const Order = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="order-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Shelf Book Store</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Contact">Contact Us</a></li>
            <li><a href="/Team">Our Team</a></li>
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Enter Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Enter Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className="form-label">Enter Mobile Number</label>
          <input type="tel" className="form-control" id="mobile" placeholder="Enter Mobile Number" name="mobile" required />
        </div>
        <div className="form-group">
          <label htmlFor="bookType" className="form-label">Enter Book Type</label>
          <input type="text" className="form-control" id="bookType" placeholder="Enter Book Type" name="bookType" required />
        </div>
        <div className="form-group">
          <label htmlFor="bookName" className="form-label">Enter Book Name</label>
          <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" name="bookName" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Order;
