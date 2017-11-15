import React, { Component } from 'react';

class PostDetail extends Component {
    render() {

        return (
            <div>
                {this.props.post && <div>
                    <h3>Title: {this.props.post.title}</h3>
                </div>}
            </div>
        );
    }
}

export default PostDetail;