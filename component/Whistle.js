import React from "react";
import "../App.css";
import CardImages from "./CardImages";
function Whistile()
{
    const mystyle={
        textAlign:'center',
        color:'yellow',
    }
    return(
        <div className="whistiles" style={mystyle}>
            <h1>Welcome To Whistle Page...</h1>
            <p>Here We Can Add Our Favourite items..</p>
            <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/kids-t-shirt/c/e/k/8-9-years-kids-h403-hadar-original-imagthfrcrzncbhz.jpeg?q=70" imagename="Kids T-shirt" price={500} /> 
        </div>
    )
}
export default Whistile;