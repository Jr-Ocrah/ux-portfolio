import React from "react";
import african from "./assets/Africandelight/african.png"
import invite from "./assets/Inviteapp/invite.png"
import art from "./assets/Artgallery/art.png"
import  "./styles/CaseStudy.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function Inviteful (){
    const navigate = useNavigate();
    function handleClick (){
        navigate ("/invitecasestudy")
    }
    return(
<section className="big">
                <div className="small">
                <p className="titles">Invite App</p>
                <p className="des">An app that allow users to send and receive <br/> invites.</p>
                <p className="desc">
                    User Research | Wireframing | Prototying | User Testing
                </p>
                <button onClick={ handleClick} className="full" type="button">Full Case Study</button>

                </div>
                <div className="smaller">
                <img className="img" src={invite} alt="First case study design"/>
                <button onClick={handleClick}  className="fuller" type="button">Full Case Study</button>
                </div>

            


                
                
                </section>
                )
}