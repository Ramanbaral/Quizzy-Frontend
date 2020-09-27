import React from "react";

import classes from "./card.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const card = (props) => {
    return (
        <div className={'card '+ classes.customCard} style={{ width: "18rem",margin:'20px 6%',transition:'transform 0.3s' }}>
            <img src={props.image} class="card-img-top" alt="Cat. image" style={{height:'55%'}}/>
            <div className="card-body" style={{backgroundColor:"whitesmoke"}}>
                <h5 className="card-title" style={titleStyle}>{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
    <p className="card-text">Sub Category: <strong>{props.subcategoryCount}</strong></p>
    <p className="card-te">Questions: <strong>{props.questionCount}</strong></p>
    </div>
            </div>
        </div>
    );
};

const titleStyle = {
    fontSize: '1.7rem',
    color: 'lightgreen',
    textAlign: 'center',
    fontFamily:' emoji',
    margin: '5px'
}

export default card;
