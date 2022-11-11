import { Pagination, Rating, Stack } from '@mui/material';
import { createBrowserHistory } from '@remix-run/router';
// import { Stack } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import courseImg from "../../../images/course/Rectangle 19 (1).png"
import logo1 from "../../../images/course/Vector (1).svg"

const MyOrderCourses = () => {

    const [page, setPage] = React.useState(1);
    const history = createBrowserHistory();
    const navigate = useNavigate()

    const handleChange = (event, value) => {
        setPage(value);
    };

    const fullCourse = () => {
        // navigate("/full-course") 
        history.push("/course-overview")
    }
    return (

        <div>
            <Navbar />


            <div className="container-fluid container-md" style={{marginTop:"150px"}}>
                <h2 className='text-start'>All Courses</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                    {
                        [...Array(8)].map(d => {
                            return (
                                <div className='col px-3 py-4 courseCard scaleDiv' onClick={fullCourse}>
                                    <img src={courseImg} alt="" className='w-100 productCol forScale' />
                                    <div className='coursePrice'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Paid</p>
                                            <h4>$500</h4>
                                        </div>
                                        <h3 className='text-start mb-0'>Course name</h3>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                            <p className=''>4.5k Reviews</p>
                                        </div>
                                    </div>
                                    {/* <img src={logo1} alt="" className='likeIcon' /> */}
                                </div>
                            )
                        })
                    }
                </div>


                {/* pagination  */}

                <div className='paginationDiv'>
                    <Stack spacing={2} className="paginationStack">
                        {/* <Typography>Page: {page}</Typography> */}
                        <Pagination count={10} page={page} onChange={handleChange} className="paginationText" />
                    </Stack>
                </div>


                <Footer />

            </div>






        </div>

    );
};

export default MyOrderCourses;