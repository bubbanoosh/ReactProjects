import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar/search_bar';
import VideoCurrentDisplay from './video/video_current_display/video_current_display'
import VideoList from './video/video_list/video_list';

const API_KEY = 'AIzaSyB1RehqwvL0UX6lNmfDTFYhWGwHk9yz5TM';


export default class VideoPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            searchTerm: 'Galaxy Note 8',
            selectedVideo: null,
            searchError: ''
        };

        this.videoSearch('Galaxy Note 8');
    }

    videoSearch(searchTerm) {
        // if (searchTerm !== undefined && searchTerm !== null && searchTerm !== '') {
        //     if (searchTerm.length >= 3) {
        //         this.setState({ searchError: '' });
                YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
                    this.setState({
                        videos,
                        selectedVideo: videos[0]
                    });
                });
        //     } else {
        //         this.setState({ searchError: 'Search term must be more than 3 characters' });
        //     }
        // } else {
        //     this.setState({ searchError: 'Enter a search term' });
        // }
    }

    render() {

        // Throttle to every 300 ms for OnChange
        const videoSearchDeBounced = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 400);
        
        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Udemy React / Redux tutorial</h1>
                        <p className="lead">Video list from YouTube.</p>
                    </div>
                </div>
                <div className="row">
                    <SearchBar
                        searchTerm={this.state.searchTerm}
                        searchError={this.state.searchError}
                        onVideoSearchChange={videoSearchDeBounced} />
                </div>

                {this.state.videos !== null && this.state.videos.length > 0 &&
                    <div className="row">
                        <VideoCurrentDisplay
                            currentVideo={this.state.selectedVideo} />
                    </div>}
                <div className="row">
                    <VideoList
                        onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}