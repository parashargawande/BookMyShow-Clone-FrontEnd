import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PopupBox from '../../components/PopupBox/PopupBox';
import Spacer from '../../components/Spacer';
import './buyticket.scss'


const BuyTicket = (props) => {
    console.log(props);
    const params = useParams();
    console.log(params);

    const [showPopup, setShowPopup] = useState(false)
    const okayHandler = () => {
        window.location.href = '/#/seatlayout'
    }

    return <div className="buyticket-container">
        <div className="buyticket-top">
            <div className="header-container">
                <div className="left-section">
                    {/* <div className="back-icon">i</div> */}
                    <div className="movie-title">Title</div>
                </div>
                <div className="right-section">
                    {/* <div className="search-icon">i</div> */}
                    {/* <div className="filtericon">i</div> */}
                </div>
            </div>
            <div className="time-container">
                <div className="left">
                    <span className="time">{(new Date()).toDateString()}</span>
                    <span className="down-icon">i</span>
                </div>
                <div className="right">
                    <span className="type">Marathi 2D</span>
                </div>
            </div>
        </div>

        <Spacer height='100px' />

        <div className="theater-timings-container">
            <div className="theater">
                <div className="theater-info">
                    name info
                </div>
                <div className="theater-timings">
                    <div onClick={() => { setShowPopup(true) }} className="time">
                        24.24.24pm
                    </div>
                    <div className="time">
                        24.24.24pm
                    </div>
                    <div className="time">
                        24.24.24pm
                    </div>
                    <div className="time">
                        24.24.24pm
                    </div>
                </div>
            </div>
        </div>

        <PopupBox
            hidden={showPopup}
            setHidden={setShowPopup}
            okayHandler={okayHandler} />
    </div>
}
export default BuyTicket