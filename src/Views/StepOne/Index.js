import React, { useState } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button, Form, Modal} from 'react-bootstrap';
import yelp from '../../Assets/yelp.jpg';
export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className='form-layout'>
        <div className='step-1-txt'>
            <h6>Link With Yelp <img src={yelp} /></h6>
            <p>Dashible with VIP NFT is not affiliated with Yelp but in order
                 to use Dashible with VIP NFT you must have a claimed Yelp business profile.
                  Enter the information below and click the "Link my Business with Yelp" button
                   to get started.</p>
        </div>
      <Row>
        <Col md={6}>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </Col>
      
      <Col md={6}>
        <div className='six columns'>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        </Col>
        </Row>
    </div>
  )
}