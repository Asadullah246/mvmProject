import React from 'react';

const Button = (props) => {
    const {name, style, img }=props
    return (
        <button style={style}>
            <img src={img} alt="" className='me-1' />{name}
        </button>
    );
};

export default Button;