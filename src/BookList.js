import React from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types';

function BookList(props) {
    var {books, moveBookFunction, shelves, getShelfOfBookFunction} = props;
    
    return(
        <ol className="books-grid">
            {books && books.map((book)=>{
                return (
                    <Book 
                        key={book['id']} 
                        book={book} 
                        moveBookFunction={moveBookFunction} 
                        shelves={shelves}
                        getShelfOfBookFunction={getShelfOfBookFunction}
                    />
                )
            }
            )}
        </ol>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    moveBookFunction: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    getShelfOfBookFunction: PropTypes.func.isRequired
}

export default BookList;