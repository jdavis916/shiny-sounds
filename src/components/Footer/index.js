import React from 'react'
import {Row,Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="container">
      <Row>
        <Col md={4}>Footer</Col>
        <Col md={4}>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </Col>
        <Col md={4}>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </Col>
      </Row>      
      {/*<Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>*/}
    </footer>

    
  )
}

export default Footer