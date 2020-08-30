import React from 'react';
import '../style/Add&Play.css'

const VideoDetail = ({video, handleAddSong}) => {
    if (!video) {
        return <div>Loading, please wait...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    console.log(video.id.videoId);
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <button className='button' 
                    type='button'
                    onClick={()=>handleAddSong()}>
                ADD THIS SONG NOW!!!
            </button>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;