import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Resources/styles.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Resources/anim.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import "react-chat-elements/dist/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
