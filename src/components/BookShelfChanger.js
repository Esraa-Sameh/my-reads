import { useContext } from "react";
import BooksContext from "../store/Books.context";

function BookShelfChanger(props) {
  const booksCtx = useContext(BooksContext);
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={props.book.shelf}
        onChange={(event) => {
          booksCtx.changeBookShelf(props.book, event.target.value);
          console.log(event.target.value);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading"> Currently Reading </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default BookShelfChanger;
