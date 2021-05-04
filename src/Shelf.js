import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import Header from "./Header.js";

class Shelfs extends React.Component {
  render() {

    return (
      <div className="list-books">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
        </div>
        {this.props.books !== undefined &&
          this.props.books.map((books) => (
              
        <Book books={this.props.books} />
        
          ))}
        <div />
      </div>
    );
  }
}

export default Shelfs;
