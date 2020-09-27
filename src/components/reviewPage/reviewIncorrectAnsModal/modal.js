import React from "react"

import classes from "./modal.module.css"
import ReviewAnswer from "../ReviewIncorrectAnswers/reviewIncorrectAnswer"

const Modal = () => {

    const openModal = () => {
        const modal=document.getElementsByClassName(classes.mymodal)[0];
        console.log(modal)
        modal.classList.remove(classes.close)
        modal.classList.add(classes.open)
    }

    const closeModal = () => {
        const modal=document.getElementsByClassName(classes.mymodal)[0];
        console.log(modal)
        modal.classList.add(classes.close)
        modal.classList.remove(classes.open)
    }

    return(
        <React.Fragment>

        <button className={classes.btn} onClick={openModal}>Review 4 Incorrect Qs</button>

        <div className={classes.mymodal}>
            <ReviewAnswer />
            <ReviewAnswer />
            <ReviewAnswer />
            <ReviewAnswer />
            <button className={classes.closebtn} onClick={closeModal}>close</button>
        </div>

        </React.Fragment>
    )

}

export default Modal;