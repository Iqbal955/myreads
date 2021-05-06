import React from "react";

class Dropdown extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="book-shelf-changer">
        <select onChange={e=> this.props.changeShelf(this.props.books, e.target.value)
        }>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
