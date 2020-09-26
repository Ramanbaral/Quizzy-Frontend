import React from "react"
import winner from "../../../assets/winner.png"

const WinnerImg = () => (
    <div style={{display:"block",margin:'auto'}}>
    <img src={winner} alt="Winners"  style={imgstyle}/>
    </div>
)

const imgstyle={
    width:"26rem",
    height:'17rem',
    marginLeft:"28.9%"
}

export default WinnerImg;