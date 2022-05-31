import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

// SITE LOGO


function Footer() {
  return (
    <div className="main-footer">
      <Container fluid>
      <Row>
        <Col md={4}>
        <ul>
        <li>
          <a href="#"><FontAwesomeIcon icon={brands('instagram')} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={brands('facebook-square')} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={brands('twitter')} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={brands('tiktok')} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={brands('discord')} /></a>
        </li>
      </ul>
        </Col>
     <Col md={4}>
     <p>Copyright 2022 Dashible Inc.</p>
     </Col>
     <Col md={4}><p>A Dashible Company</p></Col>
      </Row>
      </Container>
    </div>
  );
}

export default Footer;
