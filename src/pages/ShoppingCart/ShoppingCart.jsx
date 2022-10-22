
import React, { useState } from 'react';
import img from "../../images/Rectanglet71.png"
import addition from "../../images/Group 1.png"
import sub from "../../images/Vector 1.png"
import deleteIcon from "../../images/Group.png"
import cart from "../../images/Vector (3).png"
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./shoppingCart.css"

const ShoppingCart = () => {
    const [amount, setAmount]=useState(2)
    
    return (
        <div>
            <Navbar/>
            <div className='container-fluid container-md shoppingSection'>

            <h2 className='my-4 text-start'>Shopping Cart</h2>

           

                {/* product cart  */}

                <section>
                    <h4 className='my-3 text-start'>products Cart</h4>


                {
                    [...Array(2)].map(d => {
                        return (
                            <div className='mb-4'>
                                <div className='serviceSection '>
                                    <div className='d-flex justify-content-between serviceCardDiv '>
                                        <div className='d-flex justify-content-start serviceCard'>
                                            <div className='imgDivCourse'>
                                                <img src={img} alt="course" className='courseImg' />
                                            </div>
                                            <div>
                                                <div className='text-start ms-2 ms-md-2 ms-lg-3 shoppingTextDiv '>
                                                    <h4 className='cartHeadingText'>Pure Botanical</h4>
                                                    <div className='amount'>
                                                        <p className='mb-2'>Quantity</p>
                                                        <p className='serviceCardText mb-0'><img src={addition} alt="" className='addition' 
                                                        onClick={(e)=>{
                                                            e.preventDefault()
                                                            setAmount(Number(amount)+1)
                                                        }} /> <span>{amount}</span> <img src={sub} alt="" className='Subtraction' onClick={(e)=>{
                                                            e.preventDefault()
                                                            if(amount!=1){
                                                                setAmount(Number(amount)-1)
                                                            }
                                                        }} /></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div>
                                            <div className='text-start ms-2 ms-md-2 ms-lg-3 shoppingpricDiv '>
                                                <div>
                                                <h5 className='fw-bold priceTextShopping'>  $ <span>{amount*30}</span>/hr</h5>
                                                <p className='productId'>#4847475457</p>
                                                </div>
                                                
                                                <div className='amount btnForBig'>
                                                   
                                                    {/* <button className='cartBtn'><img src={cart} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px"}}  /> Add to cart</button> */}
                                                    <button className='mb-0 text-end removeBtnCart' style={{ cursor: "pointer" }}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</button>
                                                </div>


                                                    <div className='mb-0  gap-4 text-start' id='btnForSmall'> 
                                                    {/* <button className='cartBtn'><img src={cart} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px"}}  /> Add to cart</button> */}
                                                    <button className='mb-0 text-end removeBtnCart' style={{ cursor: "pointer" }}> <img src={deleteIcon} alt="" style={{ height: "1.2em", marginBottom: "5px", marginRight: "3px", }} /> Remove</button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        )
                    })
                }

                </section>

               

                <Footer/>


            </div >

        </div >
    );
};

export default ShoppingCart;