import React from 'react';
import "./BillingSuccess.css"
import completeIcon from "../../../images/completeIcon.png"
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const BillingSuccess = () => {
    return (
        <div>
            <Navbar/>

            {/* body  */}
            <div className='successPageBody' style={{marginTop:"150px"}}>
                <img src={completeIcon} alt="" className='successImg'/>
                <h1 className='successText'>Payment successful</h1>
                <p>Your payment has been successfully</p>
                <button className='backBtn' onClick={()=>{
                    window.location.href="/shopping-cart"
                }}>Back to cart</button> 
            </div>

            {/* <Footer/> */}
            
        </div>
    );
};

export default BillingSuccess;