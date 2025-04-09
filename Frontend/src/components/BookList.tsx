import { Book } from '../types/book';

import { useEffect, useState } from 'react';
import { fetchBooks, deleteBook } from '../api/books';

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
    } catch (error) {
      console.error('Error loading books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) return <div>Loading books...</div>;

  return (
    <div className="book-list">
      <h2>Book Collection</h2>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book._id}>
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.ISBN}</p>
              </div>
              <div>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
                <button>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};