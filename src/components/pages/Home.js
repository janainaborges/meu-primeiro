import React from "react";
import "../../App.css";
import HeroSection from "./HeroSection/HeroSection";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Tech from "./Tech/Tech";
import Final from "./Final/Final";
import Contact from "./Contact/Contact";

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <Tech />
            <Contact />
            <Footer />
            <Final />
        </>
    );
}

export default Home;
