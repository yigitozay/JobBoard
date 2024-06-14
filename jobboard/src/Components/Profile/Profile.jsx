import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  return (
    <Container className="profile-page mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Header className="profile-card-header">
              <h2>Profile</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formProfileName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formProfileEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" disabled />
                </Form.Group>

                <Form.Group controlId="formProfilePassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter new password" />
                </Form.Group>

                <Button variant="primary" className="mt-4" type="submit">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
