import { createContext, useEffect, useState } from "react";
import { getAll, update } from "../BooksAPI";

const BooksContext = createContext({
  books: [],
  changeBookShelf: (book, newShelf) => {},
  isLoading: true,
});

export function BooksContextProvider(props) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAll().then((booksRes) => {
      setIsLoading(false);
      let books = [];
      for (let book of booksRes) {
        books.push({
          id: book.id,
          title: book.title,
          authors: book.authors,
          imageUrl: book.imageLinks ? book.imageLinks.smallThumbnail : null,
          shelf: book.shelf,
        });
      }
      setBooks(books);
    });
  }, []);

  function changeBookShelfHandler(book, newShelf) {
    update(book, newShelf).then((result) => {
      console.log(result);
    });
    setBooks((prevBooks) => {
      let newBook = true;
      const updatedBooks = prevBooks.map((b) => {
        if (b.id === book.id) {
          b.shelf = newShelf;
          newBook = false;
        }
        return b;
      });
      if (newBook) updatedBooks.push({...book, shelf: newShelf});
      return updatedBooks;
    });
  }
  const context = {
    books: books,
    changeBookShelf: changeBookShelfHandler,
    isLoading: isLoading,
  };
  return (
    <BooksContext.Provider value={context}>
      {props.children}
    </BooksContext.Provider>
  );
}
export default BooksContext;
