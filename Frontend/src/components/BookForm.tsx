import { Book } from '../types/book';

import { useState } from 'react';
import { createBook, updateBook} from '../api/books';

interface BookFormProps {
  initialData?: Book;
  onSuccess?: () => void;
}

export const BookForm = ({ initialData, onSuccess }: BookFormProps) => {
  const [formData, setFormData] = useState<Omit<Book, '_id'>>(
    initialData || { title: '', author: '', ISBN: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (initialData?._id) {
        await updateBook(initialData._id, formData);
      } else {
        await createBook(formData);
      }
      onSuccess?.();
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Book' : 'Add New Book'}</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ISBN:</label>
        <input
          type="text"
          name="ISBN"
          value={formData.ISBN}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};