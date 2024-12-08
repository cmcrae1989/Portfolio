import React from "react";
import {Accordion, Card, Image} from "react-bootstrap";
import '../styles/project.css'
import Typewriter from "./Typewriter";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Money Tracker App</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Img src="moneyTracker.png"/>
                            <Card.Body>
                                <p>MoneyTrackerApp is a software program that allows users to track
                                    their finances in an effective and visually pleasing manner. Once
                                    signed up users can add, update and delete transactions. This
                                    program even allows enough flexibility for users to add and delete
                                    their own unique categories for future transactions. Follow the
                                    Getting Started Guide below to get this app up and running!
                                </p>
                            </Card.Body>
                        </Card>
                        {/*<div className="accordion-container">*/}
                        {/*    <Image src="../../public/moneyTracker.png" rounded></Image>*/}
                        {/*</div>*/}

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Project 2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Project 3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}