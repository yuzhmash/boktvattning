import { useState } from "react";

const useDate = () => {
    const [date, setDate] = useState(new Date());
    const [month, setMonth] = useState(null);
    const [monthIndex, setMonthIndex] = useState(null);
    const [year, setYear] = useState(null);

    const getMonthIndex = (num = 0) => {
        setMonthIndex(date.getMonth() + num);
        setYear(date.getFullYear());
        return {monthIndex}
    }

    // const getDateInfo = () => {
    //     setDate(new Date())
    //     setMonth(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());
    //     setMonthIndex(date.getMonth());
    //     setYear(date.getFullYear());

    //     return {
    //         month,
    //         monthIndex,
    //         year
    //     };
    // };

    return { getMonthIndex };
};

export default useDate;