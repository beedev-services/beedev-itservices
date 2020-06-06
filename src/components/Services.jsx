import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Customer from './data/Customer';
import Company from './data/Company';
import AddOns from './data/AddOns';
import compdata from './data/companydata';
import custdata from './data/customerdata';
import addonsdata from './data/addonsdata';

function Services(props) {
    const history = useHistory();
    console.log("ml: services:", history);
    const [customer] = useState(custdata);
    const [company] = useState(compdata);
    const [addons] = useState(addonsdata);

    return (
        <div className="main-wrapper">
            <h1>BeeDev IT Services - What we offer</h1>
            <div className="links">
                <a href="#public">Public Websites</a> | 
                <a href="#internal">Internal Websites</a> | 
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
                        <Company items={company} />
                    </div>
                </div>
                <div className="section" id="addons">
                    <h3 className="title">Add Ons</h3>
                    <p>These items can be added to any package that doesn't already have it</p>
                    <p>We offer the following Add-On Packages:</p>
                    <div className="packages">
                        <AddOns items={addons} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;