import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { siFacebook, siAmazon, siNetflix, siGoogle, siReact } from 'simple-icons/icons';

const Logo = () => {
    return (
        <Row className="justify-content-center">
        <Col xs={6} md={4} lg={2}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(siFacebook.svg)}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="img-fluid" alt="Facebook Logo" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(siAmazon.svg)}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="img-fluid" alt="Amazon Logo" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(siNetflix.svg)}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="img-fluid" alt="Netflix Logo" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(siGoogle.svg)}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="img-fluid" alt="Google Logo" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(siReact.svg)}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="img-fluid" alt="React Logo" />
        </Col>
        </Row>
    );
  };
  
  export default Logo;
  