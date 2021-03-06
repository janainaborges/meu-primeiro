/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { Button } from "../Button";
import "./style.css";
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
                    <div className="input">
                        <form ref={form} action="" onSubmit={sendEmail}>
                            <h1 className="form-subscription-title">
                                DevJan <i class="fab fa-react"></i>{" "}
                            </h1>

                            <p>Solicite já uma avaliação</p>
                            <div>
                                <input
                                    type="name"
                                    name="from_name"
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
                                    <textarea
                                        type="text"
                                        name="mensagem"
                                        placeholder="Sua mensagem"
                                        className="footer-msg"
                                    />
                                </label>
                                <div className="form-btn">
                                    <div>
                                        <Button
                                            className="btn"
                                            buttonStyle="btn--test"
                                            buttonSize="btn--small"
                                        >
                                            Enviar
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {result ? <Result /> : null}
                            </div>
                        </form>
                    </div>
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
                </div>
            </section>
        </div>
    );
}
