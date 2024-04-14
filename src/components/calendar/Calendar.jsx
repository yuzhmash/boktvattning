import { useState, useEffect } from "react";

import "./Calendar.sass"

const Calendar = () => {

    const [lastDayNum, setLastDayNum] = useState("");
    const [firstDayNum, setFirstDayNum] = useState("");
    const [lastMonthLastDay, setLastMonthLastDay] = useState("");

    const weeksName = ["MÅNDAG", "TISDAG", "ONSDAG", "TORSDAG", "FREDAG", "LÖRDAG", "SÖNDAG"];
    const weeksList = weeksName.map((elem, i) => {
        return (<div className="calendar__blocks_block calendar__blocks_block_month" key={i}>{elem}</div>)
    })


        const getFirstAndLastDaysNum = (i = 0) => {
            const date = new Date()
            const month = date.getMonth() + i
            const year = date.getFullYear()
            const firstDay = new Date(year, month - 1, 0)
            const lastDay = new Date(year, month, 0)
            const firstDayNum = firstDay.getDay() + 1
            const lastDayNum = lastDay.getDate()
            setFirstDayNum(firstDayNum)
            setLastDayNum(lastDayNum)
        }

        const getLastMonthsNum = () => {
            const date = new Date()
            const month = date.getMonth()
            const year = date.getFullYear()
            const lastDay = new Date(year, month, 0)
            const lastDayNum = lastDay.getDate()
            setLastMonthLastDay(lastDayNum)
            console.log(lastDayNum);
            console.log(firstDayNum);
        }

        useEffect(() => {
            getFirstAndLastDaysNum()
            getLastMonthsNum()
        }, [])

        const daysList = Array.from({length: 42}, (_, i) => {
            const startWith = (i+1) >=! firstDayNum && (i+2 - firstDayNum ) <=! lastDayNum ? lastMonthLastDay - (firstDayNum - 2) + i : false
            const main = (i+1) >= firstDayNum && (i+2 - firstDayNum ) <= lastDayNum ? (i+2) - firstDayNum : false
            const endWith = !startWith && !main ? i - (lastDayNum + firstDayNum - 2) : main
            const show = startWith ? startWith : endWith
            return (
                <div key={i} className="calendar__blocks_block">
                    <div className="calendar__blocks_block_date">{show}</div>
                </div>
            )
        })

    return (
        <View weeksList={weeksList} daysList={daysList}/>
    )
}

const View = ({weeksList, daysList}) => {
    return (
        <div className="calendar__blocks">
            {weeksList}
            {daysList}
        </div>
    )
}

export default Calendar;

// i + 1 <= 30 ? i + 1 : "oj"}