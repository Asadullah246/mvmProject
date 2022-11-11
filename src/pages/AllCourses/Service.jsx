import React, { useContext, useState } from 'react';
import img from "../../images/Rectanglet71.png"
import addition from "../../images/Group 1.png"
import sub from "../../images/Vector 1.png"
import deleteIcon from "../../images/Group.png"
import cart from "../../images/Vector (3).png"
import Navbar from '../../Components/Navbar';
import { MyContext } from '../../App';
import AddToCart from '../../Components/AddToCart';

const Service = () => {
    const [amount, setAmount]=useState(2)
    const [data, setData]=useState(3)
    const [courseShowMore, setCourseShowMore] = useState(true)
    const [selectedBtn, setSelectedBtn] = useState()
    const [added, setAdded] = useState(false)
    const [refresh, setRefresh] = useContext(MyContext)

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
            <Navbar/>
            <div className='container-fluid container-md serviceDiv'>

                {
                    [...Array(data)].map(d => {
                        return (
                            <div className='mb-4'>
                                <div className='serviceSection '>
                                    <div className='d-flex justify-content-between serviceCardDiv '>
                                        <div className='d-flex justify-content-start serviceCard'>
                                            <div className='imgDivCourse'>
                                                <img src={img} alt="course" className='courseImg' />
                                            </div>
                                            <div>
                                                <div className='text-start ms-2 ms-md-2 ms-lg-3 serviceTextDiv '>
                                                    <h4 className='spiritText'>Spiritual Consultation</h4>
                                                    <div className='amount'>
                                                        <p className='mb-2'>Hour</p>
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
                                            <div className=' ms-2 ms-md-2 ms-lg-3 serviceTextDiv '>
                                                <h5 className='fw-bold priceDivService'> <span className='priceTextService '>Price : </span>  <span>${amount*30}</span></h5>
                                                <div className='amount btnForBig'>
                                                    <p className='mb-4 text-end text-nowrap removebtnWishlist' style= {{cursor:"pointer"}}  onClick={remove}> <img src={deleteIcon} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px", }} /> <span>Remove</span></p>
                                                    <button className='cartBtn' onClick={addToCart}><img src={cart} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px"}}  /> Add to cart</button>
                                                </div>


                                                    <div className='  gap-4 text-start' id='btnForSmall' onClick={remove}> <p className='mb-0 text-end ' style={{cursor:"pointer"}}> <img src={deleteIcon} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px", }} /> Remove</p>
                                                    <button className='cartBtn' onClick={addToCart}><img src={cart} alt="" style={{height:"1.2em", marginBottom:"5px", marginRight:"3px"}}   /> Add to cart</button></div>
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

        </div >
    );
};

export default Service;