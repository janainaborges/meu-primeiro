/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { Button } from "../Button/Button";
import "./SignUp.css";
import emailjs from "emailjs-com";

const Result = () => {
    return <p>Foi entregue com sucesso!!</p>;
};

export default function SignUp(props) {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_05ovvgb",
                "template_aby5tq7",
                e.target,
                "user_BU3gY6LfFk1MYFQEH7o2K"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        showResult(true);
    };

    return (
        <div className="form-container">
            <section>
                <div className="input-form">
                    <div className="form-subscription">
                        <div className="form-subscription-full">
                            {/* <h1 className="form-subscription-title">
                                {" "}
                                DevJan <i class="fab fa-react"></i>
                            </h1> */}
                            {/* <h4 className="footer-subscription-text">
                                O que fazemos de diferente
                            </h4> */}
                            <ul></ul>
                        </div>
                    </div>

                    <div className="input">
                        <form ref={form} action="" onSubmit={sendEmail}>
                            <h1 className="form-subscription-title">
                                {" "}
                                DevJan <i class="fab fa-react"></i>
                            </h1>
                            <p>Solicite já uma avaliação</p>
                            <div>
                                <input
                                    type="name"
                                    name="to_name"
                                    placeholder="Qual seu nome?"
                                    className="footer-input"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    className="footer-input"
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Seu número"
                                    className="footer-input"
                                />
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="text"
                                        name="mensagem"
                                        placeholder="Sua mensagem"
                                        className="footer-msg"
                                    />
                                </label>
                            </div>
                            <Button
                                className="form-button"
                                buttonStyle="btn--test"
                                buttonSize="btn--small"
                            >
                                Enviar
                            </Button>
                            <div className="row">
                                {result ? <Result /> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
