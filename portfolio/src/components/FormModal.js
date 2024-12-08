import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FormModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/*<Modal.Header closeButton>*/}
            {/*    <Modal.Title id="contained-modal-title-vcenter">*/}
            {/*        Success!*/}
            {/*    </Modal.Title>*/}
            {/*</Modal.Header>*/}
            <Modal.Body closeButton>
                <h4>Message Sent</h4>
                <p>
                    Due to a high influx of requests you can expect to receive a response within
                    7-10 business days.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}