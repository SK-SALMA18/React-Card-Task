import React from "react";
import "../index.css";
function Card({
    imgSrc,imgAlt,title,price,button
}){
    return(
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="card-img"/>
            <h1 className="card-title">{title}</h1>
            <p className="card-price">{price}</p>
            <button type="button">{button}</button>
        </div>
    )
}
export default Card;