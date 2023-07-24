import Africanful from "./Africanful";
import Inviteful from "./Inviteful";
import Artful from "./Artful.js";
import Navbarr from "./Navbarr";
import Navbar from "./Navbar";
import Connect from "./Connect";
import Footer from "./Footer";
import Logisful from "./Logisful";


export default function Case() {
    return(
        <>
        
        <div>
        <Navbarr/>
                    <p className="titley">Case Studies and Projects</p>
         <Logisful/>           
         <Inviteful/>
        <Africanful/>
        <Artful/>
        <Connect/>
        <Footer/>
        </div>
        </>
       

    )
}