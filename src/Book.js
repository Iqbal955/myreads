import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Header from "./Header";
import noCover from "./images/notfound.png";



class Book extends React.Component {
  
  render() {
    console.log(this.props);
    var books = this.props.books;
    const coverImg =
    books.imageLinks && books.imageLinks.thumbnail
      ? books.imageLinks.thumbnail
      : noCover;
  const title = books.title ? books.title : 'No title available';
  const author = books.author ? books.author : "N/A"
    
    return (
      <div className="list-books">
        <div className="book">
      
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${coverImg})`,
              }}
            />
            <Dropdown books={books} changeShelf={this.props.changeShelf} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{books.author}</div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Book;
