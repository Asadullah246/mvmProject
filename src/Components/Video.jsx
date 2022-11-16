import React from 'react';
import videoFile from "../Others/video3.mp4"

const Video = () => {
    return (
        <>
            <video
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                className='video'>
                <source src={videoFile} type="video/mp4" />
                {/* <source src={videoFile} type="video/ogg" /> */}
                Your browser does not support the video tag.
            </video>

        </>
    );
};

export default Video;