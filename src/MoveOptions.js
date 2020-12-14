import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

class MoveOptions extends Component{

    constructor(props){
        super(props);

        this.shelves = props.shelves;
        this.moveBookFunction = props.moveBookFunction;
        this.book = props.book;
        this.index = props.index;

        this.getShelfOfBookFunction = props.getShelfOfBookFunction

        this.state = {
            shelf: props.getShelfOfBookFunction(this.book['id'])
            // shelf: (this.book['shelf']) ? this.book['shelf'] : this.shelves[3]
        }
        
    }

    /**
     * Updating the shelf of state.
     * Perform moveBookFunction which make a call to BooksAPI to update shelf of a book.
     * @param {*} event 
     */
    handleMoveFunction(event){

        /**
         * This one work
         */
        // this.setState({shelf: event.target.value}, ()=>{
        //     this.moveBookFunction(this.book, this.state.shelf)
        // })

        /**
         * This one work, too.
         */
        var newShelf = event.target.value;
        if (this.state.shelf !== newShelf)
        {
            this.setState((currentState)=>({shelf: newShelf}));
            this.moveBookFunction(this.book, newShelf)
        }
    }


    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={(event) => (this.handleMoveFunction(event))}>
                    <option value="move" disabled>Move to...</option>
                    <option value={this.shelves[0]} >Currently Reading</option>
                    <option value={this.shelves[1]} >Want to Read</option>
                    <option value={this.shelves[2]} >Read</option>
                    <option value={this.shelves[3]} >None</option>
                </select>
                <button onClick={() => {console.log(this.book['title'] +', '+ this.state.shelf +', ' + this.index)}} > Click here </button>
            </div>
        )
    }
}

MoveOptions.propTypes = {
    book: PropTypes.object.isRequired
}

export default MoveOptions;