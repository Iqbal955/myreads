import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import Shelf from "./Shelf.js";

class App extends React.Component {



  state = {
    books: [],
    ToBeRead: false,
    CurrReading: false,
    Read: false,
  };


  changeShelf() {

    console.log("Change Books")
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({
        books: books,
      }));
    });
  }

  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  updateSearch = (data) => {
    console.log(data + "this is the data");
    this.setState({ showSearchPage: data });
  };

  render() {
    return (
      <div className="app">
        <Search showSearchPage={this.updateSearch} />
        <Shelf books={this.state.books}/>
        <Dropdown changeShelf={this.changeShelf}/>
      </div>
    );
  }
}

export default App;
