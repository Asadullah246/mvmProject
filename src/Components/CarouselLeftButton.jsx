import React from 'react';
import { BsArrowLeft } from "react-icons/bs";

const CarouselLeftButton = (props) => {
    const { classes, arrowLeft } = props
    return (
        <button className={`productArrow ${classes}` } onClick={arrowLeft}>
            <div className='btnTextDiv'>
                <BsArrowLeft />
                <div className='btnRedEffectLeft'></div>
            </div></button>
    );
};

export default CarouselLeftButton;