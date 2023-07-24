import logis from "./assets/Logisticsapp/logis.png"
import logis1 from "./assets/Logisticsapp/logis1.png"
import logis2 from "./assets/Logisticsapp/logis2.png"
import logis3 from "./assets/Logisticsapp/logis3.png"
import logis4 from "./assets/Logisticsapp/logis4.png"
import logis5 from "./assets/Logisticsapp/logis5.png"
import logis6 from "./assets/Logisticsapp/logis6.png"
import logis7 from "./assets/Logisticsapp/logis7.png"
import logis8 from "./assets/Logisticsapp/logis8.png"
import logis9 from "./assets/Logisticsapp/logis9.png"
import logis10 from "./assets/Logisticsapp/logis10.png"
import logis11 from "./assets/Logisticsapp/logis11.png"
import logis12 from "./assets/Logisticsapp/logis12.png"
import logis13 from "./assets/Logisticsapp/logis13.png"
import logis14 from "./assets/Logisticsapp/logis14.png"
import logis15 from "./assets/Logisticsapp/logis15.png"
import logis16 from "./assets/Logisticsapp/logis16.png"
import logis17 from "./assets/Logisticsapp/logis17.png"
import logis18 from "./assets/Logisticsapp/logis18.png"
import logis19 from "./assets/Logisticsapp/logis19.png"
import logis20 from "./assets/Logisticsapp/logis20.png"
import logis21 from "./assets/Logisticsapp/logis21.png"
import logis22 from "./assets/Logisticsapp/logis22.png"
import logis23 from "./assets/Logisticsapp/logis23.png"
import logis24 from "./assets/Logisticsapp/logis24.png"
import Navbarr from "./Navbarr.js"
import Connect from "./Connect.js"
import Footer from "./Footer.js"
import { Link } from "react-router-dom";
import Casebar from "./Casebar"



    const LogisCaseStudy = () => {
      
      return (
        <div>
          <Casebar/>
        <Link className="backto" to="/casestudies" >Back to Case Studies</Link>
        <section className="landing">
                <p id="pro" className="present">Project Overview</p>
                <img className="news" src={logis} alt="Project overview"/>
                <img className="news" src={logis1} alt="Project overview"/>
                <img className="news" src={logis2} alt="Project overview"/>
                <p id="under" className="present">Understanding the User</p>
                <img className="news" src={logis3} alt="Project overview"/>
                <img className="news" src={logis4} alt="Project overview"/>
                <img className="news" src={logis5} alt="Project overview"/>
                <img className="news" src={logis6} alt="Project overview"/>
                <img className="news" src={logis7} alt="Project overview"/>
                <p id="start" className="present">Starting the Design</p>
                <img className="news" src={logis8} alt="Project overview"/>
                <img className="news" src={logis9} alt="Project overview"/>
                <img className="news" src={logis10} alt="Project overview"/>
                <img className="news" src={logis11} alt="Project overview"/>
                <img className="news" src={logis12} alt="Project overview"/>
                <img className="news" src={logis13} alt="Project overview"/>
                <p id="refine" className="present">Refining the Design</p>
                <img className="news" src={logis14} alt="Project overview"/>
                <img className="news" src={logis15} alt="Project overview"/>
                <img className="news" src={logis16} alt="Project overview"/>
                <img className="news" src={logis17} alt="Project overview"/>
                <img className="news" src={logis18} alt="Project overview"/>
                <img className="news" src={logis19} alt="Project overview"/>
                <p id="take" className="present">Take Aways</p>
                <img className="news" src={logis20} alt="Project overview"/>
                <img className="news" src={logis21} alt="Project overview"/>
                <img className="news" src={logis22} alt="Project overview"/>
                <img className="news" src={logis23} alt="Project overview"/>
                <img className="news" src={logis24} alt="Project overview"/>
                
            </section>
          <Connect/>
          <Footer/>
        </div>
        

        
      );
    };
    export default LogisCaseStudy;