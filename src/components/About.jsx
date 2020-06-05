import React from "react";
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory();
    console.log("ml: about:", history);

    return (
        <div className="main-wrapper">
            About page
        </div>
    );
}

export default About;