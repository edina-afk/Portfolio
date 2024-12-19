import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="IMG_20240223_202758_494-Photoroom.png-Photoroom.png" alt="Contact" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form
          action="https://formspree.io/f/mdkovqav"  
          method="POST"  
          onSubmit={() => alert("Your message has been sent!")}  
        >
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />

          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
