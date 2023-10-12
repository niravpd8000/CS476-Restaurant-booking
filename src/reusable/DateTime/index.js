import React, {useState} from 'react';
import {DatePicker} from 'antd';

import moment from 'moment';
import downArrow from "../../assets/icons/down-arrow.png";
import "./DateInput.scss";

const DateTime = props => {
    const [date, setDate] = useState()
    const {
        className,
        errorMsg,
        type,
        format,
        name,
        label,
        picker,
        value,
        error,
        disabled,
        onChange,
        dateFormat = 'YYYY-MM-DD HH:mm:ss',
        timeFormat = "hh:mm A"
    } = props;
    let inputProps = {
        onChange,
        format,
        allowClear: false,
        suffixIcon: <span><img src={downArrow} alt="down"/></span>
    };
    if (picker) {
        inputProps = {
            ...inputProps,
            picker: type
        }
    }

    const handleChangeDate = (e) => {
        e = {
            name,
            value: e.format("YYYY-MM-DD HH:mm:ss")
        }
        if (onChange)
            onChange(e);
    }

    const handleChangeTime = (e) => {
        e = {
            name,
            value: value ? moment(`${moment(value).format('YYYY-MM-DD')} ${e.format('hh:mm A')}`).format()
                : e.format(timeFormat)
        }
        onChange(e)
        setDate(e)
    }

    return (
        <div className={`date-time ${className || ""}`}>
            <div className="form-group">
                <div className="labelClass margin-left-5 mb-8">{label}</div>
                <DatePicker
                    disabled={disabled}
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
                    value={value ? moment(moment(value).format(dateFormat), dateFormat) : ''}
                    onChange={handleChangeDate}
                />
                {error && <span className="margin-left-5 error-label">{errorMsg || "Date is required."}</span>}
            </div>
        </div>
    )
}

export default DateTime
