import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../main/footer';
// Import ACTION CREATOR functions
import { fetchPosts } from '../../actions';
import PostList from './post_list'

class PostsIndex extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Posts Index</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <PostList posts={this.props.posts} />
                    </div>
                </div>

                <hr />

                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

//Doing like this as Shortcut '{ fetchPosts }'
// rather than 
//  mapDispatchToProps()

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);