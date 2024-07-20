import React , {useState} from "react";

function FooterComponent(){
    const[count,setCount]=useState(0)
    return(
        <div className="foot">
            <footer className="box">
                <h1>&copy; Ecommerce Store</h1><br/>
                <p>contact-us +910000000000</p><br/>
                <a href="#"><p>Follow-us on our site</p></a>
            </footer>
            {/* increment <button type="button" onClick={()=>setCount(count+1)}>+</button> 
            <p>{count}</p>
            <button type="button" onClick={()=>setCount(count-1)}>-</button> decrement
            <button type="button">Submit</button> */}
        </div>
    )
}
export default FooterComponent;