import React, {useState} from 'react';
import {Switch, TimePicker} from 'antd';
import moment from "moment";
import Cross from "../../../assets/icons/Cross.svg";

const WorkSchedule = (props) => {
        const {onChange, schedules} = props;
        const [weekSchedule, setWeekSchedule] = useState(schedules);

        const onClickSwitch = (e) => {
            console.log(e)
            let array = [...weekSchedule];
            let obj = array.find(item => item.day === e.name);
            obj.status = e.value;
            setWeekSchedule([...array])
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
                        <div key={key} className="row mb-30 min-height-40">
                            <div className="col-2 mt-1">
                                <span className="fs-17">{item.day}</span>
                            </div>
                            <div className={"justify-content-between d-flex mt-10"}>
                                <div className="col-2 ">
                                    <Switch onClick={() => onClickSwitch({name: item.day, value: !item.status})}
                                            checked={item.status}
                                            className="mt-2 ml-2 d-flex"
                                    />
                                    {item.status ? "Active" : "Inactive"}
                                </div>
                                <div className="col-10">
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
                                                    {/*{index ? <img alt="Cross" onClick={() => onDeleteHours(key, index)}*/}
                                                    {/*              className="ml-1 cursor-pointer" src={Cross}/> : ''}*/}
                                                </div>
                                            );
                                        })}
                                </div>
                                {/*< div className=" col-2 mt-2 cursor-pointer" style={{padding: "6px"}}>*/}
                                {/*    {item.status &&*/}
                                {/*        <span className="text-gray" onClick={() => onAddHours(key)}>Add hours</span>}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
;

export default WorkSchedule


