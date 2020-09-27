import React from "react"
import classes from "./button.module.css"

const Button = (props) => (
    <button className={classes.btn} onClick={props.click}>
        {props.children}
    </button>
)

export default Button;