import React from "react";
import * as Icon from "react-bootstrap-icons";

const Contacts_item = (props:any) => {
  return (
    <div>
      <div className="c_item">
        <div className="c_icon">
         {props.icon}
        </div>
        <div className="c_title">
          <h4>{props.nom}</h4>
        </div>
        <div className="c_info">
          <h5>
            <input type="text" placeholder="sds" />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contacts_item;