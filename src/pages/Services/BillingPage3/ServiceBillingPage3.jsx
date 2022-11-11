import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import "../../../Resources/BillingPage.css"
import "./ServiceBillingPage3.css"
import { Breadcrumbs, Checkbox, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsArrowLeft } from "react-icons/bs";
import botanicalPic from "../../../images/products/Rectangle 71.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import dotIcon from "../../../images/Ellipse.svg"
import visaIcon from "../../../images/visa.svg"
import auth from '../../../Firebase.init';







const ServiceBillingPage3 = () => {
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
            Schedule
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

    const ServiceDivider=<div className='serviceDivider'></div>

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const onSubmit = async data => {
        setSuccess("Successfully logged in");
        window.location.href="/billing-success"

    }


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <Navbar />

            {/* main body  */}

            <div className="container-fluid container-md">
                <div className="row billingServiceDiv">
                    <div className="col col-12 col-lg-6 text-start">
                        <button className='mvmServiceText'><BsArrowLeft /> <span>MVM Service</span></button>
                        <div>
                            {breadcrumbDisplay}
                        </div>

                        {/* info section  */}

                        <div className='d-flex justify-content-between infoDiv'>
                            <p>Info</p>
                            <p>Change</p>
                        </div>

                        <div className='infoDetails'>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Contact name</p>
                                <p className='mb-0'>Raju Ahmed</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Contact number</p>
                                <p className='mb-0'>+8801784453204</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Total hour</p>
                                <p className='mb-0'>2 hours</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Date</p>
                                <p className='mb-0'> <span>02-08-2022</span> <img src={dotIcon} alt="" className='mx-2' /> <span>Tuesday</span></p>
                            </div>
                           

                        </div>


                        {/* end of info section  */}

                        <h4 className='serviceBillingPaymentText'>Payment</h4>

                        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>

                        
                        <div className="inputSection">
                                <label className="label text-start">
                                    <span className="label-text text-start">Card number</span>
                                </label>
                                <img src={visaIcon} alt="" className='visaIcon' />
                                <input type="number" placeholder="1234 5678 9123 456" name='cardNumber' className="w-100" id='inputTag'
                                    {...register("cardNumber", {
                                        required: {
                                            value: true,
                                            message: 'Give card number'
                                        },
                                        
                                    })}
                                />
                                <label className="label">
                                    {errors.cardNumber?.type === 'required' && <span className="label-text-alt errorMsg">{errors.cardNumber.message}</span>}
                                    {errors.cardNumber?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.cardNumber.message}</span>}
                                </label>
                            </div>
                        
                        <div className="inputSection">
                                <label className="label text-start">
                                    <span className="label-text text-start">Name on card</span>
                                </label>
                                <input type="number" placeholder="Your name here" name='cardName' className="w-100" id='inputTag'
                                    {...register("cardName", {
                                        required: {
                                            value: true,
                                            message: 'Give your card name'
                                        },
                                        
                                    })}
                                />
                                <label className="label">
                                    {errors.cardName?.type === 'required' && <span className="label-text-alt errorMsg">{errors.cardName.message}</span>}
                                    {errors.cardName?.type === 'minLength' && <span className="label-text-alt errorMsg">{errors.cardName.message}</span>}
                                </label>
                            </div>

                            <div className='d-flex justify-content-between align-items-start'>
                                <div className="inputSection inputName ">
                                    <label className="label">
                                        <span className="label-text">Expiration of date</span>
                                    </label>
                                    <input type="date"  name='expiration' className=" w-100 date-input--has-value" id='inputTag'
                                        {...register("expiration", {
                                            required: {
                                                value: true,
                                                message: 'give expiration date'
                                            },
                                          
                                        })} />
                                    <label className="label">
                                        {errors.expiration?.type === 'required' && <span className="label-text-alt errorMsg">{errors.expiration.message}</span>}
                                        {errors.expiration?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.expiration.message}</span>}
                                    </label>
                                </div>
                                <div className="inputSection inputName ">
                                    <label className="label">
                                        <span className="label-text">CVC</span>
                                    </label>
                                    <input type="number" placeholder="123" name='cvc' className=" w-100 " id='inputTag'
                                        {...register("cvc", {
                                            required: {
                                                value: true,
                                                message: 'Give CVC'
                                            },
                                            // pattern: {

                                            //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            //     message: 'Provide a valid Email'
                                            // }
                                        })} />
                                    <label className="label">
                                        {errors.cvc?.type === 'required' && <span className="label-text-alt errorMsg">{errors.cvc.message}</span>}
                                        {errors.cvc?.type === 'pattern' && <span className="label-text-alt errorMsg">{errors.cvc.message}</span>}
                                    </label>
                                </div>

                            </div>



                            {/* <div className='w-100 text-end'>
                                <p style={{ marginTop: "-5px", cursor:"pointer" }} onClick={forgetPass}>Forget password</p>
                            </div> */}
                            {/* <small className='text-primary'>{success} </small> */}
                            {/* <small className='text-red-500'>{signInError} </small> */}
                            <div className='w-100 text-end'>
                            <button className='paymentBtn'>Pay now</button>
                            </div>
                        </form>

                        <div className='dividerBilling'></div>

                        <div>
                            <button className='policyBtn'>Refund policy</button>
                            <button className='policyBtn'>Terms of service</button>
                           
                        </div>

                    </div>

                    <div className="col col-12 col-lg-6  ">
                        <div className='purePriceSection'>
                            <div className=' pureDiv mb-3'>
                                <div className='d-flex align-items-center '>
                                    <img src={botanicalPic} alt="" />
                                    <p className='pureBotanical ms-3'>Spiritual Consultation</p>
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

export default ServiceBillingPage3;