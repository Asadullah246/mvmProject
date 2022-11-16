import React, { useEffect, useState } from 'react';
import "./LandingPage.css"
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from '../../Components/Navbar';
import { Rating } from '@mui/material';
import Footer from '../../Components/Footer';
import Carousel from 'react-multi-carousel';
import AOS from "aos";
import "aos/dist/aos.css";
import "./loader.css";
import CarouselLeftButton from '../../Components/CarouselLeftButton';
import CarouselRightButton from '../../Components/CarouselRightButton';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import carouselImg1 from "../../images/landing/natural.png"
import carouselImg2 from "../../images/landing/Rectangle 5 (2).png"
import carouselImg3 from "../../images/landing/natural.png"
import carouselImg4 from "../../images/landing/Rectangle 6 (1).png"
import topSellingImg from "../../images/landing/Rectangle 19 (1).png"
import courseImg from "../../images/course/Rectangle 19 (1).png"
import reviewImg from "../../images/comments/Rectangle 21.png"
import likeIcon from "../../images/course/Vector (1).svg"
import db from '../../Firebase';
import { LazyLoadImage } from 'react-lazy-load-image-component';  
import videoFile from "../../Others/video3.mp4"  


// get window dimension 

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 769 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    miniTablet: {
        breakpoint: { max: 768, min: 577 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1. 
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.  
    }
};
// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4,
//         slidesToSlide: 4 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 769 },
//         items: 3,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     miniTablet: {
//         breakpoint: { max: 768, min: 577 },
//         items: 2,
//         slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 576, min: 0 },
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };
const responsiveSingle = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 769 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    miniTablet: {
        breakpoint: { max: 768, min: 577 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const imagedata = [
    {
        image: carouselImg4,
        name: "Lolita",
    },
    {
        image: carouselImg1,
        name: "Money Candle",
    },
    {
        image: carouselImg2,
        name: "Crown of Success",
    },

    {
        image: carouselImg3,
        name: "Lolita",
    },
    {
        image: carouselImg4,
        name: "Lolita",
    },
    {
        image: carouselImg1,
        name: "Lolita",
    },
    {
        image: carouselImg2,
        name: "Lolita",
    },

    {
        image: carouselImg3,
        name: "Lolita",
    },
    {
        image: carouselImg1,
        name: "Lolita",
    },
]

const LandingPage = () => {

    const { height, width } = useWindowDimensions()
    const [btnText, setBtnText] = useState("See more")
    const [showMore, setShowMore] = useState(true)
    const [user] = useAuthState(auth)
    const [courseShowMore, setCourseShowMore] = useState(true)
    const [selectedBtn, setSelectedBtn] = useState()
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [showName, setShowName] = useState(false)
    const [loader, setLoader] = useState(true)

    // console.log(data);

    // console.log(user);


    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        setLoader(true)
        db.collection('products').onSnapshot(snapshot => {
            setData(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        db.collection('categories').onSnapshot(snapshot => {
            setCategory(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),

                }))
            );
        });
        setLoader(false)

    }, [])
    








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
    const courseArrowLeft = (e) => {
        e.preventDefault()
        let classname = ".courseCarousel > .react-multiple-carousel__arrow--left"
        document.querySelector(classname).click()
    }
    const courseArrowRight = (e) => {
        e.preventDefault()
        let classname = ".courseCarousel > .react-multiple-carousel__arrow--right"

        document.querySelector(classname).click()
    }
    const serviceArrowLeft = (e) => {
        e.preventDefault()
        let classname = ".serviceCarousel > .react-multiple-carousel__arrow--left"
        document.querySelector(classname).click()
    }
    const serviceArrowRight = (e) => {
        e.preventDefault()
        let classname = ".serviceCarousel > .react-multiple-carousel__arrow--right"

        document.querySelector(classname).click()
    }
    const reviewCarouselLeft = (e) => {
        e.preventDefault()
        let classname = ".reviewCarousel > .react-multiple-carousel__arrow--left"
        document.querySelector(classname).click()
    }
    const reviewCarouselRight = (e) => {
        e.preventDefault()
        let classname = ".reviewCarousel > .react-multiple-carousel__arrow--right"

        document.querySelector(classname).click()
    }

    // const mouseEnter = (e) => {
    //     setShowName(true)
    // }
    // const mouseLeave = (e) => {
    //     setShowName(false)
    // }

    const showMoreText = () => {
        // let showMoreId=document.querySelector("#reviewUserText")
        // console.log(showMoreId);
        if (btnText === "See more") {
            setBtnText("See less")
            setShowMore(!showMore)
        }
        else {

            setBtnText("See more")
            setShowMore(!showMore)


        }

    }

    const seeMore = (id) => {
        setCourseShowMore(!courseShowMore)
        setSelectedBtn(id)
    }
    
    return (
        <div style={{ overflowX: "hidden" }} className="landingPage">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <div className='headerSection'>
                <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop 
                    className='video'>
                    <source src={videoFile} type="video/mp4" />
                    {/* <source src={videoFile} type="video/ogg" /> */}
                    Your browser does not support the video tag.
                </video>


                <Navbar />
                {/* Hero Section */}
                <section id="hero">
                    <div className='container'>
                        <div className='headingDiv' data-aos="zoom-out-down">
                            <h1 style={{ marginBottom: "20px" }} data-text="
                       Equip yourself with magical power" className='glitch'>Equip yourself with magical power</h1>
                            <p className='mb-5 sub'>The proper Magical oils, Pure Botanical, and Spiritual Jewellery and so more are central to the practice of Mystique Vedic Miracles, and essential for many magical products services. </p>
                            <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgb(250, 250, 250) ", padding: "5px 40px", borderRadius: "10px" }}>Shop now</button>
                            <p style={{ fontSize: "1.3em", fontWeight: "800" }} className="arrow "><BsChevronDown /></p>
                        </div>
                    </div>
                </section>
            </div>

            {/* body section  */}

            <div className="container-fluid container-md bodySection">



                {/* product categories  */}

                <section className="my-3">
                    <h2 className='mb-4 categoriesText pt-3'>Top Selling Products</h2>
                    {/* carousel  */}

                    <Carousel
                        swipeable={true}
                        draggable={true}
                        // showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={true} 

                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all .3"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["miniTablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        // dotListClass="custom-dot-list-style"
                        itemClass=""
                        className='courseCarousel' 
                    >
                        {data.length !== 0?data.map((d, index) => {
                                return (
                                    <div className='courseCard scaleDiv'>

                                        {/* <img src={d.data.image} alt="" className='w-100 productCol forScale' /> */}
                                        <LazyLoadImage className='productCol forScale ' src={d.data.image} alt={d.data.name} effect="blur" />

                                        <div className='coursePrice'>
                                            {/* <div className='d-flex justify-content-between'>
                                               d<p>Paid</p>
                                                <h4>$500</h4>  
                                            </div>  */}
                                           <div>
                                                <h4 className='text-start productNamLanding mb-1'>{d.data.name}</h4>
                                                <p className='productPriceLanding text-start mb-0'>Price : ${d.data.price}</p>
                                           </div>
                                            {/* <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                <p className=''>4.5k Reviews</p>
                                            </div> */}
                                        </div>
                                        {/* <img src={likeIcon} alt="" className='likeIcon' /> */}
                                    </div>
                                )
                            })
                            
                            : <div class="loader">
                            <div class="loader-inner pacman">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        }
                        {
                            data.map((d, index) => {
                                return (
                                    <div className='courseCard scaleDiv'>

                                        {/* <img src={d.data.image} alt="" className='w-100 productCol forScale' /> */}
                                        <LazyLoadImage className='w-100 productCol forScale ' src={d.data.image} alt={d.data.name} effect="blur" />

                                        <div className='coursePrice'>
                                            {/* <div className='d-flex justify-content-between'>
                                               d<p>Paid</p>
                                                <h4>$500</h4>  
                                            </div>  */}
                                            <div>
                                                <h4 className='text-start productNamLanding mb-1'>{d.data.name}</h4>
                                                <p className='productPriceLanding text-start mb-0'>Price : ${d.data.price}</p>
                                           </div>
                                            {/* <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                <p className=''>4.5k Reviews</p>
                                            </div> */}
                                        </div>
                                        {/* <img src={likeIcon} alt="" className='likeIcon' /> */}
                                    </div>
                                )
                            })
                        }
                    </Carousel>




                    {/* <div className='btnArrowDiv'>
                        <CarouselLeftButton arrowLeft={arrowLeft} />
                        <CarouselRightButton arrowRight={arrowRight} />
                    </div> */}
                </section>


                {/* product categories  */}

                <section className="my-3">
                    <h2 className='mb-5 categoriesText pt-3'>Category</h2>
                    {/* carousel  */}

                    <Carousel
                        swipeable={true}
                        draggable={true}
                        // showDots={this.props.deviceType !== "mobile" ? true : false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["miniTablet", "mobile"]}
                        className='courseCarousel'
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={true} 
                        autoPlaySpeed={5000}
                        customTransition="all .3"
                        // deviceType={this.props.deviceType}
                        // dotListClass="custom-dot-list-style"
                        itemClass=""
                    >
                        {category.length!==0?
                            category.map((d, index) => {
                                return (
                                    <div className='categoryCard scaleDiv2'
                                    //  onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} 
                                     >

                                        {/* <img src={d.data.image} alt="" className='w-100 productCol forScale' /> */}
                                        <LazyLoadImage className=' categoryImg forScale ' src={d.data.image} alt={d.data.name} effect="blur" />

                                        {
                                            // showName &&
                                            <div className='categoryName'>
                                                {/* <div className='d-flex justify-content-between'>
                                               d<p>Paid</p>
                                                <h4>$500</h4>  
                                            </div>  */}
                                                <h4 className='text-start categoryNameText mb-1'>{d.data.name}</h4>
                                                {/* <p className='productPriceLanding text-start mb-0'>Price : ${d.data.price}</p>  */}
                                                {/* <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                <p className=''>4.5k Reviews</p>
                                            </div> */}
                                            </div>
                                        }
                                        {/* <img src={likeIcon} alt="" className='likeIcon' /> */}
                                    </div>
                                )
                            })
                            : <div class="loader">
                            <div class="loader-inner pacman">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                        }
                        {
                            category.map((d, index) => {
                                return (
                                    <div className='categoryCard scaleDiv2'
                                    //  onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} 
                                     >

                                        {/* <img src={d.data.image} alt="" className='w-100 productCol forScale' /> */}
                                        <LazyLoadImage className=' categoryImg forScale ' src={d.data.image} alt={d.data.name} effect="blur" />

                                        {
                                            // showName &&
                                            <div className='categoryName'>
                                                {/* <div className='d-flex justify-content-between'>
                                               d<p>Paid</p>
                                                <h4>$500</h4>  
                                            </div>  */}
                                                <h4 className='text-start categoryNameText mb-1'>{d.data.name}</h4>
                                                {/* <p className='productPriceLanding text-start mb-0'>Price : ${d.data.price}</p>  */}
                                                {/* <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                <p className=''>4.5k Reviews</p>
                                            </div> */}
                                            </div>
                                        }
                                        {/* <img src={likeIcon} alt="" className='likeIcon' /> */}
                                    </div>
                                )
                            })
                        }

                    </Carousel>


                </section>

                {/* top selling section  */}

                {/* <section id='topSelling'>
                    <h2 className='mb-3 '>Top selling products</h2>
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                            {
                                [...Array(6)].map(d => {
                                    return (
                                        <div className='col px-3 py-4 topSellingCard scaleDiv'>
                                            <img src={topSellingImg} alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Paid</p>
                                                    <h4>$500</h4>
                                                </div>
                                                <h4 className='text-start mb-1 courseName'>Course name</h4>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                    <p className='ratingText mb-1'>4.5k Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section> */}

                {/* services  */}

                {/* <section id='serviceDiv'>
                    <h2 className='mb-3'>Services</h2>
                    {
                        width > 767 ?
                            <>
                                <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={true}
                                    responsive={responsiveSingle}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                    autoPlay={true}

                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["miniTablet", "mobile"]}
                                    // deviceType={this.props.deviceType}
                                    // dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px"
                                    className='serviceCarousel'
                                >
                                    {
                                        [...Array(6)].map(e => {
                                            return (
                                                <>
                                                    {
                                                        [...Array(6)].map((d, index) => {
                                                            return (
                                                                <div className='mb-4'>

                                                                    <div className='service p-3 d-flex align-items-center justify-content-center gap-1 gap-lg-4'>
                                                                        <div><h2>{index + 1}</h2></div>
                                                                        <div className=' dividerSection'> </div>
                                                                        <div className=' divider2'> </div>
                                                                        <div className='text-start'>
                                                                            <h4>Tarot Reading</h4>

                                                                            {
                                                                                (!courseShowMore && (selectedBtn == index)) ?
                                                                                    <>
                                                                                        <p className='serviceDesc mb-0'>We provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company’s income</p>
                                                                                        <button className='seeMoreBtnForPTag' onClick={() => seeMore(index)}>See less</button>

                                                                                    </>
                                                                                    :
                                                                                    <>


                                                                                        <p className='serviceDesc2 mb-0'>We provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company’s income</p>
                                                                                        <button className='seeMoreBtnForPTag' onClick={() => seeMore(index)}>See more</button>
                                                                                    </>

                                                                            }

                                                                        </div>
                                                                        <div className='text-start text-md-end priceHourly'>
                                                                            <div className='priceAndDetailsSection'>
                                                                                <h6 className='servicePrice'>$30/hr</h6>
                                                                                <button className='detailsBtn'>View details</button>
                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                            )
                                        })
                                    }

                                </Carousel>

                            </>
                            :

                            <>
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
                                                        <p className='serviceDesc'>We provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company’s income</p>
                                                    </div>
                                                    <div className='text-start text-md-end priceHourly'>
                                                        <div className='priceAndDetailsSection'>
                                                            <h6 className='servicePrice'>$30/hr</h6>
                                                            <button className='detailsBtn'>View details</button>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                    {
                        width > 767 ?
                            <div className='d-flex justify-content-between align-items-center arrowForService'>

                                <CarouselLeftButton arrowLeft={serviceArrowLeft} />
                                <CarouselRightButton arrowRight={serviceArrowRight} />

                            </div>
                            : ""

                    }


                </section> */}








            </div>

            {/* course section  */}

            <div id='container-fluid'>
                <div id='stars'></div>

                <div className="container-fluid container-md bodySection">
                    <section id='courseDiv'>

                        <h2>Our Course</h2>

                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlay={true} 

                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["miniTablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            // dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            className='courseCarousel'
                        >
                            {
                                [...Array(10)].map((d, index) => {
                                    return (
                                        <div className=' px-3 py-4 courseCard scaleDiv'>
                                            {
                                                index % 2 == 0 ?
                                                    <img src={courseImg} alt="" className='w-100 productCol forScale' />
                                                    :
                                                    <img src={reviewImg} alt="" className='w-100 productCol forScale' />
                                            }


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
                            <button className='serviceBtn' onClick={courseArrowLeft}><BsArrowLeft /></button>
                            <button className='serviceBtn' onClick={courseArrowRight}><BsArrowRight /></button>
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

                </div>

            </div>



            <div className='container-fluid'>
                <div id='stars'>

                </div>
                <div className="container-fluid container-md bodySection">
                    {/* customer comments  */}

                    <section id='customerDiv'>
                        <h2 className='mb-5'>What Our Customer Says</h2>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            // showDots={true}
                            responsive={responsiveSingle}
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
                            // className='reviewCarousel'
                        >
                            {
                                [...Array(10)].map((e, index) => {
                                    return (
                                        <>
                                            <div className='customerCommentDiv'>
                                                <div className='commentDiv'>
                                                    <div className='nameForSmallDisplay'>
                                                        <h5 className='text-start'>Raju Mullah <span className='ms-2 text-muted fs-6'>UI UX Designer</span></h5>
                                                        <div className='d-flex justify-content-start align-items-center'>
                                                            <p className='text-start fw-bold mb-0'>Rating : </p>
                                                            <p className='ratingSpan'><Rating name="half-rating" defaultValue={4.3} precision={0.5} className='commentRating' readOnly /></p>
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='commentRating ratingForBigDisplay' readOnly />
                                                    </div>
                                                    <p className={showMore ? "reviewText" : "mb-0"} id='reviewUserText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tortor at leo eleifend, sed facilisis lacus facilisis. Etiam elit turpis, eleifend at justo at, vehicula pretium nibh. Integer eget auctor mi, vitae accumsan felis. Aenean ultricies sagittis nisi, ut luctus tellus. Integer eu tempor magna, sit amet dictum risus. Nunc a interdum arcu. Cras finibus arcu nec sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut efficitur ornare nibh, sit amet auctor metus auctor quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque urna et ligula malesuada, sit amet semper diam tristique.</p>

                                                    <button className='reviewShowMoreBtn' onClick={showMoreText}>{btnText}</button>

                                                    <div className='reviewNameBigSize'>
                                                        <div style={{ width: "100%", borderBottom: "2px solid white", marginTop: "80px", marginBottom: "30px" }}></div>
                                                        {/* <hr style={{ color: "white", fontSize: "2em", marginTop: "80px", marginBottom: "30px" }} /> */}
                                                        <h5 className='text-start'>Raju Mullah</h5>
                                                        <p className='text-start'>UI UX Designer</p>
                                                    </div>
                                                </div>

                                                <div className='imgDivComment overflow-hidden'>
                                                    <div className=''>
                                                        <img src={reviewImg} alt="" className='commentImg' />
                                                        <div className='d-flex justify-content-between mt-4 nextCommentSection'>
                                                            <p><span style={{ fontSize: "2.3em" }}>{index + 1}</span>/10</p>
                                                            <div>

                                                                <CarouselLeftButton arrowLeft={reviewCarouselLeft} />
                                                                <CarouselRightButton arrowRight={reviewCarouselRight} />
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className='redBorder'></div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </Carousel>


                    </section>


                </div>
            </div>






            <div className='container-fluid'>
                <div id='stars'></div>
                <div className="container-fluid container-md bodySection">

                    <Footer />
                </div>
            </div>


        </div>
    );
};

export default LandingPage;