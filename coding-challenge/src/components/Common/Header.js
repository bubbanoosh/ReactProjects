import React from 'react';
import AppConfig from '../../appConfig/appConfig'
import kogan from '../../assets/kogan.png'

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

function getAuthorName() {
    let pckg = require('../../../package.json');
    return pckg.author;
}

const styles = theme => ({
    root: {
        padding: '1rem',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    navLink: {
        textDecoration: 'none',
    },
});

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className="container">
                <h1><img src={kogan} alt={AppConfig.APP_HEADING} /></h1>
                <Typography type="headline" gutterBottom="true" color="primary">Challenger: {getAuthorName()}</Typography>
            </div>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);