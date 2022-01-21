import React from "react";
import { Link } from "react-router-dom";

// imports
import './artWorkDetails.scss';

const ArtWorkDetails = () => {
    return (

        // TODO: Make the media queries

        <main>
            <h2>projet</h2>

            <section id="project">
                <img className="project__picture" src="https://via.placeholder.com/300x200" alt="nom du site" />
                <article className="project__details">
                    <p className="project__overview">description du site</p>
                    <p className="project__link">
                        <a href="#" alt="Lien vers le site" target="_black">Link</a>
                    </p>
                    <p className="project__techno">techno</p>
                </article>
            </section>
            <section id="buttons">
                <Link
                    to="/"
                >
                    <button className="reset">Page d'accueil</button>
                </Link>
                <Link
                    to="/o/artWork/"
                >
                    <button className="true">Page projets</button>
                </Link>
            </section>
        </main>
    );
};

export default ArtWorkDetails;