import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./component/HeaderComponent";
import Task from "./component/Task";
import FooterComponent from "./component/FooterComponent";
import './index.css';

const App=()=>{
    return(
        <div>
            <HeaderComponent/>
            <Task/>
            <FooterComponent/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)