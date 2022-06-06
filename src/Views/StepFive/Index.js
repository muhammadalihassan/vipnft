import React, { useState } from 'react'
import { Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div >
         <div className='step-1-txt'>
            <h6>Company Information</h6>
        </div>
        <Row className='bc-row'>
          <Col md={12}>
            <div className='step-3-lst'>
                <Row>
                    <Col md={6}>
                        <div className='com-info'>
                        <FontAwesomeIcon icon={solid('user')} />
                       <h6>FIRST NAME<span>John</span></h6>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('user')} />
                       <h6>LAST NAME<span>Kyle</span></h6>
                       </div>
                    </Col>
                    <Col md={12}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('envelope')} />
                       <h6>LAST NAME<span>Kyle</span></h6>
                       </div>
                    </Col>
                    <Col md={6}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('location-dot')} />
                       <h6>STATE<span>US</span></h6>
                       </div>
                    </Col>
                    <Col md={6}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('location-dot')} />
                       <h6>CITY<span>Washington</span></h6>
                       </div>
                    </Col>
                    <Col md={12}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('globe')} />
                       <h6>WEBSITE<span>www.youtube.com</span></h6>
                       </div>
                    </Col>
                    <Col md={6}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('link')} />
                       <h6>INSTAGRAM<span>www.youtube.com</span></h6>
                       </div>
                    </Col>
                    <Col md={6}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('link')} />
                       <h6>TWITTER<span>www.youtube.com</span></h6>
                       </div>
                    </Col>
                    <Col md={12}>
                    <div className='com-info'>
                        <FontAwesomeIcon icon={solid('link')} />
                       <h6>TIKTOK<span>www.youtube.com</span></h6>
                       </div>
                    </Col>
                </Row>
            </div>
          </Col>
        </Row>
    </div>
  )
}