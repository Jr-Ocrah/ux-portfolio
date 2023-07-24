import "./styles/Connect.css"
import { Link } from "react-router-dom";


export default function Connect (){
    return (
        <div id="connect">
        <div className="sendo">
            <p className="connect">
                Let's connect!
            </p>
            <p className="message">
                <Link to="/sendmessage">Send me a message</Link> or <a href="https://www.linkedin.com/in/samuel-ocrah-04a78a1b8/">connect on LinkedIn</a>
            </p>
        </div>
        </div>
    )
}