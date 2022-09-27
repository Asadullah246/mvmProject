import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import "./Login.css"
import Loading from '../../Components/Loading';

const Login = () => {
    const [signInError, setSignInError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const navigateSignUp = () => {
        navigate('/signup')
    }
    const [
        signInWithEmailAndPassword, eUser, eLoading, eError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    // const [token] = useToken(user || gUser || eUser);

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])

    if (loading || gLoading || eLoading) {
        return <Loading></Loading>
    }
    if (error || gError || eError) {
        setSignInError(error?.message || gError?.message || eError?.message)
        return;
    }

    const googleLogin = async => {
        signInWithGoogle();
        setSuccess("Successfully logged in with Google");
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        setSuccess("Successfully logged in");

    }

    const signUp=()=>{
        navigate("/register")
    }
    const forgetPass=()=>{
        navigate("/reset-password")
    }
    console.log(user);
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
                        <Typography variant="h4" gutterBottom style={{ marginBottom: "8px", fontWeight: "700" }} className="welcome">Welcome back</Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ marginBottom: "30px", fontSize: "1.2em" }} className="details">Please enter your details</Typography>
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
                            <div className="inputSection">
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
                            <div className='w-100 text-end'>
                                <p style={{ marginTop: "-5px", cursor:"pointer" }} onClick={forgetPass}>Forget password</p>
                            </div>
                            {/* <small className='text-primary'>{success} </small> */}
                            {/* <small className='text-red-500'>{signInError} </small> */}
                            <button className='w-100 loginBtn'>Log in</button>
                        </form>
                        <button className='w-100 googleLogin'><img src="images/login/google.png" alt="" className='google' /> Log in with google</button>
                        <p className='text-center'>Don't have account ? <button style={{ backgroundColor: "transparent", fontWeight: "800", color: "white" }} onClick={signUp}>Sign up</button></p>

                    </div>
                </div>
                <div className='w-50  d-flex justify-content-start gap-3 picDiv' id="picDiv">
                    <div className='firstImages'>
                        <img src="images/login/Rectangle 82.png" alt="" /> <br />
                        <img src="images/login/Rectangle 84.png" alt="" />
                    </div>
                    <div className='nextImages'>
                        <img src="images/login/Rectangle 81.png" alt="" /> <br />
                        <img src="images/login/Rectangle 83.png" alt="" />
                    </div>
                </div>


                <div></div>
            </div>
        </div>
    );
};

export default Login;