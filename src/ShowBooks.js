import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './components/Spinner';
import { detailsBooks } from './api/bookApi';

const ShowBooks = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const data = await detailsBooks(id);
        setBook(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id])


if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold underline mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Book Details</h1>
      {book && (
        <div>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Publish Year:</strong> {book.publishYear}</p>
        </div>
      )}
    </div>

  
   );
};

export default ShowBooks;