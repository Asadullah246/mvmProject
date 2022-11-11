import React, { useContext, useEffect, useState } from 'react';
import { useAuthState, useSendEmailVerification, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import auth from '../../Firebase.init';
import completeIcon from "../../images/completeIcon.png"
import "./EmailVerify.css"

const EmailVerify = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname;
    const [msg, setMsg] = useState("")
    // const [text, setText] = useState("")
    const [userEmail, setUserEmail] = useContext(MyContext)

    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    // const [sendPasswordResetEmail, sendingReset, resetErr] = useSendPasswordResetEmail(auth);

    useEffect(() => {

        if (user?.emailVerified) {
            navigate(from, { replace: true });
        }


    }, [user, from, navigate])
    useEffect(() => {

        if (sendingError ) {
            setMsg(sendingError?.message );
            console.log(sendingError?.message );
            return;
        }


    }, [sendingError])


    const resendVerificationCode = async () => {
        await sendEmailVerification()
        setMsg("Verification code sent")
        setTimeout(function () {
            setMsg("")

        }, 4000)

    }

    return (
        <div>


            {/* body  */}
            <div className='successEmailBody'>
                <img src={completeIcon} alt="" className='successMessageImg' />

                <h4 className='successEmailText' >Verification email sent</h4>



                <p style={{ marginBottom: "40px" }}>Please check your email</p>
                <small style={{ color: "white" }}>{msg} </small> <br />

                <button className='backBtnEmail' onClick={resendVerificationCode}>Resend code</button>


            </div>

            {/* <Footer/> */}

        </div>
    );
};

export default EmailVerify;