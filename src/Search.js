import React from "react";

class Search extends React.Component {
  render() {
    return (
    <div>
        <input type="text" placeholder="Search by title or author" />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default Search;
