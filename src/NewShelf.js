import React from "react";

export default function NewShelf({ newShelf, book, books }) {
  function anotherShelf(e) {
    let input = e.target.value;
    newShelf(book, input);
  }
  let store = "none";
  for (let i = 0; i <= books.lenth; i++) {
    if (books[i].id === book.id) {
      store = books[i].shelf;
      break;
    }
  }
  return (
    <div className="book-shelf-changer">
      <select onChange={anotherShelf} defaultValue={store}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
