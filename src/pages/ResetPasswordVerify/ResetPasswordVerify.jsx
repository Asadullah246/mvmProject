import React, { useContext, useEffect, useState } from 'react';
import { useAuthState, useSendEmailVerification, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import auth from '../../Firebase.init';
import completeIcon from "../../images/completeIcon.png" 
import "../EmailVerify/EmailVerify.css"

const ResetPasswordVerify = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/" ; 
    const [msg, setMsg]=useState("")
    const [text, setText]=useState("")
    const [userEmail, setUserEmail]=useContext(MyContext) 

    // const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    const [sendPasswordResetEmail, sendingReset, resetErr] = useSendPasswordResetEmail(auth);

    
    useEffect(() => {
       
            if ( resetErr) { 
                setMsg( resetErr.message); 
                console.log( resetErr.message); 
                return ;
            }
    
        
    }, [ resetErr])  
    
  

   
    const resendResetEmail=async()=>{
        navigate("/login")
    //    await sendPasswordResetEmail(userEmail)
    //     setMsg("Reset email sent")  
    //     setTimeout(function(){
    //         setMsg("") 

    //     }, 4000) 

    }
    // console.log(user); 
    return (
        <div>
        

        {/* body  */}
        <div className='successEmailBody'>
            <img src={completeIcon} alt="" className='successMessageImg'/>
          
                <h4 className='successEmailText' >Reset Password email sent</h4> 

            
             
            <p style={{marginBottom:"40px"}}>Please check your email</p>  
            <small style={{color:"white"}}>{msg} </small> <br />
           
                <button className='backBtnEmail' onClick={resendResetEmail}>Back to login</button>
                
           
        </div>

        {/* <Footer/> */}
        
    </div>
    );
};

export default ResetPasswordVerify;