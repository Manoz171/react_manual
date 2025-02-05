import React, { useState } from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Badge } from "reactstrap";


const NepaliDatePickerComponent = ({ initialDate = "" }) => {
    const [date, setDate] = useState(initialDate);
    const [englishDate, setEnglishDate] = useState(null); // No type annotation

    return (
        <form style={{ marginLeft: "5vh", marginTop: "10px", maxWidth: "50vh" }}>
            <h1>Date  </h1>
            <label htmlFor="date">Nepali Date<Badge color="transparent" style={{ color: "red"}}>*</Badge></label>
            <NepaliDatePicker
                inputClassName="form-control"
                value={date}
                onChange={(value) => setDate(value)}
                options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            
            <label htmlFor="englishDate">English Date</label>
            <DatePicker
                selected={englishDate}
                onChange={(date) => setEnglishDate(date)} 
                className="form-control"
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
            />
        </form>
    );
};

export default NepaliDatePickerComponent;

// npm install --save nepali-datepicker-reactjs react-datepicker for napali
// npm install react-datepicker for english