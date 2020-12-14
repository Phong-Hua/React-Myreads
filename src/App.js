import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBar from './SearchBar.js';
import MainPage from './MainPage.js';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books : [],
    }
    this.shelves = ['currentlyReading', 'wantToRead', 'read', 'none'];
    this.moveBookFunction = this.moveBookFunction.bind(this)
  }

  componentDidMount() {
    this.fetchBookFunction();
  }

  /**
   * Get all books on shelves.
   * And update the book state.
   */
  async fetchBookFunction() {
    var books = await BooksAPI.getAll();   

    this.setState((currentState) => (
      {books: [...currentState.books, ...books]}
    ))
  }

  /**
   * Async function, return a book by id.
   * @param {*} id 
   */
  async getBookByIDFunction(id) {
    var book = await BooksAPI.get(id);
    return book;
  }

  /**
   * Search in the books on state and find the shelf of the book match given ID.
   * Return 'NONE' if no book match.
   * @param {*} id 
   */
  async getShelfOfBookFunction(id)
  {
    for(var i=0; i < this.state.books.length; i++)
    {
      const book = this.state.books[i];
      if (book['id'] === id)
        return book['shelf']
    }
    return this.shelves[3]
  }

  async moveBookFunction(book, newShelf) {

    const shelvesAfterUpdated = await BooksAPI.update(book, newShelf)

    const currentlyReadingIDs = shelvesAfterUpdated[this.shelves[0]];
    const wantToReadIDs = shelvesAfterUpdated[this.shelves[1]];
    const readIDs = shelvesAfterUpdated[this.shelves[2]];

    const newBookSize = currentlyReadingIDs.length + wantToReadIDs.length + readIDs.length;

    // find ID of the updated book
    const updatedBookID = book['id'];
    // we add new book in
    if (newBookSize > this.state.books.length)
    {
      // find newBook and modify state
      const newBook = await this.getBookByIDFunction(updatedBookID)
      this.setState((currentState) => (
        {
          books: [...currentState.books, newBook]
        }
      ))
    }  
    // we remove a book from the shelf
    else if (newBookSize < this.state.books.length)
    {
      this.setState((currentState) => (
        {
          books: currentState.books.filter(book => book['id'] !== updatedBookID)
        }
      ))
    }
    else
    {
      // find newBook and modify state
      const newBook = await this.getBookByIDFunction(updatedBookID)
      this.setState((currentState) => (
        {
          books: [...currentState.books.filter((book) => book['id'] !== updatedBookID), newBook]
        }
      ))
    }
  }

  closeSearchFunction(history) {
    console.log("Close search")
    history.push('/')
  }

  render() {
    

    return (
      <div className="app">
        <Route exact path='/' render={()=>(
            <MainPage 

              currentlyReadingBooks={this.state.books.filter(book=>book['shelf'] === this.shelves[0])}
              wantToReadBooks={this.state.books.filter(book=>book['shelf'] === this.shelves[1])}
              readBooks={this.state.books.filter(book=>book['shelf'] === this.shelves[2])}
              getShelfOfBookFunction={this.getShelfOfBookFunction}
              moveBookFunction={this.moveBookFunction} 
              shelves={this.shelves}

            />)}/>
        <Route path='/search' render={({history})=>(
            <SearchBar 
                moveBookFunction={this.moveBookFunction} 
                closeSearchFunction={() => {this.closeSearchFunction(history)}}
                shelves={this.shelves}
                getShelfOfBookFunction={this.getShelfOfBookFunction}
            />)} 
        />
      </div>
    )
  }
}

export default BooksApp
