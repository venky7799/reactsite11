import React from "react";
import {ReactComponent as Rightarrow} from '../assets/arrow-right.svg';

const Banner=({title})=>{
    return(
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2 ref={title}>
                        <div className="line" >
                            <span>Create unique brand is</span>
                        </div>
                        <div className="line">
                            <span>What we do.</span>
                        </div>
                    </h2> 
                        <div className="btn-row">
                            <a href="/">More about us <Rightarrow /></a>
                        </div>  
                </div>
            </div>
        </section>
    );
}


export default Banner;