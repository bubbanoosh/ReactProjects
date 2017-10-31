import React from 'react';

const VideoCurrentDisplay = ({ currentVideo }) => {
    
    if (currentVideo === null) {
        return (<div>Please select a Video to view</div>);
    }

    const videoId = currentVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
            <div>{currentVideo.snippet.title}</div>
            <div>{currentVideo.snippet.description}</div>            
            </div>
        </div>
    );
};

export default VideoCurrentDisplay;