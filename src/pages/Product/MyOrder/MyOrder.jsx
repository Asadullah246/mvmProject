import React, { useEffect, useState } from 'react';
import "./MyOrder.css"
import Navbar from "../../../Components/Navbar"
import activeStatusPic from "../../../images/products/orderStatus.svg"
import inactiveStatus from "../../../images/products/inactiveStatus.svg"
import completeStatus from "../../../images/products/completeStatus.svg"
import cardImg from "../../../images/Rectanglet71.png"
import Button from '../../../Components/Button';
import locationImg from "../../../images/products/location.svg"
import msgImg from "../../../images/products/bx_message.svg"
import callImg from "../../../images/products/Button.svg"
import Footer from '../../../Components/Footer';

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
  
  

  

const MyOrder = () => {
    const ServiceDivider = <div className='serviceDivider'></div>
    const { height, width } = useWindowDimensions()

    return (
        <div>
            <Navbar />
            {/* body  */}

            <div className='container-fluid container-md'>
                <h1 className='text-start orderHeading'>My order</h1>

                {/* shipping status  */}

                <div className='statusSection w-100'>
                    <div className='statusDiv'>
                        <img src={activeStatusPic} alt="" />
                        <p>Ready to shipped</p>
                    </div>
                    <div className='orderDivider'></div>
                    <div className='statusDiv'>
                        <img src={inactiveStatus} alt="" />
                        <p>In transit</p>
                    </div>
                    <div className='orderDivider2'></div>
                    <div className='statusDiv'>
                        <img src={completeStatus} alt="" />
                        <p>Complete Delivery</p>
                    </div>


                </div>

                {/* ordered item  */}
                <h4 className='orderedItemText'>Ordered items</h4>

                <div className='orderedItems'>
                    {
                        [...Array(2)].map(d => {
                            return (
                                <div className='mb-3 mb-lg-0'>
                                    {/* d-flex align-items-start justify-content-between  */}
                                    <div className='serviceSection '>
                                        <div className='d-flex justify-content-start serviceCardDiv '>
                                            <div className='d-flex justify-content-start serviceCard'>
                                                <div className='imgDivCourse'>
                                                    <img src={cardImg} alt="product" className='productImg' />
                                                </div>
                                                <div>
                                                    <div className='text-start ms-2 ms-md-2 ms-lg-3  '>
                                                        <h4 className='spiritText mb-2  mb-md-3'>Pure Botanical</h4>
                                                        <p className='mb-2 mb-md-3 productId'>#454600005</p>
                                                        <p className='mb-2 mb-md-3'>Total items : 2</p>
                                                        <h4>$499.99</h4>
                                                       
                                                    </div>
                                                </div>


                                            </div>

                                        </div>


                                    </div>
                                    <div className='productDivider'></div>

                                </div>

                            )
                        })
                    }

                </div>

                {/* shipping details  */}
                <div className="row orderDetailsRow">
                    <div className="col col-12 col-lg-6">
                        <h4 className='text-start shippingDetailsHeading'>Shipping Info</h4>
                        <div className='infoDetails'>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Contact name</p>
                                <p className='mb-0'>Raju Ahmed</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Contact number</p>
                                <p className='mb-0'>+8801784453204</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Ship to</p>
                                <p className='mb-0'>45201 Owen Street. Belleville MT 48111, USA</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Method</p>
                                <p className='mb-0'>Upto 2 kg</p>
                            </div>


                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <h4 className='text-start shippingDetailsHeading mt-5 mt-lg-0'>Shipping Info</h4>
                        <div className='infoDetails'>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Tracking Number</p>
                                <p className='mb-0'>485875893475837458</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>order creation</p>
                                <p className='mb-0'>+15 Aug 2022  10:00 AM</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Estimate time</p>
                                <p className='mb-0'>20 Aug - 25 Aug 2022</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Total Cost</p>
                                <p className='mb-0'> <span>$2382.00</span></p>
                            </div>


                        </div>
                    </div>
                    
                </div>

               {width>576 ?
                <div className=' orderButtons'>
                <Button name="Cancel order"  style={{color:"white",backgroundColor:"transparent", padding:"13px 30px",border:"1px solid white", borderRadius:"8px"}} />
                <Button name="Track order" img={locationImg} style={{color:"white",backgroundColor:"#EF3054", padding:"13px 30px", borderRadius:"8px"}} />
                <Button name="Message" img={msgImg} style={{color:"white",backgroundColor:"#EF3054", padding:"13px 30px", borderRadius:"8px"}} />
            </div>
            :
            <div className='smallDisplayButtons'>
                <button className='trackBtn'><img src={locationImg} alt=""  /> Track order</button>
                <button className='msgBtn'><img src={msgImg} alt=""  /></button>
                <button className='orderBtn'><img src={callImg} alt=""  /> </button>
            </div>
            }


            </div>
            <Footer/>
        </div>
    );
};

export default MyOrder;