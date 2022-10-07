import React from 'react';
import Navbar from '../../../Components/Navbar';
import callIcon from "../../../images/products/callIcon.svg"
import dotIcon from "../../../images/products/threeDot.svg"
import gallaryIcon from "../../../images/products/gallaryIcon.svg"
import gifIcon from "../../../images/products/gificon.svg"
import imojiIcon from "../../../images/products/imojiIcon.svg"
import sendingIcon from "../../../images/products/sendingIcon.svg"
import "./Message.css"
import Footer from '../../../Components/Footer';

const Message = () => {
    return (
        <div>
            <Navbar />

            {/* body  */}
            <div className="container-fluid container-md">
                <h1 style={{ textAlign: "left", marginTop: "60px" }}>Message</h1>

                <div className='messages'>
                    <div className='d-flex justify-content-between align-items-center messageProfile' >
                        <div className='d-flex justify-content-start align-items-center '>
                            <img src="images/community/Ellipse 19.png" alt="" className='profileImage' />
                            <div className='text-start'>
                                <h5 className='mb-0'>Smir A</h5>
                                <p className='mb-0 ' style={{ color: "#AC9DA3" }}>Last seen: June 13, 10:37 PM</p>
                            </div>
                        </div>
                        <div className='msgIcons'>
                           <img src={callIcon} alt="" className='callIcon'/>
                           <img src={dotIcon} alt="" className='dotIcon'/>

                        </div>
                    </div>

                    {/* more messages  */}
                    <p style={{margin:"20px auto"}}>25 july 2022</p>

                    <div className='moreMsg'>
                        {
                            [...Array(6)].map(m=>{
                                return(
                                    <div className='singleMsg' >
                                    <div className='d-flex justify-content-start align-items-start '>
                                        <img src="images/community/Ellipse 19.png" alt="" className='profileImage' />
                                        <div className='text-start'>
                                            <h5 className='mb-2'>Smir A <small className='ms-2 font ' style={{ color: "#AC9DA3" }}>Last seen: June 13, 10:37 PM</small></h5>
                                            <p className='mb-0'>Ut porttitor sed mauris id dignissim. Duis ante sem, iaculis et ex vel, fringilla mattis nisl.</p>
        
                                        </div>
                                    </div>
        
                                </div>

                                )
                            })
                        }
                       

                    </div>

                    <div className='d-flex justify-content-between align-items-center messageSending' >
                        <img src={gallaryIcon} style={{cursor:"pointer"}} alt="" />
                        <img src={gifIcon} style={{cursor:"pointer"}} alt="" />
                        <div className='inputField'>
                            <img src={imojiIcon} alt="" className='imoji'  />
                            <img src={sendingIcon} alt="" className='sendingMsg' />
                            <input type="text" name="" id=""  placeholder='Type here' />

                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Message;