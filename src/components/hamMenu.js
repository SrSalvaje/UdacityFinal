import React from 'react';
import "./hamMenu.css";

const HamMenu = ()=>{
     //open the nav menu
    const openSide=()=>{
        const sidebar=document.querySelector(".side-bar");
        if(sidebar.style.width==="" || sidebar.style.width==="0px"){
        sidebar.style.width="30vw";
        }else{
        sidebar.style.width="0";
        }    
   }
   //allows users to use the enter button to open menu
    const enterAccessible=(event)=> {
        let code = event.keyCode || event.which;
        if(code === 13) {
            document.getElementById("openSidebarMenu").click();
        }
    } 
   
    return(
        
    <div>
        <input
        type="checkbox"
        className="openSidebarMenu"
        id="openSidebarMenu"
        onClick={openSide}/>
    <label htmlFor="openSidebarMenu" className="sidebarIconToggle" aria-label="menu" role="button"tabIndex="0" onKeyPress={enterAccessible} >
        <div className="spinner diagonal part-1" />
        <div className="spinner horizontal" />
        <div className="spinner diagonal part-2" />
    </label>

    </div>
      
    )
}
    
export default HamMenu