import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "../css/HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>CRIAÇÃO DE PROJETOS</h1>
            <p>O que você procura?</p>
            <div className="hero-btns">
                <Link to="/sign-up">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        Começar
                    </Button>
                </Link>
                <a href="https://github.com/janainaborges">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        onClick={console.log("hey")}
                    >
                        Repositório <i class="fab fa-github-alt"></i>
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
