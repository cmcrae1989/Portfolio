import * as React from "react";
import '../styles/skills.css'
import {Card, Col, ListGroup, Row, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss, faHtml5, faJava, faPhp, faReact} from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item variant="dark" action href="#link1">
                                <div className="listItemContainer">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faReact}/>
                                    </div>
                                    <p>React.js</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link2">
                                <div className="listItemContainer">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faAngular}/>
                                    </div>
                                    <p>Angular</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link3">
                                <div className="listItemContainer">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faJava}/>
                                    </div>
                                    <p>Java</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link4">
                            <div className="listItemContainer">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faPhp} />
                                    </div>
                                    <p>PHP</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link5">
                                <div className="listItemContainer">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faHtml5}/>
                                    </div>
                                    <p>HTML</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#link6">
                            <div className="listItemContainer">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faCss}/>
                                </div>
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
                                            After mastering the fundamentals of HTML, CSS, and JavaScript, I
                                            transitioned to learning React.js, where I developed the majority
                                            of my web applications. I quickly grew fond of its intuitive
                                            learning curve, user-friendly nature, and powerful feature set.
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
                                            This is my second preferred JavaScript framework. While there’s a learning
                                            curve, once you adapt to its workflow, the possibilities with this front-end
                                            technology feel endless.
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
                                            While not traditionally a web technology, Java has become one of my
                                            favorite programming languages. Two of the projects listed above were
                                            built primarily using Java.
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
                                            PHP is another language I’ve quickly grown fond of. Its unique syntax
                                            is something I enjoy, and its seamless integration into virtually any
                                            web project makes it incredibly versatile. My third project listed above
                                            was built using PHP.
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
                                            HTML was one of the first web technologies I learned, and I appreciate
                                            its simplicity, ease of use, and readability. After 1.5 years of studying
                                            HTML alongside CSS, I took several courses that further solidified and
                                            expanded my foundational knowledge.
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
                                            CSS was one of the first web technologies I mastered, and I
                                            appreciate its simplicity, ease of use, and readability. After
                                            1.5 years of learning CSS alongside HTML, I took several courses
                                            that helped solidify and expand my foundational knowledge.
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