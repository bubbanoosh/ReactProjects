import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    return (
        <li className="list-group-item">
            <Link to={`/posts/${props.post.id}`}>{props.post.title}</Link>
        </li>
    );
}

export default PostItem;