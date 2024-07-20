import React from "react";
import  ReactDOM  from "react-dom/client";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import BodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/FooterComponent";
import App from "./App.js";

const AppLayout=()=>{
    return(
        <div>
            <BrowserRouter>
                    <App/>
                    <HeaderComponent/>
                    <BodyComponent/>
                    <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)