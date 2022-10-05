import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


const actived = ({ isActive }) => {
    return {
        backgroundColor: isActive ? '#EF3054' : 'black',
        border:isActive? "":"1px solid white"
    }
}

const WishList = () => {
    const [location, setLocation]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        const loc=window.location.pathname
        setLocation(loc)
    },[])

    let courseBtn=document.querySelector("#wishCourses")
    let productbtn=document.querySelector("#wishProduct")
    let serviceBtn=document.querySelector("#wishProduct")
    const course=(e)=>{
        e.preventDefault()
        navigate("/wishlist")
        courseBtn.classList.toggle("navBtn2")
        productbtn.classList.toggle("navBtn")
        serviceBtn.classList.toggle("navBtn")
        console.log("coursekj"); 
    }
    // const product=(e)=>{
    //     e.preventDefault()
    //     navigate("/wishlist/product")
    //     courseBtn.classList.toggle("navBtn")
    //     productbtn.classList.toggle("navBtn2")
    //     serviceBtn.classList.toggle("navBtn")
    //     console.log("product"); 
    // }
    
    return (
        <div>
             {/* className={(location=="/wishlist/product")?"navBtn2":"navBtn"} */}
            <div className="container-fluid container-md wishlistBody">
                <h1 className='text-start wishlistHeading'>Wishlist</h1>
                <div className='text-start '>
                <NavLink  to="/wishlist"  className={(location=="/wishlist")?"navBtn2":"navBtn"} id='wishCourses'
                //  onClick={course}
                 >Courses</NavLink>
                <NavLink to="/wishlist/product"  className={(location=="/wishlist/product")?"navBtn2":"navBtn"} id='wishProduct'
                //   onClick={product}
                  >product</NavLink>
                <NavLink to="/wishlist/service"  className={(location=="/wishlist/service")?"navBtn2":"navBtn"} id='wishProduct'
                //   onClick={product}
                  >Service</NavLink>
             
                     
                </div>

                <Outlet/>
            </div>
        </div>
    );
};

export default WishList;