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
        <div className="movie-row">
            <div className="scroll-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 35"><g fill="#ffffff" fill-rule="evenodd"><path d="M1.276 31.647a1.543 1.543 0 01.033-2.17l14.59-14.09a1.531 1.531 0 012.171.043c.59.61.566 1.592-.033 2.17L3.447 31.69a1.531 1.531 0 01-2.17-.043z"></path><path d="M1.276 1.43A1.543 1.543 0 001.31 3.6L15.9 17.69a1.531 1.531 0 002.171-.043 1.543 1.543 0 00-.033-2.17L3.447 1.387a1.531 1.531 0 00-2.17.043z"></path></g></svg>
            </div>
            <div className="movies-container">

                <Link to='/buyticket/2'>
                    <div className="movie">
                        <img src={sample} className="image" />
                        <div className="movie-name">Movie Name</div>
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
    </div>
}
export default HorizontalList