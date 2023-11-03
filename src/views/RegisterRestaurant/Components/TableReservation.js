import React from 'react';
import RadioGroup from "../../../reusable/RadioGroup";
import _ from "lodash";
import TextField from "../../../reusable/TextField";
import IdLabel from "../../../reusable/IdLabel";

const TableReservation = (props) => {
    const {onChange, errorMsg, organizationData} = props;
    const options = [{label: "Yes", name: "Yes", value: true}, {label: "No", name: "No", value: false}]

    return (<div className="mt-3">

        <RadioGroup onChange={onChange} name={"provide_reservation"} label={"Do you want provide Reservation?"}
                    value={organizationData.provide_reservation} values={options}/>
        {organizationData.provide_reservation && <>
            <TextField required
                       errorMsg={errorMsg?.number_of_table || "Number of Table is required"} label="Number of Table"
                       value={organizationData.number_of_table}
                       disabled
                       error={errorMsg?.number_of_table} name="number_of_table"
                       placeholder="Enter total tables number"
                       onChange={onChange}/>
            <IdLabel label={"Enter Table sitting capacity for each table"}/>
            {
                _.map([0, organizationData.number_of_table], (table, key) => {
                    return (<IdLabel key={key} label={"Table " + (key + 1)}
                                     value={<TextField disabled value={organizationData?.table_capacity[key].capacity}/>
                                     }/>)
                })
            }
        </>}

    </div>)
};

export default TableReservation
