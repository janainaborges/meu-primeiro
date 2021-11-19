import React, { useState }from "react";
import { Button } from "../Button/Button";
import "./SignUp.css";
import emailjs from "emailjs-com";

const Result=()=>{
    return(
        <p>Sua mensagem foi entregue com sucesso!!</p>
    )
}


export default function SignUp(props) {
    
    const [result, showResult] = useState(false);
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_05ovvgb",
            "Ytemplate_578rsqx",
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

}


    return (
        <div className="form-container">
            <section>      
                <div className="input-form">
                      <h1 className="form-subscription">  DevJan <i class="fab fa-react"></i>
                      </h1>
                      <p className="footer-subscription-text">
                    Solicite já uma avaliação
                      </p>
                
                    <form action="" onSubmit={sendEmail}>
                        <div className="input">
                            <input
                                type="name"
                                name="name"
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
                                type="Numero"
                                name="email"
                                placeholder="Seu número"
                                className="footer-input"
                            />
                        </div>
                        <div>
                            <label>
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Sua mensagem"
                                    className="footer-msg"
                                />
                            </label>
                        </div>
                        <Button className="form-button" buttonStyle="btn--test">
                            Enviar
                        </Button>
                        <div className="row">
                            {result ? <Result /> : null}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
    }


