import '../styles/work.css'
import {Card} from "react-bootstrap";

export default function work() {
    return (
        <div className="work" id="work">
            <h2>Work</h2>
            <Card>
                <Card.Body>
                    <div className="card-body-left">
                        <p className="date-text">2024 - present</p>
                    </div>
                    <div className="card-body-right">
                        <h3 className="body-text">St. Clair College</h3>
                        <p className="body-text">
                            Currently working as a tutor for the Mobile Applications Development
                            program. I help students grasp fundamental concepts in Angular, JavaScript, HTML,
                            CSS, PHP, MySQL, and Java.
                        </p>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <div className="card-body-left">
                        <p className="date-text">2024 - present</p>
                    </div>
                    <div className="card-body-right">
                        <h3 className="body-text">Family Respite Services</h3>
                        <p className="body-text">
                            Currently working as a Direct Support Provider for families
                            in need of assistance, providing relief in various forms. Work
                            to encourage good habits in children with intellectual disabilities
                            through positive reinforcement and encouragement.
                        </p>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <div className="card-body-left">
                        <p className="date-text">2022 - 2024</p>
                    </div>
                    <div className="card-body-right">
                        <h3 className="body-text">Home Instead</h3>
                        <p className="body-text">
                            Previous employment involved working with vulnerable populations in a
                            caregiver position. Responsibilities included respite-care, supervision,
                            administration of medication, and providing personal care throughout daily
                            activities.
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}