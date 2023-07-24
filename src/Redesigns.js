import Connect from "./Connect"
import Footer from "./Footer"
import Navbar from "./Navbar"
import amazon from "./assets/Amazon/amazon.PNG"
import disneyplus from "./assets/Disneyplus/disneyplus.PNG"
import espn from "./assets/Espn/espn.png"
import lacoste from "./assets/Lacoste/lacoste.png"
import patek from "./assets/Patek/patek.png"
import spotify from "./assets/Spotify/spotify.png"
import steam from "./assets/Steam/steam.PNG"
import wired from "./assets/Wired/wired.png"
import "./styles/Redesign.css"

export default function Redesigns() {
const images = [{
    title: "Amazon",
    design: amazon,
    alt: "First redesign"
},  
{title: "Disney plus",
design: disneyplus,
alt: "Second redesign"

},
{title: "Espn",
design: espn,
alt: "Third redesign"

},

{title: "Lacoste",
design: lacoste,
alt: "Forth redesign"
},

{ title: "Patek Philippe",
design: patek,
alt: "Fifth redesign"
},

{ title: "Spotify",
design: spotify,
alt: "Sixth redesign"
},

{ title: "Steam",
design: steam,
alt: "Seventh redesign"
},

{ title: "Wired",
design: wired,
alt: "Eigth redesign"
}]

const imageComponents = images.map((image) => 
<div>
        
        <section className="biggest">
                <p className="title">{image.title}</p>
                <img className="image" src={image.design} alt={image.alt}/>
            </section>
        </div> )
return (
                <>
                <Navbar/>
                <div id="redesigns">
                <p className="main">Redesigns</p>
                {imageComponents}
                </div>
                </>
                
            )
        }
