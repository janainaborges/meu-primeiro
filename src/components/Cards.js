import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Veja alguns projetos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/20.jpg"
                            text="Explore"
                            label="Modelo"
                            path="/services"
                        />

                        <CardItem
                            src="images/81.jpg"
                            text="Explore loremcscsd v vdv dv  vdvdvsvdv  dvsdvsdv dvsdvsdv vd vsdv cdscscscdc"
                            label="Modelo"
                            path="/services"
                        />
                        <CardItem
                            src="images/76.jpg"
                            text="Explore"
                            label="Modelo"
                            path="/services"
                        />
                        <CardItem
                            src="images/logaster.png"
                            text="Explore"
                            label="Modelo"
                            path="/services"
                        />
                        <CardItem
                            src="images/19.jpg"
                            text="Explore"
                            label="Modelo"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
