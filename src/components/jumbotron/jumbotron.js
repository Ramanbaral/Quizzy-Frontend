import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './jumbotron.css'

const jumbotron = (props) => {
    return (
    <div className="container" style={{marginTop:'10px'}}> 
        <div className="jumbotron jumbotron-fluid customjumbotron">
        <div className="container">
            <h1 classNameName="display-4" style={{color:"skyblue"}}>Quizzy</h1>
            <p className="lead" style={{color:"deepskyblue",fontWeight:"400"}}>
                Place where genius come to sharphen their mind.
            </p>
        </div>
    </div>
    </div>

    );
};

export default jumbotron;

