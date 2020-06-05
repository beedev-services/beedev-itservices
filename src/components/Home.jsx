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
            <h1>Let our Hive make a difference!!</h1>
            <div className="content">
                <p>From building websites to attract your customers to providing your employees a way to have access to materials they need to do their jobs, we are here to help.</p>
                <p>BeeDev IT Services offers simple designs that are responsive</p>
                <p></p>
            </div>
        </div>
    );
}

export default Home;