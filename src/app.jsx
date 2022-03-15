
import React from "react";
import Home from "./containers/Home/home";
import { Route, Link, Routes, HashRouter as Router } from 'react-router-dom'
import BuyTicket from "./containers/BuyTicket/buyticket";
import SeatLayout from "./containers/SeatLayout/SeatLayout";

const App = (props) => {
    return <>
        <Router>
            <Routes>
                <Route path="/buyticket/:movieid" element={<BuyTicket />}></Route>
                <Route path="/seatlayout/" element={<SeatLayout />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    </>
}
export default App;