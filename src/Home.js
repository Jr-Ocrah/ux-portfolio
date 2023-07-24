import { Link } from "react-router-dom";
import me from "./assets/Homepage/me.png"
import "./styles/Home.css"
import Footer from "./Footer";


export default function Homepage() {
    return (
        <div className="front"> 
        <section className="section">
            <div className="divine">
                <img className="me" src={me} alt="Designer"/>
                <p className="ux">UI/UX Designer</p>
                <p className="skills">Figma - Adobe XD- HTML - CSS - JavaScript (React)</p>
                </div>   
                <div className="nave">
                <Link to="/casestudies" >Case Studies</Link>
		<Link to="/redesigns" >Redesigns</Link>
		<Link to= "/resume">Resume</Link>
		<Link to="/sendmessage" >Contact</Link>
        <div className="animation start-home"></div>
        </div> 
            </section>
            <Footer/>
        
        </div>

    )
}