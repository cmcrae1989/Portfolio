import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import '../styles/iconNavBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

export default function IconNavBar() {
    return (
        <div className="icon-nav-bar">
            <a href="https://www.linkedin.com/in/cameronmcrae1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://www.linkedin.com/in/cameronmcrae1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://www.linkedin.com/in/cameronmcrae1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="https://www.linkedin.com/in/cameronmcrae1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
        </div>
    )
}