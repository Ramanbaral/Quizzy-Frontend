import React from 'react'
import classes from "./timeBox.module.css"

const TimeBox = (props) => {

    const hidetimebox = (e) => {
        const m = document.getElementsByClassName('min')[0]
        m.classList.toggle(classes.hide)

        const s = document.getElementsByClassName(classes.sec)[0]
        s.classList.toggle(classes.hide)
    }

    return(
        <div className={classes.timeBox} onClick={hidetimebox}>
            <div className="min">
                <h3 className={classes.time}>{props.min} :&nbsp;</h3>
            </div> 
            <div className={classes.sec}>
                <h3 className={classes.time}>{ props.sec  < 10  ? `0${props.sec}`: props.sec } </h3>
            </div>
        </div>
    )
}

export default TimeBox;