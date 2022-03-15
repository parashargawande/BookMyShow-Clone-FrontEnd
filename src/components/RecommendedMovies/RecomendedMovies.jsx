import React from 'react'
import './RecomendedMovies.scss'
import sample from '../../assets/et00307433-ettxqehzzn-portrait.jpg'
import { Link } from 'react-router-dom'

const HorizontalList = (props) => {
    return <div className="home-movies">
        <div className="header-container">
            <div className="header">{props.header}</div>
            <div className="expand">{props.expandText}</div>
        </div>
        <div className="movies-container">
            <Link to='/buyticket/2'>
                <div className="movie">
                    <img src={sample} className="image" />
                    <div className="movie-name">Movie Name sdfdf dsf sdfdsf sdfsdf</div>
                </div>
            </Link>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
            <div className="movie">
                <img src={sample} className="image" />
            </div>
        </div>
    </div>
}
export default HorizontalList