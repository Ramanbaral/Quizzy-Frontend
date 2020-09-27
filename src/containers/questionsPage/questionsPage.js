import React ,{useState,useEffect} from "react"
import "./questionPage.css"

// components
import ConfirmWindow from "../../components/reviewPage/confirm window/confirmWindow"
import InfromativeHeader from "../../components/QuestionPage/InformativeHeader/informativeHeader"
import Dropdown from "../../components/QuestionPage/dropdown/dropdown"
import TimeBox from "../../components/QuestionPage/Time box/timeBox"
import QuestionBox from "../../components/QuestionPage/question Box/questionBox"
import Button from "../../components/Button/button"

const QuestionPage = (props) => {

    //to select an option 
    const selected = (e) => {
        e.target.style.backgroundColor = "skyblue"
        e.target.style.color = "white"
    }

    const [minute,setMinute] = useState(3)
    const [second,setSecond] = useState(0)

    useState(() => {
        document.body.style.overflow = "hidden";
    })

    //funtion the start and manage timer
    const startTimer = (e) => {
    //hide the confirm window show real test page
    e.target.parentElement.parentElement.style.display = "none";
    document.body.style.overflow="scroll";

    let totalTime = minute * 60;
        
    const timer = setInterval( () => {
        const min = Math.floor(totalTime/60)
        const sec = totalTime % 60;
        setMinute(min)
        setSecond(sec)

        if(totalTime === 0){
            clearInterval(timer)
            // submit the test and redirect user to review page 
        }
        totalTime --;
    },1000)
}


    return(
        <React.Fragment>

            < ConfirmWindow click={startTimer}/>

            <InfromativeHeader />
            <TimeBox min={minute} sec={second} />

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