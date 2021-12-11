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
                // activeClassName="letterJ-active"
                exact
            >
                J
            </NavLink>
            <NavLink
                to="/o/artWork"
                className="letterO"
                activeClassName="letterO-active"
                exact
            >
                O
            </NavLink>
            <NavLink
                to="/h/contact"
                className="letterH"
                activeClassName="letterH-active"
                exact
            >
                H
            </NavLink>
            <NavLink
                to="/n/skills"
                className="letterN"
                activeClassName="letterN-active"
                exact
            >
                N
            </NavLink>
        </header>
    );
};

export default Nav;