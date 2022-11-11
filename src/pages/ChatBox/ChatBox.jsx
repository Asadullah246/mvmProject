import React from 'react';
import "./ChatBox.css"
// import { Button, Input, MessageBox } from "react-chat-elements";

const ChatBox = () => {
    return (
        <div id='chatSection'>
            {/* <MessageBox
                position='left'
                title='Burhan'
               
                type='text'
                text="Hi there !"
                date={new Date()}
                replyButton={true}
            /> */}
          <div style={{ color: "black", marginTop:"30px" }} >
          {/* <MessageBox
                position={"right"}
                type={"text"}
                title={"Message Box Title"}
                text="Here is a text type message box"
                reply={{
                    title: "Emre",
                    titleColor: "#8717ae",
                    message: "Nice to meet you",
                  }}
                
            /> */}
          </div>
            {/* <Input
                placeholder="Type here..."
                multiline={true}
            />
            <Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />; */}


            {/* <div className={`message ${messageClass}`}>
                <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
                <p>{text}</p>
            </div>
            <div className={`message `}>
                <img src={'https://api.adorable.io/avatars/23/abott@adorable.png'} />
                <p>dkfdkfj</p>
            </div> */}

        </div>
    );
};

export default ChatBox;