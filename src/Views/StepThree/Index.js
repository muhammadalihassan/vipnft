import React, { useState } from 'react'
import { Row, Col, Form} from 'react-bootstrap';
import bc from '../../Assets/business-card.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import yelp from '../../Assets/yelp.jpg';

export default () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div>
      <div className='step-1-txt'>
            <h6>Company Information</h6>
        </div>
        <Row className='bc-row'>
          <Col md={5}>
            <div className='bc-main'>
            <div className='bc-div'>
              <img src={bc} />
            </div>
            <p>BUSINESS IMAGE FROM</p>
            </div>
            
          </Col>
          <Col md={7}>
            <div className='step-3-lst'>
              <ul>
                <li>
                   <FontAwesomeIcon icon={solid('building')} />
                   <span>COMPANY NAME</span>
                </li>
                <li>
                   <FontAwesomeIcon icon={solid('mobile-screen-button')} />
                   <span>COMPANY PHONE NUMBER</span>
                </li>
                <li>
                   <FontAwesomeIcon icon={solid('location-dot')} />
                   <span>COMPANY ADDRESS</span>
                </li>
                <li>
                   <FontAwesomeIcon icon={solid('location-dot')} />
                   <span>STATE</span>
                </li>
                <li>
                   <FontAwesomeIcon icon={solid('location-dot')} />
                   <span>ZIPCODE<b>11216</b></span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className='step-3-fields'>
          <div className='field-img'>
            <Col md={6}>
            <img src={yelp} />
            </Col>
          </div>
          
          <Row>
        <Col md={6}>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='Enter your First Name'
            type='text'
            autoFocus
          />
        </Col>
      
      <Col md={6}>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Enter your Last Name'
            type='text'
          />
        </Col>
        <Col md={12}>
        <label>Email</label>
          <input
            className='u-full-width'
            placeholder='Email'
            type='email'
          />
        </Col>
        </Row>
        </div>
       
    </div>
  )
}