import nft1 from '../../Assets/nft1.png';
import nft2 from '../../Assets/nft2.png';
import nft3 from '../../Assets/nft3.png';
import nft4 from '../../Assets/nft4.png';

import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component, useState} from "react";
function Showcase() {
    const [expanded, setExpanded] = useState(false);
    const setExpand = () => {
      setExpanded(false);
      window.scrollTo(0, 0);
    }
    return (
      <section className='main'>
         <div className='showcase-main'>
             <Container>
                 <div className='merchant-showcase'>
                     <Row>
                         <Col md={5} lg={5} xl={4}>
                             <div className='merchant-widget'>
                             <div className='up-wid'>
                                <Link as={Link} to="/Showcase" onClick={setExpand}>
                                <div className='up-img'>
                                    <img src={nft1} alt="" />
                                </div>
                                <div className='merc-txt'>
                                    <h4>Merchant</h4>
                                </div>
                                </Link>
                                </div>
                                 <ul>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('facebook-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('instagram-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('twitter-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('discord')} />
                                         </a>
                                     </li>
                                 </ul>
                             </div>
                         </Col>
                         <Col md={2}>
                             <div className='and-txt'>
                                 <h5>&</h5>
                             </div>
                         </Col>
                         <Col md={5} lg={5} xl={4}>
                         <div className='merchant-widget'>
                             <div className='up-wid'>
                                <Link as={Link} to="/Showcase" onClick={setExpand}>
                                <div className='up-img'>
                                    <img src={nft2} alt="" />
                                </div>
                                <div className='merc-txt'>
                                    <h4>Artist</h4>
                                </div>
                                </Link>
                                </div>
                                 <ul>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('facebook-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('instagram-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('twitter-square')} />
                                         </a>
                                     </li>
                                     <li>
                                         <a href='#'>
                                            <FontAwesomeIcon icon={brands('discord')} />
                                         </a>
                                     </li>
                                 </ul>
                             </div>
                         </Col>
                     </Row>
                 </div>
                 <div className='title-txt'>
                     <h3>Get Your Bubble Tea On</h3>
                 </div>
                 <div className='upcoming-main'>
       <Row>
           <Col md={3}>
           <div className='up-wid'>
         <Link as={Link} to="/Showcase" onClick={setExpand}>
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
         <Link as={Link} to="/Showcase" onClick={setExpand}>
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
         <Link as={Link} to="/Showcase" onClick={setExpand}>
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
         <Link as={Link} to="/Showcase" onClick={setExpand}>
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
             </Container>
         </div>
      </section >
    );
  }
  
  export default Showcase;
  