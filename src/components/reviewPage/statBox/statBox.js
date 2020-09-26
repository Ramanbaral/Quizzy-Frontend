import React from "react";

import classes from "./statBox.module.css";

const StatBox = (props) => {

    const color = props.color;
    const width = props.width;

    return(
    <div className={classes.statbox} style={{width:width}}>
        <h3 className={classes.num}>{props.number}</h3>
        <p className={classes.txt} style={{color:color}}>{props.text}</p>
    </div>
    )};

export default StatBox;
