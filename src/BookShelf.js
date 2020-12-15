import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList.js';

function BookShelf(props) {

    var {shelfTitle, books, moveBookFunction, shelves, getShelfOfBookFunction} = props;
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <BookList 
                    books={books} 
                    moveBookFunction={moveBookFunction} 
                    shelves={shelves}    
                    getShelfOfBookFunction ={getShelfOfBookFunction}
                />
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    moveBookFunction: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    getShelfOfBookFunction: PropTypes.func.isRequired
}

export default BookShelf;