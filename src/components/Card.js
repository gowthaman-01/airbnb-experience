import React from "react";
import katie from "../../src/images/katie.png"
import star from "../../src/images/star.png"

const Card = () => {
    return (
        <div className="card">
            <img src={katie} alt="katie" className="expert-image"></img>
            <p className="rating">
                <img src={star} alt="star" className="star"></img>
                <p className="rating-info">
                    5.0
                    <span className="gray"> (6) • USA</span>
                </p>
            </p>
            <p className="about">Life lessons with Katie Zaferes</p>
            <p className="price"><strong>From $136</strong> / person</p>
        </div>
    )
}

export default Card;