
import React from 'react';
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

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
                <a href="/" className='menuLink'>Products</a>
            </MenuItem>
            <MenuItem>
                <a href="/" className='menuLink'>Services</a>
            </MenuItem>
            <MenuItem>
                <a href="/all-courses" className='menuLink'>Courses</a>
            </MenuItem>
            <MenuItem>
                <a href="/community" className='menuLink'>Community</a>
            </MenuItem>
           
            <MenuItem>
                <a href="/"  className='menuLink'>Login</a>
            </MenuItem>

            <MenuItem>
                <IconButton size="md" aria-label="show 4 new mails" color="inherit">
                    <FiSearch />
                </IconButton>
                <p style={{paddingBottom:"0", paddingLeft:"5px"}}>Search</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <AiOutlineHeart />
                    </Badge>
                </IconButton>
                <p style={{paddingBottom:"0", paddingLeft:"5px"}}>Liked</p>
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
                <p style={{paddingBottom:"0", paddingLeft:"5px"}}>Cart</p>
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
                <p style={{paddingBottom:"0", paddingLeft:"5px"}}>Profile</p>
            </MenuItem>
           
        </Menu>
    );
    return (
        <div className='navbarSection'>
            <Box sx={{ flexGrow: 1 }} style={{width:"100%"}}>
                <AppBar position="static">
                    <Toolbar id='navbarIs'>
                        <img src="images/companyLogo.svg" alt="" />
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                            <div className='navbarItem'>
                                <a href="/">Products</a>
                                <a href="/">Services</a>
                                <a href="/all-courses">Courses</a>
                                <a href="/community">Community</a>
                                <a href="/">Community</a>
                                {/* <button style={{ backgroundColor: "transparent", color: "white", fontWeight: "900" }}><FiSearch /></button> */}
                                {/* <button style={{backgroundColor:"transparent", color:"white", fontWeight:"900"}}><AiOutlineHeart/></button>
                            <button style={{backgroundColor:"transparent", color:"white", fontWeight:"900"}}><RiShoppingCart2Line/></button> */}

                                <IconButton size="md" aria-label="show 4 new mails" color="inherit">
                                    <FiSearch />
                                </IconButton>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <AiOutlineHeart />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="md"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <RiShoppingCart2Line />
                                    </Badge>
                                </IconButton>
                                <a href="/" style={{ fontWeight: "700", fontSize: "1.2em" }}>Login  <span style={{ fontSize: "1.5em", paddingLeft: "5px" }}><BsArrowRight /></span></a>
                            </div>

                            {/* <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton> */}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="md"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </div>

    );
};

export default Navbar;