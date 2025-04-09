export interface Book {
  _id: string;
  title: string;
  author: string;
  ISBN: string;
  publishedYear?: number;
  genre?: string;
}