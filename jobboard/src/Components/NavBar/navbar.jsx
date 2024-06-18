import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Navbarr.css'; 
import logo from "../../logo.png";
import { signUpWithEmailPassword, signInWithEmailPassword, signInWithGoogle, logOut } from '../../firebase'; 
import { FaGoogle } from 'react-icons/fa';

const Navbarr = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSignup = async () => {
    try {
      await signUpWithEmailPassword(email, password);
      closeModal('signup');
      alert('Signup successful');
      navigate('/main');
    } catch (error) {
      console.error('Error signing up: ', error);
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailPassword(email, password);
      closeModal('login');
      alert('Login successful');
      navigate('/main');
    } catch (error) {
      console.error('Error logging in: ', error);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      closeModal('login');
      alert('Google login successful');
      navigate('/main'); 
    } catch (error) {
      console.error('Error with Google login: ', error);
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      alert('Logged out successfully');
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out: ', error);
      alert(error.message);
    }
  };

  const openModal = (type) => {
    resetForm();
    if (type === 'signup') {
      setShowSignup(true);
    } else if (type === 'login') {
      setShowLogin(true);
    }
  };

  const closeModal = (type) => {
    if (type === 'signup') {
      setShowSignup(false);
    } else if (type === 'login') {
      setShowLogin(false);
    }
  };

  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top navbar-logo"
              alt="Logo"
            />
            JobBoardTest
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {user ? (
                <>
                  <Button variant="link" className="nav-link-custom" onClick={() => navigate('/tracked-jobs')}>Tracked Jobs</Button>
                  <Button variant="link" className="nav-link-custom" onClick={handleLogout}>Sign Out</Button>
                  <Button variant="link" className="nav-link-custom" onClick={() => navigate('/profile')}>Profile</Button>
                </>
              ) : (
                <>
                  <Button variant="link" className="nav-link-custom" onClick={() => openModal('login')}>Login</Button>
                  <Button variant="link" className="nav-link-custom" onClick={() => openModal('signup')}>Signup</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => closeModal('signup')} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="w-100 text-center">Signup</Modal.Title>
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
          <Button variant="secondary" onClick={() => closeModal('signup')} className="rounded-pill px-4">
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup} className="rounded-pill px-4">
            Signup
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => closeModal('login')} centered>
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
          <Button variant="secondary" onClick={() => closeModal('login')} className="rounded-pill px-4">
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin} className="rounded-pill px-4">
            Login
          </Button>
          <Button variant="danger" onClick={handleGoogleLogin} className="rounded-pill px-4">
            <FaGoogle />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbarr;
