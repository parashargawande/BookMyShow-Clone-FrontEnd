import React, { useState } from 'react'
import './PopupBox.scss'
const PopupBox = (props) => {

    return <div style={{display: props.hidden ? 'block':'none'}}>
        <div  className="popup-screen">
        <div className="popup-container">
            <div className="title">Terms and condition</div>
            <div className="body">
                <section><strong>Patrons above 18 years of age, who are fully vaccinated (both doses) with Covid-19 vaccine and have completed 14 days after their second dose will be allowed entry in the cinema premises.</strong><br />2. The schedule is subject to change without prior notice.<br />3.For safety purposes, wearing a mask is mandatory.<br />4. Patrons with fever (Body Temperature &gt;99.2F) or other symptoms like: Cough etc. will not be allowed entry and are requested to stay at home.<br />5. The tickets are sold subject to the rules and regulations of the multiplex. <br />6. The movie schedule, screens, ticket price, and seating allocation is subject to change without notice. <br />7. For ``A`` rated films, entry is allowed for those 18 years and above only with age proof. <br />8. Children above 2 years and under 18 years are strictly not allowed for ``A`` rated films. They are allowed for U/A films only if accompanied by an adult. <br />9. The tickets will not be refunded if the ticket holder for ``A`` rated films is a minor (under 18 years). <br />10. Any person found under the influence of alcohol or drugs will be asked to leave the premises without a refund. <br />11. Any patrons with wet clothes, carrying or having color on clothes, etc. will not be permitted into the premises.</section>
            </div>
            <div className="buttons">
                <div onClick={()=>{props.setHidden(false)}} className="cancel">
                    Cancel
                </div>
                <div onClick={()=>{props.okayHandler()}} className="okaybtn">
                    Okay
                </div>
            </div>
        </div>
    </div>
    </div>
}
export default PopupBox