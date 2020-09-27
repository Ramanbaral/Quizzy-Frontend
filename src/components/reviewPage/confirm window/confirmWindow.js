import React from "react"
import Button from "../../../components/Button/button"

import classes from "./confirmWindow.module.css"

const confirmWindow = (props) => (

    <div className={classes.win}>
        <div className={classes.btnStyle}>
        <Button click={props.click}>Ready for  test &#8594;</Button>
        </div>
    </div>

)



export default confirmWindow;