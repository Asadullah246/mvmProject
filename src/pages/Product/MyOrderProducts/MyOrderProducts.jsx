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
import { styled } from '@mui/material';
import usePagination from '@mui/material/usePagination';
import Footer from '../../../Components/Footer';



const ButtonGray = (props) => {
    return (
        <button style={{ padding: "5px 30px ", border: "none", borderRadius: "8px", backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white" }}> <img src={props.img} alt="" className='me-2' />{props.name}</button>
    );
};

const MyOrderProducts = () => {
    const ServiceDivider = <div className='serviceDivider'></div>
    const List = styled('ul')({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    });
    const { items } = usePagination({
        count: 10,
    });
    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className="container-fluid container-md">
                <h1 className='bodyHeading'>Upcoming services</h1>

                <section className='mb-4'>
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
                                    <p style={{ fontWeight: "0.8em" }}>Service will start:</p>
                                    <div className='amount d-flex justify-content-between'>
                                        <h3 className='mb-0'>02 : 03 : 33</h3>
                                        <div className='upcomingBtns'>
                                            <ButtonGray img={callIcon} name="Audio call" />
                                            <ButtonGray img={videoIcon} name="Video call" />
                                            <ButtonGray img={msgIcon} name="Message" />

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </section>

                <section className="row orderInfoService">
                    <div className="col col-12 col-lg-6">
                        <h4 className='text-start shippingDetailsHeading'>Personal info</h4>
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
                                <p className='mb-0 infoTitle'>Email</p>
                                <p className='mb-0'>rbrajumullah100@gmail.com</p>
                            </div>




                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <h4 className='text-start shippingDetailsHeading mt-5 mt-lg-0'>Order information</h4>
                        <div className='infoDetails'>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Order Number</p>
                                <p className='mb-0'>893475837458</p>
                            </div>
                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>order creation</p>
                                <p className='mb-0'>+15 Aug 2022  10:00 AM</p>
                            </div>

                            {ServiceDivider}
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 infoTitle'>Total hour</p>
                                <p className='mb-0'> 1 hour</p>
                            </div>


                        </div>
                    </div>

                </section>

                {/* previous orders  */}

                <section className='previousOrderService'>
                    <h2 className='bodyHeading'>previous order</h2>
                    {
                        [...Array(4)].map(o => {
                            return (
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


                                                    </div>
                                                    <p style={{ fontWeight: "0.8em" }}>Service will start:</p>
                                                    <div className='amount d-flex justify-content-end gap-md-2 gap-lg-3'>
                                                        <ButtonGray img={callIcon} name="Audio call" />
                                                        <ButtonGray img={videoIcon} name="Video call" />
                                                        <ButtonGray img={msgIcon} name="Message" />

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

                {/* pagination  */}

                <nav className='paginationDiv'>
                    <List>
                        {items.map(({ page, type, selected, ...item }, index) => {
                            let children = null;

                            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                children = '…';
                            }
                            else if (type === 'page') {
                                children = (
                                    <button
                                        type="button"
                                        style={{
                                            fontWeight: selected ? 'bold' : undefined,
                                            color: selected ? "#EF3054" : "white",
                                            border: "none", backgroundColor: "transparent",

                                        }}
                                        {...item}
                                    >
                                        {page}
                                    </button>
                                );
                            } else {
                                children = (
                                    <button type="button" style={{ border: "none", backgroundColor: "transparent", color: "white" }}  {...item}>
                                        {type}
                                    </button>
                                );
                            }

                            return <li key={index}>{children}</li>;
                        })}
                    </List>
                </nav>

                {/* footer  */}

                <Footer/> 

            </div>
        </div>
    );
};

export default MyOrderProducts;