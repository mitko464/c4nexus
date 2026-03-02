import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li className="footer-links__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/" className="footer__link">
                        Terms & Conditions
                    </a>
                </li>
                <li className="footer-links__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/" className="footer__link">
                        Privacy Policy
                    </a>
                </li>
                <li className="footer-links__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/" className="footer__link">
                        Contact Us
                    </a>
                </li>
            </ul>

            <div className="socials">
                <ul className="socials-list">
                    <li className="socials-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" className="socials__link">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="socials-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" className="socials__link">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="socials-list__item">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" className="socials__link">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>

            <p className="copyright">© Copyright. All rights reserved.</p>
        </footer>
    )
}

export default Footer