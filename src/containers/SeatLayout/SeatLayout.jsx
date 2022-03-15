import React, { useState } from "react";
import './SeatLayout.scss'

import { useNavigate } from 'react-router-dom'

const SeatLayout = (props) => {

    const layout = {
        A: {
            seats: 1,
            price: 10
        },
        B: {
            seats: 1,
            price: 10
        },
        C: {
            seats: 1,
            price: 10
        },
        D: {
            seats: 1,
            price: 10
        },
        E: {
            seats: 1,
            price: 10
        },
    }

    const [bookedTickets, setBookedTicket] = useState([])
    const [totalSum, setTotalSum] = useState(0)
    const [sucess, setSucess] = useState(false)

    const onSeatSelectHandler = (e, row, no) => {
        console.log(row, no);
        const bookings = [...bookedTickets]

        let index = -1
        bookedTickets.filter((seat, indx) => {
            if (seat.row == row && seat.no == no) {
                index = indx
                return true
            }
        })

        if (index != -1) {
            bookings.splice(index, 1)
        } else {
            bookings.push({
                row: row,
                no: no
            })
        }
        setBookedTicket(bookings)

        const total = bookings.reduce((previous, curr, index) => {
            return previous + layout[curr.row].price
        }, 0)
        setTotalSum(total)
        console.log(total);

        console.log(bookings);
    }

    const isSelected = (row, no) => {
        const selected = bookedTickets.filter((seat) => {
            if (seat.row == row && seat.no == no) {
                return true
            }
        })
        length == 0 ? false : true;
        if (selected.length > 0) {
            console.log('isSelected', row, no, selected.length);
            return true
        } else {
            return false
        }
    }

    const confirmDialogue = <div className="confirm-dialogue">
        <div onClick={() => setSucess(true)} className="confirm-btn">
            Pay Rs {totalSum}
        </div>
    </div>

    const sucessBox = <div onClick={
        () => {
            setSucess(false);
            window.location.href = '/';
        }
    } className="sucess-container">
        <div className="sucess-text">
            Ticket Booked
        </div>
    </div>

    return <div className="seat-layout-container">
        <div className="seat-layout">
            <table className="table">
                <tbody className="table-body">
                    <tr>
                        <td colSpan={2}>
                            <div className="category-name">Royal Sofa</div>
                        </td>
                    </tr>
                    {
                        Object.keys(layout).map((row, rowid) => (
                            <tr key={rowid}>
                                <td className="row-name">
                                    <div>{row}</div>
                                </td>
                                <td>
                                    <div className="seat">
                                        <div>&nbsp;</div>
                                    </div>
                                    <div className="seat">
                                        <div>&nbsp;</div>
                                    </div>
                                    {
                                        [...Array(layout[row].seat)].map((x, i) => (
                                            <div key={i} onClick={(e) => onSeatSelectHandler(e, row, i)} className="seat">
                                                {
                                                    isSelected(row, i) == true ?
                                                        <div className="active selected">{i}</div> :
                                                        <div className="active">{i}</div>
                                                }
                                            </div>
                                        ))
                                    }
                                    <div className="seat">
                                        <div>&nbsp;</div>
                                    </div>
                                    <div className="seat">
                                        <div className="disabled">5</div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                    <tr>
                        <td colSpan={2}>
                            <div className="screen-info">
                                <div className="screen-icon">
                                    Screen
                                </div>
                                <div className="screen-text">All eyes this side Please!</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div className="leagend-menu">
            <span className="leagend leagend-selected">
                <div className="seat">
                    <div className="active selected"></div>
                </div>
                <span>selected</span>
            </span>
            <span className="leagend leagend-booked">
                <div className="seat">
                    <div className="disabled"></div>
                </div>
                <span>Booked</span>
            </span>
            <span className="leagend leagend-available">
                <div className="seat">
                    <div className="leagend-active"></div>
                </div>
                <span>Available</span>
            </span>
        </div>
        {
            totalSum > 0 ? confirmDialogue : null
        }
        {
            sucess ? sucessBox : null
        }
    </div>

}
export default SeatLayout;