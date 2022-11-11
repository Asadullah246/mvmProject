import React, { useContext, useState } from 'react';
import Navbar from '../../../Components/Navbar';
import "./ProductDetails.css"
import productPic from "../../../images/products/Rectangle 7.png"
import addition from "../../../images/Group 1.png"
import sub from "../../../images/Vector 1.png"
import detailsIcon from "../../../images/products/detailsIcon.svg"
import shippingIcon from "../../../images/products/shipping.svg"
import returnIcon from "../../../images/products/return.svg"
import AccordionSection from '../../../Components/AccordionSection';
import { Rating } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Footer from '../../../Components/Footer';
import { MyContext } from '../../../App';
import AddToCart from '../../../Components/AddToCart';

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

const ProductDetails = () => {
    const [amount, setAmount] = useState(2)

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

      // add to cart 

      const [refresh, setRefresh] = useContext(MyContext)

    //   const AddToCart = (product, storageName) => {
  
    //       let previousCart = JSON.parse(localStorage.getItem(storageName))
    //       if (previousCart) {
    //           const exist = previousCart.find(a => a.id == product.id)
    //           if (!exist) {
    //               previousCart.push(product)
    //               localStorage.setItem(storageName, JSON.stringify(previousCart))
  
    //           }
    //       }
    //       else {
    //           let newData = []
    //           newData.push(product)
    //           localStorage.setItem(storageName, JSON.stringify(newData))
    //       }
    //       setRefresh(!refresh)
    //   }


    const addToWishList=()=>{

    }

    const addToCart=()=>{
        AddToCart("product", "mvmProductCart") 
        setRefresh(!refresh)

    }
    return (
        <div>
            <Navbar />

            <div className="container-fluid container-md productDetailsBody">
                <div className="row ">
                    <div className="col col-12 col-md-12 col-lg-7 productImgDiv">
                        <img src={productPic} alt="" className='productDetailsImg' />
                    </div>
                    <div className="col col-12 col-md-12 col-lg-5 text-start">
                        <p className='mb-2 mt-4 mt-md-5 mt-lg-0'>Magical</p>
                        <h1 className='mb-3 fw-bold'>Pure Botanical</h1>
                        <h5 className='mb-1 fw-bolder'>${amount*100.00}</h5>
                        <small className='mb-0'>Tax included.</small>
                        <h6 className='fw-bold mt-3 mb-2'>Quantity</h6>

                        <p className='productItemCount mb-0'> <img src={sub} alt="" className='Subtraction' onClick={(e) => {
                            e.preventDefault()
                            if (amount != 1) {
                                setAmount(Number(amount) - 1)
                            }
                        }} /> <span className='amountvalue'>{amount}</span>

                            <img src={addition} alt="" className='addition'
                                onClick={(e) => {
                                    e.preventDefault()
                                    setAmount(Number(amount) + 1)
                                }} />
                        </p>

                        <button className='productDetailsBtn2 ' onClick={addToWishList}>Add to wishlist</button>
                        <button className='productDetailsBtn ' onClick={addToCart}>Add to cart</button>


                        {/* accordion  */}

                        <div className='accordionSection'>
                        <AccordionSection />
                        </div>
                     
                    </div>
                </div>
                <div className='alsoLikeSection'>
                            <h3 className='text-center mb-4'>You also may like</h3>

                        </div>

                <Carousel
                        swipeable={false}
                        draggable={false}
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
                                            <h4 className='text-start mb-0'>Course name</h4>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                <p className='ratingText mb-1'>4.5k Reviews</p>
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

            <Footer/>

        </div>
    );
};

export default ProductDetails;