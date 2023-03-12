import BookShelf from "./BookShelf";
import { SHELF } from "../common/types/enums";


function BookShelves(props) {
    const currentlyReading = props.books.filter((book) => book.shelf === SHELF.CURRENTLY_READING);
    const wantToRead = props.books.filter((book) => book.shelf === SHELF.WANT_TO_READ);
    const read = props.books.filter((book) => book.shelf === SHELF.READ);
  return (
    <div>
      <BookShelf books={currentlyReading} title={"Currently Reading"} />
      <BookShelf books={wantToRead} title={"Want to read"} />
      <BookShelf books={read} title={"Read"} />
    </div>
  );
}
export default BookShelves;
