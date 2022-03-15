import React from "react";
import './home.scss'
import Header from '../../components/header/header'
import HorizontalList from '../../components/RecommendedMovies/RecomendedMovies'
import QuickAccessBar from '../../components/quickAccessBar/quickAccessBar'
import Spacer from "../../components/spacer";

const Explore = (props) => {
    return (
        <div className="home-container">
            <Header />

            <Spacer height='65px' />
            {/* <div className="home-small-header">Small header</div> */}
            <HorizontalList header={"Recommended Movies"} expandText={"See All"} />
            <HorizontalList header={"Outdoor Events"} expandText={"See All"} />
            <div className="blank-spacing"></div>
            <QuickAccessBar />
        </div>
    )
}
export default Explore;