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
import WishList from './pages/AllCourses/WishList';
import Service from './pages/AllCourses/Service';
import BillingPage from './pages/AllCourses/BillingPage';

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
            <Route path="/login" exact element={<Login/>}/> 
            <Route path="/register" exact element={<SignUp/>}/> 
            <Route path="/reset-password" exact element={<ResetPassword/>}/> 
            <Route path="/" exact element={<LandingPage/>}/> 
            <Route path="/community" exact element={<Community/>}/> 
            <Route path="/all-courses" exact element={<AllCourses/>}/> 
            <Route path="/full-course" exact element={<CourseFullPage/>}/> 
            <Route path="/billing-page" exact element={<BillingPage/>}/> 

            <Route path="/wishlist" element={<WishList></WishList>}> 
              <Route index element={<Curses/>}/>
              <Route path="service" element={<Service/>}/>
            </Route>

            
            <Route path="/*"  element={<NotFound/>}/> 
          </Routes>
        </Router>

      </ThemeProvider>

    </div>
  );
}

export default App;
