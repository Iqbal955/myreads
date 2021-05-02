import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import Header from "./Header.js";

class Shelf extends React.Component {
  render() {
    var allBooks = this.props.books;
    var currentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    var wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    var read = allBooks.filter((book) => book.shelf === "read");

  
    return (
      <div className="list-books">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          {/*  book to be placed here */}
        </div>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books != null &&
              this.props.books.map((books) => <Book books={books}/>
              )}
          </ol>
        </div>

        <div>
          <Book allBooks={allBooks} />
          <Book
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          <Book
            books={wantToRead}
            title={"Want to read"}
            changeShelf={this.props.changeShelf}
          />
          <Book
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default Shelf;
