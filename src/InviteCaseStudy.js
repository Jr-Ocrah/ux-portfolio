import CaseStudy from "./CaseStudy.js"
import Home from "./Homepage.js"
import ImageSlider from "./ImageSlider.js"
import Redesigns from "./Redesigns.js"
import invite1 from "./assets/Inviteapp/invite1.png"
import invite2 from "./assets/Inviteapp/invite2.png"
import invite3 from "./assets/Inviteapp/invite3.png"
import invite4 from "./assets/Inviteapp/invite4.png"
import invite5 from "./assets/Inviteapp/invite5.png"
import invite6 from "./assets/Inviteapp/invite6.png"
import invite7 from "./assets/Inviteapp/invite7.png"
import invite8 from "./assets/Inviteapp/invite8.png"
import invite9 from "./assets/Inviteapp/invite9.png"
import invite10 from "./assets/Inviteapp/invite10.png"
import invite11 from "./assets/Inviteapp/invite11.png"
import invite12 from "./assets/Inviteapp/invite12.png"
import invite13 from "./assets/Inviteapp/invite13.png"
import invite14 from "./assets/Inviteapp/invite14.png"
import invite15 from "./assets/Inviteapp/invite15.png"
import invite16 from "./assets/Inviteapp/invite16.png"
import invite17 from "./assets/Inviteapp/invite17.png"
import invite18 from "./assets/Inviteapp/invite18.png"
import invite19 from "./assets/Inviteapp/invite19.png"
import invite20 from "./assets/Inviteapp/invite20.png"
import invite21 from "./assets/Inviteapp/invite21.png"
import invite22 from "./assets/Inviteapp/invite22.png"
import invite23 from "./assets/Inviteapp/invite23.png"
import invite24 from "./assets/Inviteapp/invite24.png"
import Navbarr from "./Navbarr.js"
import Connect from "./Connect.js"
import Footer from "./Footer.js"
import { Link } from "react-router-dom";
import Casebar from "./Casebar.js"

    const InviteCaseStudy = () => {
    
      return (
        <div>
          <Casebar/>
        <Link className="backto" to="/casestudies" >Back to Case Studies</Link>
        <section className="landing">
                <p id="pro" className="present">Project Overview</p>
                <img className="news" src={invite1} alt="Project overview"/>
                <img className="news" src={invite2} alt="Project overview"/>
                <img className="news" src={invite3} alt="Project overview"/>
                <p id="under" className="present">Understanding the User</p>
                <img className="news" src={invite4} alt="Project overview"/>
                <img className="news" src={invite5} alt="Project overview"/>
                <img className="news" src={invite6} alt="Project overview"/>
                <img className="news" src={invite7} alt="Project overview"/>
                <img className="news" src={invite8} alt="Project overview"/>
                <p id="start" className="present">Starting the Design</p>
                <img className="news" src={invite9} alt="Project overview"/>
                <img className="news" src={invite10} alt="Project overview"/>
                <img className="news" src={invite11} alt="Project overview"/>
                <img className="news" src={invite12} alt="Project overview"/>
                <img className="news" src={invite13} alt="Project overview"/>
                <img className="news" src={invite14} alt="Project overview"/>
                <p id="refine" className="present">Refining the Design</p>
                <img className="news" src={invite15} alt="Project overview"/>
                <img className="news" src={invite16} alt="Project overview"/>
                <img className="news" src={invite17} alt="Project overview"/>
                <img className="news" src={invite18} alt="Project overview"/>
                <img className="news" src={invite19} alt="Project overview"/>
                <p id="take" className="present">Take Aways</p>
                <img className="news" src={invite20} alt="Project overview"/>
                <img className="news" src={invite21} alt="Project overview"/>
                <img className="news" src={invite22} alt="Project overview"/>
                <img className="news" src={invite23} alt="Project overview"/>
                <img className="news" src={invite24} alt="Project overview"/>
            </section>
          <Connect/>
          <Footer/>
        </div>
        

        
      );
    };
    export default InviteCaseStudy;