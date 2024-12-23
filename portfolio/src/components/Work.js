import '../styles/work.css'
import {Card} from "react-bootstrap";

export default function work() {
    return (
        <div className="work" id="work">
            <h1>Work</h1>
            <Card>
                <Card.Body>
                    <div className="card-body-left">
                        <p className="date-text">2024 - present</p>
                    </div>
                    <div className="card-body-right">
                        <h3 className="body-text">St. Clair College</h3>
                        <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi eaque fugit inventore iusto, nulla quasi vero. Dolor dolorem expedita iste quaerat quis. Amet atque corporis doloremque harum repellendus! Architecto!</p>
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
                        <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi
                            eaque fugit inventore iusto, nulla quasi vero. Dolor dolorem expedita iste quaerat quis.
                            Amet atque corporis doloremque harum repellendus! Architecto!</p>
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
                        <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi eaque fugit inventore iusto, nulla quasi vero. Dolor dolorem expedita iste quaerat quis. Amet atque corporis doloremque harum repellendus! Architecto!</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}