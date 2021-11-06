import React from "react";
import "../css/Cards.css";
import CardItem from "../js/CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>Veja alguns projetos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/cap.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Pages"
                            path="/services"
                        />
                        <CardItem
                            src="images/logaster.png"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Fullstack"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/76.jpg"
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Backend"
                            path="/services"
                        />
                        <CardItem
                            src="images/81.jpg"
                            text="Experience Football on Top of the Himilayan Mountains"
                            label="Frontend"
                            path="/services"
                        />
                        <CardItem
                            src="images/76.jpg"
                            text="Ride through the Sahara Desert on a guided camel tour"
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