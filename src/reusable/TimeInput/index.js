import React from 'react'
import "./TimeInput.scss"
import moment from "moment";
import {TimePicker} from "antd";

const TimeInput = props => {
    const {name, label, value, onChange, placeholder, type, error, required} = props;
    return (
        <div className="time-input mt-20">
            <div className="form-group">
                <label className="labelClass margin-left-5">{label}{required &&
                    <span className="color-red">*</span>}</label>
                <TimePicker use12Hour placeholder="Start time" suffixIcon={''} onChange={onChange}
                    // defaultValue={value ? moment(value,'hh:mm A') : ''}
                            value={value ? moment(moment(value).format('hh:mm A'), 'hh:mm A') : ''}
                            format='hh:mm A'/>
                {error && <span className="margin-left-5 error-label">{`${name} is required`}</span>}
            </div>
        </div>
    )
};
export default TimeInput
