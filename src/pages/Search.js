import { useEffect, useState, useRef } from "react";
import { search } from "../BooksAPI";
import { SHELF } from "../common/types/enums";
import Book from "../components/Book";

function Search() {
  const [searchBooks, setSearchBooks] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState();
  const [content, setContent] = useState();
  const inputRef = useRef();
  useEffect(() => {
    if (enteredFilter === inputRef.current.value) {
     const timer = setTimeout(() => {
        search(enteredFilter, 20).then((response) => {
          if (response && response.length && response.length !== 0) {
            let newBooks = [];
            for (let book of response) {
              newBooks.push({
                id: book.id,
                title: book.title,
                authors: book.authors ? book.authors : [],
                imageUrl: book.imageLinks ? book.imageLinks.smallThumbnail : null,
                shelf: book.shelf ? book.shelf : SHELF.NONE,
              });
            }
            setSearchBooks(newBooks);
          } else {
            setSearchBooks(undefined);
          }
        });
      }, 500);
      //clean up function
      return () => {clearTimeout(timer)}
    }
  }, [enteredFilter, inputRef]);
  useEffect(() => {
    let value;
    if (searchBooks) {
      value = searchBooks.map((book) => <Book book={book} key={book.id} />);
    } else {
      value = <p>There are no results</p>;
    }
    setContent(value);
  }, [searchBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by title, authors, or ISBN"
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{content}</ol>
      </div>
    </div>
  );
}
export default Search;
