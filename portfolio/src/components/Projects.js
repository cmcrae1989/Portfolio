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
                                <div>
                                    <h3>Description</h3>
                                    <p>MoneyTrackerApp is a software program that allows users to track
                                        their finances in an effective and visually pleasing manner. Once
                                        signed up users can add, update and delete transactions. This
                                        program even allows enough flexibility for users to add and delete
                                        their own unique categories for future transactions. Follow the
                                        Getting Started Guide below to get this app up and running!
                                    </p>
                                </div>
                                <div>
                                    <h3>Technology used</h3>
                                    <ul>
                                        <li>javaFX</li>
                                        <li>Gradle</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Easiest Game</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Img src="EasiestGame.png"/>
                                <Card.Body>
                                    <div>
                                        <h3>Description</h3>
                                        <p>Javafx program based off of https://www.coolmathgames.com/0-worlds-hardest-game.
                                            This was a group project where I collaborated with two other students.
                                            My portion involved level design/implementation and all in-game mechanics
                                        </p>
                                    </div>
                                    <div>
                                        <h3>Technology used</h3>
                                        <ul>
                                            <li>javaFX</li>
                                            <li>Gradle</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Run Tracker</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Img src="runApp.png"/>
                            <Card.Body>
                                <div>
                                    <h3>Description</h3>
                                    <p>Run Tracker is a website that allows a user to create credentials, login,
                                        and start recording/tracking specific running metrics. These metrics are
                                        stored in a database to be displayed on the home screen. Specific runs
                                        can be created and deleted.
                                    </p>
                                </div>
                                <div>
                                    <h3>Technology used</h3>
                                    <ul>
                                        <li>php</li>
                                        <li>MySQL</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}