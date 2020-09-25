import React from "react"
import classes from "./header.module.css"

const header = () => {
    return(
        <div className={classes.header}>

            <div className={classes.logo}>
                <span>LOGO</span>
            </div>

            <div className={classes.title}>
                <h3 id={classes.titletext}>Quizzy</h3>
            </div>

            <div className={classes.nav}>
                <p>Profile</p>
            </div>

        </div>
    )
}

export default header;

