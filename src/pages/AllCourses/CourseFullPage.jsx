import { Rating } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image1 from "../../images/products/Rectangle 7.png"
import { useContext } from 'react';
import { MyContext } from '../../App';
import AddToCart from '../../Components/AddToCart';
import preview from "../../images/course/eye.svg"
import like from "../../images/course/like.svg"
import ratingImg from "../../images/course/star.svg"
import { FcLike } from 'react-icons/fc';
import { IconContext } from "react-icons";



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
            "image": image1,
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






const CourseFullPage = () => {
    const [course, setCourse] = useState({})
    const [previewCount, setPreviewCount] = useState(4)
    const { id } = useParams()
    const [added, setAdded] = useState(false)
    const [liked, setLiked] = useState(false)




    useEffect(() => {
        const singleCourse = data.find(a => a.id == id)
        setCourse(singleCourse)
    }, [id])


    const [refresh, setRefresh] = useContext(MyContext)

    useEffect(() => {
        const previousCart = JSON.parse(localStorage.getItem("coursemvmCart"))
        if (previousCart) {
            const remaining = previousCart.find(a => a == course.id)
            if (remaining) {
                setAdded(true)

            }

        }

    }, [course.id, refresh])
    useEffect(() => {
        const previousCart = JSON.parse(localStorage.getItem("coursemvmWishList"))
        if (previousCart) {
            const remaining = previousCart.find(a => a == course.id)
            if (remaining) {
                setLiked(true)

            }

        }

    }, [course.id, refresh])


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


    const addToCart = () => {
        AddToCart(course.id, "coursemvmCart")
        setRefresh(!refresh)


    }
    const likeItem = () => {
        AddToCart(course.id, "coursemvmWishList")
        setRefresh(!refresh)


    }


    return (
        <div className='courseFullPage'>
            <Navbar />
            {/* body  */}

            {
                course ?
                    <>
                        <div className="container-fluid container-md fullCourseBody" >
                            <div className="row gx-5 d-flex flex-column-reverse flex-lg-row ">
                                <div className="col-12 col-lg-6">
                                    <h1 className='text-start courseheadLine1'>The Complete Magical  Consultation</h1>
                                    {/* <button className='previewBtn'><img src={preview} alt="" className='me-3' />preview</button> */}

                                    <div className='d-flex justify-content-start align-items-center gap-4 gap-md-5 flex-wrap ratingState'>
                                        <div className='text-start'>
                                            <h4>4.5 <img src={ratingImg} alt="" className='mb-1' /></h4>
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
                                            {
                                                liked ?
                                                    <button className='likeBtn2'>
                                                        <FcLike />
                                                    </button>
                                                    :
                                                    <button onClick={likeItem} className='likeBtn'>
                                                        <img src={like} alt="" />
                                                    </button>


                                            }

                                        </div>

                                    </div>

                                    <p className='text-start mb-0'>All Levels  Updated,  Aug 2022</p>
                                    <p className='text-start'>English <img src="images/course/sub.svg" alt="" /></p>
                                    <h4 className='text-start'>$19.99 <span className='text-muted ms-1'>$59.99</span></h4>
                                    {
                                        added ?
                                            <button className='addedToCartBtn ' disabled >Added to cart</button>
                                            :
                                            <button className='addToCartBtn ' onClick={addToCart}>Add to cart</button>
                                    }

                                </div>
                                <div className="col-12 col-lg-6 ">

                                    <div className='imgDivForCourse'>
                                        <img src={course.image} alt="" />


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
                    </> :
                    <p>something wrong</p>
            }

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
                <div className='d-flex justify-content-between align-items-center arrowForService'>
                    <button className='serviceBtn' onClick={arrowLeft}><BsArrowLeft /></button>
                    <button className='serviceBtn' onClick={arrowRight}><BsArrowRight /></button>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default CourseFullPage;