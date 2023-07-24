
import art1 from "./assets/Artgallery/art1.png"
import art2 from "./assets/Artgallery/art2.png"
import art3 from "./assets/Artgallery/art3.png"
import art4 from "./assets/Artgallery/art4.png"
import art5 from "./assets/Artgallery/art5.png"
import art6 from "./assets/Artgallery/art6.png"
import art7 from "./assets/Artgallery/art7.png"
import art8 from "./assets/Artgallery/art8.png"
import art9 from "./assets/Artgallery/art9.png"
import art10 from "./assets/Artgallery/art10.png"
import art11 from "./assets/Artgallery/art11.png"
import art12 from "./assets/Artgallery/art12.png"
import art13 from "./assets/Artgallery/art13.png"
import art14 from "./assets/Artgallery/art14.png"
import art15 from "./assets/Artgallery/art15.png"
import art16 from "./assets/Artgallery/art16.png"
import art17 from "./assets/Artgallery/art17.png"
import art18 from "./assets/Artgallery/art18.png"
import art19 from "./assets/Artgallery/art19.png"
import art20 from "./assets/Artgallery/art20.png"
import art21 from "./assets/Artgallery/art21.png"
import art22 from "./assets/Artgallery/art22.png"
import Navbarr from "./Navbarr.js"
import Connect from "./Connect.js"
import Footer from "./Footer.js"
import { Link } from "react-router-dom";
import Casebar from "./Casebar"



    const ArtCaseStudy = () => {
      
      return (
        <div>
          <Casebar/>
        <Link className="backto" to="/casestudies" >Back to Case Studies</Link>
        <section className="landing">
                <p id="pro" className="present">Project Overview</p>
                <img className="news" src={art1} alt="Project overview"/>
                <img className="news" src={art2} alt="Project overview"/>
                <img className="news" src={art3} alt="Project overview"/>
                <p id="under" className="present">Understanding the User</p>
                <img className="news" src={art4} alt="Project overview"/>
                <img className="news" src={art5} alt="Project overview"/>
                <img className="news" src={art6} alt="Project overview"/>
                <img className="news" src={art7} alt="Project overview"/>
                <img className="news" src={art8} alt="Project overview"/>
                <p id="start" className="present">Starting the Design</p>
                <img className="news" src={art9} alt="Project overview"/>
                <img className="news" src={art10} alt="Project overview"/>
                <img className="news" src={art11} alt="Project overview"/>
                <img className="news" src={art12} alt="Project overview"/>
                <img className="news" src={art13} alt="Project overview"/>
                <p id="refine" className="present">Refining the Design</p>
                <img className="news" src={art14} alt="Project overview"/>
                <img className="news" src={art15} alt="Project overview"/>
                <img className="news" src={art16} alt="Project overview"/>
                <img className="news" src={art17} alt="Project overview"/>
                <img className="news" src={art18} alt="Project overview"/>
                <p id="take" className="present">Take Aways</p>
                <img className="news" src={art19} alt="Project overview"/>
                <img className="news" src={art20} alt="Project overview"/>
                <img className="news" src={art21} alt="Project overview"/>
                <img className="news" src={art22} alt="Project overview"/>
                
            </section>
          <Connect/>
          <Footer/>
        </div>
        

        
      );
    };
    export default ArtCaseStudy;