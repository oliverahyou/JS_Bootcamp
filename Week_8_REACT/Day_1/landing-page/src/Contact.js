import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <span className="contact-title">Contact us</span>
            <div className="contact-form">
                <div id="sect1">
                    <span className="contact-details">Contact us and we will get back to you within 24 hours.</span><br/>
                    <span className="contact-details"><i class="fa-solid fa-location-dot"> Company Name</i></span><br/>
                    <span className="contact-details"><i class="fa-solid fa-mobile-screen-button"> +256 778 800 900</i></span><br/>
                    <span className="contact-details"><i class="fa-solid fa-envelope"> company@gmail.com</i></span>
                </div>
                <div id="sect2">
                    <span>Contact</span><br/>
                    <input type="text" placeholder="Email address..." className="input-field"></input>
                    <textarea id="textarea" placeholder="Comment..." rows="10"></textarea>
                    <button type="submit" id="contact-btn">Send</button>
                </div>
            </div>
            
        </div>
    )
}
export default Contact;