import React from 'react'
import {IdLabel, TextField} from "../../../reusable";
import RadioGroup from "../../../reusable/RadioGroup";
import _ from "lodash";

const TableReservation = (props) => {
    const {onChange, errorMsg, organizationData} = props;
    const options = [{label: "Yes", name: "Yes", value: true}, {label: "No", name: "No", value: false}]

    return (<div className="mt-3">

        <RadioGroup label={"Do you want provide Reservation?"} values={options}/>
        <TextField required
                   errorMsg={errorMsg?.number_of_table || "Number of Table is required"} label="Number of Table"
                   value={organizationData.number_of_table}
                   error={errorMsg?.number_of_table} name="number_of_table"
                   placeholder="Enter total tables number"
                   onChange={onChange}/>
        <IdLabel label={"Enter Table sitting capacity for each table"}/>
        {
            _.map([0, organizationData.number_of_table], (table, key) => {
                return (<IdLabel label={"Table " + (key + 1)} value={<TextField/>}/>)
            })
        }

    </div>)
};

export default TableReservation
