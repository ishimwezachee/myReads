import React from "react";

export default function NewShelf({ newShelf, book, books }) {
  let currentStore = "none";
  function anotherShelf(e) {
    newShelf(book, e.target.value);
    for (let i = 0; i <= books.lenth; i++) {
      if (books[i].id === book.id) {
        currentStore = books[i].shelf;
        break;
      }
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={anotherShelf} defaultValue={currentStore}>
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
