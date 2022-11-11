import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import "../Login/Login.css"
import "./SignUp.css"
import Loading from '../../Components/Loading';
import logo from "../../images/companyLogo.svg"
import image1 from "../../images/signup/Rectangle 84.png"
import image2 from "../../images/signup/Rectangle 83.png"


const SignUp = () => {

    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token] = useToken(user || gUser || eUser);

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])

    useEffect(() => {
        if(user){
            if (user?.emailVerified) { 
                navigate(from, { replace: true }); 
            }
            else{
                navigate("/email-verify") 

            }

        }
        
    }, [user, from, navigate])

   
  
    useEffect(() => {
        if (error || gError || eError || sendingError || updateError) {
            setSignUpError(error?.message || gError?.message || eError?.message || sendingError?.message || updateError.message) 
            return;
        }
    }, [error , gError , eError, sendingError, updateError ])   


    if (loading || gLoading || eLoading || updating || sending) {
        return <Loading></Loading>
    }
   


    const onSubmit = async data => {
        console.log(data.email, data.password, data.name);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification(); 
        setSuccess("Successfully account created and verification email sent");
    }
    const googleSignIn = () => {
        signInWithGoogle();
        setSuccess("Successfully logged in with Google");
    }

   
    const login=()=>{
        navigate("/login")
    }

    const home=()=>{
        navigate("/") 
    }

    return (
        <div>
            {/* Navbar  */}

            <div className='d-flex justify-content-start align-items-center p-3 navbarDiv' id='navbar'>
                <div className='w-50 text-start '>
                    <div style={{ width: "60%", margin: "0 auto" }}>
                        <img src={logo} alt="" style={{ width: "3rem", cursor:"pointer" }} onClick={home} /> 
                    </div> 
                </div>

                <div>
                    <p style={{ marginBottom: "0" }}>Community</p>
                </div>
            </div>

            {/* Body  */}
            

            <div className='d-flex justify-content-start align-items-start signUpSection'> 
                <div className='w-50 ' id="imgSection">
                    {/* <div className='bgColor'></div> */}
                    <div style={{ width: "60%", margin: "0 auto" }}>
                        <h3 className='text-start mb-4'>Join our Magical services & <br /> Products World - for Free</h3>
                        <div className='d-flex justify-content-start gap-3'>
                            <div className=''>
                                <img src={image1} alt="" id="img1" />
                            </div>
                            <div className=''>
                                <img src={image2} alt="" id="img2" /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-50 text-start' id="signUpSection">
                    <div style={{ width: "50%", margin: "0 auto" }} id="signUp">
                        <Typography variant="h5" gutterBottom style={{ marginBottom: "40px", fontWeight: "700" }} className="account">Create your free account</Typography>

                        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

                            <div className="inputSection ">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your name here" name='name' className=" w-100 " id='inputTag'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Please give your full name'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt errorMsg">{errors.name.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="inputSection ">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="text" placeholder="example@gmail.com" name='email' className=" w-100 " id='inputTag'
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
                                <input type="password" placeholder="Enter password" name='password' className="w-100" id='inputTag'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Please give your password'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Must be 5 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
                                </label>
                            </div>

                            <small style={{color:"white"}}>{success} </small> <br />
                            <small style={{color:"red"}}>{signUpError} </small>
                            <button className='w-100 loginBtn'>Sign up now</button>
                        </form>
                        <p className='mb-3 mt-2 text-center'>OR</p>
                        <button className='w-100 googleLogin'><img src="images/login/google.png" alt="" className='google' onClick={googleSignIn} /> Sign up with google</button>
                        <p className='text-center'>Already a member ? <button style={{ backgroundColor: "transparent", fontWeight: "900", color: "white" }} onClick={login} >Log in</button> </p>

                    </div>
                </div>



                <div></div>
            </div>
        </div>
    );
};

export default SignUp;