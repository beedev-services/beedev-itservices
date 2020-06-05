import React from "react";

function Company(props) {
    console.log("ml: company: list:", props);

    return (
        <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.id}>
          <h3>{item.name}</h3>
          <div className="item-info">
            <p>{item.info01}</p>
            <p>{item.info02}</p>
            <p>{item.info03}</p>
            <p>{item.info04}</p>
          </div>
      </div>
        ))}
      </div>
    );
}

export default Company;