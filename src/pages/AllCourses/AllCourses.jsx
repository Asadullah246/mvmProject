import { Pagination, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./allCourses.css"
import { createBrowserHistory } from '@remix-run/router';
import { useHref, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


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
const data =
    [
        {
            "id": 1,
            "name": "product 1",
            "price": 500,
            "image": "./images/signup/Rectangle 85.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "5k"
        },
        {
            "id": 2,
            "name": "product 2",
            "price": 400,
            "image": "./images/signup/Rectangle 84.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 3,
            "name": "product 3",
            "price": 400,
            "image": "./images/signup/Rectangle 83.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },

        {
            "id": 4,
            "name": "product 4",
            "price": 400,
            "image": "./images/signup/Rectangle 85.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 5,
            "name": "product 5",
            "price": 400,
            "image": "./images/signup/Rectangle 83.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "7k"
        },
        {
            "id": 6,
            "name": "product 6",
            "price": 900,
            "image": "./images/signup/Rectangle 84.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 7,
            "name": "product 7",
            "price": 400,
            "image": "./images/signup/Rectangle 85.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },
        {
            "id": 8,
            "name": "product 8",
            "price": 900,
            "image": "./images/signup/Rectangle 84.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 9,
            "name": "product 9",
            "price": 300,
            "image": "./images/signup/Rectangle 83.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "5k"
        },
        {
            "id": 10,
            "name": "product 10",
            "price": 400,
            "image": "./images/signup/Rectangle 85.png",
            "paidStatus": "paid",
            "averageReview": 5,
            "reviews": "3k"
        },

        {
            "id": 11,
            "name": "product 11",
            "price": 400,
            "image": "./images/signup/Rectangle 83.png",
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },
        {
            "id": 12,
            "name": "product 12",
            "price": 400,
            "image": "./images/signup/Rectangle 84.png", 
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        }
    ]

const AllCourses = () => {
    const [page, setPage] = React.useState(1);
    const history = createBrowserHistory();
    const [courses, setCourses] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setCourses(data)

    }, [])
   


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

    const fullCourse = (id) => {
        // history.push(`/full-course/${id}`)
        navigate(`/full-course/${id}`)
        // window.href.push(`/full-course/${id}`)
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
                                courses?.map(d => {
                                    return (
                                        <div className='col px-3 py-4 courseCard scaleDiv' onClick={() => fullCourse(d.id)}>
                                            <img src={d.image} alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>{d.paidStatus}</p>
                                                    <h5>{d.price}</h5>
                                                </div>
                                                <h3 className='text-start mb-0'>{d.name}</h3>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <Rating name="half-rating" defaultValue={d.averageReview} precision={0.5} className='rating' />
                                                    <p className='mb-1 ms-2'>{d.reviews}</p>
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
                                    <div className=' px-3 py-4 courseCard scaleDiv ' >
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
                    <div className='d-flex justify-content-between align-items-center arrowForService'>
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