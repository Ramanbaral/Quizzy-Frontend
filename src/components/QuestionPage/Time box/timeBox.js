import React from 'react'
import classes from "./timeBox.module.css"

const TimeBox = () => {

    return(
        <div className={classes.timeBox}>
            <div className="min">
                <h3 className={classes.time}>5 :&nbsp;</h3>
            </div> 
            <div className="sec">
                <h3 className={classes.time}>45</h3>
            </div>
        </div>
    )
}

export default TimeBox;