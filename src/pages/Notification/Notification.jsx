import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import "./Notification.css"
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});


const Notification = () => {

    const { items } = usePagination({
        count: 10,
    });
    
    return (
        <div>
            <Navbar />
            {/* body  */}
            <div className="container-fluid container-md">
                <h1 style={{ textAlign: "left", marginTop: "150px", marginBottom:"20px" }}>Notifications</h1>

                    <div className='notifications'>
                        {
                            [...Array(6)].map(m => {
                                return (
                                    <div className='singleNotification' >
                                        <div className='text-start'>
                                            <h5 className='mb-2'>Notification headline</h5>
                                            <small className='ms-2 ' style={{ color: "#AC9DA3" }}>03 April, 2022</small>
                                            <p className='mb-0 mt-3'>Cras ultrices, odio ut consectetur aliquam, libero dui commodo turpis, quis tempor augue nisl et arcu. Donec accumsan faucibus nisl, nec malesuada massa faucibus nec. Phasellus vel lobortis neque, vel tincidunt mi.</p>

                                        </div>

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

            <Footer />
        </div>
    );
};

export default Notification;