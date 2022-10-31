import React, { useEffect, useState } from 'react';
import "./CourseOverview.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Navbar from '../../../Components/Navbar';
import { Box, Checkbox, Rating, Tab, Tabs } from '@mui/material';
import { unstable_HistoryRouter } from 'react-router-dom';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ImPlay2 } from 'react-icons/im';
import Footer from '../../../Components/Footer';
import { GoStar } from 'react-icons/go'; 



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CourseOverview = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [value, setValue] = React.useState("");
  const [checking, setChecking] = useState(false)


  useEffect(() => {
    // let urlPath = history.location.pathname;
    let urlPath = window.location.pathname;
    let pathName = urlPath.substring(1);
    setValue(pathName)

  }, [window.location.pathname])



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  // for tabs 

  const overview = (
    <div className='mt-4'>
      <h5 className='mb-2'>About this course</h5>
      <p>Learn to quickly connect with crowds of stranger, be better on dates or ace that job interview</p>

      <div className="container">
        <div className="row my-4">
          <div className="col-4 p-0">By the number</div>
          <div className="col-4 p-0">
            <p>Skil level : All levels</p>
            <p>Student : 24</p>
            <p>Language : English</p>
            <p>Caption : Yes</p>
          </div>
          <div className="col-4 p-0">
            <p>Lecturer : 23</p>
            <p>Video : 1 total hour</p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4 p-0">By the number</div>
          <div className="col-8">
            <h6 className='fw-bold mb-3'>The goal of this course is simple</h6>
            <p className='mb-0'>To learn the basics or public speaking</p>
            <p className='mb-0'>Learn advanced technique to be more charismatic and more likable</p>
            <p className='mb-0'>How to be more powerful as a human being</p>
            <p className='mb-0'>I(Ricky Mendoza) will be guiding you through the whole process in a fun and entertaining way</p>
            <br />
            <p className='mb-0'>If your're an entrepreneur with a great product and need to get better at your pitches, then TAKE THIS COURSE</p>
            <br />
            <p className='mb-0'>If your're hunting and need to leave an impression at your next job interview, then TAKE THIS COURSE</p>
            <br />
            <p className='mb-0'> If you're a parent and dwant better tools to communicate to your loved ones, then TAKE THIS COURSE</p>
            <br />
            <p className="mb-0">If you're in the dating world and want the skills of a ninja communicator, then TAKE THIS COURSE</p>
            <br />
            <p className="mb-0">There are something for everyone and I want you to get a lot of value from learning and practicing these skills </p>

          </div>

        </div>
        <div className="row ">
          <h5>Who this course is for:</h5>
          <p>This course is meant for anyone wanting to communicate better and more efficiency</p>
        </div>
      </div>


    </div>
  )
  const questions = (
    <div className='mt-4'>
      <h2>All questions in this course (14)</h2>

      {/* <img src={opportunity.seeker_details.profile_pic == null ? `https://ui-avatars.com/api/?name=${us}?rounded=true` : opportunity.seeker_details.profile_pic} alt="connection" style={{ width: "3.2rem", height: "auto", marginRight: " 10px", borderRadius: "50%" }} /> */}



      <section className='mt-4'>
        {
          [...Array(6)].map(a => {
            return (
              <div className='d-flex align-items-center mb-4'>

                <img src={`https://ui-avatars.com/api/?name=${"Asadullah"}?rounded=true`} alt="" style={{ width: "2.5rem", height: "2.5rem", marginRight: " 10px", borderRadius: "50%" }} />
                <div>
                  <p className='mb-0'>How to write the name in other way?</p>
                  <span className='answer'>You can just type the any don't think so much</span>
                </div>

              </div>

            )
          })
        }

        <button className='seeMoreCourseBtn'>See more</button>
        <p>Ask a new question ?</p>



      </section>


    </div>
  )
  const reviews = (
    <div>
      <div className='d-flex align-items-center my-4'>
        <h5 className='mb-0'>4.5</h5>
        <p className='starRating mb-0'><GoStar/></p>
        <h5 className='mb-0'>1k reviews</h5>
      </div>
      {/* <h5>4.5 <span className='starRating'></span> 1k reviews</h5> */}
      <section>

        {
          [...Array(6)].map(a => {
            return (
              <div className='mb-4'>
                <div className='d-flex align-items-center mb-2'>

                  <img src={`https://ui-avatars.com/api/?name=${"Asadullah"}?rounded=true`} alt="" style={{ width: "2.5rem", height: "2.5rem", marginRight: " 10px", borderRadius: "50%" }} />
                  <div>
                    <p className='mb-0 fw-semibold '>Asadullah</p>
                    <div className='d-flex align-items-center'>
                      <Rating name="half-rating" defaultValue={4.3} precision={0.5} className='rating' />
                      <p className='mb-0 weekText'>1 week ago</p>
                    </div>
                  </div>

                </div>
                <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised word which don't look even slightly believable  </p>
              </div>

            )
          })
        }
      </section>

    </div>
  )
  const tabChange = (event, newValue) => {
    setValue(newValue);
    setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

  };

  const renderSwitch = (param) => {
    switch (param) {
      case "course-overview":
        return overview;
      case "questions":
        return questions;
      case "reviews":
        return reviews;

    }
  }

  const videoSelect = (e) => {
    e.preventDefault()
    console.log("clicked");
    setChecking(!checking)

  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid container-md overviewSection ">


        {/* overview section  */}

        <section className="row gx-4 text-start">
          <div className="col-12 col-lg-7">
            <div>
              <h1>Course name here</h1>

              {/* <Video autoPlay loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                  
                }}>
                <source src="https://youtu.be/Nv7RgGpu6ME" type="video/webm" />
                <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
              </Video> */}

              <iframe className='videoTag' src="https://www.youtube.com/embed/Nv7RgGpu6ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




              {/* tab section  */}

              <Tabs
                variant="scrollable"
                scrollButtons={false}
                allowScrollButtonsMobile
                value={value}
                onChange={tabChange}
                // textColor="inherit"
                TabIndicatorProps={{ style: { background: 'transparent' } }}
              // initialSelectedIndex={'requests'} 

              >
                <Tab style={{ textTransform: 'capitalize' }} value="course-overview" label="Overview" />
                <Tab style={{ textTransform: 'capitalize' }} value="questions" label="Q&A" />
                <Tab style={{ textTransform: 'capitalize' }} value="reviews" label="Reviews" />

              </Tabs>
              {renderSwitch(value)}

            </div>
          </div>
          <div className=" col-12 col-lg-5"> 

            <div className='courseContent'>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{ fontSize: "3em" }}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: "1.5rem", fontWeight: "700", whiteSpace: "nowrap", }}>
                    Course Content
                  </Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  {
                    [...Array(6)].map(c => {
                      return (
                        <>
                          <div className='contentpart' onClick={videoSelect}>
                            <Checkbox {...label} checked={checking}
                              color='default'
                            />
                            <span >1. Content part 1</span>
                            <div className='d-flex minsDiv'>
                              <p className=' mb-0 me-2 videoIcon'><ImPlay2 /> </p>
                              <p className="mb-0 videoMinutes">50:40 min</p>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </AccordionDetails>
              </Accordion>

            </div>


          </div>
        </section>


        <Footer />
      </div>

    </div>
  );
};

export default CourseOverview;