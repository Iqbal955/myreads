import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import Header from "./Header.js";

class Shelfs extends React.Component {
  render() {
    var booksArr = Array.from(this.props.books);
    console.log(booksArr)
    return (

   
      <div className="list-books">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
         
        </div>
        {booksArr !== undefined &&
            booksArr.map((books) => (
           
        <Book books={books} changeShelf={this.props.changeShelf}/>
        
          ))}
        <div />
        
      </div>
    );
  }
}

export default Shelfs;
