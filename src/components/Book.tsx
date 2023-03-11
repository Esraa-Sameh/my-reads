import BookShelfChanger from "./BookShelfChanger";

function Book(props: any) {
  return (
    <li>

    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${props.imageUrl})`,
          }}
        ></div>
        <BookShelfChanger shelfDefaultValue={props.shelf} />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
    </li>
  );
}
export default Book;