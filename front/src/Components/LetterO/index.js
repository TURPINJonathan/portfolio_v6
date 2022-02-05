import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// imports
import './letterO.scss';

const LetterO = ({ loadProjects, projects }) => {
    useEffect(() => {
        loadProjects();
    }, []);
    return (

        <main>
            <h2>Réalisations</h2>
            <section id="cards">
                {projects.map(project => (
                    <article className="card" key={project.id}>
                        <h3 className="card__title">{project.name}</h3>
                        <img className="card__picture" src={project.picture} alt={`nom du site : ${project.name}`} />
                        <p className="card__overview">{project.overview}</p>

                        <Link className="card__details" to={`/o/artWork/${project.id}`}>
                            <button className="card__details true">Détails</button>
                        </Link>
                    </article>
                ))}
            </section>
            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main >
    );
};

export default LetterO;