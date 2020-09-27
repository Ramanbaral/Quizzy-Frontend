import React from "react"
import classes from "./header.module.css"
import logo from "../../assets/logo.png"

const header = () => {
    return(
        <div className={classes.header}>

            <img src={logo} alt="LOGO" className={classes.logo} draggable='false' />

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

