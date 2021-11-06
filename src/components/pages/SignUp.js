import "../../App.css";
import { Button } from "../../assets/js/Button";
import React from "react";
import "../../assets/css/Signup.css";

export default function SignUp() {
    return (
        <div className="form-container">
            <section className="form-subscription">
                <h1 className="form-subription-heading">
                    DevJan <i class="fab fa-react"></i>
                </h1>
                <p className="footer-subscription-text">
                    Solicite já uma avaliação
                </p>
                <div className="input-form">
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

                        <Button
                            className="form-button"
                            buttonStyle="btn--outline"
                        >
                            Enviar
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
