import { useState } from "react";

import Title from "../title/Title";
import CurrentMonth from "../current-date/CurrentDate";
import Arrows from "../arrows/Arrows";
import Calendar from "../calendar/Calendar";

import "./MainContent.sass"

const MainContent = () => {
    const [num, setNum] = useState(0)
    return (
        <main className="container" >
            <Title/>
            <div className="wrapper">
                <CurrentMonth num={num}/>
                <Arrows num={setNum} />
            </div>
            <div className="calendar">
                <Calendar/>
            </div>
        </main>
    )
}

export default MainContent;