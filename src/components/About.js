/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './About.css'

function About() {
    return (
        <div className="about">
            <div className="larguraMaxContainer">
                <div className="abouteme">
                    <div className="photo">
                        <img src="images/photo.png" />
                    </div>
                    <h1>Sobre mim</h1>

                    <div className="text">
                        <center>
                            <p>
                                Olá, sou Janaina Borges, tenho 25 anos e moro em
                                São Sebastião, Distrito Federal. Sou entusiasta
                                em tecnologia e iniciei como Desenvolvedor Web
                                em 2020. Estou sempre em busca de conhecimento e
                                de aperfeiçoamento, me proporciona imensa
                                satisfação ver ideias saindo do papel e
                                tornando-se realidade!
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
