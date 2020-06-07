import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Customer from './webdata/Customer';
import Company from './webdata/Company';
import AddOns from './webdata/AddOns';
import intdata from './webdata/internaldata';
import publicdata from './webdata/publicdata';
import addonsdata from './webdata/addonsdata';

function WebServices(props) {
    const history = useHistory();
    console.log("ml: web services:", history);
    const [customer] = useState(publicdata);
    const [internal] = useState(intdata);
    const [addons] = useState(addonsdata);

    return (
        <div className="main-wrapper">
            <h1>Website Services</h1>
            <div className="links">
                <a href="#public">Public Website Packages</a> | 
                <a href="#internal">Internal Websites Packages</a> | 
                <a href="#addons">Add-Ons</a>
            </div>
            <div className="content">
                <div className="section" id="public">
                    <h3 className="title">Public Facing Websites</h3>
                    <p>What the public can see</p>
                    <p>We offer the following Packages:</p>
                    <div className="packages">
                        <Customer items={customer} />
                    </div>
                </div>
                <div className="section" id="internal">
                    <h3 className="title">Internal Websites</h3>
                    <p>What Employees and Employers can see</p>
                    <p>We offer the following Packages:</p>
                    <div className="packages">
                        <Company items={internal} />
                    </div>
                </div>
                <div className="section" id="addons">
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

export default WebServices;