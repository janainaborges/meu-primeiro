import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>CRIAÇÃO DE PROJETOS</h1>
            <p>O que você procura?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Começar
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={console.log("hey")}
                >
                    Modelos <i class="fab fa-github-alt"></i>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
