import React from 'react';
import MoveOptions from './MoveOptions.js';
import PropTypes from 'prop-types';


function Book(props) {

    var imageWidth = 128, imageHeight = 193;

    var {book, moveBookFunction, shelves, getShelfOfBookFunction} = props;
    
    var authors = (book['authors']) ? (book['authors'].toString()) : '';
    var title = (book['title']) ? book['title'] : '';
    var imageThumbnail = (book['imageLinks'] && book['imageLinks']['thumbnail']) ? book['imageLinks']['thumbnail'] : '';

    var url = 'url('+imageThumbnail+')';

    return(
        <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: imageWidth, height: imageHeight, backgroundImage: url}}></div>
                <MoveOptions 
                    book={book} 
                    moveBookFunction={moveBookFunction}
                    shelves={shelves}
                    getShelfOfBookFunction={getShelfOfBookFunction}
                />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
            </div>
      </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    moveBookFunction: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    getShelfOfBookFunction: PropTypes.func.isRequired
}

export default Book;