import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bookstore1 from './Bookstore1';
import Contact from './Contact';
import CS from './CS';
import English from './English';
import ML from './ML';
import Order from './Order';
import Pol from './Pol';
import Team from './Team';
import Home from './Home';
import BookDetails from './ShowBooks'; 
import CreateBook from './CreateBooks';
import EditBook from './EditBooks';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bookstore1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/english" element={<English />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pol" element={<Pol />} />
        <Route path="/team" element={<Team />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books/show/:id" element={<BookDetails />} /> 
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
      
        
      </Routes>
    </Router>
  );
}
