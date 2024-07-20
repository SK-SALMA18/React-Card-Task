import React from "react";
import '../App.css';

function CardImages(props){
    const mystyle={
        textAlign:"center",
    }
    const Message=()=>{
        alert("Add these item to Cart!...")
    }
    return(
        <div className="card" style={mystyle}>
            <img src={props.image}/>
            <i><h3>{props.imagename}</h3></i>
            <p>Rs-{props.price}</p><br/>
            <button type="button" onClick={Message}>Add to Cart</button>
        </div>
    )
}
export default CardImages;