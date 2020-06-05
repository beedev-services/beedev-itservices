import React from "react";
import { useHistory } from "react-router-dom";

function Contact() {
    const history = useHistory();
    console.log("ml: contact:", history);

    return (
        <div className="main-wrapper">
            Contact page
        </div>
    );
}

export default Contact;