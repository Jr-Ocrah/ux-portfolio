import CaseStudy from "./CaseStudy";
import Connect from "./Connect";
import Footer from "./Footer";
import Message from "./Message";
import Navbar from "./Navbar";
import Redesigns from "./Redesigns";
import me from "./assets/Homepage/me.png"
import "./styles/Homepage.css"


export default function Home() {
    return (
        <>
        

        <main id="home"> 
            <Navbar/>
            <section className="section">
                <img className="me" src={me} alt="Designer"/>
                <p className="ux">UX Designer</p>
                <p className="skills">Figma - Adobe XD- HTML - CSS - JavaScript (React)</p>

            </section>
            <CaseStudy/>
            <Redesigns/>
            <Connect/>
            <Footer/>

            


        </main>
        </>
    )


}