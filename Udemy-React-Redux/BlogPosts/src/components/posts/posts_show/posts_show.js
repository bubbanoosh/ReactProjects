import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Footer from '../../main/footer';
import PostDetail from './post_detail';

// // Import ACTION CREATOR functions
import { fetchPost, deletePost } from '../../../actions';

class PostsShow extends Component {

    componentDidMount() {

        //// From react-router
        // this.props.match.params.id;
        // destructure
        //if (!this.props.post)
        const { id } = this.props.match.params;

        //if (id !== undefined) {
        this.props.fetchPost(id);
        //}
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Post Detail</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="text-xs-right">
                            <Link className="btn btn-primary" to="/posts/new">
                                Add a post
                            </Link>
                            <Link className="btn btn-primary" to="/" style={{ marginLeft: '10px' }}>
                                Index
                            </Link>
                            <button 
                                className="btn btn-danger pull-xs-right" style={{ marginLeft: '10px' }}
                                onClick={this.onDeleteClick.bind(this)}>
                                    Delete Post
                            </button>
                        </div>
                        <PostDetail post={this.props.post} />
                    </div>
                </div>

                <hr />

                <Footer />
            </div>
        );
    }
}


function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

//Doing like this as Shortcut '{ fetchPost }'
// rather than 
//  mapDispatchToProps()

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);