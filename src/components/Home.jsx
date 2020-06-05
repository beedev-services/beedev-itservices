import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("ml: home:", history);

    // const covid = ['COVID-19 ANNOUNCEMENT!!!! Services are limited, please contact for more information'];

    // covid.forEach((covid19,  index) => {
    // alert(covid19, index);
    // });

    return (
        <div className="main-wrapper">
            Home page
        </div>
    );
}

export default Home;