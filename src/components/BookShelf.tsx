import { IBook } from "../common/types/types";
import Book from "./Book";

function BookShelf(props: { books: IBook[]; title: string}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {props.books.map((book: IBook) => (
             <Book
             id={book.id}
             key={book.id}
             title={book.title}
             author={book.author}
             imageUrl={book.imageUrl}
             shelf={book.shelf}
           />
      ))}
        </ol>
      </div>
    </div>
  );
}
export default BookShelf;
