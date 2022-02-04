import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// imports
import './letterN.scss';

const LetterN = ({ loadSkills, skills }) => {
    useEffect(() => {
        loadSkills();
    }, []);
    return (
        <main>
            <h2>Skills</h2>
            <article id="skills">
                <ul className="skillsList">
                    {skills.map(skill => (

                        <li className="skillsList__details">
                            <img src={skill.picture} alt={skill.name} className="skill__picture" />
                            <p className="skill__name">{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </article>

            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main>
    );
};

export default LetterN;