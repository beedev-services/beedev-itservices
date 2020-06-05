import React from "react";
import { useHistory } from "react-router-dom";

function Contact() {
    const history = useHistory();
    console.log("ml: contact:", history);

    return (
        <div className="main-wrapper">
            <h1>Contacting BeeDev IT Services</h1>
            <div className="content">
            <p>We have our chat service up and running below 24/7.  If we aren't online at the time of your request don't worry we will still get it the very next business day, just fill out the form that pops up.</p>
            <p>We also have a Facebook page where you are reach out to us</p>
            <p>Email more your thing?  We have that too</p>
            <p>We have a phone too but we ask that you use other means first</p>
            </div>
        </div>
    );
}

export default Contact;