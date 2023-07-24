
import React from "react";
import { Routes, Route} from "react-router-dom";
import Homepage from "./Homepage.js"
import Case from "./Case.js"
import Re from "./Re.js"
import Navbarr from "./Navbarr.js";
import AfricanCaseStudy from "./AfricanCaseStudy.js"
import InviteCaseStudy from "./InviteCaseStudy.js"
import ArtCaseStudy from "./ArtCaseStudy.js"
import Message from "./Message.js"
import Inviteful from "./Inviteful.js";
import Africanful from "./Africanful.js";
import Artful from "./Artful.js";
import NotFound from "./NotFound.js";
import Resume from "./Resume.js";
import LogisCaseStudy from "./LogisCaseStudy.js";
import Home from "./Home.js"

export default function App () {
    return (
        <>
        <Routes> 
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/casestudies" element={<Case />}></Route>
        <Route path="/redesigns" element={<Re/>}></Route>
        <Route path="/africancasestudy" element={<AfricanCaseStudy/>}></Route>
        <Route path="/invitecasestudy" element={<InviteCaseStudy />}></Route>
        <Route path="/artcasestudy" element={<ArtCaseStudy />}></Route>
        <Route path="/sendmessage" element={<Message/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/logisticscasestudy" element={<LogisCaseStudy/>}></Route>

      </Routes>
            
  
    </>
  );

}