import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [books, setBooks] =useState([]);

  // const options = {
  //   method: 'GET',
  //   url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
  //   headers: {
  //     'X-RapidAPI-Key': '',
  //     'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  //   }
  // };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setBooks(jsonData);
    };
    fetchBooks();
  },[]);

  // async function fetchBooks() {
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   useEffect(() => {
  //     fetchBooks();
  //   },[])
  // }
  return(
    <table className='table'>
      <td>
        {books && books.map((book) => (
          <div key={book.id}>
            <h2>{book.name}</h2>
            <h4>{book.email} <br/>{book.website}</h4>
            {/* <img src={book.cover} alt={book.name} /> */}

          </div>
        ))}
      </td>
    </table>
  );
}

export default App;
