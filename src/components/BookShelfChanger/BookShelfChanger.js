import { useContext, useState, useEffect } from "react";
import BooksContext from "../../store/Books.context";

function BookShelfChanger(props) {
  const booksCtx = useContext(BooksContext);
  const [shelf, setShelf] = useState();
  function changeBookShelfHandler(event) {
    setShelf(event.target.value);
    booksCtx.changeBookShelf(props.book, event.target.value);
  }
  useEffect(() => {
    setShelf(props.book.shelf);
  },[])
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={shelf}
        onChange={(event) => {
          changeBookShelfHandler(event);
        }}
      >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading"> Currently Reading </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default BookShelfChanger;
