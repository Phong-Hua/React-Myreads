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
            <Link to='/search' className="open-search" >
                <button>Add a book</button>
            </Link>
        </div>
    )
}

MainPage.propTypes = {
    currentlyReadingBooks: PropTypes.array.isRequired,
    wantToReadBooks: PropTypes.array.isRequired,
    readBooks: PropTypes.array.isRequired,
    moveBookFunction: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    getShelfOfBookFunction: PropTypes.func.isRequired
}

export default MainPage;