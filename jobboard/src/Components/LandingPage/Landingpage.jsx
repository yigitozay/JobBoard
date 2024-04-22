import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import backgroundImage from '../../assets/background.jpg'
import Logo from './Logos';

const LandingPage = () => {
    const people = [
        { id: 1, name: 'Avaz Majidov', imageSrc: 'https://randomuser.me/api/portraits/men/1.jpg', description: 'This app helped me get a job at Mcdonalds I recommend %100.' },
        { id: 2, name: 'Paul Howard', imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg', description: 'What am I even doing here.' },
        { id: 3, name: 'Yiğit Özay', imageSrc: 'https://randomuser.me/api/portraits/men/3.jpg', description: 'Which is harder? creating diamond from coal or finding a job in Poland?.' },
        { id: 4, name: 'Avaz Majidov', imageSrc: 'https://randomuser.me/api/portraits/men/4.jpg', description: 'This app helped me get a job at Mcdonalds I recommend %100.' },
        { id: 5, name: 'Paul Howard', imageSrc: 'https://randomuser.me/api/portraits/men/5.jpg', description: 'What am I even doing here.' },
        { id: 6, name: 'Yiğit Özay', imageSrc: 'https://randomuser.me/api/portraits/men/6.jpg', description: 'Which is harder? creating diamond from coal or finding a job in Poland?.' },
    ];
    
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-gray mt-3">Welcome to JobBoard App</h1>
                    <p className="text-gray mt-3">Explore the world of possibilities with us.</p>
                    <Button variant="primary" size="lg">Get Started</Button>
                </Container>
            </div>

            <Container className="my-5">
            <h1 className="text-gray mt-3 text-center mb-5">Companies We Work With</h1>

              <Logo />
            </Container>

            <Container fluid className="my-5" style={{ overflowX: 'auto' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    padding: '20px',
                    gap: '20px'
                }}>
                    {people.map((person) => (
                        <div key={person.id} style={{ flex: '0 0 auto', minWidth: '18rem' }}>
                            <Card>
                                <Card.Img 
                                    variant="top" 
                                    src={person.imageSrc} 
                                    style={{
                                        height: '200px', // Set a fixed height
                                        width: '100%', // Set width to cover the card width
                                        objectFit: 'cover' // Cover the area without stretching the image
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                    <Card.Text>{person.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>

            <footer className="bg-dark text-white text-center p-3">
                © 2024 Yiğit Özay
            </footer>
        </div>
    );
};

export default LandingPage;
