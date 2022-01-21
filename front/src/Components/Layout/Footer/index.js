import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub, Linkedin, Mail } from "react-feather";

// imports
import './footer.scss';

const Footer = () => {
    return (
        <footer id="footer">
            <a
                className="footer__link"
                href="https://github.com/TURPINJonathan"
                target="_blank"
                exact
                rel="noreferrer"
            >
                <GitHub color="#0da30d" />
            </a>
            <a
                className="footer__link"
                href="https://www.linkedin.com/in/turpin-jonathan"
                target="_blank"
                exact
                rel="noreferrer"
            >
                <Linkedin color="#e69512" />
            </a>
            <NavLink
                to="/h/contact"
                className="contact footer_link"
                exact
            >
                <Mail color="#1231bd" className="footer__link" />
            </NavLink>
        </footer>
    );
};

export default Footer;