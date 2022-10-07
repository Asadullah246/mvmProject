import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Components/Navbar';
import RedButton from '../../Components/RedButton';
import "./EditProfile.css"

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async data => {
        console.log("doing");

    }

    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className="container-fluid container-md">
                <div className='headingDiv'>
                    <h1>Edit profile</h1>
                    <RedButton name="Delete account" />

                </div>

                <div className="row">
                    <div className="col col-12 col-lg-6">
                        <h4 className='mb-4'>Change password</h4>
                        <form className='passChange' onSubmit={handleSubmit(onSubmit)}>

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

                            {/* <small className='text-primary'>{success} </small> */}
                            {/* <small className='text-red-500'>{signInError} </small> */}
                            <button className='w-100 loginBtn'>Log in</button>
                        </form>
                    </div>
                    <div className="col col-12 col-lg-6"></div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;