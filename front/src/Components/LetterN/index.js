import React, { useEffect } from "react";

// imports
import './letterN.scss';

const LetterN = ({ loadSkills, skills }) => {
    useEffect(() => {
        loadSkills();
    }, []);
    return (
        <main>
            <h2>Skills</h2>
            <article>
                <ul className="skillsList">
                    {skills.map(skill => (

                        <li className="skillsList__details">
                            <img src={skill.picture} alt={skill.name} className="skill__picture" />
                            <p className="skill__name">{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </main>
    );
};

export default LetterN;