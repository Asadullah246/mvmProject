import React, { useState } from 'react';
import "./callingPage.css"
import callingImg from "../../images/products/download.jfif"
import { BsMicMute } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import callIcon from "../../images/products/callIcon.svg"
import msgicon from "../../images/products/bx_message.svg"

const CallingPage = () => {
    const [muteTest, setMuteTest]=useState(true)
    return (
        <div className='callingSection'>
            <div>
                <img src={callingImg} alt="" srcset="" className='callingImg' />
            </div >
            <div className='d-flex justify-content-center align-items-center collingBtns'>
                <div className='callingicons'>
                <img src={callIcon} alt=""  />
                </div>
                <div className='miceIcon' onClick={()=>setMuteTest(!muteTest)}>
                    {
                        muteTest ? <BsMicMute/> : <BsMic/>
                    }
                </div>

                <div className='callingicons' >
                <img src={msgicon} alt="" />
                </div>

            </div>
            
            
            
        </div>
    );
};

export default CallingPage;