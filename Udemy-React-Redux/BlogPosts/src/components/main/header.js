import React from 'react';

const Header = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1>React Router!</h1>
                <p>Udemy Course: React/Redux. Blog post / React Router tutorial</p>
                <p><a className="btn btn-primary btn-lg" href="/" role="button">Home &raquo;</a></p>
            </div>
        </div>
    );
}

export default Header;