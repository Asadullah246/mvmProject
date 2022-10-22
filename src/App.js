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
// import GoogleMap from './pages/GoogleMap/GoogleMap';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Router>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<SignUp />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/community" exact element={<Community />} />
            <Route path="/all-courses" exact element={<AllCourses />} />
            <Route path="/full-course" exact element={<CourseFullPage />} />
            {/* <Route path="/billing-page" exact element={<BillingPage />} /> */}

            {/* Product  */}
            <Route path="/all-product" exact element={<AllProduct />} />
            <Route path="/product-details" exact element={<ProductDetails />} />
            <Route path="/product-wishlist" exact element={<ProductwishList />} />
            <Route path="/product-billing-one" exact element={<ProductBillingtwo />} />
            <Route path="/product-billing-two" exact element={<BillingPage2 />} />
            <Route path="/service-billing-cart" exact element={<ServiceBillingPage3 />} />
            <Route path="/billing-success" exact element={<BillingSuccess />} />
            <Route path="/messages" exact element={<Message />} />
            <Route path="/previous-order" exact element={<PreviousOrder />} />
            <Route path="/notification" exact element={<Notification />} />
            <Route path="/edit-profile" exact element={<EditProfile />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/my-order-products" exact element={<MyOrderProducts />} />
            <Route path="/calling" exact element={<CallingPage />} />
            <Route path="/message" exact element={<ChatBox />} />
            <Route path="/calender" exact element={<Calender />} />
            <Route path="/shopping-cart" exact element={<ShoppingCart />} />
            {/* <Route path="/map" exact element={<GoogleMap />} /> */}


            <Route path="/wishlist" element={<WishList></WishList>}>
              <Route index element={<Curses />} />
              <Route path="service" element={<Service />} />
              <Route path="product" element={<Product />} />
            </Route>


            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>

      </ThemeProvider>

    </div>
  );
}

export default App;
