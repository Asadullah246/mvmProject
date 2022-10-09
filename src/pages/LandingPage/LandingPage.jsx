import React from 'react';
import "./LandingPage.css"
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from '../../Components/Navbar';
// import { Carousel } from 'react-responsive-carousel';
import { Rating } from '@mui/material';
import Footer from '../../Components/Footer';
import Carousel from 'react-multi-carousel';
// import { BsArrowLeft } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/bs";

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

const LandingPage = () => {

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

    const mouseEnter = (e) => {
        let element = (e.target.parentNode.lastChild);
        element.style.display = "block"
    }
    const mouseLeave = (e) => {
        let element = (e.target.parentNode.lastChild);
        element.style.display = "none"
    }

    return (
        <div style={{ overflowX: "hidden" }}>
            <Navbar />
            {/* Hero Section */}
            <section id="hero">
                <div className='container'>
                    <div className='headingDiv'>
                        <h1 style={{ marginBottom: "20px" }}>Equip yourself with magical power</h1>
                        <p className='mb-5'>The proper Magical oils, Pure Botanical, and Spiritual Jewellery and so more are central to the practice of Mystique Vedic Miracles, and essential for many magical products services. </p>
                        <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgb(250, 250, 250) ", padding: "5px 40px", borderRadius: "10px" }}>Shop now</button>
                    <p style={{ fontSize: "1.3em", fontWeight: "800" }} className="arrow "><BsChevronDown /></p>
                    </div>
                </div>
            </section>

            {/* body section  */}

            <div className="container-fluid container-md bodySection">

            {/* product categories  */}

                <section>
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
                        <div className='bigImage ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <img src="images/landing/natural.png" alt="" className='w-100 headerImages' />
                            <h3 className='productName'>Product name</h3>
                        </div>
                        <div className='smallImage ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <img src="images/landing/Rectangle 5 (2).png" alt="" className='w-100 h-100 headerImages' />
                            <h3 className='productName'>Product name</h3>
                        </div>

                    </div>
                    <div style={{ width: "100%", }} className="d-flex justify-content gap-3 productImages">

                        <div className='smallImage ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <img src="images/landing/natural.png" alt="" className='w-100 headerImages' />
                            <h3 className='productName'>Product name</h3>
                        </div>
                        <div className='bigImage ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <img src="images/landing/Rectangle 6 (1).png" alt="" className='w-100 headerImages' />
                            <h3 className='productName'>Product name</h3>
                        </div>

                        {/* <img src="images/landing/Rectangle 6 (1).png" alt="" className='smallImg ' />
                        <img src="images/landing/natural.png" alt="" className='bigImg ' /> */}

                    </div>
                    <div>
                        <button className='productArrow'><BsArrowLeft /></button>
                        <button className='productArrow'><BsArrowRight /></button>
                    </div>
                </section>

                {/* top selling section  */}

                <section id='topSelling'>
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
                </section>

                {/* services  */}

                <section id='serviceDiv'>
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
                                            <div className='priceAndDetailsSection'>
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
                </section>

                {/* course section  */}

                <section id='courseDiv'>
                    <h2>Our Course</h2>

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



                    {/* <div className="container-fluid">
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
                    </div> */}
                </section>


                {/* customer comments  */}

                <section id='customerDiv'>
                    <h2 className='mb-5'>What Our Customer Says</h2>
                    <div className='customerCommentDiv'>
                        <div className='commentDiv'>
                            <div >
                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='commentRating' />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tortor at leo eleifend, sed facilisis lacus facilisis. Etiam elit turpis, eleifend at justo at, vehicula pretium nibh. Integer eget auctor mi, vitae accumsan felis. Aenean ultricies sagittis nisi, ut luctus tellus. Integer eu tempor magna, sit amet dictum risus. Nunc a interdum arcu. Cras finibus arcu nec sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut efficitur ornare nibh, sit amet auctor metus auctor quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque urna et ligula malesuada, sit amet semper diam tristique.</p>
                            <div style={{ width: "100%", borderBottom: "2px solid white", marginTop: "80px", marginBottom: "30px" }}></div>
                            {/* <hr style={{ color: "white", fontSize: "2em", marginTop: "80px", marginBottom: "30px" }} /> */}
                            <h5 className='text-start'>Raju Mullah</h5>
                            <p className='text-start'>UI UX Designer</p>
                        </div>

                        <div className='imgDivComment'>
                            <div className='imageForComment'>
                                <img src="images/comments/Rectangle 21.png" alt="" className='commentImg' />
                                <div className='d-flex justify-content-between mt-4 nextCommentSection'>
                                    <p><span style={{ fontSize: "2.3em" }}>05</span>/10</p>
                                    <div>
                                        <button className='commentArrow'><BsArrowLeft /></button>
                                        <button className='commentArrow'><BsArrowRight /></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;