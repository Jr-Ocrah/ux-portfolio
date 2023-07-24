import React from "react";
import african from "./assets/Africandelight/african.png"
import invite from "./assets/Inviteapp/invite.png"
import art from "./assets/Artgallery/art.png"
import  "./styles/CaseStudy.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


export default function CaseStudyref (){
const navigate = useNavigate();

    const casestudies = [{
        title: "Invite App",
        design: invite, african,
        description: "An app that allow users to send and receive invites.",
        alt: "First case study design",
        click: "/a"
    },  
    {title: "African Delight Web App",
    design: african,
    description: `A Restaurant food app which serves users
    with the best African dishes.`,
    alt: "Second case study design",
    click: "/b"
    
    },
    {title: "Art Gallery App",
    design: art,
    description: "An app that presents users with artworks from various Art Galleries.",
    alt: "Third case study design",
    click: "/c"
    
    }]

    function handleClick (){
        navigate ("/a")
    }
    const caseComponents = casestudies.map((casestudy) => 
    <div>
            
            <section className="big">
                <div className="small">
                <p className="titles">{casestudy.title}</p>
                <p className="des">{casestudy.description}</p>
                <p>
                    User Research | Wireframing | Prototying | User Testing
                </p>
                <button onClick={ handleClick} className="full" type="button">Full Case Study</button>

                </div>
                <div className="smaller">
                <img className="img" src={casestudy.design} alt={casestudy.alt}/>
                <button onClick={() => navigate(casestudy.click)}  className="fuller" type="button">Full Case Study</button>
                </div>

            


                
                
                </section>
            </div> )



    return (
                    <div id="casestudies">
                    <p className="titley">Case Studies and Projects</p>
                    {caseComponents}
            
                    </div>
                )
            }
