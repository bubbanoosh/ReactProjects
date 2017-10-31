import React from 'react';
import VideoDetail from '../video_detail/video_detail';

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            {<VideoDetail video={video.snippet} />}
        </li>
    );
};

export default VideoListItem;