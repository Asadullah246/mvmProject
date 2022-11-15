import React from 'react';
import "../Resources/footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import logo1 from "../images/footer/Vector (3).png"
import logo2 from "../images/footer/Frame 38183.png" 

const Footer = () => {

    const Divider=<div className='dividerFooter'></div>
    return (
        <footer > 
            {/* <div id='stars'></div>  */}
            <div className='newsletter'>
                <h2>Subscribe to our newsletter</h2>
                <div className='mt-4 ' style={{ marginBottom: "80px" }}>
                    <input type="email" placeholder='Enter your email address' name="" id="" className='newsletterInput' />
                    <button className='subscribebtn'>Subscribe</button> 
                </div>

            </div>
            {Divider}
         
            <div className='text-start text-white'>
                <section className='footerDiv'>
                    <div className='container-fluid mt-5  footerContainer'>
                        <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 mt-3'>
                            <div className='col mx-auto mb-4'>
                                <h2 className='text-uppercase fw-bold mb-4'>
                                    
                                    LOGO
                                </h2>
                                <p>
                                    mvm@gmail.com
                                </p>
                                <p>
                                    +880 1784453204
                                </p>
                                <div style={{display:"flex ", alignItems:"left", width:"fit-content"}} className="socialIcons  text-start">
                                    <p style={{fontSize:"1.5em"}}><RiFacebookCircleLine/></p>
                                    <p><GrTwitter/></p>
                                    <p><AiOutlineInstagram/></p>
                                    <p><ImLinkedin/></p>
                                </div>
                            </div>

                            <div className='col mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 mt-2 mt-lg-0'>Quick Links</h6>
                                <p>
                                    <a href='all-product' className='text-reset'>
                                        Products
                                    </a>
                                </p>
                                <p>
                                    <a href='services' className='text-reset'>
                                        Services
                                    </a>
                                </p>
                                <p>
                                    <a href='all-courses' className='text-reset'>
                                        Courses
                                    </a>
                                </p>
                               
                            </div>

                            <div
                            //  md="3" lg="2" xl="2"
                              className='col mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Private policy
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Terms and conditions
                                    </a>
                                </p>
                               
                            </div>

                            <div className='col mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Supported payment systems</h6>
                                <div className='d-flex justify-content-start align-items-center flex-wrap gap-2 gap-md-3'>
                                    <img src={logo1} alt="" />
                                    <p className='mb-0'>VISA</p>
                                    <p className='mb-0'>stripe</p>
                                    <img src={logo2} alt="" />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
                {Divider}

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                   Copyright ©2022 Mystique vedic miracles. All Rights Reserved.   
                </div>
            </div>
        </footer>
    );
};

export default Footer;