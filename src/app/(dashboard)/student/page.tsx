import EventCalendar from "@/components/EventCalendar";
import Announcement from "@/components/Announcement";
import {BigCalendar} from "@/components/BigCalendar";

const StudentPage = () => {
    return (
        <div className='p-4 flex flex-col xl:flex-row gap-8'>
            {/*left*/}
            <div className='w-full xl:w-2/3'>
                <div className='text-xl font-semibold  '>Schedule(4A)</div>
                <div><BigCalendar/></div>
            </div>
            {/*RIGHT*/}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <EventCalendar/>
                <Announcement/>
            </div>
        </div>
    );
}
export default StudentPage