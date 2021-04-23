import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import Header from './Header'

class Book extends React.Component {
  render() {
    console.log(this.props.books)
    return (
      <div className="list-books">

      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
         {/*  book to be placed here */}
      </div>
      <div className="bookshelf-books">
       
        <ol className="books-grid">
         
            {this.props.books != null &&
              this.props.books.map((books) => (
                <li key={this.props.books.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${books.imageLinks.thumbnail})`,
                      }}
                    />
                    <Dropdown books = {books} changeShelf={this.props.changeShelf}/>
                  </div>
                  <div className="book-title">{books.title}</div>
                  <div className="book-authors">{books.authors}</div>
                </div>
              </li>
              ))}
         
        </ol>
      </div>
      </div>
    );
  }
}

export default Book;
