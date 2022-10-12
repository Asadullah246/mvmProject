import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const CarouselRightButton = (props) => {
    const { classes, arrowRight } = props
    return (
        <button className={`productArrow ${classes}`} onClick={arrowRight}>
        <div className='btnTextDiv'>
            <BsArrowRight />
            <div className='btnRedEffectRight'></div>
        </div></button>
    );
};

export default CarouselRightButton;