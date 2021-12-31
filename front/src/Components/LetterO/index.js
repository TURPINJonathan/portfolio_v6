import React from "react";

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
                    <button className="card__details" >Détails</button>
                </article>
                <article className="card">
                    <h3 className="card__title">nom du site</h3>
                    <img className="card__picture" src="https://via.placeholder.com/300x200" alt="nom du site" />
                    <p className="card__overview">description du site</p>
                    <button className="card__details" >Détails</button>
                </article>
            </section>
            <button className="reset">Page d'accueil</button>
        </main>
    );
};

export default LetterO;