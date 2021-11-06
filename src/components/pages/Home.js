import React from "react";
import "../../App.css";
import HeroSection from "../../assets/js/HeroSection.js";
import Cards from "../../assets/js/Cards";
import Footer from "../../assets/js/Footer";
import About from "../../assets/js/Aboutme";
import Tech from "../../assets/js/Tech";

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
