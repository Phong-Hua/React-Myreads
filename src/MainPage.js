import React from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function MainPage(props) {

    var {currentlyReadingBooks, wantToReadBooks, readBooks, moveBookFunction, shelves, getShelfOfBookFunction} = props;
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf shelfTitle='Current Reading' books={currentlyReadingBooks} moveBookFunction={moveBookFunction} shelves={shelves} getShelfOfBookFunction={getShelfOfBookFunction}/>
                    <BookShelf shelfTitle='Want to Read' books={wantToReadBooks} moveBookFunction={moveBookFunction} shelves={shelves} getShelfOfBookFunction={getShelfOfBookFunction}/>
                    <BookShelf shelfTitle='Read' books={readBooks} moveBookFunction={moveBookFunction} shelves={shelves} getShelfOfBookFunction={getShelfOfBookFunction}/>
                </div>
            </div>
            <Link to='/search'  className="open-search">Add a book</Link>
            {/* <button className="open-search"></button> */}
            {/* <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div> */}
        </div>
    )
}

MainPage.propTypes = {
    currentlyReadingBooks: PropTypes.array.isRequired,
    wantToReadBooks: PropTypes.array.isRequired,
    readBooks: PropTypes.array.isRequired
}

export default MainPage;