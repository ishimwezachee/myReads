import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import New from "./NewShelf";

class SearchPage extends Component {
  constructor(props){  
    super(props);
    this.state = {
      Arr: [],
      input: "",
    };  
    this.onRetrieveBooks = this.onRetrieveBooks.bind(this);
}
  onRetrieveBooks(e){
    const input = e.target.value;
    console.log(input)
    this.setState({ input });
    if (input) {
      BooksAPI.search(input, 15).then((books) => {
        if (books.length > 0) this.setState({ Arr: books });
      });
    } else this.setState({ Arr: [] });
  };

  render() {
    let Arr = this.state.Arr;
    let input = this.state.input;
    let books = this.props.books
    let newShelf = this.props.newShelf
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={input}
              onChange={this.onRetrieveBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {Arr.length > 0 && (
            <div>
              <ol className="books-grid">
                {Arr.map((book) => (
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
                        <New
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
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SearchPage;
