/* eslint-disable react/jsx-no-undef */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { Button } from "../js/Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-conatiner">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        DevJan <i class="fab fa-react"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#cards"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Serviços
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/sign-up"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Agende uma demonstração
                            </Link>
                        </li>
                    </ul>
                </div>
                {button && (
                    <Link to="sign-up">
                        <Button buttonStyle="btn--outline">
                            {" "}
                            Agende uma demonstração
                        </Button>
                    </Link>
                )}
            </nav>
        </>
    );
}

export default Navbar;
