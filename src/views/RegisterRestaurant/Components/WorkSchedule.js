import React, {useState} from 'react';
import {TimePicker} from 'antd';
import moment from "moment";
import Cross from "../../../assets/icons/Cross.svg";
import Switch from "../../../reusable/Switch";

const WorkSchedule = (props) => {
    const {onChange, schedules} = props;
    const [weekSchedule, setWeekSchedule] = useState(data);

    const onClickSwitch = (e) => {
        let array = [...weekSchedule];
        let obj = array.find(item => item.day === e.name);
        obj.status = e.value;
        setWeekSchedule(array)
    };

    const onAddHours = (key) => {
        let array = [...weekSchedule];
        array[key].times.push({startTime: `08:00 AM`, endTime: "06:00 PM"});
        setWeekSchedule(array)
    };

    const onDeleteHours = (objKey, currentTimeIndex) => {
        let array = [...weekSchedule];
        array[objKey].times.splice(currentTimeIndex, 1);
        setWeekSchedule(array)
    };

    return (
        <div>
            {weekSchedule.map((item, key) => {
                return (
                    <div key={key} className="row mb-30 min-height-40 justify-content-between">
                        <div className="col-2 mt-1">
                            <span className="fs-17">{item.day}</span>
                        </div>
                        <div className="col-2">
                            <Switch name={item.day} value={item.status} onChange={onClickSwitch}
                                    customClass="mt-2 ml-2 d-flex"
                                    subLabel={item.status ? "Active" : "Inactive"}/>
                        </div>
                        <div className="col-6">
                            {(item.status && item.times.length > 0) &&
                                item.times.map((time, index) => {
                                    return (
                                        <div className={`ml-3 ${index && "mt-2"}`} key={index}>
                                            <TimePicker use12Hour placeholder="Start time" className="ml-2"
                                                        suffixIcon={''} onChange={onChange}
                                                        defaultValue={moment(time.startTime, 'hh:mm A')}
                                                        format='hh:mm A'/>
                                            <span className="hyphen-margin">-</span>
                                            <TimePicker placeholder="End time" suffixIcon={''} onChange={() => {
                                            }}
                                                        defaultValue={moment(time.endTime, 'hh:mm A')}
                                                        format='hh:mm A'/>
                                            {index ? <img onClick={() => onDeleteHours(key, index)}
                                                          className="ml-1 cursor-pointer" src={Cross}/> : ''}
                                        </div>
                                    );
                                })}
                        </div>
                        < div className=" col-2 mt-2 cursor-pointer">
                            {item.status &&
                                <span className="text-gray" onClick={() => onAddHours(key)}>Add hours</span>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default WorkSchedule

const data = [
    // {
    //   day: "Monday ",
    //   status: true,
    //   times: [{startTime: "08:00 AM", endTime: "01:00 PM"}, {startTime: "02:00 PM", endTime: "06:00 PM"}]
    // },
    {day: "Monday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Tuesday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Wednesday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Thursday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Friday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Saturday", status: false, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "Sunday", status: false, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
];
