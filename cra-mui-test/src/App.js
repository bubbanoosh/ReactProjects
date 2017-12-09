import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import 'typeface-roboto'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Button raised color="primary">
                        Hello World
                    </Button>
                </p>
            </div>
        );
    }
}

export default App;
