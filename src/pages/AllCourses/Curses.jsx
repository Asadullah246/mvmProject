import React, { useState } from 'react';
import img from "../../images/Rectanglet71.png"
import deleteIcon from "../../images/Group.png"
import cart from "../../images/Vector (3).png"
import { Rating } from '@mui/material';
import dotIcon from "../../images/Ellipse.svg"

const Curses = () => {
    const [amount, setAmount] = useState(2)
    return (
        <div>
            <div className='serviceDiv'>

                {
                    [...Array(6)].map(d => {
                        return (
                            <div className='mb-4'>
                                {/* d-flex align-items-start justify-content-between  */}
                                <div className='serviceSection '>
                                    <div className='d-flex justify-content-between serviceCardDiv '>
                                        <div className='d-flex justify-content-start serviceCard'>
                                            <div className='imgDivCourse'>
                                                <img src={img} alt="course" className='courseImg' />
                                            </div>
                                            <div>
                                                <div className='text-start ms-2 ms-md-2 ms-lg-3 serviceTextDiv '>
                                                    <h4 className='spiritText'>Learn  how to spiritual</h4>
                                                    <div className='amount'>
                                                        <p className='mb-2'>You will master the Python programming language by building 100 unique projects over.. You will master the Python programming language by building 100 unique projects over..You will master the Python programming language by building 100 unique projects over..</p>

                                                        {/* add this class  */}
                                                        {/* .text {
                                                            overflow: hidden;
                                                        text-overflow: ellipsis;
                                                        display: -webkit-box;
                                                        -webkit-line-clamp: 2; 
                                                        line-clamp: 2;
                                                        -webkit-box-orient: vertical;
} */}

                                                        <div className='d-flex justify-content-start align-items-center my-3'>
                                                            <Rating name="half-rating " defaultValue={4.3} precision={0.5} className='courseRating' readOnly />
                                                            <p className='mb-0 courseRatingText'>4.5k Reviews</p>
                                                        </div>
                                                        <p className='mb-0'> <span>72 hours total</span> <img src={dotIcon} alt="" className='mx-2' /> <span>534 lectures</span> <img src={dotIcon} alt="" className='mx-2' /> <span>Intermediate level</span></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div>
                                            <div className='text-start ms-2 ms-md-2 ms-lg-3 serviceTextDiv '>
                                                <h5 className='fw-bold priceDivService'> <span className='priceTextService'>Price : </span> $ <span>{amount * 30}</span>/hr</h5>
                                                <div className='amount btnForBig'>
                                                    <p className='mb-4 text-end ' style={{ cursor: "pointer" }}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</p>
                                                    <button className='cartBtn'><img src={cart} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px" }} /> Add to cart</button>
                                                </div>


                                                <div className='  gap-4 text-start' id='btnForSmall'> <p className='mb-0 text-end ' style={{ cursor: "pointer" }}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</p>
                                                    <button className='cartBtn'><img src={cart} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px" }} /> Add to cart</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='text-start text-md-end priceDiv'>

                        <div className='text-start text-md-end  serviceTextDiv '>
                            <div>
                            <h6>$30/hr</h6>
                            </div>
                            <div className='amount'>
                                <p className='mb-1'>Remove</p>
                                <button className='detailsBtn'>Add to cart</button>

                            </div>
                        </div>

                        <div>

                        </div>
                    </div> */}


                                </div>

                            </div>
                        )
                    })
                }


            </div >

        </div>
    );
};

export default Curses;