import React from "react";
import { useHistory } from "react-router-dom";
import BeeDev from '../images/webdev.png';
import Questions from '../images/questions.png';

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
                <div className="home-header">
                    <img src={BeeDev} alt="BeeDev Header" id="heading" />
                    <img src={Questions} alt="Questions" id="questions" />
                </div>
                <div>
                <h2 className="home-answer">
                    BeeDev Services has solutions!
                </h2>
                <p>
                    In nature a Bee Hive is the work of a colony of bees.  Thats BeeDev Services works.  We want to work WITH YOU.  We take that hive mentality personally.  We have the skills and the time to create websites, but you have ideas and know about your business.  Together we can create, build, update, and even fix your website.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Home;