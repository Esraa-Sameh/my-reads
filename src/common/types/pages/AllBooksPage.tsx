import { useState, useEffect } from "react";
import { getAll } from "../../../BooksAPI";
import BookShelves from "../../../components/BookShelves";

function AllBooksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
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
  if (isLoading) {
    return <p>...Loading</p>;
  } else {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves books={books} />
          </div>
        </div>
        {/* <div className="open-search">
      <a onClick={() => setShowSearchpage(!showSearchPage)}>
        Add a book
      </a>
    </div> */}
      </div>
    );
  }
}
export default AllBooksPage;
