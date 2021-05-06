import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import Shelf from "./Shelf.js";

class Shelfs extends React.Component {
  render() {
    console.log(this.props);
    var allBooks = this.props.books;
    var currentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    var wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    var read = allBooks.filter((book) => book.shelf === "read");

    return (
      <div className="list-books">
        <div>
          <Shelf
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />

          <Shelf
            books={wantToRead}
            title={"Want to read"}
            changeShelf={this.props.changeShelf}
          />

          <Shelf
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default Shelfs;
