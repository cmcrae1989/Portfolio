import React from "react";
import '../styles/hero.css'
import Typewriter from "./Typewriter";

export default function Hero() {
    return (
        <div className="hero" id="about">
            <p className="grey-text">hello my name is</p>
            <h1>Cameron McRae</h1>
            <h1><Typewriter text="I am a Web Developer" delay={100} /></h1>
        </div>
    );

}