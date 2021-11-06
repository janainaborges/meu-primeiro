import React from "react";

import "./App.css";
import Navbar from "../src/assets/js/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";




function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
