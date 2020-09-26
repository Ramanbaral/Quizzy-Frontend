import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//                          containers
import Mainpage from "./containers/mainPage/mainPage";
import SubCategory from  "./containers/subCategoryPage/subCategory"
import ChooseTestTypepage from "./containers/testTypePage/testTypePage"
import QuestionPage from "./containers/questionsPage/questionsPage"
import ReviewPage from "./containers/reviewPage/reviewPage"
import PageNotFound from "./components/pageNotFound/pageNotFound"


function App() {
    return (
      <BrowserRouter>

        <Switch>

            <Route path="/" exact>
                <Mainpage />
            </Route>

            <Route path="/stats" exact component={ReviewPage} />
            
            <Route path="/:catslug" exact component={SubCategory} /> 

            <Route path="/choosetesttype/:subcategory" exact component={ChooseTestTypepage} />

            <Route path="/:subcategory/:testtype" exact component={QuestionPage} />


            <Route path="/404" exact>
                <PageNotFound />
            </Route>

            <Redirect to="/404" />

        </Switch>

        </BrowserRouter>
    );
}

export default App;
