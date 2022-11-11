import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import "../../../Resources/BillingPage.css"
import "../BillingPage3/ServiceBillingPage3.css"
import "./BillingPage2.css"
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

   

    const handleCart = () => {
        window.location.href = "/shopping-cart"
    }
    const handleInformation = () => {
        window.location.href = "/product-billing-one"
    }
    const handlePayment = () => {
        window.location.href = "/product-billing-three"
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/shopping-cart" onClick={handleCart}>
            Cart
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/product-billing-one" onClick={handleInformation}>
            Information
        </Link>,
        <Typography key="3" color="text.primary">
            Shipping
        </Typography>,
        <Link underline="hover" key="1" color="inherit" href="/product-billing-three" onClick={handlePayment}>
            Payment
        </Link>,


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

    const ServiceDivider = <div className='serviceDivider'></div>



    const onSubmit = async data => {
        setSuccess("Successfully logged in");
        window.location.href = "/product-billing-three"

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
                                <p className='mb-0 infoTitle'>Ship to</p>
                                <p className='mb-0'>45201 owen Street, Balleville, MT 48111, USA </p>
                            </div>


                        </div>


                        {/* end of info section  */}

                        <h4 className='serviceBillingPaymentText'>Payment</h4>

                        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>


                            <div className="inputSection">
                                <label className="label text-start">
                                    <span className="label-text text-start">Product weight</span> <br /> 
                                    <small>For more information about delivery charges, please <a href="" className='text-white border-bottom border-white'>click here</a></small>
                                </label>
                                {/* <img src={visaIcon} alt="" className='visaIcon' /> */}
                                <p className='weight mb-0'>$20.00</p>
                                <input type="number" placeholder="Up to 2kg" name='cardNumber' className="w-100" id='inputTag'
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
                            <button className='policyBtn'>Shipping policy</button>
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
            <Footer />

        </div>
    );
};

export default ServiceBillingPage3;