import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
    const back=()=>{
        navigate(-1) 
        
    }
    return (
        <div style={{marginTop:"30vh"}}>
            <h4 className='my-3'>Page not found.  </h4> 
            <button className='py-1 px-4' style={{backgroundColor:"transparent", border:"1px solid white", borderRadius:"8px", color:"white"}} onClick={back}>Go back</button>
        </div>
    );
};

export default NotFound; 