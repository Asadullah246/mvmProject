import React, { useState } from 'react';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import "./Calender.css"
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../../Resources/BillingPage.css"
import "../BillingPage3/ServiceBillingPage3.css"
import { Breadcrumbs, Checkbox, Link, Rating, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import botanicalPic from "../../../images/products/Rectangle 71.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import dotIcon from "../../../images/Ellipse.svg"
import visaIcon from "../../../images/visa.svg"
import auth from '../../../Firebase.init';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 769 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    miniTablet: {
        breakpoint: { max: 768, min: 577 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Calender = () => {
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(currentDate);
    var dayName = d.toString().split(' ')[0];;
    

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

    const ServiceDivider = <div className='serviceDivider'></div>

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const onSubmit = async data => {
        setSuccess("Successfully logged in");

    }

    const calenderLeft=()=>{
        let classname = ".calenderCarousel > .react-multiple-carousel__arrow--left"
        document.querySelector(classname).click()
    }
    const calenderRight=()=>{
        let classname = ".calenderCarousel > .react-multiple-carousel__arrow--right"
        document.querySelector(classname).click()
    }

    const booking = ()=> {
       window.location.href="/product-billing-three" 

    }

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

                        <div className='infoDetails position-relative'>
                            <button className='calenderLeftArrow' onClick={calenderLeft}><AiOutlineLeft/></button>
                            <button className='calenderRightArrow' onClick={calenderRight}><AiOutlineRight/></button>
                            
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                // autoPlay={this.props.deviceType !== "mobile" ? true : false}

                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                // removeArrowOnDeviceType={["miniTablet", "mobile"]}
                                // deviceType={this.props.deviceType}
                                // dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                                className='calenderCarousel'
                            >

                                {/* custom arrow removed by css in resource/styles file  */}
                                {
                                    [...Array(8)].map((d, index) => {
                                        return (
                                            <div className='text-center buttonDiv'>
                                                <h6>{dayName}</h6>
                                                <p className='mutedText'>{day+"-"+month+"-"+year}</p>
                                                <button className='my-3'>08:00 AM</button> <br />
                                                <button className='my-3'>08:00 AM</button> <br />
                                                <button className='my-3 ' id="redBtn">08:00 AM</button> <br />
                                                <button className='my-3'>08:00 AM</button> <br />
                                                <button className='my-3'>08:00 AM</button> <br />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>

                            


                        </div>


                       <div className='bookingDiv'>
                       <button onClick={booking}>proceed to Booking</button>
                       </div>


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

                <Footer />


            </div>
            

        </div>
    );
};

export default Calender;