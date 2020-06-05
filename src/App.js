import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './css/App.css';
import beelogo from './images/beelogo.jpg';
import beedev2 from './images/beedev2.png';
import Home from './components/Home';
import About from './components/About';
import Contact  from './components/Contact';
import Services from './components/Services';

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
          <img src={beedev2} alt="logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </div>
      </nav>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      <div className="footer">
      <div className="madeby">
        <img src={beelogo} alt="" />
        <h4>Created by BeeDev IT Services &copy; 2020</h4>
        </div>
      </div>
    </div>
  );
}
