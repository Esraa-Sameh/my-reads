import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  console.log(props.book);
  return (
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageUrl})`,
            }}
          ></div>
          <BookShelfChanger book={props.book} />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors.toString()}</div>
      </div>
    </li>
  );
}
export default Book;
