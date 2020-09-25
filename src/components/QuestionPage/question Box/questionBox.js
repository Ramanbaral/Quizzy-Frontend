import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./questionBox.css";

const QuestionBox = (props) => (
    <div className="container">
        <div className="questionBox">
            <div className="question">
                    <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        style={{marginRight:'1%'}}
                    />

                <span>
                    This is a question fjd sjfkdj sdkfjskf dfeif draman is a
                    fjdf fsdjfd physics is the best fsfjsjfj ?
                </span>
            </div>

            <div className="options">
                <span className="option" onClick={props.selected}>
                    fskjfskdfjdsfjkdjfjsdfdkfkskjdfjl
                </span>
                <span className="option" onClick={props.selected}>
                    fjjdskfjsdjfjslkdjfjdsfjdsjfkdjkfdjf
                </span>
                <span className="option" onClick={props.selected}>
                    fdfsdfsdfdssdfsdfdfdfdfdfdfdfdfd
                </span>
                <span className="option" onClick={props.selected}>
                    fdfsssssssssssfsfsfsffsfddsfdggrgf
                </span>
            </div>
        </div>
    </div>
);

export default QuestionBox;
