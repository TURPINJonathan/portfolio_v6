import React from "react";
import { Download } from "react-feather";

import { cv } from "../../assets/cv_turpin_jonahtan.pdf";

// imports
import './portfolio.scss';

const Portfolio = () => {
    return (
        <main>
            <section id="mainPage">
                <p>Bienvenue sur le portfolio de</p>
                <h1>
                    <span id="j1">J</span>
                    <span id="o2">o</span>
                    <span id="n3">n</span>
                    <span id="a4">a</span>
                    <span id="t5">t</span>
                    <span id="h6">h</span>
                    <span id="a7">a</span>
                    <span id="n8">n </span>
                    <span id="t10">T</span>
                    <span id="u11">u</span>
                    <span id="r12">r</span>
                    <span id="p13">p</span>
                    <span id="i14">i</span>
                    <span id="n15">n</span>
                </h1>
                <p>Développeur Web et Web Mobile</p>
            </section>
            <section id="mainCatch">
                <p>Lorsqu'on est développeur web, tout est possible</p>
                <p>tu n'as aucune limite, sinon celles que tu t'imposes</p>
            </section>
            <button className="button__other" src="#" download>

                <Download />
                <i> Télécharger mon CV </i>
                <Download />
            </button>
        </main>
    );
};

export default Portfolio;