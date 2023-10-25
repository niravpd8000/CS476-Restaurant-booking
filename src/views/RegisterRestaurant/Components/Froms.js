import React, {useEffect, useState} from 'react'
import InputBox from "../../../reusable/InputBox";
import LocationAndContact from "./LocationAndContact";
import TableDetails from "./TableDetails";
import Overview from "./Overview";
import WorkSchedule from "./WorkSchedule";
import TableReservation from "./TableReservation";

const Forms = (props) => {
    const {
        tab,
        loading,
        errorMsg,

        error,
        currentTab,
        onChangeState,
        organizationData,
    } = props;

    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const handleChange = (e) => {
        let {name, value} = e.target ? e.target : e;
        onChangeState(prevState => ({
            ...prevState,
            [name]: value
        }));
        // onChangeState(state);
    };



    return (
        <div className="organization">
            <InputBox
                loading={loading}
                title={tab[currentTab].label}
            >
                {currentTab === 0 &&
                    <Overview errorMsg={errorMsg} error={error === currentTab}
                              organizationData={organizationData}
                              onChange={handleChange}/>}
                {currentTab === 1 &&
                    <LocationAndContact errorMsg={errorMsg} error={error === currentTab}
                                        states={states} cities={cities}
                                        organizationData={organizationData.address}
                                        onChange={()=>{}}/>}
                {currentTab === 2 &&
                    <WorkSchedule errorMsg={errorMsg} name="schedules" schedules={organizationData.schedules} onChange={handleChange}/>}
                {currentTab === 3 &&
                    <TableDetails errorMsg={errorMsg} organizationData={organizationData} onChange={handleChange}/>}
                {currentTab === 4 &&
                    <TableReservation errorMsg={errorMsg} organizationData={organizationData} onChange={handleChange}/>}
            </InputBox>
        </div>
    );
};
export default Forms;