import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MoveOptions extends Component{

    static propTypes = {
        book: PropTypes.object.isRequired,
        shelves: PropTypes.array.isRequired,
        moveBookFunction: PropTypes.func.isRequired,
        getShelfOfBookFunction: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);

        this.shelves = props.shelves;
        this.moveBookFunction = props.moveBookFunction;
        this.book = props.book;

        this.getShelfOfBookFunction = props.getShelfOfBookFunction
        this.getShelfOfBookFunction = this.getShelfOfBookFunction.bind(this)
        this.state = {
            shelf: props.getShelfOfBookFunction(this.book['id'])
        }
        
    }

    /**
     * Updating the shelf of state.
     * Perform moveBookFunction which make a call to BooksAPI to update shelf of a book.
     * @param {*} event 
     */
    handleMoveFunction(event){
       
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
            </div>
        )
    }
}

export default MoveOptions;