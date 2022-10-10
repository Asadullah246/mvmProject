
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [menuStatus, setMenuStatus]=useState(true)
    const navigate=useNavigate()

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
      }, [])
    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector("#header").setAttribute('scroll','true');
        } else {
            document.querySelector("#header").setAttribute('scroll','false');
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
        style={{marginTop:"", marginLeft:"0"}}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
           
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <div className='d-flex justify-content-start align-items-center mb-3 mt-2 mt-md-4'>
                    <img src="images/community/Ellipse 19.png" alt="" className='profileImage' />
                    <div className='text-start ms-2 profileTextMenu'>
                        <h5 className='mb-0'>Raju Mullah</h5>
                        <p className='mb-0 ' style={{ color: "#AC9DA3" }}>rbrajumullah100@gmail.com</p>
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
                <a href="/all-product" className='menuLink w-100 d-block  menuitems p-0'>
                    <div className='w-100 d-flex justify-content-between align-items-center '>
                        <p className='mb-0'>Cart</p>
                        <p className='navbarNotiCount'>02</p>
                    </div>
                </a>
            </MenuItem>

            <div className='dividerNavbar'></div>
            <MenuItem>
                <a href="/message" className='menuLink w-100 d-block  menuitems p-0'>
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

            <div className='dividerNavbar'></div>


            <MenuItem>
                <a href="/community" className='menuLink menuitems p-0'>My order</a>
            </MenuItem>

            <MenuItem>
                <a href="/login" className='menuLink menuitems p-0'>Order history</a>
            </MenuItem>

            <div className='dividerNavbar'></div>
            <MenuItem>
                <a href="/services" className='menuLink menuitems p-0'>My service</a>
            </MenuItem>

            <div className='dividerNavbar'></div>
            <MenuItem>
                <a href="/" className='menuLink menuitems p-0'>My learning</a>
            </MenuItem>

            <div className='dividerNavbar'></div>
            <MenuItem>
                <a href="/edit-profile" className='menuLink menuitems p-0'>Edit profile</a>
            </MenuItem>

            <div className='dividerNavbar'></div>
            <MenuItem>
                <a href="" className='menuLink menuitems p-0'>Logout</a>
            </MenuItem>

            {/* <MenuItem>
                <IconButton size="md" aria-label="show 4 new mails" color="inherit">
                    <FiSearch />
                </IconButton>
                <p style={{ paddingBottom: "0", paddingLeft: "5px" }}>Search</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <AiOutlineHeart />
                    </Badge>
                </IconButton>
                <p style={{ paddingBottom: "0", paddingLeft: "5px" }}>Liked</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="md"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <RiShoppingCart2Line />
                    </Badge>
                </IconButton>
                <p style={{ paddingBottom: "0", paddingLeft: "5px" }}>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >     <AccountCircle />
                </IconButton>
                <p style={{ paddingBottom: "0", paddingLeft: "5px" }}>Profile</p>
            </MenuItem> */}

        </Menu>
    );

    const home=()=>{
        navigate("/")
    }

    
  
    return (
        <div className='navbarSection'>
            <Box sx={{ flexGrow: 1 }} style={{ width: "100%", marginBottom:"0"}}> 
                <AppBar position="fixed" style={{ width: "100%", marginBottom:"0"}} id="header" scroll="false">  
                    <Toolbar id='navbarIs'>
                        <img src="images/logo.svg" alt="mvm" height="100" className='py-2 cursor-pointer' onClick={home} />
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                            <div className='navbarItem'>
                                <a href="/all-product">Products</a>
                                <a href="/">Services</a>
                                <a href="/all-courses">Courses</a>
                                <a href="/community">Community</a>

                                

                                <IconButton size="md" aria-label="show 4 new mails" color="inherit">
                                    <FiSearch />
                                </IconButton>
                                <a href="wishList" className='wishlistLink'><IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <AiOutlineHeart />
                                    </Badge>
                                </IconButton>
                                </a>
                                <IconButton
                                    size="md"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <RiShoppingCart2Line />
                                    </Badge>
                                </IconButton>
                                <a href="/login" style={{ fontWeight: "700", fontSize: "1.2em" }}>Login  <span style={{ fontSize: "1.5em", paddingLeft: "5px" }}><BsArrowRight /></span></a>
                            </div>

                            
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="md"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                                className={menuStatus? 'menu' : 'menu active'}
                            >
                                <div></div>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {/* {renderMenu} */}
            </Box>
        </div>

    );
};

export default Navbar;