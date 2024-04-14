import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import "./CurrentMonth.sass"

const CurrentDate = () => {
    const [currentMonth, setCurrentMonth] = useState("");
    const [currentYear, setCurrentYear] = useState("");

    const getCurrentMonth = () => {
        const date = new Date()
        const month = date.getMonth()
        const monthsList = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
        setCurrentMonth(monthsList[month])
    }

    const getCurrentYear = () => {
        const date = new Date()
        const year = date.getFullYear()
        setCurrentYear(year)
    }

    useEffect(() => {
        getCurrentMonth();
        getCurrentYear();
    }, [])

    return (
        <>
            <h2 className="title_subtitle">{currentMonth} {currentYear}</h2>
        </>
    )
}

CurrentDate.propTypes = {
    num: PropTypes.number
}

export default CurrentDate;