import * as React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, NavLink, Row, Stack} from "react-bootstrap";
import '../styles/footer.css'
import Nav from "react-bootstrap/Nav";

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className= "bg-primary text-white p-4">
                    <Col className="mx-5">
                        <Stack>
                            <Image
                                src="logo192.png"
                                alt="Logo"
                                rounded
                                width={150}
                                height={150}
                            />
                            <h2>Cameron McRae</h2>
                            <p>Web Developer</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <p>Useful Links</p>
                            <NavLink href="#" className="text-white">About</NavLink>
                            <NavLink href="#" className="text-white">Projects</NavLink>
                            <NavLink href="#" className="text-white">Skills</NavLink>
                            <NavLink href="#" className="text-white">Contact</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contact Me</h4>
                        <p>email: w0796224@myscc.ca</p>
                        <p>phone: +1(226)350-3953</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}