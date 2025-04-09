import { Book } from '../types/book';
const API_BASE_URL = 'http://localhost:3000/api';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_BASE_URL}/books`);
  return await response.json();
};

export const fetchBook = async (id: string): Promise<Book> => {
  const response = await fetch(`${API_BASE_URL}/books/${id}`);
  return await response.json();
};

export const createBook = async (book: Omit<Book, '_id'>): Promise<Book> => {
  const response = await fetch(`${API_BASE_URL}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return await response.json();
};

export const updateBook = async (id: string, book: Partial<Book>): Promise<Book> => {
  const response = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return await response.json();
};

export const deleteBook = async (id: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'DELETE',
  });
};

export const checkStatus = async (): Promise<{ status: string }> => {
  const response = await fetch(`${API_BASE_URL}/status`);
  return await response.json();
};