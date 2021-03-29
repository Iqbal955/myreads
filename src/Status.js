import React from "react";
import Dropdown from "./Dropdown.js";
import Search from "./Search.js";
import * as BooksAPI from "./BooksAPI";




class Status extends React.Component {

    state = {
        books: [],
        ToBeRead: false,
        CurrReading: false,
        Read: false,
      };
    
    
    componentDidMount () {
   
        BooksAPI.getAll().then((books) => {
          console.log(books);
          this.setState(() => ({
            books: books
          }));
        });
      }
    


  render() {
      console.log(this.state.books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
             {console.log("currently reading")}
                <ol className="books-grid">
                  <li>
                
                    {this.state.books != null && this.state.books.map((books) => (
                    
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
                          <Dropdown />
                        </div>
                        <div className="book-title">{books.title}</div>
                        <div className="book-authors">{books.authors}</div>
                      </div>
                    ))}
                  </li>
                </ol>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      {this.state.books != null && this.state.books.map((books) => (
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
                          </div>
                          <div className="book-title">{books.title}</div>
                          <div className="book-authors">{books.authors}</div>
                        </div>
                      ))}
                    </li>
                  </ol>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        {this.state.books != null && this.state.books.map((books) => (
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
                              <Dropdown />
                            </div>
                            <div className="book-title">{books.title}</div>
                            <div className="book-authors">{books.authors}</div>
                          </div>
                        ))}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
