import React from "react";
import BookShelf from "./BookStore";
import Header from './Header'

export default function BookList({ books, newShelf }){
  const bookClass =[{ type: "currentlyReading", name: "Currently Reading" },{ type: "wantToRead", name: "Want to Read" },{ type: "read", name: "Read" }];
  return (
     <>
     <Header/>
    <div className="list-books-content">
      {bookClass.map((shelf, index) => {
        const booksFromStore = books.filter((book) => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <BookShelf books={booksFromStore} newShelf={newShelf} />
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};




