import React from "react";
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory();
    console.log("ml: about:", history);

    return (
        <div className="main-wrapper">
            <h1>About BeeDev IT Services</h1>
            <div className="content">
            <p>Created out of a love of coding and the desire to help where ever and whoever.</p>
            <p>Hi, I'm Melissa - Owner and Operator and Head Web Developer</p>
            <p>I have always had a love of art and creating things.  After serving in the US Navy for 11 years I left the service to become a stay at home Mom.  With my family spread across the US I wanted a way to show my family my kids growing up.  So I started learning how to build a website.  Over 10 years later I am still coding and building websites and loving every minuet.</p>
            <p>After hours of research and several online classes I built my 1st website for a local photographer and found that helping her get her name out there and a place for her to showcase her talents was something I was enjoyed.  After enrolling in an immersive online Full Stack Web Developer school and learning how much more there is to Web Development my desire to help others grew.</p>
            <p>Our focus is on helping businesses and start-ups get the tools they need to do what they do best.  It can be a customer facing website or even an employee based one.  Our job here is to help those businesses do what they do best while we do what we do best.</p>
            </div>
        </div>
    );
}

export default About;