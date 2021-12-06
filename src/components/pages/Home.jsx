import React from "react";
import "../../App.css";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import Footer from "./Footer";
import About from "./About";
import Tech from "./Tech";
import Final from "./Final";
import Contact from "./Contact";

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
