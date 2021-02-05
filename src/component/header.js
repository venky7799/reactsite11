import React from "react";

const Header =()=>{
    return(
       <div className="header">
           <div className="container">
               <div className="v-center row space-between">
                    <div className="logo">
                        <a href="/">Agency.</a>
                    </div> 
                    <div className="nav">
                        <span></span>
                        <span></span>
                    </div>
               </div>
           </div>
       </div>
    );
}

export default Header;