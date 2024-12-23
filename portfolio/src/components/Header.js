import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'../styles/header.css'
import {useEffect, useState} from "react";
import IconNavBar from "./IconNavBar";

function Header() {
    // State to keep track of the active section
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section'); // All sections
        const observerOptions = {
            root: null, // Observe within the viewport
            rootMargin: '0px 0px -100% 0px', // No margin to the viewport
            threshold: 0, // Trigger when 50% of the section is visible
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                console.log(entry.target.id, entry.isIntersecting, entry.intersectionRatio);
                if (entry.isIntersecting) {
                    // When the section is 50% in view, set it as the active section
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observe each section
        sections.forEach((section) => {
            observer.observe(section);
        });

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div>
            <Navbar className={activeSection === 'projects' ? 'bg-primary' : 'bg-secondary'}>
                <Container>
                    <Navbar.Brand
                        href="#projects"
                        className={activeSection === 'projects' ? 'active' : ''}
                    >
                        Projects
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className={activeSection === 'skills' ? 'bg-primary' : 'bg-secondary'}>
                <Container>
                    <Navbar.Brand
                        href="#skills"
                        className={activeSection === 'skills' ? 'active' : ''}
                    >
                        Skills
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className={activeSection === 'work' ? 'bg-primary' : 'bg-secondary'}>
                <Container>
                    <Navbar.Brand
                        href="#work"
                        className={activeSection === 'work' ? 'active' : ''}
                    >
                        Work
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className={activeSection === 'contact' ? 'bg-primary' : 'bg-secondary'}>
                <Container>
                    <Navbar.Brand
                        href="#contact"
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Contact
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <IconNavBar/>
        </div>
    );
}
export default Header;