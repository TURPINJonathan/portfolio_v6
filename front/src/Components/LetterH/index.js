import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

// imports
import './letterH.scss';

const LetterH = ({
    contact,
    lastName,
    firstName,
    mail,
    phone,
    object,
    message,
}) => {

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('Portfolio', 'template_3vbu6bh', e.target, 'user_GTHS4qAqdmiSg5ss0FvgJ')
            .then((response) => {
                console.log(response.status, response.text);
            }, (error) => {
                console.log(error.status, error.text);
            });
        e.target.reset();
    }
    return (
        // // TODO: Add a main and subtitle ("portfolio de Jonathan Turpin" "Formulaire de contact"
        // // TODO: Make the media queries
        // // TODO: Make the requiere
        <main>
            <h2>Contact</h2>
            <form
                ref={form}
                onSubmit={(e) => {
                    e.preventDefault();
                    sendEmail(e);
                }}
            >
                <fieldset>
                    <legend>Coordonnées</legend>

                    <div className="contactDetails">
                        <div className="contactDetails__input">
                            <label htmlFor="lastName">Nom *</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Dupond"
                                value={lastName}
                                name="lastName"
                                onChange={(e) => {
                                    contact(e.target.value, "lastName");
                                }}
                                required
                            />
                        </div>

                        <div className="contactDetails__input">
                            <label htmlFor="firstName">Prénom *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Jean"
                                value={firstName}
                                onChange={(e) => {
                                    contact(e.target.value, "firstName");
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div className="contactDetails">
                        <div className="contactDetails__input">
                            <label htmlFor="mail">Email *</label>
                            <input
                                type="email"
                                id="mail"
                                name="mail"
                                value={mail}
                                placeholder="jean@dupond.com"
                                onChange={(e) => {
                                    contact(e.target.value, "mail");
                                }}
                                required
                            />
                        </div>
                        <div className="contactDetails__input">
                            <label htmlFor="phone">Téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                placeholder="06 01 02 03 04"
                                onChange={(e) => {
                                    contact(e.target.value, "phone");
                                }}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Votre message</legend>

                    <div className="contactDetails__message">

                        <div className="contactDetails__input">
                            <label htmlFor="object">Objet *</label>
                            <input
                                type="text"
                                id="object"
                                name="object"
                                value={object}
                                placeholder="Objet du message"
                                onChange={(e) => {
                                    contact(e.target.value, "object");
                                }}
                                required
                            />
                        </div>

                        <div className="contactDetails__input">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                placeholder="Votre message"
                                onChange={(e) => {
                                    contact(e.target.value, "message");
                                }}
                                required
                            />
                        </div>
                    </div>
                </fieldset>
                <div className="buttons">
                    <div>
                        <button className="true" type="submit">Envoyer</button>
                    </div>
                    <div>
                        <button className="reset" type="reset">Réinitialiser</button>
                    </div>
                    <Link
                        to="/"
                    >
                        <button className="false" type="button">Annuler</button>
                    </Link>
                </div>
            </form>
            <p className="required">* Champs obligatoires</p>
        </main >
    );
};

export default LetterH;