import React from "react"

import classes from "./reviewIncorrectAnswer.module.css"

const ReviewAnswer = () => {

    return(
        <div className="container">

        <div className={classes.questionBox}>
            <div className={classes.question}>
                <span>
                    This is a question fjd sjfkdj sdkfjskf dfeif draman is a
                    fjdf fsdjfd physics is the best fsfjsjfj ?
                </span>
            </div>

            <div className={classes.options}>
                <span className={`${classes.option} ${classes.wrong}`}>
                    fskjfskdfjdsfjkdjfjsdfdkfkskjdfjl
                </span>
                <span className={classes.option}>
                    fjjdskfjsdjfjslkdjfjdsfjdsjfkdjkfdjf
                </span>
                <span className={`${classes.option} ${classes.correct}`}>
                    fdfsdfsdfdssdfsdfdfdfdfdfdfdfdfd
                </span>
                <span className={classes.option}>
                    fdfsssssssssssfsfsfsffsfddsfdggrgf
                </span>
            </div>

            <div className={classes.desc}>
                {"-> "}<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit modi autem dolores soluta molestiae, id libero labore asperiores omnis accusantium illum amet itaque, quia tempora! Magni facere debitis libero sapiente iure dolore ducimus?</p>
            </div>
        </div>

    </div>
    )
}

export default ReviewAnswer;