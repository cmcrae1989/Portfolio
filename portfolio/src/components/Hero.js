import React from "react";
import '../styles/hero.css'
import Typewriter from "./Typewriter";
import Header from "./Header";

export default function Hero() {
    return (
        <div className="hero" id="about">
            <h1>Cameron McRae</h1>
            <h2><Typewriter text="Web Developer" delay={100} /></h2>
            //TODO change p text later
            <p className="grey-text">I craft accessible, flawless digital experiences for the web.</p>
            <Header />
        </div>
    );

}