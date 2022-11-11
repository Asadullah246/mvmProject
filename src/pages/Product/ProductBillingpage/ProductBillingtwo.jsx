import React, { useState } from 'react';
import Footer from "../../../Components/Footer"
import "../../../Resources/BillingPage.css"
import "./productBillingtwo.css"
import Navbar from "../../../Components/Navbar"
import { Breadcrumbs, Checkbox, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsArrowLeft } from "react-icons/bs";
import botanicalPic from "../../../images/products/Rectangle 71.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const ProductBillingtwo = () => {
    const [success, setSuccess] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Cart
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Information
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Shipping
        </Link>,

        <Typography key="3" color="text.primary">
            Payment
        </Typography>,
    ];

    const breadcrumbDisplay = <>
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    </>

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const onSubmit = async data => {
        setSuccess("Successfully logged in");
        window.location.href="/product-billing-two" 

    }


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <Navbar />

            {/* main body  */}

            <div className="container-fluid container-md" style={{marginTop:"150px"}}>
                <div className="row billingServiceDiv">
                    <div className="col col-12 col-lg-6 text-start">
                        <button className='mvmServiceText'><BsArrowLeft /> <span>MVM Service</span></button>
                        <div>
                            {breadcrumbDisplay}
                        </div>

                        <h4 className='contactInformation'>Contact Information</h4>

                        <div className='d-flex justify-content-start align-items-center profileDivBilling'>
                            <img src="images/community/Ellipse 19.png" alt="" className='profileImage' />
                            <div className='text-start'>
                                <h5 className='mb-0'>Smir A</h5>
                                <p className='mb-0'>rbrajumullah100@gmail.com</p>
                            </div>
                        </div>
                        <h5 className='shippingText'>Shipping address</h5>

                        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

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

                            <div className='d-flex justify-content-between align-items-start'>
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
                            {/* <div className="inputSection">
                                
                                <input type="checkbox" placeholder="Type here" name='check' className="checkboxForBilling" id='inputTag'
                                    {...register("check", {
                                        required: {
                                            value: true,
                                            message: 'Please be agree'
                                        },
                                       
                                    })}
                                />
                                <label className="label text-start">
                                    <span className="label-text text-start">By ticking the box, I agree to the Terms of Purchase, Terms of Use and I acknowledge that I have read and understand the Privacy Policy.</span>
                                </label> <br />

                                <label className="label">
                                    {errors.check?.type === 'required' && <span className="label-text-alt errorMsg">{errors.check.message}</span>}
                                    {errors.check?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.check.message}</span>}
                                </label>
                            </div> */}
                            <div className='mb-5'>
                            <p className='d-flex justify-content-start align-items-start mb-0'>
                                <span>
                                <input type="checkbox"  name='check' className="checkboxForBilling" id=''
                                    {...register("check", {
                                        required: {
                                            value: true,
                                            message: 'Please be agree'
                                        },
                                       
                                    })}
                                />
                                   
                                </span>
                                <span className='agreeText'>By ticking the box, I agree to the Terms of Purchase, Terms of Use and I acknowledge that I have read and understand the Privacy Policy.</span>
                            </p>
                            <label className="label">
                                    {errors.check?.type === 'required' && <span className="label-text-alt errorMsg">{errors.check.message}</span>}
                                    {errors.check?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.check.message}</span>}
                                </label>
                            </div>

                            {/* <div className='w-100 text-end'>
                                <p style={{ marginTop: "-5px", cursor:"pointer" }} onClick={forgetPass}>Forget password</p>
                            </div> */}
                            {/* <small className='text-primary'>{success} </small> */}
                            {/* <small className='text-red-500'>{signInError} </small> */}
                            <div className='w-100 text-end'>
                            <button className='paymentBtn'>Continue to payment</button>
                            </div>
                        </form>

                        <div className='dividerBilling'></div>

                        <div>
                            <button className='policyBtn'>Refund policy</button>
                            <button className='policyBtn'>Shipping policy</button>
                            <button className='policyBtn'>Terms of service</button>
                           
                        </div>

                    </div>

                    <div className="col col-12 col-lg-6  ">
                        <div className='purePriceSection'>
                            <div className=' pureDiv mb-3'>
                                <div className='d-flex align-items-center '>
                                    <img src={botanicalPic} alt="" />
                                    <p className='pureBotanical ms-3'>Pure Botanical</p>
                                </div>
                                <p className='pureBotanical'>$600</p>

                            </div>
                            <div className=' pureDiv'>
                                <div className='d-flex align-items-center'>
                                    <img src={botanicalPic} alt="" />
                                    <p className='pureBotanical ms-3'>Pure Botanical</p>
                                </div>
                                <p className='pureBotanical'>$600</p>

                            </div>

                            <div className='dividerBilling'></div>

                            {/* coupon code  */}

                            <div className='couponDiv'>
                            <input type="text" name="" className='couponInputTag' id="inputTag" placeholder='Have coupon code ?' />
                            <button className='applyBtn'>Apply code</button>
                            </div>

                            <div className='dividerBilling'></div>

                            {/* price section  */}

                            <div>
                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                    <p className='mb-0'>4 items subtotal</p>
                                    <h5 className='mb-0 priceBilling'>$1500.00</h5>
                                </div>
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <p className='mb-0'>Discount</p>
                                    <h5 className='mb-0 priceBilling'>-$500.00</h5>
                                </div>

                                <div className='dividerBilling'></div>

                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <p className='mb-0'>Total</p>
                                    <h5 className='mb-0 priceBilling'>$1000.00</h5>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
             

            </div>
            <Footer/>

        </div>
    );
};

export default ProductBillingtwo;