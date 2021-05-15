import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Switch, Link } from "react-router-dom";
import BookList from "./BookList";
import SearchPage from "./SearchPage";
import "./App.css";

export default class App extends Component {
  constructor(props){  
    super(props);
    this.state = {
      books: [],
    }; 
}
  
  componentDidMount() {
    BooksAPI.getAll().then((bookStore) => {
      this.setState({ books:bookStore })
    })
  
  }
  onNewShelfHandler = (bookAdd, shelf) => {
    BooksAPI.update(bookAdd, shelf).then((res) => {
      if(bookAdd){
        bookAdd.shelf = shelf;
      }
      this.setState(prev => ({
        books: prev.books.filter((book) => book.id !== bookAdd.id).concat(bookAdd)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/search" >
          <SearchPage books={this.state.books} newShelf={this.onNewShelfHandler} />
          </Route>
          <Route exact path="/" >
                 <div>
                <BookList books={this.state.books} newShelf={this.onNewShelfHandler} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
          </Route>
        </Switch>
      </div>
    );
  }
}


