import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import "./community.css"
import communityImg from "../../images/community/Ellipse 19.png"
import logo1 from "../../images/community/Vector (1).svg"
import logo2 from "../../images/community/Vector (2).svg"
import logo3 from "../../images/community/Vector (3).svg"
import logo4 from "../../images/community/Ellipse 19.png"
import bigImg from "../../images/community/Rectangle 1004.png"

const Community = () => {
    return (
        <div>
            <Navbar />
            {/* body  */}
            <div className='communityBody ' style={{marginTop:"150px"}}> 
                <h1 className=' text-start'>MVM Community</h1>
                <div className='comBody'>
                    {/* left side  */}

                    <div className='bodyContent'>
                        {/* profile pic and liked  */}
                        <div className='w-100 d-flex justify-content-between align-items-center mb-4 profileCommunity'>
                            <div className='d-flex justify-content-start align-items-center'>
                                <img src={communityImg} alt="" className='profileImage'  />
                                <div className='text-start'>
                                    <h5 className='mb-0'>Smir A</h5>
                                    <p className='mb-0'>via mobile</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div className='d-flex justify-content-start align-items-center me-3'>
                                    <img src={logo1} alt="dfdf" />
                                    <p className='mb-0 msgText'>15</p>
                                </div>
                                <div className='d-flex justify-content-start align-items-center me-3'>
                                    <img src={logo2} alt="df" />
                                    <p className='mb-0 msgText'>15</p>
                                </div>
                                <div className='d-flex justify-content-start align-items-center me-3'>
                                    <img src={logo3} alt="df" />
                                    <p className='mb-0 msgText'>15</p>
                                </div>

                            </div>

                        </div>
                        {/* end of profile pic and liked  */}

                        {/* image  */}
                        <div className='bigImageCommunity'>
                        <img src={bigImg} alt="" className='w-100 h-auto communityImg' />
                        </div>

                        {/* caption  */}
                        <p className='captionCommunity text-start'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration... See more</p>

                        <p style={{ marginBottom: '104px', textAlign: "left" }}>View 10 comment</p>

                        {/* comments  */}
                        {
                            [...Array(3)].map(c => {
                                return (
                                    <div style={{ marginBottom: "60px" }}>
                                        <div className='w-100 d-flex justify-content-between align-items-center mb-4 profileCommunity'>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img src={logo4} alt="" className='profileImage' />
                                                <div className='text-start'>
                                                    <h5 className='mb-0'>Smir A</h5>
                                                    <p className='mb-0'>via mobile</p>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <div className='d-flex justify-content-start align-items-center me-3'>
                                                    <img src={logo1} alt="" />
                                                    <p className='mb-0  msgText'>15</p>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center me-3'>
                                                    <img src={logo2} alt="" />
                                                    <p className='mb-0  msgText'>15</p>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center me-3'>
                                                    <img src={logo3} alt="" />
                                                    <p className='mb-0  msgText'>15</p>
                                                </div>

                                            </div>

                                        </div>
                                        <p className='text-start'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        <p className='text-start'>View 10 comment</p>

                                    </div>
                                )
                            })
                        }

                        <button className='seeMoreBtn'>See more</button>


                    </div>

                    {/* right side  */}

                    <div className='postsCommunity'>
                        <h3 className='text-start mb-4'>Activity</h3>
                        {
                            [...Array(12)].map(a => {
                                return (
                                    <div>
                                        <div className='w-100 d-flex justify-content-between align-items-end mb-4 profileCommunity'>
                                            <div className='d-flex justify-content-start align-items-start'>
                                                <img src={logo4} alt="" style={{ width: "3em", marginRight: "13px" }} />
                                                <div className='text-start'>
                                                    <p className='mb-0'> <span>Smir A</span>commented healthly snack and so inspired.</p>
                                                    <p className='mb-0'>1 days ago</p>
                                                    <button className='viewPostBtn'>View post</button>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-start align-items-center me-4'>
                                                <img src={logo1} alt="" />
                                                <p className='mb-0 ms-1'>15</p>
                                            </div>
                                           

                                        </div>

                                    </div>
                                )
                            })
                        }
                         <button className='seeMoreBtn mt-5'>See more</button> 


                    </div>

                    {/* end of right side  */}

                </div>

            </div>

            <Footer/>
        </div>
    );
};

export default Community;