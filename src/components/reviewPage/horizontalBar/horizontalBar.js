import React from "react"
import classes from "./horizontalBar.module.css"

const HorizontalBar = (props) => {

    return(
        <div className={classes.bar}>
            <p>{props.text}</p>
        </div>
    )
}

export default HorizontalBar;