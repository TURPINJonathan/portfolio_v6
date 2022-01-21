import React from "react";
import { Link } from "react-router-dom";

// imports
import './letterO.scss';

const LetterO = () => {
    return (

        // TODO: Make the media queries

        <main>
            <h2>Réalisations</h2>

            <section id="cards">
                <article className="card">
                    <h3 className="card__title">nom du site</h3>
                    <img className="card__picture" src="https://via.placeholder.com/300x200" alt="nom du site" />
                    <p className="card__overview">description du site</p>

                    <Link className="card__details" to="/o/artWork/test">
                        <button className="card__details true">Détails</button>
                    </Link>
                </article>
            </section>
            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main>
    );
};

export default LetterO;