import React from 'react'
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
        error,
        currentTab,
        onChangeState,
        organizationData,
        isEditRestPath
    } = props;

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
                    <Overview isEditRestPath={isEditRestPath} error={error === currentTab}
                              organizationData={organizationData}
                              onChange={handleChange}/>}
                {currentTab === 1 &&
                    <LocationAndContact error={error === currentTab}
                                        addressData={organizationData.address}
                                        onChange={handleChange}/>}
                {currentTab === 2 &&
                    <WorkSchedule name="schedules" schedules={organizationData.schedules} onChange={handleChange}/>}
                {currentTab === 3 &&
                    <TableDetails categories={organizationData.categories} onChange={handleChange}/>}
                {currentTab === 4 &&
                    <TableReservation organizationData={organizationData} onChange={handleChange}/>}
            </InputBox>
        </div>
    );
};
export default Forms;