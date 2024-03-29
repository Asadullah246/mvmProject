import React, { useContext, useState } from 'react';
import img from "../../images/Rectanglet71.png"
import deleteIcon from "../../images/Group.png"
import cart from "../../images/Vector (3).png"
import { Rating } from '@mui/material';
import dotIcon from "../../images/Ellipse.svg"
import AddToCart from '../../Components/AddToCart';
import { MyContext } from '../../App';

const Curses = () => {
    const [amount, setAmount] = useState(2)
    const [data, setData]=useState(3)
    const [courseShowMore, setCourseShowMore] = useState(true)
    const [selectedBtn, setSelectedBtn] = useState()
    const [added, setAdded] = useState(false)
    const [refresh, setRefresh] = useContext(MyContext)

    const seeMore = (id) => {
        setCourseShowMore(!courseShowMore)
        setSelectedBtn(id)
    }

    const addToCart =()=>{
        AddToCart(Math.floor(Math.random() * 1000), "productmvmCart") 
        const newData=Number(data)-1
        setData(newData)
        
        setRefresh(!refresh)
    }
    const remove =()=>{
        const newData=Number(data)-1
        setData(newData)
        console.log(newData); 
        
    }

    return (
        <div>
            <div className='serviceDiv'>

                {
                    [...Array(data)].map((d, index) => { 
                        return (
                            <div className='mb-4'>
                                {/* d-flex align-items-start justify-content-between  */}
                                <div className='serviceSection '>
                                    <div className='d-flex justify-content-between serviceCardDiv '>
                                        <div className='d-flex justify-content-start serviceCard'>
                                            <div className='imgDivCourse'>
                                                <img src={img} alt="course" className='courseImg' />
                                            </div>
                                            <div className='courseTextDiv'>
                                                <div className='text-start ms-2 ms-md-2 ms-lg-3 serviceTextDiv '>
                                                    <h4 className='spiritText'>Learn  how to spiritual</h4>
                                                    <div className='amount'>
                                                        <p className='mb-2'></p>

                                                        {
                                                            (!courseShowMore && (selectedBtn == index)) ?
                                                                <>
                                                                    <p className='serviceDesc mb-0'>You will master the Python programming language by building 100 unique projects over.. You will master the Python programming language by building 100 unique projects over. You will master the Python programming language by building 100 unique projects over.
                                                                   
                                                                    </p>
                                                                    <button className='seeMoreBtnForPTag' onClick={() => seeMore(index)}>See less</button>

                                                                </>
                                                                :
                                                                <>


                                                                    <p className='serviceDesc2 mb-0'>You will master the Python  programming language by building 100 unique projects over.. You will master the Python programming language by building 100 unique projects over. You will master the Python programming language by building 100 unique projects over.</p>
                                                                    <button className='seeMoreBtnForPTag' onClick={() => seeMore(index)}>See more</button>
                                                                </>

                                                        }


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
                                                <h5 className='fw-bold priceDivService text-nowrap'> <span   className='priceTextService'>Price : </span> $ <span>{amount * 30}</span>/hr</h5>
                                                <div className='amount btnForBig'>
                                                    <p className='mb-4 text-end ' style={{ cursor: "pointer" }} onClick={remove}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</p> 

                                                    
                                                    <button className='cartBtn' onClick={addToCart}><img src={cart} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px" }} /> Add to cart</button>
                                                </div>


                                                <div className='  gap-4 text-start' id='btnForSmall' onClick={remove}> <p className='mb-0 text-end ' style={{ cursor: "pointer" }}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</p>

                                                
                                                    <button className='cartBtn' onClick={addToCart}> <img src={cart} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px" }} /> Add to cart</button></div>
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