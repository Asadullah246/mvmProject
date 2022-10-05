import { Rating } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";


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


const CourseFullPage = () => {
    const [previewCount, setPreviewCount] = useState(4)

    const arrowLeft = (e) => {
        e.preventDefault()
        let classname = ".react-multiple-carousel__arrow--left"
        document.querySelector(classname).click()
    }
    const arrowRight = (e) => {
        e.preventDefault()
        let classname = ".react-multiple-carousel__arrow--right"
        document.querySelector(classname).click()
    }


    return (
        <div className='courseFullPage'>
            <Navbar />
            {/* body  */}

            <div className="container-fluid container-md fullCourseBody" >
                <div className="row gx-5 d-flex flex-column-reverse flex-lg-row ">
                    <div className="col-12 col-lg-6">
                        <h1 className='text-start courseheadLine1'>The Complete Magical  Consultation</h1>
                        <button className='previewBtn'><img src="images/course/eye.svg" alt="" className='me-3' />preview</button>

                        <div className='d-flex justify-content-start align-items-center gap-4 gap-md-5 flex-wrap ratingState'>
                            <div className='text-start'>
                                <h4>4.5 <img src="images/course/star.svg" alt="" className='mb-1' /></h4>
                                <small>405k Reviews</small>
                            </div>
                            <div className='text-start'>
                                <h4>150k</h4>
                                <small>Students</small>
                            </div>
                            <div className='text-start'>
                                <h4>60 Hours</h4>
                                <small>Total content</small>
                            </div>
                            <div className='text-start'>
                                <button className='likeBtn'><img src="images/course/like.svg" alt="" /></button>
                            </div>

                        </div>

                        <p className='text-start mb-0'>All Levels  Updated,  Aug 2022</p>
                        <p className='text-start'>English <img src="images/course/sub.svg" alt="" /></p>
                        <h4 className='text-start'>$19.99 <span className='text-muted ms-1'>$59.99</span></h4>
                        <button className='addToCartBtn '>Add to cart</button>

                    </div>
                    <div className="col-12 col-lg-6 ">
                    <h1 className='text-start courseheadLine2'>The Complete Magical  Consultation</h1>
                        <div className='imgDivForCourse'>
                            <img src="images/course/courseImg.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="row gx-5 previewAndSpec">
                    <div className="col-12 col-lg-6">

                        {/* course preview section  */}

                        <div className='previewSection'>
                            <h2 className='mb-3 text-start'>Course Overview</h2>
                            <div className='previews'>
                                <ul>

                                    {
                                        [...Array(previewCount)].map(p => {
                                            return (
                                                <li className='text-start mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</li>
                                            )
                                        })
                                    }

                                </ul>
                                <button className='showMoreDetails' onClick={() => {
                                    setPreviewCount(12)
                                    document.querySelector(".showMoreDetails").style.display = "none"
                                    document.querySelector(".showLess").style.display = "block"
                                }}>Show Details and Curriculum </button>
                                <button className='showLess' onClick={() => {
                                    setPreviewCount(4)
                                    document.querySelector(".showMoreDetails").style.display = "block"
                                    document.querySelector(".showLess").style.display = "none"
                                }}>Show less <img src="images/course/showLess.svg" alt="" className='ms-2 showLessIcon' /> </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className='specForCourse'>
                            <ul>
                                <li className='specLi'><img src="images/course/check-circle.svg" alt="" />60 Hours Videos</li>
                                <li className='specLi'><img src="images/course/check-circle.svg" alt="" />20 Hands- on Projects</li>
                                <li className='specLi'><img src="images/course/check-circle.svg" alt="" />Super exercise</li>
                                <li className='specLi'><img src="images/course/check-circle.svg" alt="" />200 Articles + Resources</li>
                                <li className='specLi'><img src="images/course/check-circle.svg" alt="" />Certificate of Completion</li>
                            </ul>
                        </div>
                        <div></div>

                    </div>
                </div>



            </div>
            <div className="container-fluid container-md fullCourseBody">
                {/* reviews  */}
                <h4 className='reviewsheadline'>4.5 <img src="images/course/star.svg" alt="" /> 405k Reviews</h4>
            </div>


            <div className="container-fluid container-md ">

                {/* rows-col-12 rows-col-md-6 rows-col-lg-12  */}
                <div className="row gx-5  ">
                    {
                        [...Array(6)].map(a => {
                            return (
                                <div className="col col-md-6 col-lg-6 ">
                                    <div className='reviewCol'>
                                        <div className='d-flex justify-content-start align-items-center mb-3 '>
                                            <img src="images/community/Ellipse 19.png" alt="" className='profileImage' />
                                            <div className='text-start'>
                                                <h5 className='mb-0'>Smir A</h5>
                                                <p className='mb-0 d-flex justify-content-start align-items-center '><p className='mb-0'><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly className='ratingStarCourse' /></p><p className='weekText'>a week ago</p></p>
                                            </div>
                                        </div>
                                        <p className='text-start'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="container-fluid container-md alsoLike">
                <h2>You may also like</h2>
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
                    removeArrowOnDeviceType={["miniTablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        [...Array(8)].map(d => {
                            return (
                                <div className=' px-3 py-4 courseCard scaleDiv'>
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
                                    <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className='d-flex justify-content-between align-items center arrowForService'>
                    <button className='serviceBtn' onClick={arrowLeft}><BsArrowLeft /></button>
                    <button className='serviceBtn' onClick={arrowRight}><BsArrowRight /></button>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default CourseFullPage;