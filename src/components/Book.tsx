import BookShelfChanger from "./BookShelfChanger";

function Book(props: any) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:props.backgroundImage,
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  );
}
export default Book;