import React from "react";

// imports
import './letterH.scss';

const LetterH = () => {
    return (
        // TODO: Add a main and subtitle ("portfolio de Jonathan Turpin" "Formulaire de contact"
        // TODO: Make the media queries
        // TODO: Make the requiere
        <main>
            <form>
                <fieldset>
                    <legend>Coordonnées</legend>

                    <div className="contactDetails">
                        <div className="contactDetails__input">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" placeholder="Dupond" />
                        </div>

                        <div className="contactDetails__input">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" id="firstname" placeholder="Jean" />
                        </div>
                    </div>

                    <div className="contactDetails">
                        <div className="contactDetails__input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="jean@dupond.com" />
                        </div>
                        <div className="contactDetails__input">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="tel" id="phone" placeholder="06 01 02 03 04" />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Votre message</legend>

                    <div className="contactDetails__message">

                        <div className="contactDetails__input">
                            <label htmlFor="object">Objet</label>
                            <input type="text" id="object" placeholder="Objet du message" />
                        </div>

                        <div className="contactDetails__input">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Votre message" />
                        </div>
                    </div>
                </fieldset>
                <div className="buttons">
                    <button className="true" type="submit">Envoyer</button>
                    <button className="reset" type="reset">Réinitialiser</button>
                    <button className="false" type="button">Annuler</button>
                </div>
            </form>
        </main >
    );
};

export default LetterH;