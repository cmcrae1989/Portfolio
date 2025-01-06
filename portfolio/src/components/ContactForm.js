import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/contactForm.css';
import FormModal from './FormModal';
import { useState } from 'react';

export default function ContactForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
        checkEmail: false, // Make sure this is part of the state
    });

    // State for validation messages
    const [validated, setValidated] = useState(false);
    // State for validation errors
    const [errors, setErrors] = useState({
        email: '',
        name: '',
        message: '',
        checkEmail: '',
    });
    // State for modal visibility
    const [modalShow, setModalShow] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};
        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        // Name validation
        if (!formData.name) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long';
        }
        // Message validation
        if (!formData.message) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message is not long enough';
        }
        // Checkbox validation
        if (!formData.checkEmail) {
            newErrors.checkEmail = 'You must check this box to receive a reply';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setModalShow(true);
            setFormData({ email: '', name: '', message: '', checkEmail: false });
        } else {
            console.log('form errors');
        }
    };

    return (
        <div className="contactForm" id="contact">
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label column="lg">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label column="lg">Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label column="lg">Leave a message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Leave a comment here"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Check if you'd like to recieve a reply."
                        name="checkEmail"
                        checked={formData.checkEmail} // Bind checkbox to state
                        onChange={handleChange} // Update state on change
                    />
                    {errors.checkEmail && <span className="error-text">{errors.checkEmail}</span>}
                </Form.Group>

                <Button className="custom-button" variant="primary" type="submit">
                    Submit
                </Button>

                <FormModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Form>
        </div>
    );
}