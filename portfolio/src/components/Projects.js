import React from "react";
import {Accordion, Card, Image} from "react-bootstrap";
import '../styles/project.css'
import Typewriter from "./Typewriter";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Money Tracker App</Accordion.Header>
                    <Accordion.Body className="accordionBody">
                        <Card>
                            <Card.Img src="moneyTracker.png"/>
                            <Card.Body className="cardBody">
                                <div>
                                    <h3>Description</h3>
                                    <p>MoneyTrackerApp is a user-friendly software that helps
                                        individuals track their finances in an organized and
                                        visually appealing way. After signing up, users can
                                        easily add, update, and delete transactions. The app
                                        also offers flexibility, allowing users to create and
                                        manage custom categories for future transactions.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="secondary-heading">Technology used</h3>
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
                    <Accordion.Body className="accordionBody">
                        <Card>
                            <Card.Img src="EasiestGame.png"/>
                                <Card.Body className="cardBody">
                                    <div>
                                        <h3>Description</h3>
                                        <p>This JavaFX program is based on the game from Cool Math Games.
                                            It was a group project where I collaborated with two other
                                            students. My responsibilities included designing and
                                            implementing the levels, as well as developing all in-game mechanics.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="secondary-heading">Technology used</h3>
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
                    <Accordion.Body className="accordionBody">
                        <Card>
                            <Card.Img src="runApp.png"/>
                            <Card.Body className="cardBody">
                                <div>
                                    <h3>Description</h3>
                                    <p>Run Tracker is a website that enables users to create accounts,
                                        log in, and track specific running metrics. These metrics are
                                        stored in a database and displayed on the home screen. Users
                                        can create, view, and delete individual run entries as needed.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="secondary-heading">Technology used</h3>
                                    <ul>
                                        <li>PHP</li>
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