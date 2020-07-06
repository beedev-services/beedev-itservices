import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Packages from './repairdata/Packages';
import pkgdata from './repairdata/packagesdata';
import AddOns from './repairdata/AddOns';
import addonsdata from './repairdata/addondata';

function RepairServices() {
    const history = useHistory();
    console.log("ml: Repair Services:", history);
    const [pkgs] = useState(pkgdata);
    const [addons] = useState(addonsdata);

    return (
        <div className="main-wrapper">
            <h1 id="repairimg">Repair Services</h1>
            <div className="links">
                <a href="#packages">Packages</a> | 
                <a href="#addons">Add-Ons</a>
            </div>
            <div className="content">
                <div className="section" id="packages">
                    <h3 className="title">Repair Packages</h3>
                    <p>We offer the following Packages:</p>
                    <div className="packages">
                        <Packages items={pkgs} />
                    </div>
                </div>
                <div className="section" id="addons">
                    <h3 className="packages"></h3>
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

export default RepairServices;