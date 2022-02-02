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
                <ul>
                    {skills.map(skill => (
                        <li>
                            <img src={skill.picture} alt={skill.name} />
                        </li>
                    ))}
                </ul>
            </article>
        </main>
    );
};

export default LetterN;