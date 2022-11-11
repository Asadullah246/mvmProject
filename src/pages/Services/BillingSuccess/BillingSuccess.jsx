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
            <div className='successPageBody'>
                <img src={completeIcon} alt="" className='successImg'/>
                <h1 className='successText'>Payment successful</h1>
                <p>Your payment has been successfully</p>
                <button className='backBtn'>Back to home</button>
            </div>

            {/* <Footer/> */}
            
        </div>
    );
};

export default BillingSuccess;