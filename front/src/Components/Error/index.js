import React from "react";
import { Link } from "react-router-dom";
// imports
import './error.scss';

const Error = () => {
    return (
        <main id="error">
            <h1>
                <span id="e1">E</span>
                <span id="r2">r</span>
                <span id="r3">r</span>
                <span id="o4">o</span>
                <span id="r5">r</span>
            </h1>
            <p>
                Une erreur est survenue.
            </p>
            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main>
    );
};

export default Error;