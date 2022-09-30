import React from 'react';
import "./LandingPage.css"
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from '../../Components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import { Rating } from '@mui/material';
import Footer from '../../Components/Footer';


const LandingPage = () => {

    return (
        <div style={{  overflowX: "hidden" }}>
            <Navbar />

            {/* body section  */}

            <div style={{ width: "85vw", margin: "0 auto", marginTop: "150px", }} className="bodySection">
                <div style={{ width: "60%", margin: "auto" }} className="headingDiv">
                    <h1 style={{ marginBottom: "20px" }}>Get Magical & Botanical Products Easily and make your dreams come true!</h1>
                    <p className='mb-5'>The proper Magical oils, Pure Botanical, and Spiritual Jewellery and so more are central to the practice of Mystique Vedic Miracles, and essential for many magical products services. </p>
                    <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgb(250, 250, 250) ", padding: "5px 40px", borderRadius: "10px" }}>Shop now</button>
                </div>

                <p style={{ margin: "100px auto", fontSize: "1.3em", fontWeight: "800" }} className="arrow"><BsChevronDown /></p>


                <div>
                    <h2 className='mb-4'>Products Categories</h2>
                    <div>
                        {/* <Carousel showArrows={true}
                        //  onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
                        >
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                                    <img src="images/landing/Group 10 (1).png" alt="" className='bigImg' />
                                    <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg' />

                                </div>
                            </div>
                        </Carousel> */}
                    </div>
                    <div style={{ width: "100%", }} className="d-flex justify-content gap-3 mb-4 productImages">
                        <img src="images/landing/Group 10 (1).png" alt="" className='bigImg forScale' />
                        <img src="images/landing/Rectangle 5 (2).png" alt="" className='smallImg forScale' />

                    </div>
                    <div style={{ width: "100%", }} className="d-flex justify-content gap-3 productImages">

                        <img src="images/landing/Rectangle 6 (1).png" alt="" className='smallImg forScale' />
                        <img src="images/landing/natural.png" alt="" className='bigImg forScale' />

                    </div>
                    <div>
                        <button className='productArrow'><BsArrowLeft /></button>
                        <button className='productArrow'><BsArrowRight /></button>
                    </div>
                </div>

                {/* top selling section  */}
                <div className='topSelling'>
                    <h2 className='mb-3'>Top selling products</h2>
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                            {
                                [...Array(6)].map(d => {
                                    return (
                                        <div className='col px-3 py-4 topSellingCard scaleDiv'>
                                            <img src="images/landing/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Paid</p>
                                                    <h4>$500</h4>
                                                </div>
                                                <h3 className='text-start mb-0 courseName'>Course name</h3>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                    <p className='ratingText'>4.5k Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* services  */}

                <div className='serviceDiv'>
                    <h2 className='mb-3'>Services</h2>
                    {
                        [...Array(6)].map(d => {
                            return (
                                <div className='mb-4'>

                                    <div className='service p-3 d-flex align-items-center justify-content-center gap-1 gap-lg-5'>
                                        <div><h2>01</h2></div>
                                        <div className=' dividerSection'> </div>
                                        <div className=' divider2'> </div>
                                        <div className='text-start'>
                                            <h4>Tarot Reading</h4>
                                            <p>We provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company’s income</p>
                                        </div>
                                        <div className='text-start text-md-end priceHourly'>
                                            <div>
                                            <h6>$30/hr</h6>
                                            <button className='detailsBtn'>View details</button>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            )
                        })
                    }

                    <div className='d-flex justify-content-between align-items center arrowForService'>
                        <button className='serviceBtn'><BsArrowLeft /></button>
                        <button className='serviceBtn'><BsArrowRight /></button>
                    </div>
                </div> 

                <div className='courseDiv'>
                    <h2>Our Course</h2>
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                            {
                                [...Array(6)].map(d => {
                                    return (
                                        <div className='col px-3 py-4 courseCard scaleDiv'>
                                            <img src="images/course/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Paid</p>
                                                    <h4>$500</h4>
                                                </div>
                                                <h3 className='text-start mb-0'>Course name</h3>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                    <p className=''>4.5k Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> 
                {/* customer comments  */}

               <div className='customerDiv'>
                    <h2 className='mb-5'>What Our Customer Says</h2>
                    <div className='customerCommentDiv'>
                        <div className='commentDiv'>
                            <div >
                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='commentRating' />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tortor at leo eleifend, sed facilisis lacus facilisis. Etiam elit turpis, eleifend at justo at, vehicula pretium nibh. Integer eget auctor mi, vitae accumsan felis. Aenean ultricies sagittis nisi, ut luctus tellus. Integer eu tempor magna, sit amet dictum risus. Nunc a interdum arcu. Cras finibus arcu nec sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut efficitur ornare nibh, sit amet auctor metus auctor quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque urna et ligula malesuada, sit amet semper diam tristique.</p>
                            <div style={{ width: "100%", borderBottom: "2px solid white", marginTop: "80px", marginBottom: "30px" }}></div>
                            <hr style={{color:"white", fontSize:"2em"}}/>
                            <h5 className='text-start'>Raju Mullah</h5>
                            <p className='text-start'>UI UX Designer</p>
                        </div>

                        <div className='imgDivComment'>
                            <div className='imageForComment'>
                                <img src="images/comments/Rectangle 21.png" alt="" className='commentImg' />
                                <div className='d-flex justify-content-between mt-4 nextCommentSection'>
                                    <p><span style={{fontSize:"2.3em"}}>05</span>/10</p>
                                    <div>
                                        <button className='commentArrow'><BsArrowLeft /></button>
                                        <button className='commentArrow'><BsArrowRight /></button>
                                    </div>

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

export default LandingPage;