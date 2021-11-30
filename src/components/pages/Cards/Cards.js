import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div id="cards" className="cards">
            <h1>Veja alguns projetos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/cap.jpg"
                            text="Aqui você encontrar langing pages como modelos"
                            label="Frontend"
                            
                        />
                        <CardItem
                            src="images/20.jpg"
                            text="Vera modelos de como funciona por trás da telinha"
                            label="Backend"
                            path="/services"
                        />
                        <CardItem
                            src="images/91413.jpg"
                            text="Encontrará o que eu ando estudando"
                            label="Estudos"
                            path="/services"
                        />
                        <CardItem
                            src="images/04664.jpg"
                            text="Vai ver tudo junto rodando"
                            label="Fullstack"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
