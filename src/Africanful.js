import React from "react";
import african from "./assets/Africandelight/african.png"
import invite from "./assets/Inviteapp/invite.png"
import art from "./assets/Artgallery/art.png"
import  "./styles/CaseStudy.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function Africanful (){
    const navigate = useNavigate();
    function handleClick (){
        navigate ("/africancasestudy")
    }
    return(
<section className="big">
                <div className="small">
                <p className="titles">African Delight Web App</p>
                <p className="des">A Restaurant food app which serves users with <br/>the best African dishes.</p>
                <p className="desc">
                    User Research | Wireframing | Prototying | User Testing
                </p>
                <button onClick={ handleClick} className="full" type="button">Full Case Study</button>

                </div>
                <div className="smaller">
                <img className="img" src={african} alt="Second case study design"/>
                <button onClick={handleClick}  className="fuller" type="button">Full Case Study</button>
                </div>

            


                
                
                </section>
                )
}