
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

import { Link } from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
// AOS
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component } from "react";
import Slider from "react-slick";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Counter from './Extends/Counter.js';
AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 1000,
});

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  
  return (
    <section className='main'>
     <div className='banner-main'>
       <Container fluid>
         <div className='banner'>
           <Col md={3}>
           <div className='banner-txt'>
               <h3>Locally Sourced NFTS</h3>
               <p>Nifty Gateway is the premier NFT marketplace for beginners, experts, and everyone in-between - without the hassle of gas fees and failed transactions.</p>
               <Link as={Link} to="/" className='lrg-btn'>get started</Link>
             </div>
           </Col>
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
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                     ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                         ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  </p>
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
                 <p>Enter your email to recive daily round-up of submissions</p>
                 <Form>
                 <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter your email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button>
                    subscribe
                  </Button>
                </InputGroup>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      label={`Keep me posted`}
                    />
                  </div>
                ))}
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
                 <p>We work with local artists and local businesses to create location-based NFTs</p>
               </div>
             </div>
           </Col>
           <Col md={4}>
             <div className='steps-wid '>
               <div className='step-txt'>
               <p>YAY!! <span>You purchase an NFT</span></p>
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
                 <p>Visit the business and use the Dash​ible app to show them your locally sourced NFT and get rewarded </p>
               </div>
             </div>
           </Col>
         </Row>
         <div className='steps-ftr'>
           <h6>These NFTs keep giving back to the community. If you resell your NFT, the business and the local artist get a royalty. </h6>
         </div>
       </Container>
     </div>
    </section >
  );
}

export default App;
