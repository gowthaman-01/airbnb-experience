import React from "react";

const Card = (data) => {
    return (
        <div className="card">
            <div className="experience-image-container">
                <img src={`../images/${data.coverImg}`} alt={data.title} className="experience-image"></img>
            </div>
            
            <div className="rating">
                <img src="../images/star.png" alt="star" className="star"></img>
                <div className="rating-info">
                    {data.stats.rating}
                    <span className="gray"> ({data.stats.reviewCount}) • {data.location}</span>
                </div>
            </div>
            <p className="about">{data.title}</p>
            <p className="price"><strong>From ${data.price}</strong> / person</p>
        </div>
    )
}

export default Card;