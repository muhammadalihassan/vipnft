
// BUBBLE
import nft1 from './Assets/nft1.png';
import nft2 from './Assets/nft2.png';
import nft3 from './Assets/nft3.png';
import nft4 from './Assets/nft4.png';
import dash from './Assets/dash.png';
import mail from './Assets/mail-box.png';
import step1 from './Assets/step1.png';
import step2 from './Assets/step2.png';
import step3 from './Assets/step3.png';
import side from './Assets/side-banner.png';
import bl from './Assets/banner-logo.png';

import { Link } from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl, Button, Form, Modal} from 'react-bootstrap';
// AOS
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component, useState } from "react";
import Slider from "react-slick";
import MultiStep from './Views/Multistep/Index';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Counter from './Extends/Counter.js';
import StepOne from './Views/StepOne/Index'
import StepTwo from './Views/StepTwo/Index'
import StepThree from './Views/StepThree/Index'
// import StepFour from './Views/StepFour/Index'

AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 1000,
});

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    // { component: <StepFour /> }
  ]

  return (
    <section className='main'>
    
     <div className='banner-main'>
       <Container fluid>
         <div className='banner'>
           <Row>
           <Col md={6} xl={4}>
           <div className='banner-txt'>
           {/* <img src={bl} /> */}
               <h3>Locally Sourced NFTs</h3>
               <p>Local Businesses<br/>
                          Local Artists<br/>
		        Global Clout     </p>
               <Link as={Link} to="/" className='lrg-btn'>get started</Link>
             </div>
           </Col>
           <Col md={6} xl={7}>
             <div className='side-banner-div'>
               <img src={side} />
             </div>
           </Col>
           </Row>
           
         </div>
       </Container>
     </div>
     <div className='upcoming-main'>
       <Container fluid>
       <div className='upcoming-head'>
         <h4>
           Upcoming & Recent Drops
         </h4>
       </div>
       <Slider {...settings}>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft1} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft2} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft3} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft4} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft3} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
         <div className='up-wid'>
         <Link as={Link} to="/">
           <div className='up-img'>
             <img src={nft2} alt="" />
           </div>
           <div className='up-txt'>
             <h6>NFT DROPS
               <span>12 ETH</span>
             </h6>
             <Link as={Link} to="/" className='cart'><FontAwesomeIcon icon={solid('bag-shopping')} /></Link>
           </div>
           </Link>
           <div className='counter'>
             <Counter />
           </div>
         </div>
       </Slider>
       </Container>
     </div>
     <div className='locally-main'>
       <Container>
         <Row>
           <Col md={5}>
             <div className='locally-img'>
               <img src={dash} />
             </div>
           </Col>
           <Col md={5}>
             <div className='locally-txt'>
               <h5>What’s a locally sourced NFT?</h5>
               <p>Locally sourced NFTs are non-fungible tokens that give you real benefits at real places in your community.</p>
               <p>We work with local businesses and local artists to create location-based NFTs that not only look good but give you global clout while supporting the community.</p>
             </div>
           </Col>
         </Row>
       </Container>
     </div>
     <div className='call-to-action'>
       <Container>
         <div className='call-act-main'>
           <Row>
             <Col md={3}>
               <div className='mail-img'>
                 <img src={mail} alt="" />
               </div>
             </Col>
             <Col md={9}>
               <div className='mail-txt'>
                 <h6>Stay in the know</h6>
                 <p>Subscribe to our newsletter</p>
                 <Form>
                 <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter your email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button>
                  Keep me posted
                  </Button>
                </InputGroup>
                {/* {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      label={`Keep me posted`}
                    />
                  </div>
                ))} */}
                </Form>
               </div>
             </Col>
           </Row>
         </div>
       </Container>
     </div>
     <div className='how-it-works'>
       <Container className='lines-main'>
         <div className='how-head'>
           <h5>How it Works</h5>
         </div>
         <Row>
           <Col md={4}>
             <div className='steps-wid'>
               <div className='step-txt'>
                 <span>
                   1
                 </span>
               </div>
               <div className='steps'>
                 <img src={step1} alt="" />
               </div>
               <div className='step-txt'>
                 <p>We work with local artists and local businesses to create VIP NFTs</p>
               </div>
             </div>
           </Col>
           <Col md={4}>
             <div className='steps-wid '>
               <div className='step-txt'>
               <p>You purchase an NFT
<span>You are now a VIP</span></p>
               </div>
               <div className='steps'>
                 <img src={step2} alt="" />
               </div>
               <div className='step-txt'>
               <span>
                   2
                 </span>
                 
               </div>
             </div>
           </Col>
           <Col md={4}>
             <div className='steps-wid'>
               <div className='step-txt'>
                 <span>
                   3
                 </span>
               </div>
               <div className='steps'>
                 <img src={step3} alt="" />
               </div>
               <div className='step-txt'>
                 <p>Visit the business and use the Dash​ible app to show them your VIP NFT and get rewarded</p>
               </div>
             </div>
           </Col>
         </Row>
         <div className='steps-ftr'>
           <h6>These NFTs keep giving back to the community. If you resell your NFT, the business and the local artist get a royalty. </h6>
         </div>
       </Container>
     </div>
     <div className='join-waitlist'>
       <Container>
         <div className='how-head'>
           <h5>Join the Waitlist Today!</h5>
         </div>
         <div className='waitlist-btns'>
           <Row>
             <Col md={3}>
             <Button onClick={handleShow}>
               I am Business <span>Owner in NYC</span> 
             </Button>
             <p>Create your NFTs with us</p>
             </Col>
             <Col md={3}>
             <Button>
               I am a NYC <span>Creator</span>
             </Button>
             <p>Create locally sourced NFTs</p>
             </Col>
           </Row>
         </div>
       </Container>
     </div>
     <Modal show={show} onHide={handleClose} centered className='bussiness-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Join the Waitlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <MultiStep activeStep={0} steps={steps} />
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section >
  );
}

export default App;
