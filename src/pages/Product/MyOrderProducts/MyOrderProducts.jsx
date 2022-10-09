import React from 'react';
import Navbar from '../../../Components/Navbar';
import "./MyOrderProducts.css"
import img from "../../../images/Rectanglet71.png"
import dateIcon from "../../../images/products/date.svg"
import watchIcon from "../../../images/products/watch.svg"
import alarmIcon from "../../../images/products/alarm.svg"
import callIcon from "../../../images/products/callIcon.svg"
import msgIcon from "../../../images/products/bx_message.svg"
import videoIcon from "../../../images/products/video.svg"



const ButtonGray = (props) => {
    return (
        <button style={{padding:"13px 30px ", border:"1px solid white ", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0.1)",color:"white"}}> <img src={props.img} alt="" className='me-2' />{props.name}</button>
    );
};

const MyOrderProducts = () => {
    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className="container-fluid container-md">
                <h1 className='bodyHeading'>Upcoming services</h1>

                <div className='mb-4'>
                    <div className='serviceSection '>

                        <div className='d-flex justify-content-start serviceCard'>
                            <div className='imgDivCourse '>
                                <img src={img} alt="course" className='courseImg' />
                            </div>
                            <div className='w-100'>
                                <div className='text-start ms-2 ms-md-2 ms-lg-3  '>

                                    <h4>Spiritual Consultation</h4>
                                    <div className='serviceOptions my-3'>
                                            <div className='d-flex'>
                                                <img src={dateIcon} alt="" />
                                                <p className='mb-0 ms-2'>25 Augest 2022</p>
                                            </div>
                                            <div className='d-flex'>
                                                <img src={watchIcon} alt="" />
                                                <p className='mb-0 ms-2'>10:00 AM - 11:00 AM</p>
                                            </div>
                                            <div className='d-flex'>
                                                <img src={alarmIcon} alt="" />
                                                <p className='mb-0 ms-2'>Add to reminder</p>
                                            </div>

                                        </div>
                                    <p style={{fontWeight:"0.8em"}}>Service will start:</p>
                                    <div className='amount d-flex justify-content-between'>
                                        <h3>02 : 03 : 33</h3>
                                       {/* <div className='upcomingBtns'>
                                        <ButtonGray img={callIcon} name="Audio call"/>
                                        <ButtonGray img={videoIcon} name="Video call"/>
                                        <ButtonGray img={msgIcon} name="Message"/>
                                        
                                       </div> */}

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyOrderProducts;