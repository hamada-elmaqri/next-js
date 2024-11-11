"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md flex flex-col gap-4'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">EVENTS</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </div>
                <div className="flex flex-col justify-between gap-4">
                    {events.map(event => (
                        <div className="box-border w-full p-4 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
                            <div className="flex items-center justify-between">
                                <div className="font-semibold text-gray-600 
                                ">
                                    <h1>{event.title}</h1>
                                </div>
                                <div className="text-gray-300 text-xs">
                                    <span>{event.time}</span>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm"><p>{event.description}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
export default EventCalendar