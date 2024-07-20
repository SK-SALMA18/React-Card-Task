import React from "react";
import "../App.css";
import CardImages from "./CardImages";
function Cart()
{
    const mystyle={
        textAlign:'center',
        color:'gold'
    }
    return(
        <div className="carts" style={mystyle}>
            <h1>Add ur items in this Cart...</h1><br/>
            <p>And Purchase this item...</p>
            <CardImages image="https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70" imagename="Formals" price={1000}/>
        </div>
    )
}
export default Cart;