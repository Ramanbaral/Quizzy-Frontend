import React ,{useState} from 'react'
import './mainPage.css'

import Header from '../../components/header/header'
import Jumbotron from '../../components/jumbotron/jumbotron'
import Card from "../../components/cards/card"
import Footer from  "../../components/footer/footer"

// images
import chemistry from '../../assets/chemistry.jpg'
import physics from '../../assets/physics.jpg'
import zoology from '../../assets/zoology.jpg'



const Mainpage = () => {


    return(
    <div >
        <Header/>
        <Jumbotron/>
        <div className="cards">
          <Card title="Physics" desc="this is description." image={physics} subcategoryCount="8" questionCount="1238"/>
          <Card title="Chemistry" desc="this is description." image={chemistry} subcategoryCount="11" questionCount="1238"/>
          <Card title="Zoology" desc="this is description." image={zoology} subcategoryCount="5" questionCount="1238"/>
          <Card title="Zoology" desc="this is description." image={zoology} subcategoryCount="7" questionCount="1238"/>
          <Card title="Zoology" desc="this is description." image={zoology} subcategoryCount="9" questionCount="1238"/>
        </div>
        <Footer/>
    </div>
    )
}

export default Mainpage;