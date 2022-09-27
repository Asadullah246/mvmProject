import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import "../Login/Login.css"
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const ResetPassword = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const [success, setSuccess]=useState("")
    const [resetError, setResetError]=useState("")
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [sendPasswordResetEmail, sending, resetErr] = useSendPasswordResetEmail(
        auth
    );
    if(sending){
        return <Loading/>
    }

    const onSubmit = ( data) => {
        setSuccess("")
        setResetError("")
         sendPasswordResetEmail(data.email);
        if(resetErr){
            setResetError(resetErr?.message)
            return ;
        }
        else{
            
        setSuccess("Please check your email") 
        }
    }

    const login=()=>{
        navigate("/login")
    }
    return (
        <div>
            {/* Navbar  */}

            <div className='d-flex justify-content-start align-items-center p-3 navbarDiv' id='navbar'>
                <div className='w-50 text-start '>
                    {/* <div className='bgColor'></div> */}
                    <div style={{ width: "50%", margin: "0 auto" }}>
                        <img src="images/companyLogo.svg" alt="" style={{ width: "3rem" }} />
                    </div>
                </div>

                <div>
                    <p style={{ marginBottom: "0" }}>Community</p>
                </div>
            </div>

            {/* Body  */}

            <div className='d-flex justify-content-start align-items-center'>
                <div className='w-50 text-start login' id="login">
                    <div style={{ width: "50%", margin: "0 auto" }} className="loginDiv">
                        <Typography variant="h4" gutterBottom style={{ marginBottom: "8px", fontWeight: "700" }} className="welcome">Create new password</Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ marginBottom: "30px", fontSize: "1.2em" }} className="details">Fill up correctly</Typography>

                        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

                            <div className="inputSection ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email" name='email' className=" w-100 " id='inputTag'
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

                            {/* <div className="inputSection">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Type here" name='password' className="w-100" id='inputTag'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Please give your password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="inputSection">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" placeholder="Enter password" name='repeatPassword' className="w-100" id='inputTag'
                                    {...register("repeatPassword", {
                                        required: {
                                            value: true,
                                            message: 'Please give your password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt errorMsg">{errors.repeatPassword.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.repeatPassword.message}</span>}
                                </label>
                            </div> */}

                            <small id="alert" style={{color:"white" }}>{success} </small> <br />
                            <small id="alert" style={{color:"red" }}>{resetError} </small>
                            <button className='w-100 loginBtn'>Reset password</button>
                        </form>

                        <p className='text-center'>Back to <button style={{ backgroundColor: "transparent", fontWeight: "800", color: "white" }} onClick={login}>Login</button></p>

                    </div>
                </div>
                <div className='w-50  d-flex justify-content-start gap-3 picDiv' id="picDiv">
                    <div className='firstImages'>
                        <img src="images/resetPass/Rectangle 82.png" alt="" /> <br />
                        <img src="images/resetPass/Rectangle 84.png" alt="" />
                    </div>
                    <div className='nextImages'>
                        <img src="images/resetPass/Rectangle 81.png" alt="" /> <br />
                        <img src="images/resetPass/Rectangle 83.png" alt="" />
                    </div>
                </div>


                <div></div>
            </div>
        </div>
    );
};

export default ResetPassword;