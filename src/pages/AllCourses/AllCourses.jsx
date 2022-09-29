import { Pagination, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./allCourses.css"


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

const AllCourses = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

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
        <div>
            <Navbar />

            {/* body  */}

            <div className='allCoursesBody'>


                {/* all courses  */}
                <div>
                    <h2 className='text-start'>All Courses</h2>
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                            {
                                [...Array(8)].map(d => {
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
                                            <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* pagination  */}

                    <div className='paginationDiv'>
                        <Stack spacing={2} className="paginationStack">
                            {/* <Typography>Page: {page}</Typography> */}
                            <Pagination count={10} page={page} onChange={handleChange} className="paginationText" />
                        </Stack>
                    </div>

                    {/* top courses  */}
                    <h2>
                        Top Popular Courses
                    </h2>


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
                {/*  end of all courses  */}
            </div>


            <Footer />
        </div>
    );
};

export default AllCourses;