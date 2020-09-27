import React from "react"
import "./questionPage.css"

// components
import InfromativeHeader from "../../components/QuestionPage/InformativeHeader/informativeHeader"
import Dropdown from "../../components/QuestionPage/dropdown/dropdown"
import TimeBox from "../../components/QuestionPage/Time box/timeBox"
import QuestionBox from "../../components/QuestionPage/question Box/questionBox"
import Button from "../../components/Button/button"

const QuestionPage = () => {

    const selected = (e) => {
        e.target.style.backgroundColor = "skyblue"
        e.target.style.color = "white"
    }

    return(
        <React.Fragment>

            <InfromativeHeader />
            <TimeBox />

            <div className="dd" style={{float:'right',marginRight:'2%',marginTop:'-4%',position:"sticky",top:"0.5%"}}>
            <Dropdown />
            </div>

            <QuestionBox selected={selected} />
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>
            <QuestionBox  selected={selected}/>

            <div style={{margin:'0.6rem auto',marginLeft:'45%'}}>
            <Button> SUBMIT </Button>
            </div>

        </React.Fragment>
    )

}

export default QuestionPage;