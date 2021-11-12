import React from "react";
import "../../App.css";
import HeroSection from "../../assets/js/HeroSection.js";
import Cards from "../../assets/js/Cards";
import Footer from "../../assets/js/Footer";
import About from "./About";
import Tech from "../../assets/js/Tech";
import Final from "../../assets/js/Final";

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <Tech />
            <Footer />
            <Final />
        </>
    );
}

export default Home;
