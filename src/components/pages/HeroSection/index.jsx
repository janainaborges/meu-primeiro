import React from "react";
import { Button } from "../Button";
import "./style.css";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>INSPIRATION SOFTWARE</h1>
            <p>De gente que cria, é faz acontecer</p>
            <div className="hero-btns">
                <Link to="/contact">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        Projetos
                    </Button>
                </Link>
                <a href="https://github.com/janainaborges">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        onClick={console.log("hey")}
                    >
                        Github <i class="fab fa-github-alt"></i>
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
