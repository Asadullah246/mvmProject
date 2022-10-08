import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar';
import "./PreviousOrder.css"
import cardImg from "../../../images/Rectanglet71.png"
import Button2 from '../../../Components/Button2';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import RedButton from '../../../Components/RedButton';


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



const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

const PreviousOrder = () => {

    const { height, width } = useWindowDimensions()

    const { items } = usePagination({
        count: 10,
    });

    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className='container-fluid container-md'>
                <div className='headingOrderDiv'>
                    <h1 style={{}}>Previous order</h1>
                    <div className='d-flex justify-content-end align-items-center'>
                        <p className='mb-0 me-3'>Sort by</p>
                        <select name="country" id="inputTag" className='orderSorting' placeholder='Select country'

                        > <option value="Completed"  >Completed</option>
                            <option value="Cancel">Cancel</option>

                        </select>

                    </div>

                </div>

                {/* orders  */}

                <div className='orders'>

                    {
                        [...Array(6)].map((d, index) => {
                            return (
                                <div className='mb-3 '>
                                    {/* d-flex align-items-start justify-content-between  */}
                                    <div className='serviceSection '>
                                        <div className='d-flex justify-content-between align-items-center serviceCardDiv '>
                                            <div className='d-flex justify-content-start align-items-center serviceCard'>
                                                <div className='imgDivCourse'>
                                                    <img src={cardImg} alt="product" className='productImg' />
                                                </div>
                                                <div>
                                                    <div className='text-start ms-2 ms-md-2 ms-lg-3  '>

                                                        <h5 className='mb-2 mb-md-3 orderId'><span style={{ fontWeight: "600" }}>Order ID</span> : #454600005</h5>
                                                        {
                                                            (index % 2 == 0) ?
                                                                <>

                                                                    {
                                                                        width > 576 ?
                                                                            <>
                                                                                <button className='completedBtn'>Completed</button>

                                                                            </>
                                                                            :
                                                                            <div > 
                                                                                <button className='completedBtn'>Completed</button>
                                                                                <Button2 name="View more" />
                                                                            </div>

                                                                    }
                                                                </>
                                                                :

                                                                width > 576 ?
                                                                    <RedButton name="Cancel" />
                                                                    :
                                                                    <>
                                                                       <div className='orderBtns'>
                                                                       <RedButton name="Cancel" />
                                                                        <Button2 name="View more" />
                                                                       </div>
                                                                    </>


                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                            {width > 576 ?
                                                <div>

                                                    <Button2 name="View more" />
                                                </div>
                                                : ""
                                            }

                                        </div>


                                    </div>
                                    {/* <div className='productDivider'></div> */}

                                </div>

                            )
                        })
                    }

                </div>

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
        </div>
    );
};

export default PreviousOrder;