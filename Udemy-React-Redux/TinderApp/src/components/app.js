import React, { Component } from 'react';

// Containers
import BookList from '../containers/book_list/book_list';
import BookDetail from '../containers/book_detail/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Sign in</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Book List</h2>
              <BookList />
            </div>
            <div className="col-md-4">
              <h2>Current Book</h2>
              <BookDetail />
              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
            </div>



          </div>

          <hr />

          <footer>
            <p>&copy; 2016 Company, Inc.</p>
          </footer>
        </div>
      </div>
    );
  }
}
