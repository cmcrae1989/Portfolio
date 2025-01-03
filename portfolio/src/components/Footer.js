import * as React from 'react';
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="animated-box in">
                <p className="footer-text">Built
                    with React.js and CSS. Site is not hooked up to a back-end,
                    so do not expect an email back unless emailing me directly!
                </p>
            </div>

        </footer>
    )
}