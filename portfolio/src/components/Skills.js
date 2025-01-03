import * as React from "react";
import '../styles/skills.css'
import {Card, Col, ListGroup, Row, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss, faHtml5, faJava, faPhp, faReact} from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item variant="dark" action href="#link1">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faReact} />
                                    <p>React.js</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link2">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faAngular} />
                                    <p>Angular</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link3">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faJava} />
                                <p>Java</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link4">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faPhp} />
                                    <p>PHP</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link5">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faHtml5} />
                                <p>HTML</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link6">
                                <div className="listItemContainer">
                                    <FontAwesomeIcon icon={faCss} />
                                    <p>CSS</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: 1.5 years self-taught</h3>
                                        </Card.Title>
                                        <p>
                                            Shortly after learning the basics of html, css, and
                                            javaScript I moved on to learn React.js. This is where I
                                            built the majority of my web applications. I quickly fell
                                            in love with its simple learning curve, ease of use and
                                            its broad array of features.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: JavaScript Frameworks Class</h3>
                                        </Card.Title>
                                        <p>
                                            This is my second go-to JavaScript framework. There is definitely
                                            a learning curve here, but once adapted to the workflow there
                                            are seemingly endless possibilities to this front-end technology
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: Java Class for Three Semesters</h3>
                                        </Card.Title>
                                        <p>
                                            Although its not specifically a web technology, java has
                                            become one of my favourite programming languages. Two of my
                                            projects listed above were build almost explicitly using java
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: Two Semesters of PHP Class</h3>
                                        </Card.Title>
                                        <p>
                                            php is another language that has quickly become a favourite of
                                            mine. It has a very unique syntax that I've grown to enjoy, and
                                            it is so easily integrated into almost any web project. my third
                                            project listed above was using php.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: 1.5 years self-taught plus two classes</h3>
                                        </Card.Title>
                                        <p>
                                            HTML is one of the first web technologies that I learned to use, it is
                                            simple, easy to use, and very easy to read. After 1.5 years of learning
                                            HTML in tandem with CSS, I had multiple courses in school that helped
                                            solidify and build upon my foundational knowledge.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <Card>
                                    <Card.Body className="cardBody">
                                        <Card.Title>
                                            <h3 className="grey-text">Experience: 1.5 years self-taught plus two classes</h3>
                                        </Card.Title>
                                        <p>
                                            CSS is one of the first web technologies that I learned to use, it is
                                            simple, easy to use, and very easy to read. After 1.5 years of learning
                                            CSS in tandem with HTML, I had multiple courses in school that helped
                                            solidify and build upon my foundational knowledge.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}