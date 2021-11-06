import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer-container">
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
                        <h2>Midias Sociais</h2>
                        <a href="/">Instagram</a>
                        <a href="https://www.linkedin.com/in/janaina-borges-b2a2b4206/">
                            LinkedIn
                        </a>
                        <a href="https://github.com/janainaborges">GitHub</a>
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
                        <a
                            href="https://github.com/janainaborges"
                            class="social-icon-link github"
                            aria-label="GitHub"
                        >
                            <i class="fa-brands fa-github" />
                        </a>

                        <a
                            class="social-icon-link twitter"
                            href="https://www.linkedin.com/in/janaina-borges-b2a2b4206/"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
