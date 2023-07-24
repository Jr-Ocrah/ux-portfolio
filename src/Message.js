import Footer from "./Footer"
import Navbar from "./Navbar"
import Navbarr from "./Navbarr"
import "./styles/Message.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Message(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_se0p1sn', 'template_c63ygtb', form.current, 's1YOEymFwDQ7_sJEL')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            console.log("Message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return(
<>
<Navbarr/>
<div>
<div className="bbox">
<div className="box">
<p className="send">Send me a message </p>

<p className="chat">
Ready to chat about your design needs or just want to say hello? 
Use the form to send me a message and I’ll get back to you soon.
</p>
</div>
<div >
    <form className="bo" ref={form} onSubmit={sendEmail}>
<label className="name">Name</label>
<input className="namey" type="text" name="user_name" /><br/>
<label className="email">Email</label>
<input className = "emaily" type="text" name="user_email"/><br/>
<label className="mess">Message</label><br/>
<textarea className ="messy" name="message"/>
<button className="last">Send</button>
</form>
</div>

</div>

</div>
<Footer/>

</>  )
}