import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';


const WishList = () => {
    const [location, setLocation]=useState("")
    const [courseTab, setCourseTab]=useState(false)
    const [productTab, setProductTab]=useState(false)
    const [serviceTab, setServiceTab]=useState(false)
    const navigate=useNavigate()

    useEffect(()=>{
        const loc=window.location.pathname;
        setLocation(loc)
        console.log(loc);   
    },[])
   useEffect(()=>{
    if(location==="/wishlist"){
        setCourseTab(true)
        setProductTab(false)
        setServiceTab(false)

    }
    else if(location==="/wishlist/product"){
        setCourseTab(false)
        setProductTab(true)
        setServiceTab(false)

    }
    else if(location==="/wishlist/service"){
        setCourseTab(false)
        setProductTab(false)
        setServiceTab(true)

    }
   },[location])

    const course=(e)=>{ 
        setCourseTab(true)
        setProductTab(false)
        setServiceTab(false)
        navigate("/wishlist")
     
    }
    const product=(e)=>{
        setCourseTab(false)
        setProductTab(true)
        setServiceTab(false)
        navigate("/wishlist/product")
      
    }
    const service=(e)=>{
        setCourseTab(false)
        setProductTab(false)
        setServiceTab(true)
        navigate("/wishlist/service")
      
    }
    
    return (
        <div>
            <Navbar/>
         
            <div className="container-fluid container-md wishlistBody">
                <h1 className='text-start wishlistHeading'>Wishlist</h1>
                <div className='text-start '>
                 
                <button  className={ courseTab?"navBtn2":"navBtn"} id='wishCourses'
                 onClick={course}
                 >Courses</button>
              
                <button className={ productTab?"navBtn2":"navBtn"} id='wishProduct'
                  onClick={product}
                  >product</button>
              
                <button className={serviceTab ?"navBtn2":"navBtn"} id='wishProduct'
                  onClick={service}
                  >Service</button>   
             
                     
                </div>

                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default WishList;