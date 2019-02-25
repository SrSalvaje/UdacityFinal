import React from 'react';
import "./footer.css";
import fouricon from "../img/pbf.png";
import glg from "../img/google.png";

const footer=()=>{
    return(
        <footer className="footer">
           <div className=" fsq"><img className="fourSq" src={fouricon} alt="Powered by FourSquare"/></div>
           <div className=" glg"><img className="googleLogo" src={glg} alt="Powered by Google"/></div>
        </footer>
    )
}

export default footer;
