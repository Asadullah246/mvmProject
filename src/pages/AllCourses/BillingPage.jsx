import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
import Navbar from '../../Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


const BillingPage = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>,
        <Typography key="3" color="text.primary">
          Breadcrumb
        </Typography>,
      ];
    return (
        <div>
            <Navbar />

            {/* body  */}

            <div className="container-fluid container-md">

                {/* heading and breadcamp  */}
                <div className="row">
                   <div className="col">
                   <button><BsArrowLeft /> <span>MVM Service</span></button> <br />
                    <Stack spacing={2}>
                    
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                   </div>

                   <div className="col">
                    
                   </div>
                </div>

            </div>

        </div>
    );
};

export default BillingPage;