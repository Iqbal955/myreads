import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import Shelfs from "./Shelfs.js";
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
      console.log(books);
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

  addNewBooks = (book) => {
    this.setState({
      books: [...book],
    });
  };


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
          render={() => (
            <Search
              showSearchPage={this.updateSearch}
              addNewBooks={this.addNewBooks}
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Shelfs books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
      </div>
    );
  }
}

export default App;
