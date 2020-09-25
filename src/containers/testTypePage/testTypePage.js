import React from "react"

import classes from "./testTypePage.module.css"
// components 
import InformativeHeader from "../../components/ChooseTestTypePage/informativeHeader/informativeHeader"
import Footer from "../../components/footer/footer"

const ChooseTestTypePage = (props) => {


    return(
        <React.Fragment>
        <InformativeHeader />

        <div className={classes.container}>

        <h2 className={classes.title}>Choose a Test Type : </h2>

        <div className={classes.testtypes}>
            <a href="#" className={classes.nodefaultstyle}><h3 className={classes.testtype}>A. Quick Test</h3> </a>
            <a href="#" className={classes.nodefaultstyle}><h3 className={classes.testtype}> B. Short Test </h3></a>
            <a href="#" className={classes.nodefaultstyle}><h3 className={classes.testtype}> C. Medium Test</h3></a>
            <a href="#" className={classes.nodefaultstyle}> <h3 className={classes.testtype}> D. Long Test</h3> </a>
            <a href="#" className={classes.nodefaultstyle}> <h3 className={classes.testtype}> E. PracticeTest</h3> </a>
        </div>

        </div>

        <div style={{marginTop:'13%'}}>
            <Footer />
        </div>

        </React.Fragment>
    )
}

export default ChooseTestTypePage;