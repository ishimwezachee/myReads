import React from "react";
import NewShelf from "./NewShelf";

export default function BookStore({ books, newShelf }){
  return (
    <ol className="books-grid">
      {books.map((book) => (
         <li key={book.id}>
         <div className="book">
           <div className="book-top">
             <div
               className="book-cover"
               style={{
                 backgroundImage: `url(${
                   book.imageLinks.thumbnail
                 })`,
               }}
             />
             <NewShelf
               book={book}
               books={books}
               newShelf={newShelf}
             />
           </div>
           <div className="book-title">{book.title}</div>
           {book.authors &&
             book.authors.map((author, index) => (
               <div className="book-authors" key={index}>
                 {author}
               </div>
             ))}
         </div>
       </li>
      ))}
    </ol>
  );
};


