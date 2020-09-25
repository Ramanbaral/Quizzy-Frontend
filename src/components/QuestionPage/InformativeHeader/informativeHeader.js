import React from "react"

import classes from "./informativeHeader.module.css"

const InfromativeHeader = (props) => (
    <div className={classes.box}>
        <div className={classes.information}>
<span>Physics  </span>{"  > "}
<span>Thermodynamics </span>{"  > "}
            <span>Quick test</span>
        </div>
    </div>
)

export default InfromativeHeader;