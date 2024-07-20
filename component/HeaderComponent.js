import React from "react";
// import {Link} from "react-router-dom";
function HeaderComponent(){
    return(
        <div className="container">
            <div className="logo">
                Ecommerce
            </div>
            <nav className="item">
                <ul className="ul">
                    {/* <Link to='/whistle'><li><h2>❤️ Whistile</h2></li></Link>
                    <Link to='/cart'><li><h2>🛒 Cart</h2></li></Link> */}
                    <li><h2>❤️ Whistle</h2></li>
                    <li><h2>🛒 Cart</h2></li>
                </ul>
            </nav>
        </div>
    )
}
export default HeaderComponent;