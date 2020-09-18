import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("ml: home:", history);

    // const production = ['Updates are being made to the site over the next month.  Please be patient.'];

    // production.forEach((Production, index) => {
    //     alert(Production, index);
    // });

    return (
        <div className="main-wrapper">
            <h1>Let our Hive make a difference!!</h1>
            <div className="content">
                <p>We want to help your business grow.</p>
                
                <p></p>
            </div>
        </div>
    );
}

export default Home;