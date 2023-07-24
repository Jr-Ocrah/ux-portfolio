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

    const InviteCaseStudy = () => {
      const slides = [
        { url: invite1},
        { url: invite2},
        { url: invite3},
        ];
        const slides2 = [
          { url: invite4},
          { url: invite5},
          { url: invite6},
          { url: invite7},
          { url: invite8},
          ];
          const slides3 = [
            { url: invite9},
            { url: invite10},
            { url: invite11},
            { url: invite12},
            { url: invite13},
            { url: invite14},
            ];
            const slides4 = [
              { url: invite15},
              { url: invite16},
              { url: invite17},
              { url: invite18},
              { url: invite19},
              ];
              const slides5 = [
                { url: invite20},
                { url: invite21},
                { url: invite22},
                { url: invite23},
                { url: invite24},
                ];
      const containerStyles = {
        width: "500px",
        height: "250px",
        margin: "0 auto",
      };
      return (
        <div>
        <Link className="backto" to="/casestudies" >Back to Case Studies</Link>
          <div className="down">
          <h2>Project Overview</h2>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <h2>Understanding the User</h2>
          <div style={containerStyles}>
            <ImageSlider slides={slides2} />
          </div>
          <h2>Starting the Design</h2>
          <div style={containerStyles}>
            <ImageSlider slides={slides3} />
          </div>
          <h2>Refining the Design</h2>
          <div style={containerStyles}>
            <ImageSlider slides={slides4} />
          </div>
          <h2>Take Aways</h2>
          <div style={containerStyles}>
            <ImageSlider slides={slides5} />
          </div>
          <Connect/>
          <Footer/>
        </div>
        </div>

        
      );
    };
    export default InviteCaseStudy;