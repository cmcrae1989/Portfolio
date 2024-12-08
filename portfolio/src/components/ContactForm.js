import * as React from 'react';
import {Button, Form} from "react-bootstrap";
import '../styles/contactForm.css';

export default function ContactForm() {
    return (

        <div className="contactForm" id="contact">
            <h1>Contact Me</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label column="lg">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label column="lg">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label column="lg">Leave a message</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check if you'd like a reply at the email listed above"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

//TODO implement modal on form submission