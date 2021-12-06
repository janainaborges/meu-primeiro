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
                        Olá, sou Janaina Borges, tenho 25 anos e moro em São
                        Sebastião, Distrito Federal. Sou entusiasta em
                        tecnologia e iniciei como Desenvolvedor Web em 2021.
                        Estou sempre em busca de conhecimento e de
                        aperfeiçoamento, me proporciona imensa satisfação ver
                        ideias saindo do papel e tornando-se realidade!
                    </p>
                    <div className="bt">
                        <a
                            href="https://drive.google.com/file/d/12F3kkx7rLIfFCiHsEz2fADk0Q2W7UMnU/view?ts=61977994"
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
