import React from "react";
import { Link, useParams } from "react-router-dom";

// imports
import './artWorkDetails.scss';

const ArtWorkDetails = ({ oneProject }) => {
    const { slug } = useParams();
    const projectId = parseInt(slug, 10);
    const project = oneProject.find(project => project.id === projectId);
    return (

        <main>
            <h2>projet</h2>

            <section id="project">
                <div className="project__picture">
                    <img className="project__picture-unit" src={project.picture} alt={project.name} />
                </div>
                <article className="project__details">
                    <p className="project__overview">{project.description}</p>
                    <p className="project__link">
                        <a href={project.linkUrl} alt={`Lien vers le site ${project.name}`} target="_black">Cliquez ici pour vous rendre sur {project.name}</a>
                    </p>
                    <p className="project__techno">Techonologies utilisées</p>
                    <ul className="project__technoList">
                        {project.skills.map(skill => (
                            <img src={skill.picture} alt={skill.name} className="skill__picture" />
                        ))}
                    </ul>
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