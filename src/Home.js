import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner';
import { Link } from 'react-router-dom';
import Notification from './components/Notification';
import { getBooks, deleteBook } from './api/bookApi';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [notification, setNotification] = useState(null);
    
    useEffect(() => {
        const fetchBooks = async () =>{
            try {
                const data = await getBooks();
                setBooks(data.data);
                setLoading(false);
                
            } catch (error) {
                console.error(error);                
            }
        }

        fetchBooks();
    }, [])

    const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book._id !== id));
      setNotification({ message: 'Book deleted successfully!', type: 'success' });
    } catch (error) {
      setNotification({ message: error.message, type: 'error' });
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };

    if(loading){
        return(
            <Spinner />
        )
    }


    return (

    
    <div className="container mx-auto p-4">

        {notification && (
        <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
      )}
      <h1 className="text-3xl font-bold underline mb-4">Book List</h1>
      <Link to="/books/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add New Book</Link>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Publish Year</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.publishYear}</td>
              <td className="border px-4 py-2">
                <Link to={`/books/show/${book._id}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Details</Link>
                <Link to={`/books/edit/${book._id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home