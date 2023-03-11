import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import BookShelves from "./components/BookShelves";
import { IBook } from "./common/types/types";
import { SHELF } from "./common/types/enums";
import { getAll } from "./BooksAPI";
import AllBooksPage from "./common/types/pages/AllBooksPage";
import Search from "./common/types/pages/SearchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<AllBooksPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
  // const [showSearchPage, setShowSearchpage] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   getAll().then((booksRes) => {
  //     setIsLoading(false);
  //     let books = [];
  //     for (let book of booksRes) {
  //       books.push({
  //         id: book.id,
  //         title: book.title,
  //         authors: book.authors,
  //         imageUrl: book.imageLinks ? book.imageLinks.smallThumbnail : null,
  //         shelf: book.shelf,
  //       });
  //     }
  //     setBooks(books);
  //   });
  // }, []);
  // if (isLoading) {
  //   return <p>...Loading</p>;
  // } else {
  //   return (
  //     <div className="app">
  //       {showSearchPage ? (
  //         <div className="search-books">
  //           <div className="search-books-bar">
  //             <a
  //               className="close-search"
  //               onClick={() => setShowSearchpage(!showSearchPage)}
  //             >
  //               Close
  //             </a>
  //             <div className="search-books-input-wrapper">
  //               <input
  //                 type="text"
  //                 placeholder="Search by title, authors, or ISBN"
  //               />
  //             </div>
  //           </div>
  //           <div className="search-books-results">
  //             <ol className="books-grid"></ol>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="list-books">
  //           <div className="list-books-title">
  //             <h1>MyReads</h1>
  //           </div>
  //           <div className="list-books-content">
  //             <div>
  //               <BookShelves books={books} />
  //             </div>
  //           </div>
  //           <div className="open-search">
  //             <a onClick={() => setShowSearchpage(!showSearchPage)}>
  //               Add a book
  //             </a>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}

export default App;
