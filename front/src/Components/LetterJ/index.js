import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// imports
import './letterJ.scss';
import Turpin_Jonathan from '../../assets/img/turpin_jonathan.svg';

const LetterJ = ({ loadUsers, users }) => {
    useEffect(() => {
        loadUsers();
    }, []);
    return (

        // TODO: Make the media queries
        // TODO: Words corrections

        <main>
            <h2>Qui suis-je ?</h2>
            {users.map(user => (
                <article>
                    <aside>
                        <p className="tj-details">
                            {user.description}
                        </p>
                    </aside>
                    <img src={user.picture} alt={`${user.firstname} ${user.lastname}`} id="tj-picture" />
                </article>
            ))}
            <Link
                to="/"
            >
                <button className="reset">Page d'accueil</button>
            </Link>
        </main>

    );
};

export default LetterJ;