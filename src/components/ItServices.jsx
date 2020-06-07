import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Residential from './itdata/Residential';
import resdata from './itdata/residentialdata';
import Business from './itdata/Business';
import busdata from './itdata/businessdata';
import AddOns from './itdata/AddOns';
import addonsdata from './itdata/addondata';

function ItServices() {
    const history = useHistory();
    console.log("ml: IT Services:", history);
    const [residential] = useState(resdata);
    const [business] = useState(busdata);
    const [addons] = useState(addonsdata);

    return (
        <div className="main-wrapper">
            <h1>IT Services</h1> 
            <div className="links">
                <a href="#res">Residential Packages</a> | 
                <a href="#bus">Business Packages</a> | 
                <a href="#addons">Add-Ons</a>
            </div>
            <div className="content">
                <div className="section" id="res">
                    <h3 className="title">Residential Packages</h3>
                    <p>IT Service based packages for the home</p>
                    <p>We offer the following Packages:</p>
                    <div className="packages">
                        <Residential items={residential} />
                    </div>
                </div>
                <div className="section" id="bus">
                    <h3 className="title">Business Packages</h3>
                    <p>IT Service based packages for Businesses</p>
                    <p>We offer the following Packages:</p>
                    <div className="packages">
                        <Business items={business} />
                    </div>
                </div>
                <div className="section" id="res">
                    <h3 className="title">Add-Ons</h3>
                    <p>Items that can be added to packages</p>
                    <p>We offer the following Add-On Items / Packages:</p>
                    <div className="packages">
                        <AddOns items={addons} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItServices;