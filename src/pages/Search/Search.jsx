import { Pagination, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "../AllCourses/allCourses.css" 
import { createBrowserHistory } from '@remix-run/router';
import { useHref, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import courseImg from "../../images/signup/Rectangle 85.png"
import courseImg2 from "../../images/signup/Rectangle 83.png"
import courseImg3 from "../../images/signup/Rectangle 84.png"
import likeIcon from "../../images/course/Vector (1).svg" 
import courseImg4 from "../../images/course/Rectangle 19 (1).png" 


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 769 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    miniTablet: {
        breakpoint: { max: 768, min: 577 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const data =
    [
        {
            "id": 1,
            "name": "product 1",
            "price": 500,
            "image": courseImg,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "5k"
        },
        {
            "id": 2,
            "name": "product 2",
            "price": 400,
            "image": courseImg2,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 3,
            "name": "product 3",
            "price": 400,
            "image": courseImg3,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },

        {
            "id": 4,
            "name": "product 4",
            "price": 400,
            "image": courseImg,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 5,
            "name": "product 5",
            "price": 400,
            "image": courseImg2,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "7k"
        },
        {
            "id": 6,
            "name": "product 6",
            "price": 900,
            "image": courseImg3,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 7,
            "name": "product 7",
            "price": 400,
            "image": courseImg,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },
        {
            "id": 8,
            "name": "product 8",
            "price": 900,
            "image": courseImg2,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        },
        {
            "id": 9,
            "name": "product 9",
            "price": 300,
            "image": courseImg3,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "5k"
        },
        {
            "id": 10,
            "name": "product 10",
            "price": 400,
            "image": courseImg,
            "paidStatus": "paid",
            "averageReview": 5,
            "reviews": "3k"
        },

        {
            "id": 11,
            "name": "product 11",
            "price": 400,
            "image": courseImg2,
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "3k"
        },
        { 
            "id": 12,
            "name": "product 12",
            "price": 400,
            "image": courseImg3, 
            "paidStatus": "paid",
            "averageReview": 4.5,
            "reviews": "6k"
        }
    ]

const Search = () => {
    const [page, setPage] = React.useState(1);
    const history = createBrowserHistory();
    const [courses, setCourses] = useState([])
    const navigate = useNavigate()
    const {text}=useParams()

    useEffect(() => {
       
        const result=data.filter(a=>a.name.includes(text))
        setCourses(result)
        console.log(result);

    }, [text]) 
   


    const handleChange = (event, value) => {
        setPage(value);
    };


    const fullCourse = (id) => {
        // navigate(`/full-course/${id}`)
        window.location.href=`/full-course/${id}`
        
    }
    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className='allCoursesBody'>


                {/* all courses  */}
                <div>
                    <h2 className='text-start'>Search results</h2>
                    <p className='text-start'>Results for {text}</p>  
                   {
                    courses.length>0 ?
                    <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                        {
                            courses?.map(d => {
                                return (
                                    <div className='col px-3 py-4 courseCard scaleDiv' onClick={() => fullCourse(d.id)}>
                                        <img src={d.image} alt="" className='w-100 productCol forScale' />
                                        <div className='coursePrice'>
                                            <div className='d-flex justify-content-between'>
                                                <p>{d.paidStatus}</p>
                                                <h5>{d.price}</h5>
                                            </div>
                                            <h3 className='text-start mb-0'>{d.name}</h3>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <Rating name="half-rating" defaultValue={d.averageReview} precision={0.5} className='rating' />
                                                <p className='mb-1 ms-2'>{d.reviews}</p>
                                            </div>
                                        </div>
                                        <img src={likeIcon} alt="" className='likeIcon' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <h4 style={{marginTop:"100px"}}> 
                    No result found
                </h4>
                   }

                    {/* pagination  */}

                    {/* <div className='paginationDiv'>
                        <Stack spacing={2} className="paginationStack">
                           
                            <Pagination count={10} page={page} onChange={handleChange} className="paginationText" />
                        </Stack>
                    </div> */}

                    {/* top courses  */}
                   


                </div>
                {/*  end of all courses  */}
            </div>


            <div className="container-fluid container-md">
            <Footer />
            </div>
        </div>
    );
};

export default Search;