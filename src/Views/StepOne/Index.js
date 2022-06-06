import React, { useState } from 'react'
import { Row, Col, Form} from 'react-bootstrap';
import yelp from '../../Assets/yelp.jpg';
export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div >
        <div className='step-1-txt'>
            <h6>Link With Yelp <img src={yelp} /></h6>
            <p>Dashible with VIP NFT is not affiliated with Yelp but in order
                 to use Dashible with VIP NFT you must have a claimed Yelp business profile.
                  Enter the information below and click the "Link my Business with Yelp" button
                   to get started.</p>
        </div>
      <Row>
        <Col md={12}>
          <label>Company Name</label>
          <input
            className='u-full-width'
            placeholder='Please enter your Company Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </Col>
      
      <Col md={6}>
        <div className='six columns'>
          <label>Zipcode</label>
          <input
            className='u-full-width'
            placeholder='Company Zipcode'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        </Col>
        <Col md={6}>
        <label>State</label>
        <Form.Select aria-label="Select State">
        <option>Select State</option>
          <option value="1">New York</option>
          <option value="2">New Jersey</option>
          <option value="3">Georgia</option>
        </Form.Select>
        </Col>
        </Row>
    </div>
  )
}