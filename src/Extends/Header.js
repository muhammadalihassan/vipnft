// SITE LOGO
import logo from '../Assets/logo-main.png';
import infi from '../Assets/infi.png';

import { Navbar, Nav, Container, NavDropdown, Form, Button, Dropdown, InputGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
      <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form.Select>
          <option>Find a Collection</option>
        </Form.Select>
        <Nav >
            {/* <Nav.Item>
              <NavLink exact to="/" className='active'><span>Home</span></NavLink>
            </Nav.Item> */}
            <Nav.Item>
              <NavLink exact to="/ExploreMarket"><FontAwesomeIcon icon={solid('cart-shopping')} /><span>Explore Market</span></NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/Livefeed"><FontAwesomeIcon icon={solid('warehouse')} /><span>Your Collection</span></NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact to="/ProjectStatistics"><FontAwesomeIcon icon={solid('id-card')} /><span>Your Transactions</span></NavLink>
            </Nav.Item>
          </Nav>
          <div className='header-lft'>
          {/* <InputGroup className="country">
            <InputGroup.Text><img src={infi} alt="" /></InputGroup.Text>
            <Form.Select>
              <option>Mumbai</option>
            </Form.Select>
          </InputGroup> */}
          <p><span>0</span> MATIC</p>
          <a href='' className='med-btn'>authenticate</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
  