import React, { useState } from 'react';
import img from "../../../images/Rectanglet71.png"
import addition from "../../../images/Group 1.png"
import sub from "../../../images/Vector 1.png"
import deleteIcon from "../../../images/Group.png"
import cart from "../../../images/Vector (3).png"
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});





const Sevices = () => {
    const [amount, setAmount] = useState(2)
    const { items } = usePagination({
        count: 10,
    });

    return (
        <div>
            <Navbar/>
            <div className='container-fluid container-md'>
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
                                                        <h4 className='spiritText'>Spiritual Consultation</h4>
                                                        <div className='amount'>
                                                            <p className='mb-2'>Hour</p>
                                                            <p className='serviceCardText mb-0'><img src={addition} alt="" className='addition'
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    setAmount(Number(amount) + 1)
                                                                }} /> <span>{amount}</span> <img src={sub} alt="" className='Subtraction' onClick={(e) => {
                                                                    e.preventDefault()
                                                                    if (amount != 1) {
                                                                        setAmount(Number(amount) - 1)
                                                                    }
                                                                }} /></p>
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




                                    </div>

                                </div>
                            )
                        })
                    }


                </div >
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

            </div>

            <Footer/>
        </div>
    );
};

export default Sevices;