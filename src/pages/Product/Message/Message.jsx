import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar';
import callIcon from "../../../images/products/callIcon.svg"
import dotIcon from "../../../images/products/threeDot.svg"
import gallaryIcon from "../../../images/products/gallaryIcon.svg"
import gifIcon from "../../../images/products/gificon.svg"
import imojiIcon from "../../../images/products/imojiIcon.svg"
import sendingIcon from "../../../images/products/sendingIcon.svg"
import "./Message.css"
import Footer from '../../../Components/Footer';
import avatarPic from "../../../images/community/Ellipse 19.png"
import { useNavigate } from 'react-router-dom';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ChatBox from '../../ChatBox/ChatBox';
import logo2 from "../../../images/community/Vector (2).svg" 


const style = {
    position: 'absolute',
    bottom: '0%',
    right: '0%',
    // transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
};

const Message = () => {

    const navigate = useNavigate()
    const [img, setImg] = useState()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const imageUpload = () => {
        document.querySelector(".imgInput").click()
    }

    console.log(img);
    return (
        <div>
            <Navbar />

            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ChatBox setOpen={setOpen}></ChatBox> 
                    </Box>
                </Fade>
            </Modal>

            {/* body  */}
            <div className="container-fluid container-md messageSection ">
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <h1 style={{ textAlign: "left", marginBottom: "16px" }}>Messages</h1>

                <div className='messages'>
                    <div className='d-flex justify-content-between align-items-center messageProfile' >
                        <div className='d-flex justify-content-start align-items-center '>
                            <img src={avatarPic} alt="" className='profileImage me-2' />
                            <div className='text-start'>
                                <h5 className='mb-0'>Smir A</h5>
                                <p className='mb-0 ' style={{ color: "#AC9DA3" }}>Last seen: June 13, 10:37 PM</p>
                            </div>
                        </div>
                        <div className='msgIcons'>
                            <img src={callIcon} alt="" className='callIcon' onClick={() => navigate("/calling")} />
                            <img src={logo2} alt="" className='dotIcon' onClick={handleOpen} /> 

                        </div>
                    </div>

                    {/* more messages  */}
                    <p style={{ margin: "20px auto" }}>25 july 2022</p>

                    <div className='moreMsg'>
                        {
                            [...Array(6)].map(m => {
                                return (
                                    <div className='singleMsg' >
                                        <div className='d-flex justify-content-start align-items-start '>
                                            <img src={avatarPic} alt="" className='profileImage me-2' />
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

                    {
                        img && <img src={img} alt="" className='text-left my-2' style={{ height: "100px", width: "auto" }} />
                    }

                    <div className='d-flex justify-content-between align-items-center messageSending' >
                        <input type="file" className='imgInput' style={{ display: "none" }}
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                // setImg(event.target.files[0]); 
                                setImg(URL.createObjectURL(event.target.files[0]))
                            }}
                        />
                        <img src={gallaryIcon} style={{ cursor: "pointer" }} alt="" onClick={imageUpload} />
                        <img src={gifIcon} style={{ cursor: "pointer" }} alt="" />
                        <div className='inputField'>
                            <img src={imojiIcon} alt="" className='imoji' />
                            <img src={sendingIcon} alt="" className='sendingMsg' />
                            <input type="text" name="" id="" placeholder='Type here' />

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Message;