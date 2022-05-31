import nft1 from '../../Assets/nft1.png';
import nft2 from '../../Assets/nft2.png';
import nft3 from '../../Assets/nft3.png';
import nft4 from '../../Assets/nft4.png';

import { Col, Container, Row, Form, Button, Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Counter from '../../Extends/Counter.js';
function ExploreMarket() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
      const [toggle2, setToggle2] = useState(true);
    
      const toggleSealAttribute = () => {
        setToggle2(!toggle2)
      };
    return (
      <section className='main'>
         <div className="explore-main">
             <Container>
             <div className='upcoming-main'>
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
     </div>
     <div className='upcoming-main'>
       <div className='upcoming-head'>
         <h4>
            Featured Drops 
         </h4>
       </div>
       <Row>
           <Col md={3}>
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
         </div>
           </Col>
           <Col md={3}>
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
         </div>
           </Col>
           <Col md={3}>
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
         </div>
           </Col>
           <Col md={3}>
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
         </div>
           </Col>
       </Row>
     </div>
            <div className='filter-res-main'>
                <Row>
                    <Col md={3}>
                        <div className='filter-lst'>
                            <h6>filter by</h6>
                            <label>Category</label>
                            <Form.Select>
                                <option>Merchants</option>
                                <option value="Merchant_1">Merchant 1</option>
                                <option value="Merchant_2">Merchant 2</option>
                                <option value="Merchant_3">Merchant 3</option>
                            </Form.Select>
                            <label>Country</label>
                            <Form.Select>
                                <option value="Country_1">Country 1</option>
                                <option value="Country_2">Country 2</option>
                                <option value="Country_3">Country 3</option>
                            </Form.Select>
                            <div className='sub1'>
                            <label>State</label>
                            <Form.Select>
                                <option value="State_1">State 1</option>
                                <option value="State_2">State 2</option>
                                <option value="State_3">State 3</option>
                            </Form.Select>
                            </div>
                            <div className='sub1'>
                            <label>City</label>
                            <Form.Select>
                                <option value="City_1">City 1</option>
                                <option value="City_2">City 2</option>
                                <option value="City_3">City 3</option>
                            </Form.Select>
                            </div>
                            <label>Merchant Name</label>
                            <Form.Select>
                                <option value="Merchant_name_1">Merchant Name 1</option>
                                <option value="Merchant_name_2">Merchant Name 2</option>
                                <option value="Merchant_name_3">Merchant Name 3</option>
                            </Form.Select>
                            <label>Artist</label>
                            <Form.Select>
                                <option value="Artist_1">Artist 1</option>
                                <option value="Artist_2">Artist 2</option>
                                <option value="Artist_3">Artist 3</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col md={9}>
                    <Tab.Container defaultActiveKey="first">
                    <div className={ toggle2 == false ? 'list' : 'grid' }>
       <div className='upcoming-head'>
         <h4>
            Filter Results 
         </h4>
         <ul>
             <li>
             <Nav.Item>
          <Nav.Link eventKey="first" onClick={toggleSealAttribute}><FontAwesomeIcon icon={toggle2 == false ? solid('grip') : solid('bars')} /> {toggle2 == false ? 'Grid' : 'List'}</Nav.Link>
        </Nav.Item>
             </li>
             <li>
             <Nav.Item>
          <Nav.Link eventKey="second"><FontAwesomeIcon icon={solid('map-location-dot')} />Map</Nav.Link>
        </Nav.Item>
             </li>
         </ul>
        
       </div>
       <Tab.Content>
       <Tab.Pane eventKey="first">
       <Row>
           <Col md={ toggle2 == false ? 12 : 4 } >
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
         </div>
           </Col>
           <Col md={ toggle2 == false ? 12 : 4 }>
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
         </div>
           </Col>
           <Col md={ toggle2 == false ? 12 : 4 }>
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
         </div>
           </Col>
           <Col md={ toggle2 == false ? 12 : 4 }>
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
         </div>
           </Col>
       </Row>
       </Tab.Pane>
       <Tab.Pane eventKey="second">
           <div className='map-view'>
           <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798690443!2d-74.25986137403241!3d40.697670071475855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26151aa1cd2f9%3A0x88f744f2777b2add!2sDashible!5e0!3m2!1sen!2s!4v1654035934310!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
     
           </div>
       </Tab.Pane>
       </Tab.Content>
     </div>
     </Tab.Container>
                    </Col>
                </Row>
            </div>
             </Container>
         </div>
      </section >
    );
  }
  
  export default ExploreMarket;
  