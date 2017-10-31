import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    
    if (props.videos === null || props.videos.length === 0) {
        return (<div>Loading...</div>);
    }

    return (
        <div>
            {props.videos !== null && props.videos.length > 0 &&
                <ul>
                    {props.videos.map((v) => {
                        return (
                            <VideoListItem key={v.id.videoId} video={v} onVideoSelect={props.onVideoSelect} />
                        )
                    }
                    )}
                </ul>}
        </div>

    );
}

export default VideoList;