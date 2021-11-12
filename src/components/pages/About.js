/* eslint-disable jsx-a11y/alt-text */
import "../../App.css";
import React from "react";
import "../../assets/css/About.css";

export default function About() {
    return (
        <div className="about-h1">
            <h1>Sobre mim</h1>

            <div className="about">
                <div className="abouteme">
                    <div className="photo">
                        <img src="images/photo.png" />
                    </div>
                </div>

                <div className="text">
                    <p className="text-p">
                        Olá, sou Janaina Borges, tenho 25 anos e moro em São
                        Sebastião, Distrito Federal. Sou entusiasta em
                        tecnologia e iniciei como Desenvolvedor Web em 2021.
                        Estou sempre em busca de conhecimento e de
                        aperfeiçoamento, me proporciona imensa satisfação ver
                        ideias saindo do papel e tornando-se realidade!
                    </p>
                </div>
            </div>
        </div>
    );
}
