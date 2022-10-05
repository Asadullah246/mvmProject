import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar';
import "./AllProduct.css"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import sideBarIcon from "../../../images/icon.svg"
import downArrow from "../../../images/downArrow.svg"
import { Rating } from '@mui/material';
import Footer from '../../../Components/Footer';

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


const drawerWidth = 240;


const AllProduct = () => {
  const { height, width } = useWindowDimensions()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [magicalCount, setMagicalCount]=useState(true)
  const [botanicalCount, setBotanicalCount]=useState(true)
  const [priceDiv, setPriceDiv]=useState()
  // const container = window !== undefined ? () => window().document.body : undefined;
  const container=undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const magical=(e)=>{
    e.preventDefault();
    setMagicalCount(!magicalCount)
  }
  const botanical=(e)=>{
    e.preventDefault();
    setBotanicalCount(!botanicalCount)
  }

  const mouseEnter=(ind)=>{
    // console.log(ind);
    setPriceDiv(ind)

  }
  const mouseLeave=(ind)=>{
    // console.log(ind);
    setPriceDiv("")

  }

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <Typography variant="h5" className='sidebarHeading' onClick={magical} >Magical <img src={downArrow} alt="" className='ms-5' /></Typography>
     {
      magicalCount ? 
      <List >
      {[...Array(6)].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton className="">
            <ListItemIcon className='iconSidebarDiv'>
            <img src={sideBarIcon} alt="" srcset="" />
            </ListItemIcon>
            <ListItemText primary={`Product name ${index+1}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>: ""
     }
      <Divider className='dividerSidebar'/>
      <Typography variant="h5" className='sidebarHeading' onClick={botanical} >Botanical <img src={downArrow} alt="" className='ms-5' /></Typography>
      {
      botanicalCount ? 
      <List>
        {[...Array(6)].map((text, index) => ( 
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className='iconSidebarDiv'>
                
                <img src={sideBarIcon} alt="" srcset="" />
              </ListItemIcon>
              <ListItemText primary={`Product name ${index+1}`}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>: ""
     }
    </div>
  );

    return (
        <div>
            <Navbar/>
           <div className="container-fluid container-lg">
           <Box sx={{ display: 'flex' }} className="productBody">
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
        // style={{backgroundColor:"white"}}
        className="sideBarSection"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          style={{backgroundColor:"white"}}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* body element  */}

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       
       
            <Typography variant="h1" className='productHeadline'>Products Categories</Typography>
<div className="container-fluid container-md">
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                            {
                                [...Array(8)].map((d, index) => {
                                    return (
                                       <>
                                       {
                                        width> 768 ?
                                        <div className='col px-0 py-0 px-md-3 py-md-4 courseCard scaleDiv' onMouseEnter={()=>mouseEnter(index)} onMouseLeave={mouseLeave}>
                                            <img src="images/course/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />

                                            {
                                              (priceDiv ==index) &&
                                              <div className='coursePrice'>
                                              <div className='d-flex justify-content-between'>
                                                  <p className='mb-0'>Paid</p>
                                                  <h4>$500</h4>
                                              </div>
                                              <h5 className='text-start mb-0'>Course name</h5>
                                              <div className='d-flex justify-content-start align-items-center'>
                                                  <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                  <p className='' style={{marginBottom:"5px"}}>4.5k Reviews</p>
                                              </div>
                                          </div>
                                            }
                                           
                                            <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                        </div>
                                        :
                                        <div className='col px-0 py-0 px-md-3 py-md-4 courseCard scaleDiv'>
                                            <img src="images/course/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-0'>Paid</p>
                                                    <h4>$500</h4>
                                                </div>
                                                <h5 className='text-start mb-0'>Course name</h5>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                                    <p className='' style={{marginBottom:"5px"}}>4.5k Reviews</p>
                                                </div>
                                            </div>
                                            <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                        </div>

                                       }
                                        
                                        </>
                                    )
                                })
                            }
                        </div>
</div>


      </Box>
    </Box>
    <div>
      <h2 className='topSelling'>Top selling products</h2>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                            {
                                [...Array(4)].map((d, index) => {
                                    return (
                                      
                                    <>
                                    {
                                      width>768 ?
                                      <div className='col px-0 py-0 px-md-3 py-md-4 courseCard scaleDiv' onMouseEnter={()=>mouseEnter(index)} onMouseLeave={mouseLeave}>
                                            <img src="images/course/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />

                                      {
                                        (priceDiv ==index) &&
                                        <div className='coursePrice'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0'>Paid</p>
                                            <h4>$500</h4>
                                        </div>
                                        <h5 className='text-start mb-0'>Course name</h5>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                            <p className='' style={{marginBottom:"5px"}}>4.5k Reviews</p>
                                        </div>
                                    </div>
                                      }
                                           


                                            <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                        </div>
                                        :
                                        <div className='col px-0 py-0 px-md-3 py-md-4 courseCard scaleDiv' >
                                            <img src="images/course/Rectangle 19 (1).png" alt="" className='w-100 productCol forScale' />
                                            <div className='coursePrice'>
                                          <div className='d-flex justify-content-between'>
                                              <p className='mb-0'>Paid</p>
                                              <h4>$500</h4>
                                          </div>
                                          <h5 className='text-start mb-0'>Course name</h5>
                                          <div className='d-flex justify-content-start align-items-center'>
                                              <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                                              <p className='' style={{marginBottom:"5px"}}>4.5k Reviews</p>
                                          </div>
                                      </div>


                                            <img src="images/course/Vector (1).svg" alt="" className='likeIcon' />
                                        </div>
                                    }
                                        
                                        </>
                                    )
                                })
                            }
                        </div>


           </div>

    <Footer/>
            
        </div>
    );
};

export default AllProduct;

// ResponsiveDrawer.propTypes = {
 
//   window: PropTypes.func,
// };