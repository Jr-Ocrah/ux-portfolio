import React from "react";
import african from "./assets/Africandelight/african.png"
import logis from "./assets/Logisticsapp/logi.PNG"
import art from "./assets/Artgallery/art.png"
import  "./styles/CaseStudy.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function Logisful (){
    const navigate = useNavigate();
    function handleClick (){
        navigate ("/logisticscasestudy")
    }
    return(
<section className="big">
                <div className="small">
                <p className="titles">Logistics Receipt App</p>
                <p className="des">An app that helps users receive their orders from various online stores while keeping their receipts on the app.</p>
                <p className="desc">
                    User Research | Wireframing | Prototying | User Testing
                </p>
                <button onClick={ handleClick} className="full" type="button">Full Case Study</button>

                </div>
                <div className="smaller">
                <img className="img" src={logis} alt="First case study design"/>
                <button onClick={handleClick}  className="fuller" type="button">Full Case Study</button>
                </div>

            


                
                
                </section>
                )
}