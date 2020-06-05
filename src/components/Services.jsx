import React from "react";
import { useHistory } from "react-router-dom";

function Services() {
    const history = useHistory();
    console.log("ml: services:", history);

    return (
        <div className="main-wrapper">
            Services page
        </div>
    );
}

export default Services;