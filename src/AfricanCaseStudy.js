import ImageSlider from "./ImageSlider.js"
import african1 from "./assets/Africandelight/african1.png"
import african2 from "./assets/Africandelight/african2.png"
import african3 from "./assets/Africandelight/african3.png"
import african4 from "./assets/Africandelight/african4.png"
import african5 from "./assets/Africandelight/african5.png"
import african6 from "./assets/Africandelight/african6.png"
import african7 from "./assets/Africandelight/african7.png"
import african8 from "./assets/Africandelight/african8.png"
import african9 from "./assets/Africandelight/african9.png"
import african10 from "./assets/Africandelight/african10.png"
import african11 from "./assets/Africandelight/african11.png"
import african12 from "./assets/Africandelight/african12.png"
import african13 from "./assets/Africandelight/african13.png"
import african14 from "./assets/Africandelight/african14.png"
import african15 from "./assets/Africandelight/african15.png"
import african16 from "./assets/Africandelight/african16.png"
import african17 from "./assets/Africandelight/african17.png"
import african18 from "./assets/Africandelight/african18.png"
import african19 from "./assets/Africandelight/african19.png"
import african20 from "./assets/Africandelight/african20.png"
import african21 from "./assets/Africandelight/african21.png"
import african22 from "./assets/Africandelight/african22.png"
import african23 from "./assets/Africandelight/african23.png"
import african24 from "./assets/Africandelight/african24.png"
import Navbarr from "./Navbarr.js"
import Connect from "./Connect.js"
import Footer from "./Footer.js"
import "./styles/CaseDetail.css"
import { Link } from "react-router-dom";
import Casebar from "./Casebar.js"

    const AfricanCaseStudy = () => {
      
      return (
        <div>
          <Casebar/>
        <Link className="backto" to="/casestudies" >Back to Case Studies</Link>
        <section className="landing">
                <p id="pro" className="present">Project Overview</p>
                <img className="news" src={african1} alt="Project overview"/>
                <img className="news" src={african2} alt="Project overview"/>
                <img className="news" src={african3} alt="Project overview"/>
                <p id="under" className="present">Understanding the User</p>
                <img className="news" src={african4} alt="Project overview"/>
                <img className="news" src={african5} alt="Project overview"/>
                <img className="news" src={african6} alt="Project overview"/>
                <img className="news" src={african7} alt="Project overview"/>
                <img className="news" src={african8} alt="Project overview"/>
                <p id="start" className="present">Starting the Design</p>
                <img className="news" src={african9} alt="Project overview"/>
                <img className="news" src={african10} alt="Project overview"/>
                <img className="news" src={african11} alt="Project overview"/>
                <img className="news" src={african12} alt="Project overview"/>
                <img className="news" src={african13} alt="Project overview"/>
                <img className="news" src={african14} alt="Project overview"/>
                <p id="refine" className="present">Refining the Design</p>
                <img className="news" src={african15} alt="Project overview"/>
                <img className="news" src={african16} alt="Project overview"/>
                <img className="news" src={african17} alt="Project overview"/>
                <img className="news" src={african18} alt="Project overview"/>
                <img className="news" src={african19} alt="Project overview"/>
                <p id="take" className="present">Take Aways</p>
                <img className="news" src={african20} alt="Project overview"/>
                <img className="news" src={african21} alt="Project overview"/>
                <img className="news" src={african22} alt="Project overview"/>
                <img className="news" src={african23} alt="Project overview"/>
                <img className="news" src={african24} alt="Project overview"/>
            </section>
          <Connect/>
          <Footer/>
        </div>
        

        
      );

      
    };
    export default AfricanCaseStudy;