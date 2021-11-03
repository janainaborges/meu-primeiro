import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>Veja alguns projetos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/logaster.png"
                            text="Explore "
                            label="Tecnologia"
                            path="/services"
                        />
                        <CardItem
                            src="images/81.jpg"
                            text="Explore"
                            label="Fullstack"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/76.jpg"
                            text="Explore"
                            label="Backend"
                            path="/services"
                        />
                        <CardItem
                            src="images/20.jpg"
                            text="Explore"
                            label="Frontend"
                            path="/services"
                        />
                        <CardItem
                            src="images/19.jpg"
                            text="Explore"
                            label="Tecnologia"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
