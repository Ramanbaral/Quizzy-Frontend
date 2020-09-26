import React from "react"
import {Link} from "react-router-dom"

import user from "../../assets/default.jpg"
import classes from "./reviewPage.module.css"

//components
import Header from "../../components/header/header"
import ProfileImage from "../../components/reviewPage/profileImg/profileImg"
import HorizontalBar from "../../components/reviewPage/horizontalBar/horizontalBar"
import WinnerImg from "../../components/reviewPage/winnersImg/winnersImg"
import StatBox from "../../components/reviewPage/statBox/statBox"
import Modal from "../../components/reviewPage/reviewIncorrectAnsModal/modal"


const ReviewPage = () => {


    return(
        <React.Fragment>

        <Header />

        <div className="container">

        <div style={{margin:'1.5% 0',marginLeft:'31%',height:'7rem'}}>

        <ProfileImage imagesrc={user}  />
        
        <div className={classes.bars}>
            <HorizontalBar text="Accuracy: 91%" />
            <HorizontalBar text="Rank: 450 of 6789" />
            <HorizontalBar text="Points: 42 of 60" />
        </div>

        </div>

        <WinnerImg />

        <h4 style={{margin:'0',textAlign:"center"}}>Performance Stats</h4>
        <div className={classes.performanceStats}>
        <StatBox number="5" text="Correct" color="green" width="7.8rem" />
        <StatBox number="9" text="Incorrect" color="red" width="7.8rem"/>
        <StatBox number="1" text="Unattempted" color="black" width="7.8rem"/>
        <StatBox number="5.6s" text="Averege Time /Question " color="black" width="24rem"/>
        </div>
  
        <div className={classes.btns}>
            <Modal />

            <button style={btnStyle}> <Link to="/" style={{ color: 'white',textDecoration:'none'}}>  Goto Home </Link></button>
        </div>
        </div>

        
        
        </React.Fragment>
    )
   
}

const btnStyle = {
    border:'none',
    width: '7rem',
    backgroundColor: 'lightskyblue',
    height: '2rem',
    borderRadius: '4px'
}

export default ReviewPage;