import React, { Component } from 'react';
import csvToArray from '../../../helpers/handleCsv';


class PostDetail extends Component {
    render() {

        return (
            <div>
                {this.props.post && <div>
                    <h3>Title: {this.props.post.title}</h3>
                    <div className="well well-lg">{this.props.post.content}</div>
                    {this.props.post.categories !== null && 
                        displayCategoriesAsAList(this.props.post.categories)}
                </div>}
            </div>
        );
    }
}

function displayCategoriesAsAList(categories) {
    let categoriesDisplay = '';

    if (categories !== null) {
        let catsArray = csvToArray(categories);
        return <ul className="list-group"><li className="list-group-item active">Categories</li>{ catsArray.map((c, index) => (<li key={index} className="list-group-item">{c}</li>) ) }</ul>
    }

    return categoriesDisplay;
}

export default PostDetail;