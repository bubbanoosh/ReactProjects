import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoPage from './components/video_page'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <VideoPage />
    );
  }
}
