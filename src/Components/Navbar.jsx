
import React, { useEffect, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { alpha, AppBar, Badge, Box, Divider, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import "../Resources/navbar.css"
import { useNavigate } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext } from 'react';
import { MyContext } from '../App';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import homeLogo from "../images/logoname.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
// import userImg from "../images/community/Ellipse 19.png"
import userImg from "../images/products/Rectangle 7.png"
import { BiSearch } from 'react-icons/bi';

// function SimpleDialog(props) {
//     const { onClose, selectedValue, open } = props;

//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     const handleListItemClick = (value) => {
//         onClose(value);
//     };

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>Set backup account</DialogTitle>
//             {/* <List sx={{ pt: 0 }}>
//           {emails.map((email) => (
//             <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//               <ListItemAvatar>
//                 <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                   <PersonIcon />
//                 </Avatar>
//               </ListItemAvatar>
//               <ListItemText primary={email} />
//             </ListItem>
//           ))}

//           <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//             <ListItemAvatar>
//               <Avatar>
//                 <AddIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Add account" />
//           </ListItem>
//         </List> */}
//             output here
//         </Dialog>
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     // selectedValue: PropTypes.string.isRequired,
// };


// get window dimension 

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navbar = () => {

    const [user] = useAuthState(auth)
    const { height, width } = useWindowDimensions()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [menuStatus, setMenuStatus] = useState(true)
    const [cartCount, setCartCount] = useState(0)
    const [wishlistCount, setWishListCount] = useState(0)
    const navigate = useNavigate()
    const [refresh] = useContext(MyContext)
    const [open, setOpen] = useState(false);
    //   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = (value) => {
    //     setOpen(false);
    //     // setSelectedValue(value);
    // };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [refresh])


    useEffect(() => {
        let localStorageProduct = localStorage.getItem("productmvmCart")
        let localStorageCourse = localStorage.getItem("coursemvmCart")

        if (localStorageProduct && localStorageCourse) {
            const product = JSON.parse(localStorageProduct)
            const course = JSON.parse(localStorageCourse)
            let totalLength = Number(product.length) + Number(course.length)
            setCartCount(totalLength)
        }
        else if (localStorageProduct) {
            const product = JSON.parse(localStorageProduct)
            setCartCount(product.length)

        }
        else if (localStorageCourse) {
            const course = JSON.parse(localStorageCourse)
            setCartCount(course.length)

        }

    }, [refresh])
    useEffect(() => {

        let localStorageCourseWishList = localStorage.getItem("coursemvmWishList")
        let localStorageProductWishList = localStorage.getItem("productmvmWishList")
        let localStorageServiceWishList = localStorage.getItem("servicemvmWishList")

        let courseWishList = 0
        let productWishList = 0
        let serviceWishList = 0

        if (localStorageCourseWishList) {
            courseWishList = JSON.parse(localStorageCourseWishList).length
        }
        if (localStorageProductWishList) {
            productWishList = JSON.parse(localStorageProductWishList).length
        }
        if (localStorageServiceWishList) {
            serviceWishList = JSON.parse(localStorageServiceWishList).length
        }

        // console.log(courseWishList, productWishList, serviceWishList);

        let wishlistTotal = courseWishList + productWishList + serviceWishList
        setWishListCount(wishlistTotal)


    }, [refresh])


    // for search section 

    const items = [
        {
            id: 0,
            name: "Cobol",
        },
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "Basic",
        },
        {
            id: 3,
            name: "PHP",
        },
        {
            id: 4,
            name: "Java",
        },
    ];

    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnHover = (result) => {
        // console.log(result);
    };

    const handleOnSelect = (item) => {
        // console.log(item);
    };

    const handleOnFocus = () => {
        // console.log("Focused");
    };

    const handleOnClear = () => {
        // console.log("Cleared");
    };
    const keyDown = (e) => {
        if (e.key === 'Enter') {
            const value=e.target.value
            window.location.href = `/search/${value}` 
            
        }
    };

    //   end of search section functions 



    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector("#header").setAttribute('scroll', 'true');
        } else {
            document.querySelector("#header").setAttribute('scroll', 'false');
        }
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
        setMenuStatus(!menuStatus)
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
        setMenuStatus(!menuStatus)
    };



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            className='navbarOption'
            style={{ marginTop: "", marginLeft: "0" }}
            anchorEl={mobileMoreAnchorEl}
            // anchorOrigin={{
            //     vertical: 'top',
            //     horizontal: 'left',
            // }}

            id={mobileMenuId}
            keepMounted
            // transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            // }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <div className='d-flex justify-content-start align-items-center mb-3 mt-2 mt-md-4'>
                    <img src={userImg} alt="" className='profileImage' />
                    <div className='text-start ms-2 profileTextMenu'>
                        <h5 className='mb-0 '> {
                            user ? user.displayName
                                :
                                "No user"
                        }

                        </h5>
                        {
                            user ?
                                <p className='mb-0 ' style={{ color: "#AC9DA3" }}>rbrajumullah100@gmail.com</p>
                                :
                                <button className='loginBtnNav' onClick={() => {
                                    window.location.href = "/login"
                                }}>Login</button>

                        }

                    </div>
                </div>
            </MenuItem>
            <MenuItem >
                <a href="/wishlist" className='menuLink w-100 d-block menuitems p-0'>
                    <div className='w-100 d-flex justify-content-between align-items-center '>
                        <p className='mb-0'>Wishlist</p>
                        <p className='navbarNotiCount'>05</p>
                    </div>
                </a>
            </MenuItem>
            <MenuItem >
                <a href="/shopping-cart" className='menuLink w-100 d-block  menuitems p-0'>
                    <div className='w-100 d-flex justify-content-between align-items-center '>
                        <p className='mb-0'>Cart</p>
                        <p className='navbarNotiCount'>02</p>
                    </div>
                </a>
            </MenuItem>

            {
                user &&
                <>
                    <div className='dividerNavbar'></div>
                    <MenuItem>
                        <a href="/messages" className='menuLink w-100 d-block  menuitems p-0'>
                            <div className='w-100 d-flex justify-content-between align-items-center '>
                                <p className='mb-0'>Message</p>
                                <p className='navbarNotiCount'>01</p>
                            </div>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/notification" className='menuLink w-100 d-block  menuitems p-0'>
                            <div className='w-100 d-flex justify-content-between align-items-center '>
                                <p className='mb-0'>Notifications</p>
                                <p className='navbarNotiCount'>03</p>
                            </div>
                        </a>
                    </MenuItem>
                </>
            }

            <div className='dividerNavbar'></div>
            {
                width <= 900 &&
                <>
                    <MenuItem>
                        <a href="/all-product" className='menuLink menuitems p-0'>product</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/services" className='menuLink menuitems p-0'>Services</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/all-courses" className='menuLink menuitems p-0'>Courses</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="/community" className='menuLink menuitems p-0'>Community</a>
                    </MenuItem>
                </>

            }
            <div className='dividerNavbar'></div>


            {/* <MenuItem>
                <a href="/my-order-products" className='menuLink menuitems p-0'>My order</a>
            </MenuItem> */}

            {
                user &&
                <>
                    <MenuItem>
                        <a href="/previous-order" className='menuLink menuitems p-0'>Order history</a>
                    </MenuItem>

                    {/* <div className='dividerNavbar'></div> */}
                    <MenuItem>
                        <a href="/my-order-products" className='menuLink menuitems p-0'>My service</a>
                    </MenuItem>

                    {/* <div className='dividerNavbar'></div> */}
                    <MenuItem>
                        <a href="/my-order-course" className='menuLink menuitems p-0'>My learning</a>
                    </MenuItem>

                    <div className='dividerNavbar'></div>
                    <MenuItem>
                        <a href="/edit-profile" className='menuLink menuitems p-0'>Edit profile</a>
                    </MenuItem>

                    {/* <div className='dividerNavbar'></div> */}
                    <MenuItem>

                        <button className='menuLink menuitems signoutBtn p-0'
                            onClick={() => {
                                auth.signOut()
                                window.location.href = "/login"
                            }}
                        >Logout</button>
                    </MenuItem>
                </>
            }

        </Menu>
    );

    const home = () => {
        navigate("/")
    }



    return (
        <div className='navbarSection'>
            <Box sx={{ flexGrow: 1 }} style={{ width: "100%", marginBottom: "0" }} className=''>
                <AppBar position="fixed" style={{ width: "100%", }} id="header" scroll="false">
                    <Toolbar id='navbarIs' >
                        <img src={homeLogo} alt="mvm" height="100" className='py-2 cursor-pointer logoNavbar' onClick={home} />
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                            <div className='navbarItem'>
                                <div style={{ width: 230, margin: 20, position: "relative", marginRight: "32px" }} className="search-div">
                                    {/* <ReactSearchAutocomplete
                                        items={items}
                                        onSearch={handleOnSearch}
                                        onHover={handleOnHover}
                                        onSelect={handleOnSelect}
                                        onFocus={handleOnFocus}
                                        onClear={handleOnClear}
                                        styling={{ zIndex: 4 }} // To display it on top of the search box below
                                        autoFocus
                                        onKeyDown={keyDown}
                                    /> */}
                                    <input type="text" className='searchinput' name="" id="" style={{ borderRadius: "20px" }} onKeyDown={keyDown} />
                                    <div className='searchIconNavbar'>
                                        <FiSearch />
                                    </div>
                                </div>
                                <a href="/all-product">Products</a>  
                                <a href="/services">Services</a>
                                <a href="/all-courses">Courses</a>

                                <a href="/community">Community</a>
                                {/* 

                                <div className='searchBarNav'> 
                                <IconButton size="md" aria-label="show 4 new mails" color="inherit"  onClick={handleClickOpen}>
                                    <FiSearch />
                                </IconButton>
                                    <SimpleDialog
                                    className="dsd"
                                        // selectedValue={selectedValue} 
                                        open={open}
                                        onClose={handleClose} 
                                    />
                                </div>
                                 */}
                                <a href="/wishlist" className='wishlistLink'><IconButton size="large" aria-label={`show ${wishlistCount} new mails`} color="inherit">
                                    <Badge badgeContent={wishlistCount} color="error">
                                        <AiOutlineHeart />
                                    </Badge>
                                </IconButton>
                                </a>
                                <a href="/shopping-cart">
                                    <IconButton
                                        size="md"
                                        aria-label={`show ${cartCount} new notifications`}
                                        color="inherit"
                                    >
                                        <Badge badgeContent={cartCount} color="error">
                                            <RiShoppingCart2Line />
                                        </Badge>
                                    </IconButton>
                                </a>
                                {
                                    !user &&
                                    <a href="/login" style={{ fontWeight: "700", fontSize: "1.2em" }}>Login  <span style={{ fontSize: "1.5em", paddingLeft: "5px" }}><BsArrowRight /></span></a>
                                }
                            </div>


                        </Box>
                        {
                            user ?
                                <Box sx={{ display: { xs: 'flex' } }}>
                                    <img src={userImg} alt="" className='profileImage' onClick={handleMobileMenuOpen} />
                                    {/* <IconButton
                                        size="md"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                        className={menuStatus ? 'menu' : 'menu active'}
                                    >
                                        <div></div>
                                    </IconButton> */}
                                </Box>
                                :
                                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="md"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                        className={menuStatus ? 'menu' : 'menu active'}
                                    >
                                        <div></div>
                                    </IconButton>
                                </Box>
                        }


                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {/* {renderMenu} */}
            </Box>
        </div>

    );
};

export default Navbar;