import React, { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

import url from "../../data";

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
    flash,
    showFlash,
}) => {
    const form = useRef();

    function flashError() {
        toast.error('Une erreur est survenue. Avez-vous rempli l\'ensemble des champs obligatoires', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (flash === 'redirect') {
        showFlash('success');
        return <Navigate from={`${url}h/contact`} to="/" />;
    }

    if (flash === 'error') {
        flashError();
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('Portfolio', 'template_3vbu6bh', e.target, 'user_GTHS4qAqdmiSg5ss0FvgJ')
            .then((response) => {
                showFlash('redirect');
            }, (error) => {
                showFlash('error');
            });
        e.target.reset();
    }
    return (
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
                    {/* <div>
                        <button className="reset" type="reset">Réinitialiser</button>
                    </div> */}
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

LetterH.propTypes = {

    contact: PropTypes.func.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.number,
    object: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    flash: PropTypes.func.isRequired,
    showFlash: PropTypes.func.isRequired,
};
export default LetterH;