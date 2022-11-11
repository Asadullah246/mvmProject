import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Components/Navbar';
import RedButton from '../../Components/RedButton';
import "./EditProfile.css"
import editProfileImg1 from "../../images/Screenshot_163.png"
import userImage from "../../images/comments/Rectangle 21.png"
import Footer from '../../Components/Footer';


const EditProfile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async data => {
        console.log("doing");

    }

    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className="container-fluid container-md" style={{ marginTop: "150px" }}>
                <div className='editProfileheading'>
                    <h1>Edit profile</h1>
                    <RedButton name="Delete account" />

                </div>

                <div className="row text-start mt-4">
                    <div className="col col-12 col-lg-6">
                        <h4 className='mb-4'>Change password</h4>
                        <form className='passChange mb-4 p-2 p-lg-3' onSubmit={handleSubmit(onSubmit)}>


                            <div className="inputSection">
                                <label className="label">
                                    <span className="label-text">Current password</span>
                                </label>
                                <input type="password" placeholder="Type here" name='cPassword' className="w-100" id='inputTag'
                                    {...register("cPassword", {
                                        required: {
                                            value: true,
                                            message: 'Give your old password'
                                        }

                                    })}
                                />
                                <label className="label">
                                    {errors.cPassword?.type === 'required' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
                                    {errors.cPassword?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.password.message}</span>}
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
                                            message: 'Give new password'
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
                            {/* <button className='w-100 loginBtn'>Log in</button> */}
                            <div style={{ width: "100%", textAlign: "right" }}>
                                <button style={{ padding: "13px 30px ", border: "none", borderRadius: "8px", backgroundColor: "#EF3054", color: "white" }}>Change password</button>
                            </div>
                        </form> 

                        <div className='edithImgDiv' style={{height:"max-content", position:"relative", overflow:"hidden" }}>  
                            <img src={editProfileImg1} className="editimg" alt="" />  
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <h4 className='mb-4'>Personal information</h4>
                        
                        <form className='profileChange mb-4 p-2 p-lg-3' style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

                            <img src={userImage} alt=""  className='userImage'/> 

                        

                           

                            <div className='d-flex justify-content-between align-items-start nameInput'>
                                <div className="inputSection inputName ">
                                    <label className="label">
                                        <span className="label-text">First name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" name='firstName' className=" w-100 " id='inputTag'
                                        {...register("firstName", {
                                            required: {
                                                value: true,
                                                message: 'give first Name'
                                            },

                                        })} />
                                    <label className="label">
                                        {errors.firstName?.type === 'required' && <span className="label-text-alt errorMsg">{errors.firstName.message}</span>}
                                        {errors.firstName?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.firstName.message}</span>}
                                    </label>
                                </div>
                                <div className="inputSection inputName ">
                                    <label className="label">
                                        <span className="label-text">Last name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" name='lastName' className=" w-100 " id='inputTag'
                                        {...register("lastName", {
                                            required: {
                                                value: true,
                                                message: 'Give last name'
                                            },
                                            // pattern: {

                                            //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            //     message: 'Provide a valid Email'
                                            // }
                                        })} />
                                    <label className="label">
                                        {errors.lastName?.type === 'required' && <span className="label-text-alt errorMsg">{errors.lastName.message}</span>}
                                        {errors.lastName?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.lastName.message}</span>}
                                    </label>
                                </div>

                            </div>

                            {/* contact number  */}

                            <div className="inputSection">
                                <label className="label text-start">
                                    <span className="label-text text-start">Contact number</span>
                                </label>
                                <input type="number" placeholder="Type here" name='contact' className="w-100" id='inputTag'
                                    {...register("contact", {
                                        required: {
                                            value: true,
                                            message: 'Give contact number'
                                        },
                                        minLength: {
                                            value: 10,
                                            message: 'Must be 10 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.contact?.type === 'required' && <span className="label-text-alt errorMsg">{errors.contact.message}</span>}
                                    {errors.contact?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.contact.message}</span>}
                                </label>
                            </div>

                            {/* country  */}

                            <div className="inputSection ">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <select name="country" id="inputTag" className='w-100' placeholder='Select country'
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: 'Give country name'
                                        },

                                    })}
                                > <option value="" disabled selected hidden>Select country</option>
                                    <option value="India">India</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Pakistan">Pakistan</option>
                                </select>

                                <label className="label">
                                    {errors.country?.type === 'required' && <span className="label-text-alt errorMsg">{errors.country.message}</span>}
                                    {errors.country?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.country.message}</span>}
                                </label>
                            </div>

                            {/* address  */}


                            <div className="inputSection">
                                <label className="label text-start">
                                    <span className="label-text text-start">Address</span>
                                </label>
                                <input type="password" placeholder="Type here" name='address' className="w-100" id='inputTag'
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Give address'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt errorMsg">{errors.address.message}</span>}
                                    {errors.address?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.address.message}</span>}
                                </label>
                            </div>

                            {/* address details */}

                            <div className='d-flex justify-content-between align-items-start'>
                                <div className="inputSection inputAddress ">
                                    <label className="label">
                                        <span className="label-text">City</span>
                                    </label>
                                    <input type="text" placeholder="Type here" name='city' className=" w-100 " id='inputTag'
                                        {...register("city", {
                                            required: {
                                                value: true,
                                                message: 'Give city'
                                            },

                                        })} />
                                    <label className="label">
                                        {errors.city?.type === 'required' && <span className="label-text-alt errorMsg">{errors.city.message}</span>}
                                        {errors.city?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.city.message}</span>}
                                    </label>
                                </div>
                                <div className="inputSection inputAddress ">
                                    <label className="label">
                                        <span className="label-text">State</span>
                                    </label>
                                    <input type="text" placeholder="Type here" name='state' className=" w-100 " id='inputTag'
                                        {...register("state", {
                                            required: {
                                                value: true,
                                                message: 'Give state'
                                            },

                                        })} />
                                    <label className="label">
                                        {errors.state?.type === 'required' && <span className="label-text-alt errorMsg">{errors.state.message}</span>}
                                        {errors.state?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.state.message}</span>}
                                    </label>
                                </div>
                                <div className="inputSection inputAddress ">
                                    <label className="label">
                                        <span className="label-text">Zip code</span>
                                    </label>
                                    <input type="number" placeholder="Type here" name='zipCode' className=" w-100 " id='inputTag'
                                        {...register("zipCode", {
                                            required: {
                                                value: true,
                                                message: 'Give zip code'
                                            },

                                        })} />
                                    <label className="label">
                                        {errors.zipCode?.type === 'required' && <span className="label-text-alt errorMsg">{errors.zipCode.message}</span>}
                                        {errors.zipCode?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.zipCode.message}</span>}
                                    </label>
                                </div>

                            </div>


                            {/* <small className='text-primary'>{success} </small> */}
                            {/* <small className='text-red-500'>{signInError} </small> */}
                            <div className='w-100 text-end'>
                                {/* <button className='paymentBtn'>Continue to payment</button> */}
                                <div style={{ width: "100%", textAlign: "right" }}>
                                <button style={{ padding: "13px 30px ", border: "none", borderRadius: "8px", backgroundColor: "#EF3054", color: "white" }}>Save address</button>
                            </div>
                            </div>
                        </form>


                    </div>
                </div>

                <Footer/>
             </div>
        </div>
    );
};

export default EditProfile;