import React from 'react';
import {ReactComponent as Rightarrow} from '../assets/arrow-right.svg';
import {ReactComponent as Leftarrow} from '../assets/arrow-left.svg';


const caseStudy=[
    {
        id:1,
        substitle:"curology",
        title:'A custom formula for your skins unique need',
        img:"curology-min"
    },
    {
        id:2,
        substitle:"YOurspace",
        title:'A custom formula for your skins unique need',
        img:"yourspace-min"
    },
    {
        id:3,
        substitle:"Lumin",
        title:'A custom formula for your skins unique need',
        img:"lumin-min"
    }
]

const Cases=() =>{
    
    return(
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled"> <Leftarrow/> </div>
                    <div className="cases-arrow next "> <Rightarrow/> </div>
                </div>
                <div className='row'>
                    {caseStudy.map(caseItem=>(
                       
                       <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.substitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                        
                            <div className="case-image">
                                <img src={require(`../assets/${caseItem.img}.png`)} 
                                 alt={ caseItem.title}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}


export default Cases;