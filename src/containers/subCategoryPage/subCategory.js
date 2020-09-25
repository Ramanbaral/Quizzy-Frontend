import React ,{useEffect} from "react"
import {useParams} from "react-router-dom"

                            // components
import Header from "../../components/header/header"
import DescribeBox from "../../components/describeBox/describeBox"
import Card from "../../components/cards/card"
import Footer from "../../components/footer/footer"

// images
import chemistry from '../../assets/chemistry.jpg'
import physics from '../../assets/physics.jpg'
import zoology from '../../assets/zoology.jpg'

// const getSlug = () => {
//     let {catslug} = useParams()
//     return catslug
// }

const SubCategory = (props) => {

    return(
        <React.Fragment>
            <Header />
            <DescribeBox title={props.match.params.catslug} desc = "This is a modified jumbotron that occupies the entire horizontal space of its parent some long description about physics like who is the father of physics and how it is originated stuff like that." />
            <div className="cards">
            <Card title='Mechanics'   desc="this is a description "  image={physics}/>
            <Card title='Thermodynamics'  desc="this is a description " image={chemistry}/>
            <Card title='Light' desc="this is a description " image={zoology}/>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default SubCategory;