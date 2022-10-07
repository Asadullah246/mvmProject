import React from 'react';

const RedButton = (props) => {
    return (
        <button style={{padding:"13px 30px ", border:"none", borderRadius:"8px", backgroundColor:"#EF3054",color:"white"}}>{props.name}</button>
    );
};

export default RedButton;