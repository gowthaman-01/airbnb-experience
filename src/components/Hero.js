import React from "react";
import grid from "../../src/images/grid.png"

const Hero = () => {
    return (
        <div className="hero">
            <img src={grid} alt="grid" className="grid-image"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-content">One-of-a-kind activities hosted by experts. Experience a wide variety of tours and events through Airbnb.</p>
        </div>

    )
}

export default Hero;