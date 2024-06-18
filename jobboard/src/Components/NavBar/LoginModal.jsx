import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';

const LoginModal = ({ show, handleClose, handleLogin, handleGoogleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleCloseModal = () => {
    resetForm();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form>
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center">
        <Button variant="secondary" onClick={handleCloseModal} className="rounded-pill px-4">
          Close
        </Button>
        <Button variant="primary" onClick={() => handleLogin(email, password)} className="rounded-pill px-4">
          Login
        </Button>
        <Button variant="danger" onClick={handleGoogleLogin} className="rounded-pill px-4">
          <FaGoogle />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
