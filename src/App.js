import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import Shelf from "./Shelf.js";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
    query: "",
    ToBeRead: false,
    CurrReading: false,
    Read: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({
        books: books,
      }));
      console.log(books)
    });
  }
  changeShelf = (book, shelf) => {
    this.setState({
      books: this.state.books.map((b) => {
        console.log(b);
        if (b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      }),
    });
    console.log("Change Books");
  };

  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  updateSearch = (keyword, seteKeyword) => {
    console.log("this is the data");
    this.setState({ showSearchPage: keyword });
  };

  render() {
    return (
      <div className="app">

        <Route
          exact
          path="/search"
          render={() => <Search showSearchPage={this.updateSearch} changeShelf={this.changeShelf} books={this.state.books}/>}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Shelf books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />


      </div>

    );
  }
}

export default App;