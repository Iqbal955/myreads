import React from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from './Book.js'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    query: "",
    books: []
    }
  }

  updateQuery = async e => {
    try {
      const query = e.target.value;
      this.setState({ query });
      if (query.trim()) {
       
        const results = await search(query);
        console.log(results);

        if (results.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: results });
        }
      }
        else {
          this.setState({books: []})
        }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={"/"}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.updateQuery}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid" />
          {this.state.books.length > 0 && this.state.books.map(book => <Book key={book.id} books={book} changeShelf={this.props.changeShelf}/>)}
        </div>
      </div>
    );
  }
}

export default Search;
