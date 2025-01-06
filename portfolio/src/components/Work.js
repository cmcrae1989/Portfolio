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
                            I currently tutor students in the Mobile Applications
                            Development program, guiding them through core concepts
                            in Angular, JavaScript, HTML, CSS, PHP, MySQL, and Java.
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
                            I currently serve as a Direct Support Provider, offering
                            assistance and relief to families in need. My role
                            involves promoting positive habits in children with
                            intellectual disabilities through encouragement, positive
                            reinforcement, and tailored support.
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
                            In my previous role, I worked as a caregiver for vulnerable
                            populations, providing respite care, supervision, medication
                            administration, and assistance with personal care during daily
                            activities.
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}