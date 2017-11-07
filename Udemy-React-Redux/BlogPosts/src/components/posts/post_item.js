import React from 'react';

const PostItem = (props) => {
    return (
        <li className="list-group-item">{props.post.title}</li>
    );
}

export default PostItem;