import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection.js";
import Cards from "../Cards";
import Footer from "../Footer";
import About from "../About";
import Tech from "../Tech";

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <About />
            <Tech />
            <Footer />
        </>
    );
}

export default Home;
