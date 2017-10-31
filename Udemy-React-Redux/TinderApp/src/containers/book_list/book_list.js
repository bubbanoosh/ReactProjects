import React, { Component } from 'react';
import { connect } from 'react-redux'; // The Glue

// Import action creators & BIND
import { selectBook } from '../../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={(book) => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// Whatever is returned here will become props in BookList
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

//Take the component and the mapStateToProps
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);