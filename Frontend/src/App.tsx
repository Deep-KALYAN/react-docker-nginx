import { Book } from './types/book';
import { useState } from 'react';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';
import { StatusIndicator } from './components/StatusIndicator';

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleSuccess = () => {
    setShowForm(false);
    setEditingBook(null);
  };

  return (
    <div className="app">
      <h1>Library Management System</h1>
      <StatusIndicator />
      
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Book'}
      </button>

      {showForm && (
        <BookForm 
          initialData={editingBook || undefined} 
          onSuccess={handleSuccess} 
        />
      )}

      <BookList />
    </div>
  );
};


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
