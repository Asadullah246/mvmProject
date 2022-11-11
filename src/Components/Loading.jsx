import React from 'react';
import "../Resources/Loading.css"

const Loading = () => {
    return (

        <div className='loadingComp'>
            <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>



            {/* <div className='loadingSection'>
                <div class="ring">Loading
                    <span className='loadingSpan'></span>
                </div>
            </div> */}
        </div>
    );
};

export default Loading;