import React, { Component } from 'react';
import VideoList from '../video_list/video_list';

const VideoDetail = ({ video }) => {

    const src = video.thumbnails.default.url;

    return (
        <div>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object"
                        src={src}
                        height={video.thumbnails.default.height}
                        width={video.thumbnails.default.width}
                        alt={video.thumbnails.title} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.channelTitle}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default VideoDetail;