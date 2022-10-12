import React from 'react';
import "../Resources/footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {

    const Divider=<div className='dividerFooter'></div>
    return (
        <div>
            <div className='newsletter'>
                <h2>Subscribe to our newsletter</h2>
                <div className='mt-4 ' style={{ marginBottom: "80px" }}>
                    <input type="email" placeholder='Enter your email address' name="" id="" className='newsletterInput' />
                    <button className='subscribebtn'>Subscribe</button>
                </div>

            </div>
            {Divider}
         
            <MDBFooter bgColor='' className='text-center text-lg-start text-white'>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5 footerContainer'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h2 className='text-uppercase fw-bold mb-4'>
                                    
                                    LOGO
                                </h2>
                                <p>
                                    mvm@gmail.com
                                </p>
                                <p>
                                    +880 1784453204
                                </p>
                                <div style={{display:"flex ", alignItems:"center", width:"fit-content"}} className="socialIcons  text-md-start">
                                    <p style={{fontSize:"1.5em"}}><RiFacebookCircleLine/></p>
                                    <p><GrTwitter/></p>
                                    <p><AiOutlineInstagram/></p>
                                    <p><ImLinkedin/></p>
                                </div>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Products
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Courses
                                    </a>
                                </p>
                               
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
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
                               
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Supported payment systems</h6>
                                <div className='d-flex justify-content-start align-items-center gap-3'>
                                    <img src="images/footer/Vector (3).png" alt="" />
                                    <p className='mb-0'>VISA</p>
                                    <p className='mb-0'>stripe</p>
                                    <img src="images/footer/Frame 38183.png" alt="" />
                                </div>
                               
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                {Divider}

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                   Copyright ©2022 Mystique vedic miracles. All Rights Reserved.   
                </div>
            </MDBFooter>
        </div>
    );
};

export default Footer;