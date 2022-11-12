// import { Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/Sign up/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import LandingPage from './pages/LandingPage/LandingPage';
import Community from './pages/Community/Community';
import AllCourses from './pages/AllCourses/AllCourses';
import CourseFullPage from './pages/AllCourses/CourseFullPage';
import Curses from './pages/AllCourses/Curses';
import Service from './pages/AllCourses/Service';
import BillingPage from './pages/AllCourses/BillingPage';
import AllProduct from './pages/Product/AllProduct/AllProduct';
import ProductDetails from './pages/Product/ProductDetails/ProductDetails';
import ProductwishList from './pages/Product/ProductWishList/ProductwishList';
import ProductBillingtwo from './pages/Product/ProductBillingpage/ProductBillingtwo';
import Product from './pages/AllCourses/Product';
import BillingPage2 from "./pages/Services/BillingPage2/BillingPage2.jsx"
import ServiceBillingPage3 from './pages/Services/BillingPage3/ServiceBillingPage3';
import BillingSuccess from './pages/Services/BillingSuccess/BillingSuccess';
import MyOrder from './pages/Product/MyOrder/MyOrder';
import Message from './pages/Product/Message/Message';
import PreviousOrder from './pages/Product/PreviousOrder/PreviousOrder';
import Notification from './pages/Notification/Notification';
import EditProfile from './pages/EditProfile/EditProfile';
import Services from "./pages/Services/ServicesMainPage/Sevices.jsx"
import MyOrderProducts from './pages/Product/MyOrderProducts/MyOrderProducts';
import ChatBox from './pages/ChatBox/ChatBox';
import CallingPage from './pages/CallingPage/CallingPage';
import Calender from './pages/Services/Calender/Calender';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import WishList from './pages/Wishlist/WishList';
import MyOrderCourses from './pages/MyOrderCourses/CourseOrder/MyOrderCourses';
import CourseOverview from './pages/MyOrderCourses/CourseOverview/CourseOverview';
import RequireAuth from './Components/RequireAuth';
import { createContext } from 'react';
import { useState } from 'react';
import EmailVerify from './pages/EmailVerify/EmailVerify';
import ResetPasswordVerify from './pages/ResetPasswordVerify/ResetPasswordVerify';
import Search from './pages/Search/Search';
// import GoogleMap from './pages/GoogleMap/GoogleMap';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});
export const MyContext = createContext("something")

function App() {

  const [refresh, setRefresh]=useState(false)
  const [userEmail, setUserEmail]=useState("")

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MyContext.Provider value={[refresh, setRefresh,userEmail, setUserEmail]}>

          <Router>
            <Routes>

              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<SignUp />} />
              <Route path="/email-verify" exact element={<EmailVerify />} />
              <Route path="/reset-password-verify" exact element={<ResetPasswordVerify />} />
              <Route path="/reset-password" exact element={<ResetPassword />} />
              <Route path="/" exact element={<LandingPage />} />
              {/* <Route path="/" exact element={<RequireAuth><LandingPage /></RequireAuth>} /> */}
            
              <Route path="/all-courses" exact element={<AllCourses />} />
              <Route path="/search/:text" exact element={<Search />} /> 
              <Route path="/full-course/:id" exact element={<CourseFullPage />} /> 

              {/* <Route path="/billing-page" exact element={<BillingPage />} /> */}
              {/* <Route path="/product-wishlist" exact element={<ProductwishList />} /> */}

              <Route path="/all-product" exact element={<AllProduct />} />
              {/* <Route path="/all-product" exact element={<RequireAuth><AllProduct /></RequireAuth>} /> */}
              <Route path="/product-details" exact element={<ProductDetails />} />

              <Route path="/product-billing-one" exact element={<RequireAuth><ProductBillingtwo /></RequireAuth>} />
              <Route path="/product-billing-two" exact element={<RequireAuth><BillingPage2 /></RequireAuth>} />
              <Route path="/product-billing-three" exact element={<RequireAuth><ServiceBillingPage3 /></RequireAuth>} />
              <Route path="/billing-success" exact element={<RequireAuth><BillingSuccess /></RequireAuth>} />
              <Route path="/calender" exact element={<RequireAuth><Calender /></RequireAuth>} />

              <Route path="/services" exact element={<Services />} />

              <Route path="/shopping-cart" exact element={<ShoppingCart />} />
              
              <Route path="/community" exact element={<RequireAuth><Community /></RequireAuth>} />
              <Route path="/messages" exact element={<RequireAuth><Message /></RequireAuth>} />
              <Route path="/calling" exact element={<RequireAuth><CallingPage /></RequireAuth>} />
              <Route path="/notification" exact element={<RequireAuth><Notification /></RequireAuth>} />
              <Route path="/course-overview" exact element={<RequireAuth><CourseOverview tab="course-overview"  /></RequireAuth>} />
              <Route path="/questions" exact element={<RequireAuth><CourseOverview tab="questions" /></RequireAuth>} />
              <Route path="/reviews" exact element={<RequireAuth><CourseOverview tab="reviews" /></RequireAuth>} />
              <Route path="/previous-order" exact element={<RequireAuth><PreviousOrder /></RequireAuth>} />
              <Route path="/my-order-products" exact element={<RequireAuth><MyOrderProducts /></RequireAuth>} />
              <Route path="/my-order-course" exact element={<RequireAuth><MyOrderCourses /></RequireAuth>} />
              {/* <Route path="/message" exact element={<ChatBox />} /> */}
              <Route path="/edit-profile" exact element={<RequireAuth><EditProfile /></RequireAuth>} />
         


              <Route path="/wishlist" element={<WishList></WishList>}>
                <Route index element={<Curses />} />
                <Route path="service" element={<Service />} />
                <Route path="product" element={<Product />} />
              </Route>


              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>


        </MyContext.Provider>


      </ThemeProvider>

    </div>
  );
}

export default App;
