import React, { useState } from 'react'
import { Row, Col, Form} from 'react-bootstrap';
import yelp from '../../Assets/yelp.jpg';

export default () => {
  return (
    <div className=''>
        <div className='step-1-txt'>
            <h6>Is This Your Business?</h6>
            <p>Link Your Yelp account so that we can retrieve your business information.</p>
        </div>
      <div className='step-2-check'>
  {['radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`I don't see my Business ${type}`}
      />
    </div>
  ))}
  <p>We can't find your business page in yelp business directory.
Please first register with yelp and try again.</p>
      </div>
    </div>
  )
}