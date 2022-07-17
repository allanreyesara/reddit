import React from "react";
import "../index.css"

export function Header() {
    return(
        <div className="header">
            
            <img className="headerLogo" 
            src='https://i.guim.co.uk/img/media/02c5fc2b42591243e6292fc83f8a97ed78807b57/198_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d31d7a8f045e54151b84076280aebca8' 
            alt="reddit-logo" 
            />
            <h1>El Reddit mas Chingon</h1>
        </div>
        
    );
}

export default Header;