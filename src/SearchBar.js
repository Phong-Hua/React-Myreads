import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList.js';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        getShelfOfBookFunction: PropTypes.func.isRequired
    }
    
    constructor(props) {

        super(props)
        this.shelves= props.shelves
        this.getShelfOfBookFunction = props.getShelfOfBookFunction

        this.state = {
            invalidQuery : false,
            booksToDisplay : [],
        }
        this.closeSearchFunction = props.closeSearchFunction;
    }

    componentDidMount() {
        // this.fetchBookFunction();
        console.log('update12')
    }

    handleInput = (event) => {

        var input = event.target.value.trim();

        BooksAPI.search(input).then((searchResult) =>{


            if (Array.isArray(searchResult))
            {

                this.setState(() => ({
                    invalidQuery: false,
                    booksToDisplay: searchResult
                }))
            }
            else
            {
                this.setState(()=>({
                    invalidQuery : true,
                    booksToDisplay: []
                }))
            }
            
        })

    }

    /**
     * Display error message when no search-result
     */
    displayErrorMessage = () => {
        return (
            <div className='error-message'>
                <p>Not found any book with search criteria. Please try again with words:</p>
                <p> 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',                                       
                        'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
                        'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
                        'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
                        'Education', 'Everything',  
                        'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                        'Games', 'Gandhi', 
                        'Homer', 'Horror', 'Hugo',
                        'Ibsen',
                        'Journey',  
                        'Kafka', 'King',
                        'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 
                        'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
                        'Negotiate', 
                        'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',                                        
                        'React', 'Redux', 'River', 'Robotics', 'Rowling', 
                        'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
                        'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
                        'Ultimate', 
                        'Virtual Reality',
                        'Web Development', 
                        'iOS'
                </p>
            </div>
        )
    }

    render() {

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.closeSearchFunction}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" 
                            onChange={this.handleInput}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                {
                    
                    this.state.booksToDisplay.length > 0 && (
                        <BookList 
                            books={this.state.booksToDisplay} 
                            moveBookFunction={this.props.moveBookFunction}
                            shelves={this.shelves}
                            getShelfOfBookFunction = {this.getShelfOfBookFunction}
                        />
                    )
                }
                {
                    this.state.invalidQuery && (this.displayErrorMessage())
                }   
                </div>
          </div>
        )
    }
}

export default SearchBar;