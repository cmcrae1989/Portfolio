// import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import'../styles/header.css'

function Header() {
    return (
        // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header-container">
        //     <Container>
        //         <Navbar.Brand href="#home">Cameron McRae</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#about">About</Nav.Link>
        //                 <Nav.Link href="#projects">Projects</Nav.Link>
        //                 <Nav.Link href="#skills">Skills</Nav.Link>
        //             </Nav>
        //             <Nav>
        //
        //                 <Nav.Link href="#contact">
        //                     Contact
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <div>
            <Navbar className="bg-secondary">
                <Container>
                    <Navbar.Brand href="#home">Projects</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-secondary">
                <Container>
                    <Navbar.Brand>Skills</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-secondary">
                <Container>
                    <Navbar.Brand href="#home">
                        Work
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-secondary">
                <Container>
                    <Navbar.Brand href="#projects">
                        Contact
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;