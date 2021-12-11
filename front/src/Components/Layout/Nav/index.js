import React from "react";
import { NavLink } from "react-router-dom";

// imports
import './nav.scss';

const Nav = () => {
    return (
        <header>
            <NavLink
                end
                to="/j/history"
                className="letterJ"
                exact
            >
                J
            </NavLink>
            <NavLink
                to="/o/artWork"
                className="letterO"
                exact
            >
                O
            </NavLink>
            <NavLink
                to="/h/contact"
                className="letterH"
                exact
            >
                H
            </NavLink>
            <NavLink
                to="/n/skills"
                className="letterN"
                exact
            >
                N
            </NavLink>
        </header>
    );
};

export default Nav;