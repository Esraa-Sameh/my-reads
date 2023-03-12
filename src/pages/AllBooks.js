import { useContext } from "react";
import BookShelves from "../components/BookShelves";
import BooksContext from "../store/Books.context";
import { useNavigate } from "react-router-dom";

function AllBooks() {
  const booksCtx = useContext(BooksContext);
  const navigate = useNavigate();
  function navigateToSearchPage() {
    navigate("/search");
  }
  if (booksCtx.isLoading) {
    return <p>...Loading</p>;
  } else {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <BookShelves books={booksCtx.books} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={navigateToSearchPage}>Add a book</a>
        </div>
      </div>
    );
  }
}
export default AllBooks;
