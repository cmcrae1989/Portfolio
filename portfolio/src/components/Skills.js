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
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>React.js</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>Angular</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>Java</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>PHP</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>HTML</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>CSS</h5>
                                        </Card.Title>
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