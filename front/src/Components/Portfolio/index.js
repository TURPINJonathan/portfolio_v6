import React, { useEffect } from "react";
import { Download } from "react-feather";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import cv from "../../assets/jonathan_turpin_cv.pdf";

// imports
import './portfolio.scss';

const Portfolio = ({
    flash,
    showFlash,
}) => {

    function flashSuccess() {
        toast.success('Votre message a été envoyé avec succès', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    useEffect(() => {
        if (flash === 'success') {
            flashSuccess();
            showFlash(null);
        }
    }, [flash]);

    return (
        <main>

            <section id="mainPage">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <p>Bienvenue sur le portfolio de</p>
                <h1>
                    <div className="firstname">
                        <span id="j1">J</span>
                        <span id="o2">o</span>
                        <span id="n3">n</span>
                        <span id="a4">a</span>
                        <span id="t5">t</span>
                        <span id="h6">h</span>
                        <span id="a7">a</span>
                        <span id="n8">n </span>
                    </div>
                    <div className="lastname">
                        <span id="t10">T</span>
                        <span id="u11">u</span>
                        <span id="r12">r</span>
                        <span id="p13">p</span>
                        <span id="i14">i</span>
                        <span id="n15">n</span>
                    </div>

                </h1>
                <p>Développeur Web et Web Mobile</p>
            </section>
            <section id="mainCatch">
                <p>Lorsqu'on est développeur web, tout est possible</p>
                <p>tu n'as aucune limite, sinon celles que tu t'imposes</p>
            </section>
            <button className="button__other true" href={cv} download>
                <a href={cv} download>
                    <Download />
                    <i> Télécharger mon CV </i>
                    <Download />
                </a>
            </button>
        </main>
    );
};

export default Portfolio;