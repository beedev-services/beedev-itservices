import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Customer from './data/Customer';
import Company from './data/Company';
import compdata from './data/companydata';
import custdata from './data/customerdata';

function Services(props) {
    const history = useHistory();
    console.log("ml: services:", history);
    const [customer] = useState(custdata);
    const [company] = useState(compdata);

    return (
        <div className="main-wrapper">
            <h1>BeeDev IT Services - What we offer</h1>
            <div className="content">
            <p>Customer Facing Websites</p>
            <p>This is what your customer will see and visit.  We offer the following packages:</p>
            <div className="packages">
                <Customer items={customer} />
            </div>
            <p>Company Facing Websites</p>
            <p>This is what you and your employees only will see.  From a wiki style site that contains company policies and training material to a single page with links to the tools you and your employees need to use.  We offer the following packages:</p>
            <div className="packages">
                <Company items={company} />
            </div>
            </div>
        </div>
    );
}

export default Services;