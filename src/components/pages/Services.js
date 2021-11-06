import "../../App.css";
import React from "react";
import "../../assets/css/Cards.css";
import CardItem from "../../assets/js/CardItem";

export default function Service() {
    return (
        <div className="cards">
            <h1>Veja alguns projetos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/cap.jpg"
                            label="Pages"
                            text="Paginas em landin pages, clica e confira"
                            path="/"
                        />

                        <CardItem
                            src="images/logaster.png"
                            label="Fullstack"
                            text="Paginas em landin pages"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
