import React from "react";
import  ReactDOM  from "react-dom/client";
import {Route,Routes} from 'react-router-dom';
import Whistile from "./component/Whistle";
import Cart from "./component/Cart";

const Apps=()=>{
    return(
        <div>
            <>
         <Routes>
            <Route path="/whistle" element={<Whistile/>}/>
            <Route path="/cart" element={<Cart/>}/>
         </Routes>
        </>
        </div>
    )
}
export default Apps;