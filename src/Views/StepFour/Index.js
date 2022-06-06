import React, { useState } from 'react'
import { Row, Col, Form} from 'react-bootstrap';

export default () => {
  return (
    <div>
      <div className='step-1-txt'>
        </div>
      <div className='step-3-fields'>
          <Row>
        <Col md={4}>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='Enter your First Name'
            type='text'
            autoFocus
          />
        </Col>
      
      <Col md={4}>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Enter your Last Name'
            type='text'
          />
        </Col>
        <Col md={4}>
        <label>Email</label>
          <input
            className='u-full-width'
            placeholder='Email'
            type='email'
          />
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
        <Col md={6}>
        <label>City</label>
          <input
            className='u-full-width'
            placeholder='City'
            type='text'
          />
        </Col>
        <Col md={12}>
        <label>where can we see your work (url) ?</label>
          <input
            className='u-full-width'
            placeholder='URL'
            type='text'
          />
        </Col>
        <Col md={12}>
          <div className='sep-class'>
            <h6>Social media handles</h6>
          </div>
        </Col>
        <Col md={6}>
        <label>Instagram</label>
          <input
            className='u-full-width'
            placeholder='Instagram'
            type='text'
          />
        </Col>
        <Col md={6}>
        <label>Twitter</label>
          <input
            className='u-full-width'
            placeholder='Twitter'
            type='text'
          />
        </Col>
        <Col md={6}>
        <label>TikTok</label>
          <input
            className='u-full-width'
            placeholder='TikTok'
            type='text'
          />
        </Col>
        </Row>
        </div>
    </div>
  )
}