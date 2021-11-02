import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subription-heading">Bem vindo</p>
                <p className="footer-subscription-text">Para uma avaliação, preencha com os dados.</p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            className="footer-input"
                        />
                        <input
                            type="Numero"
                            name="email"
                            placeholder="Seu número"
                            className="footer-input"
                        />
                        <label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Sua mensagem"
                                className="footer-input"
                            />
                        </label>

                        <Button buttonStyle="btn--outline">Enviar</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre Nós</h2>
                        <Link to="/sign-up">Sobre o trabalho</Link>
                        <Link to="/"> Carreira </Link>
                        <Link to="/"> Termos do serviço </Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Entre em contato</h2>
                        <Link to="/">Contato</Link>
                        <Link to="/">Suporte</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">LinkedIn</Link>
                        <Link to="/https://github.com/janainaborges">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            DevJan <i class="fab fa-react"></i>
                        </Link>
                    </div>
                    <small class="website-rights">DevJan © 2021</small>
                    <div class="social-icons">
                        <Link
                            class="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link
                            class="social-icon-link github"
                            to="/"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <i class="fa-brands fa-github" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            href="https://www.linkedin.com/in/janaina-borges-b2a2b4206/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
