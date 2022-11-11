import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import "../Login/Login.css"
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { useContext } from 'react';
import { MyContext } from '../../App';
import logo from "../../images/companyLogo.svg"
import image1 from "../../images/resetPass/Rectangle 82.png"
import image2 from "../../images/resetPass/Rectangle 84.png"
import image3 from "../../images/resetPass/Rectangle 81.png"
import image4 from "../../images/resetPass/Rectangle 83.png"

const ResetPassword = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const [success, setSuccess] = useState("")
    const [resetError, setResetError] = useState("")
    const [userEmail, setUserEmail] = useContext(MyContext)
    const [userEmailIs, setUserEmailIs] = useState("")
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [sendPasswordResetEmail, sending, resetErr] = useSendPasswordResetEmail(
        auth
    );

    useEffect(() => {
        if (user) {
            setUserEmailIs(user.email)
        }

    },
        [user])
    console.log(user);
    useEffect(() => {
        if (resetErr) {
            setResetError(resetErr?.message)
            return;
        }

    },
        [resetErr])

    if (sending) {
        return <Loading />
    }


    const onSubmit = async (data) => {
        setResetError("")
        await sendPasswordResetEmail(data.email);
        setUserEmail(data.email)
        navigate("/reset-password-verify")
        // setSuccess("Please check your email") 

    }

    const login = () => {
        navigate("/login")
    }
    const home = () => {
        navigate("/")
    }
    return (
        <div>
            {/* Navbar  */}

            <div className='d-flex justify-content-start align-items-center p-3 navbarDiv' id='navbar'>
                <div className='w-50 text-start '>
                    {/* <div className='bgColor'></div> */}
                    <div style={{ width: "50%", margin: "0 auto" }}>
                        <img src={logo} alt="" style={{ width: "3rem", cursor: "pointer" }} onClick={home} />
                    </div>
                </div>

                <div>
                    <p style={{ marginBottom: "0" }}>Community</p>
                </div>
            </div>

            {/* Body  */}

            <div className='d-flex justify-content-start align-items-start'>
                <div className='w-50 text-start login' id="login">
                    <div>
                        <div style={{ width: "50%", margin: "0 auto" }} className="loginDiv">
                            <Typography variant="h4" gutterBottom style={{ marginBottom: "8px", fontWeight: "700" , whiteSpace:"nowrap" }} className="welcome">Create new password</Typography>
                            <Typography variant="subtitle1" gutterBottom style={{ marginBottom: "30px", fontSize: "1.2em" }} className="details">Fill up correctly</Typography>

                            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

                                <div className="inputSection ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='email' className=" w-100 " id='inputTag' defaultValue={userEmailIs}
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Please give your email'
                                            },
                                            pattern: {

                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt errorMsg">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.email.message}</span>}
                                    </label>
                                </div>


                                <small id="alert" style={{ color: "white" }}>{success} </small> <br />
                                <small id="alert" style={{ color: "red" }}>{resetError} </small>
                                <button className='w-100 loginBtn' >Reset password</button>
                            </form>

                            <p className='text-center'>Back to <button style={{ backgroundColor: "transparent", fontWeight: "800", color: "white", border: "none" }} onClick={login}>Login</button></p>

                        </div>
                    </div>
                </div>
                <div className='w-50  d-flex justify-content-start gap-3 picDiv' id="picDiv">
                    <div className='firstImages'>
                        <img src={image1} alt="" /> <br />
                        <img src={image2} alt="" />
                    </div>
                    <div className='nextImages'>
                        <img src={image3} alt="" /> <br />
                        <img src={image4} alt="" />
                    </div>
                </div>


                <div></div>
            </div>
        </div>
    );
};

export default ResetPassword;