import React from "react";
import { Link } from "react-router-dom";

// imports
import './letterJ.scss';
import Turpin_Jonathan from '../../assets/img/turpin_jonathan.svg';

const LetterJ = () => {
    return (

        // TODO: Make the media queries
        // TODO: Words corrections

        <main>
            <h2>Qui suis-je ?</h2>
            <article>
                <aside>
                    <p className="tj-details">
                        Après plus de 11 années de bons et loyaux services dans la relation clientèle au sein d'une grande enseigne d'ammeublement, j'ai décidé de me reconvertir et ainsi, vivre de ma passion.
                    </p>
                    <p className="tj-details">
                        J'ai alors suivi une formation intensive, à distance, avec l'école O'clock. J'ai ainsi pu découvrir de nombreux langages mais également différentes méthodologies de travail, telles que Agile ou Scrum, au travers de différents projets pédagogiques.
                    </p>
                    <p className="tj-details">
                        De nature jovial, curieux et investi, je suis une personne qui aime partager et recevoir d'autruits.
                    </p>
                    <p className="tj-details">
                        N'hésitez pas à me contacter soit par le formulaire de contact, soit via mes différents réseaux.
                    </p>
                </aside>
                <img src={Turpin_Jonathan} alt="turpin_jonathan" id="tj-picture" />
            </article>
            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main>

    );
};

export default LetterJ;