import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Header from "./Header";

class Book extends React.Component {
  render() {
    console.log(this.props)
    var books = this.props.books
    return (
      <div className="list-books">
 
          
        
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${
                        books.imageLinks.thumbnail
                      })`,
                    }}
                  />
                  <Dropdown
                    books={books}
                    changeShelf={this.props.changeShelf}
                  />
                </div>
                <div className="book-title">{books.title}</div>
                <div className="book-authors">{books.authors}</div>
              </div>
        
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Book;
