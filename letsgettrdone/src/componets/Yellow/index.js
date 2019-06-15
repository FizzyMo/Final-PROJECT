import React from "react";
import "./style.css";

function Yellow(props) {
    return (
        <div className="yellow text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
          {props.children}
        </div>
      );
    }

export default Yellow;