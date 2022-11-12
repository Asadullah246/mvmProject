import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import "./ChatBox.css"
import image1 from "../../images/comments/Rectangle 21.png"
import { useEffect } from 'react';
import { TbArrowsCross } from 'react-icons/tb';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';


// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   your config
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();


const data = [
    {
        text: "Hi",
        uid: "4875847587",
        photoURL: image1
    },
    {
        text: "Hellow",
        uid: "4875847587",
        photoURL: image1
    },
    {
        text: "have a good day",
        uid: "4875847587",
        photoURL: image1
    },

]


function ChatBox(props) {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                {/* <h1>⚛️🔥💬</h1> */}
                {/* <SignOut /> */}
            </header>

            <section>
                {/* {user ? <ChatRoom /> : <SignIn />} */}
                <ChatRoom setOpen={props.setOpen} />
            </section>

        </div>
    );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }


function ChatRoom(props) {
    const dummy = useRef();
    //   const messagesRef = firestore.collection('messages');
    //   const query = messagesRef.orderBy('createdAt').limit(25);

    //   const [messages] = useCollectionData(query, { idField: 'id' });
    const [allMsg, setAllMsg] = useState([])

    const [formValue, setFormValue] = useState('');
    // const [txt, setTxt] = useState("")
    const [user] = useAuthState(auth)

    useEffect(() => {
        setAllMsg(data) 
    }, [])

    const close=()=>{
        props.setOpen(false)
    }


    const sendMessage = async (e) => {
        e.preventDefault();
        const newData = {
            text: formValue,
            uid: user.uid,
            photoURL: user.photoURL

        }
        setAllMsg([...allMsg, newData])


        // const { uid, photoURL } = auth.currentUser;

        // await messagesRef.add({
        //   text: formValue,
        //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //   uid,
        //   photoURL
        // })

        // setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
   

    return (<>
        <div className='chattingSection'>
            <div className='closeIcon' onClick={close}>
             <TbArrowsCross/> 
            </div>
            <div className='d-flex justify-content-start align-items-center  mb-4'>
                <img src={image1} alt="" className='profileImage me-2' />
                <div className='text-start'>
                    <h5 className='mb-0'>Smir A</h5>
                    <p className='mb-0 ' style={{ color: "#AC9DA3" }}>Last seen: June 13, 10:37 PM</p>
                </div>
            </div>
            <main className='chattingMain'>

                {/* {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} */}
                {allMsg && allMsg.map(msg => <ChatMessage message={msg} />)}


                <span ref={dummy}></span>
                {/* <span ref={txt}></span> */}



            </main>

            <form onSubmit={sendMessage} className="chattingForm">

                <input className='chattingInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

                <button className='chattingBtn' type="submit" disabled={!formValue}>Send</button>

            </form>
        </div>


    </>)
}


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const [user] = useAuthState(auth)


    const messageClass = uid === user?.uid ? 'sent' : 'received';


    return (<>
        <div>
            {
                messageClass == "sent" ?
                    <div className={`message sent d-flex  justify-content-end`}>

                        <p className='chattingPTag'>{text}</p>
                        <img className='chattingImg' src={photoURL} />
                    </div>
                    :
                    <div className={`message received d-flex`}>
                        <img className='chattingImg' src={photoURL} />
                        <p className='chattingPTag'>{text}</p>
                    </div>
            }
        </div>
    </>)
}


export default ChatBox;