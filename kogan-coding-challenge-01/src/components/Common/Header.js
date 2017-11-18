import React from 'react';
import AppConfig from '../../appConfig/appConfig'

const Header = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1>{AppConfig.APP_HEADING}</h1>
            </div>
        </div>
    );
}

export default Header;