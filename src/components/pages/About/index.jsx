/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import { Button } from "../Button";

export default function About() {
    return (
        <div className="about-h1">
            <div className="about">
                <div className="abouteme">
                    <div className="photo">
                        <img src="images/photo.png" />
                    </div>
                </div>

                <div className="text">
                    <h3>Sobre mim</h3>
                    <p className="text-p">
                        Olá, sou Janaina Borges, tenho 25 anos e moro no Distrito Federal. Tenho experiência desenvolvedora Fullstack nas tecnologias Reactjs e Nodejs.
                        Estou sempre em busca de conhecimento e de
                        aperfeiçoamento, me proporciona imensa satisfação ver
                        ideias saindo do papel e tornando-se realidade!
                    </p>
                    <div className="bt">
                        <a
                            href="https://drive.google.com/file/d/1Pt7gFLwHnpKu7Wvgk3kyw6kSn19hzell/view?usp=sharing"
                            download
                        >
                            <Button
                                className="form-button"
                                buttonStyle="btn--test"
                                buttonSize="btn--smallp"
                            >
                                Currículo
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
