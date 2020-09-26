import React from 'react'
import classes from "./profileImg.module.css"

const ProfileImg = (props) => (

    <img src={props.imagesrc} alt="User Profile Image"  className={classes.img} srcset=""/>

)

export default ProfileImg;