import React from 'react'
import { Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import 'typeface-roboto'

import Navigation from '../Common/Navigation'
import Header from '../Common/Header'
import Home from '../Home'
import CodingChallenge from '../CodingChallenge'

const theme = createMuiTheme({
    palette: {
        primary: purple, // Purple and green play nicely together.
        secondary: {
            ...green,
            A400: '#00e677',
        },
        error: red,
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <div>
            <Navigation />
            <Header />

            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/coding-challenge" component={CodingChallenge} />
            </main>
        </div>
    </MuiThemeProvider>
)

export default App;