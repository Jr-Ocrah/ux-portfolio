import Connect from "./Connect"
import Footer from "./Footer"
import Message from "./Message"
import Navbarr from "./Navbarr"
import resume from "./assets/Resume/resume.png"
import "./styles/Resume.css"

export default function Resume(){
    return (
    <>
    <Navbarr/>
    <img id="imggg" src={resume} alt="Resume"/>
    <Connect/>
    <Footer/>
    </>)
}