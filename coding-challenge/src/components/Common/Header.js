import React from 'react';
import AppConfig from '../../appConfig/appConfig'
import kogan from '../../assets/kogan.png'

const Header = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1><img src={kogan} alt={AppConfig.APP_HEADING} /></h1>
            </div>
        </div>
    );
}

export default Header;