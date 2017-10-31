import React, {Component} from 'react';
import { connect } from 'react-redux'; // The Glue

class BookDetail extends Component {

    render() {
        if (!this.props.book) {
            return <div>Select a book to begin</div>;
        }
        
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
                </div>
        );
    }
}

// Whatever is returned here will become props in BookList
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

//Take the component and the mapStateToProps
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps)(BookDetail);