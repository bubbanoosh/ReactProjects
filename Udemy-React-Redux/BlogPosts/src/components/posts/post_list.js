import React from 'react';
import _ from 'lodash';
import PostItem from './post_item';

class PostList extends React.Component {
    
    renderListItem(posts) {

        // lodash to map Objects > Array
        return _.map(posts, p => {
            return (
                <PostItem key={p.id} post={p} />
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group">
                {this.renderListItem(this.props.posts)}
            </ul>
        );
    }

}

export default PostList;