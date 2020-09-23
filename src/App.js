import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './css/App.css';
import beelogo from './images/beelogo.jpg';
import beedev from './images/beedev.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import Home from './components/Home';
import Team from './components/Team';
import Contact  from './components/Contact';
import WebServices from './components/WebServices';

export default function App() {
    //<!--Start of Tawk.to Script-->
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e75be618d24fc2265891178/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    //<!--End of Tawk.to Script-->

  return (
    <div className="App">
      <nav>
        <div className="title-bar">
          <img src={beedev} alt="logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/team">The Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/web-services">Web Services</Link>
        </div>
      </nav>
      <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/web-services">
            <WebServices />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      <div className="footer">
        <div className="icons">
          <img src={beelogo} alt="" />
          <a href="https://github.com/beedev-services"><img src={github} alt="github" className="social" /></a>
          <a href="https://www.linkedin.com/in/melissa-longenberger/"><img src={linkedin} alt="linkedin" className="social" /></a>
        </div>
        <div className="madeby">
          <h4>Created by BeeDev Services &copy; 2020</h4>
          <h4>Located in Columbia County, PA</h4>
          <h4>Phone 570-221-9892</h4>
        </div>
      </div>
    </div>
  );
}
