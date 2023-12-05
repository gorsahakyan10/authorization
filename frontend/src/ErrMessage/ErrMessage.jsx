import React from "react";
import "./ErrMessage.css";

import { errUI } from "./data";

function ErrMessage({ errors }) {
    return (
        <div className="ErrMessage">
            <ul>
                {(errors || []).map((errorName, i) => 
                    <li key={i + `${Math.random()}`}> {errUI[errorName]} </li>
                )}
            </ul>
        </div>
    );
}

export default ErrMessage;
