import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Header from "./Header";

class Book extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="list-books">
      
                <li key={this.props.books.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${this.props.books.imageLinks.thumbnail})`,
                        }}
                      />
                      <Dropdown
                        books={this.props.books}
                        changeShelf={this.props.changeShelf}
                      />
                    </div>
                    <div className="book-title">{this.props.books.title}</div>
                    <div className="book-authors">{this.props.books.authors}</div>
                  </div>
                </li>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Book;