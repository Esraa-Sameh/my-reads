import { SHELF } from "../common/types/enums";
import { IBook } from "../common/types/types";
import BookShelf from "./BookShelf";


function BookShelves(props: { books: IBook[]; }) {
    const currentlyReading: Array<IBook> = props.books.filter((book:IBook) => book.shelf === SHELF.CURRENTLY_READING);
    const wantToRead: Array<IBook> = props.books.filter((book:IBook) => book.shelf === SHELF.WANT_TO_READ);
    const read: Array<IBook> = props.books.filter((book:IBook) => book.shelf === SHELF.READ);
  return (
    <div>
      <BookShelf books={currentlyReading} title={"Currently Reading"} />
      <BookShelf books={wantToRead} title={"MyReads"} />
      <BookShelf books={read} title={"Read"} />
    </div>
  );
}
export default BookShelves;
