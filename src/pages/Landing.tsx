import '../styles/Landing.css';
import Header from '../components/LandingHeader';
import Cart from '../pages/Cart';
import {goTo} from 'react-chrome-extension-router';
import { Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap';

function Landing() {
    return (
        <div className="loginPage">
            <Header />

            <div className="login">
            <Form className = "form">
                <div className="text-and-field">
                    <p className="above-field-text">Name</p>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control required type="name" placeholder="Rachel Curwen" />
                    </Form.Group>
                </div>

                <div className="text-and-field">
                    <p className="above-field-text">Email</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="email" placeholder="johndoe@gmail.com" />
                    </Form.Group>
                </div>

                <div className="text-and-field">
                    <p className="above-field-text">Password</p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required type="password" placeholder="Enter your password" />
                    </Form.Group>
                </div>

                <div className="text-and-field">
                    <p className="above-field-text">Confirm Password</p>
                    <Form.Group className="mb-3" controlId="formConfirmPassword" >
                        <Form.Control required type="password" placeholder="Re-Enter your password" />
                    </Form.Group>
                </div>

                <Button className="signup-button" onClick={() => goTo(Cart)}>
                    Sign Up
                </Button>
            </Form>
            </div>

        </div>
    );
  }
  
  export default Landing;