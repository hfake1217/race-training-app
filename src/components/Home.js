import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events =[
    {
        title: "Full Body Lift",
        allDay: true,
        start: new Date(2022, 11, 5),
        end: new Date(2022, 11, 5)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 6),
        end: new Date(2022, 11, 6)
    },
    {
        title: "5 miles Tempo, with 3 at 8:54/mile",
        allDay: true,
        start: new Date(2022, 11, 7),
        end: new Date(2022, 11, 7)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2022, 11, 8),
        end: new Date(2022, 11, 8)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2022, 11, 9),
        end: new Date(2022, 11, 9)
    },
    {
        title: "7 miles long run",
        allDay: true,
        start: new Date(2022, 11, 10),
        end: new Date(2022, 11, 10)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 11),
        end: new Date(2022, 11, 11)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2022, 11, 12),
        end: new Date(2022, 11, 12)
    },
    {
        title: "5 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 13),
        end: new Date(2022, 11, 13)
    },
    {
        title: "2x1 miles repeats, at 8:25/mile",
        allDay: true,
        start: new Date(2022, 11, 14),
        end: new Date(2022, 11, 14)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2022, 11, 15),
        end: new Date(2022, 11, 15)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2022, 11, 16),
        end: new Date(2022, 11, 16)
    },
    {
        title: "8 miles, long run",
        allDay: true,
        start: new Date(2022, 11, 17),
        end: new Date(2022, 11, 17)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 18),
        end: new Date(2022, 11, 18)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2022, 11, 19),
        end: new Date(2022, 11, 19)
    },
    {
        title: "5 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 20),
        end: new Date(2022, 11, 20)
    },
    {
        title: "5 miles, 3 at 9:09/mile",
        allDay: true,
        start: new Date(2022, 11, 21),
        end: new Date(2022, 11, 21)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2022, 11, 22),
        end: new Date(2022, 11, 22)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2022, 11, 23),
        end: new Date(2022, 11, 23)
    },
    {
        title: "9 miles, long run",
        allDay: true,
        start: new Date(2022, 11, 24),
        end: new Date(2022, 11, 24)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 25),
        end: new Date(2022, 11, 25)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2022, 11, 26),
        end: new Date(2022, 11, 26)
    },
    {
        title: "5 miles EZ",
        allDay: true,
        start: new Date(2022, 11, 27),
        end: new Date(2022, 11, 27)
    },
    {
        title: "6 miles Tempo, with 4 at 9:00/mile",
        allDay: true,
        start: new Date(2022, 11, 28),
        end: new Date(2022, 11, 28)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2022, 11, 29),
        end: new Date(2022, 11, 29)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2022, 11, 30),
        end: new Date(2022, 11, 30)
    },
    {
        title: "9 miles, long run",
        allDay: true,
        start: new Date(2022, 11, 31),
        end: new Date(2022, 11, 31)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 1)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 0, 2),
        end: new Date(2023, 0, 2)
    },
    {
        title: "5 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 3),
        end: new Date(2023, 0, 3)
    },
    {
        title: "7 miles, with 5 at 9:09/mile",
        allDay: true,
        start: new Date(2023, 0, 4),
        end: new Date(2023, 0, 4)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 0, 5),
        end: new Date(2023, 0, 5)
    },
    {
        title: "Lower body lift + abs + 3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 6),
        end: new Date(2023, 0, 6)
    },
    {
        title: "5 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 7),
        end: new Date(2023, 0, 7)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 8),
        end: new Date(2023, 0, 8)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 0, 9),
        end: new Date(2023, 0, 9)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 10),
        end: new Date(2023, 0, 10)
    },
    {
        title: "3x1 mile repeats at 8:20/mile",
        allDay: true,
        start: new Date(2023, 0, 11),
        end: new Date(2023, 0, 11)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 0, 12),
        end: new Date(2023, 0, 12)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2023, 0, 13),
        end: new Date(2023, 0, 13)
    },
    {
        title: "10 miles, long run",
        allDay: true,
        start: new Date(2023, 0, 14),
        end: new Date(2023, 0, 14)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 15),
        end: new Date(2023, 0, 15)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 0, 16),
        end: new Date(2023, 0, 16)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 17),
        end: new Date(2023, 0, 17)
    },
    {
        title: "6 miles Tempo, with 4 at 8:54/mile",
        allDay: true,
        start: new Date(2023, 0, 18),
        end: new Date(2023, 0, 18)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 0, 19),
        end: new Date(2023, 0, 19)
    },
    {
        title: "Lower body lift + abs + 3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 20),
        end: new Date(2023, 0, 20)
    },
    {
        title: "11 miles, long run",
        allDay: true,
        start: new Date(2023, 0, 21),
        end: new Date(2023, 0, 21)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 22),
        end: new Date(2023, 0, 22)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 0, 23),
        end: new Date(2023, 0, 23)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 24),
        end: new Date(2023, 0, 24)
    },
    {
        title: "7 miles Tempo, with 5 at 9:00/mile",
        allDay: true,
        start: new Date(2023, 0, 25),
        end: new Date(2023, 0, 25)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 0, 26),
        end: new Date(2023, 0, 26)
    },
    {
        title: "Lower body lift + abs + 3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 27),
        end: new Date(2023, 0, 27)
    },
    {
        title: "13 miles, long run",
        allDay: true,
        start: new Date(2023, 0, 28),
        end: new Date(2023, 0, 28)
    },
    {
        title: "4 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 29),
        end: new Date(2023, 0, 29)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 0, 30),
        end: new Date(2023, 0, 30)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 0, 31),
        end: new Date(2023, 0, 31)
    },
    {
        title: "4x1 mile repeats, at 8:15/mile",
        allDay: true,
        start: new Date(2023, 1, 1),
        end: new Date(2023, 1, 1)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 1, 2),
        end: new Date(2023, 1, 2)
    },
    {
        title: "Lower body lift + abs + 3 miles EZ",
        allDay: true,
        start: new Date(2023, 1, 3),
        end: new Date(2023, 1, 3)
    },
    {
        title: "10 miles, long run",
        allDay: true,
        start: new Date(2023, 1, 4),
        end: new Date(2023, 1, 4)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 1, 5),
        end: new Date(2023, 1, 5)
    },
    {
        title: "Full body lift",
        allDay: true,
        start: new Date(2023, 1, 6),
        end: new Date(2023, 1, 6)
    },
    {
        title: "3 miles EZ",
        allDay: true,
        start: new Date(2023, 1, 7),
        end: new Date(2023, 1, 7)
    },
    {
        title: "Lower body lift + abs",
        allDay: true,
        start: new Date(2023, 1, 8),
        end: new Date(2023, 1, 8)
    },
    {
        title: "3 miles, with 1 at 8:54/mile",
        allDay: true,
        start: new Date(2023, 1, 9),
        end: new Date(2023, 1, 9)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 1, 10),
        end: new Date(2023, 1, 10)
    },
    {
        title: "Rest",
        allDay: true,
        start: new Date(2023, 1, 11),
        end: new Date(2023, 1, 11)
    },
    {
        title: "RACE DAY 13.1 MILES",
        allDay: true,
        start: new Date(2023, 1, 12),
        end: new Date(2023, 1, 12)
    },
]

function Home() {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }


    return(
        <div>
        <h1>Calendar</h1>
        <h3>Add New Event</h3>
        <div class="date-picker">
            <input type="text" placeholder="Add New Event" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
            <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
            <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
            <button onClick={handleAddEvent}>Add Event</button>
        </div>
            <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{height: 400}} />
        </div>
    );
}

export default Home;