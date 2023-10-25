import React from 'react'
import InputBox from "../../../reusable/InputBox";
import Warehouses from "./TableDetails";
import Overview from "./Overview";
import WorkSchedule from "./WorkSchedule";
import CreateTemplate from "./CreateTemplate";

const Forms = (props) => {
    const {
        tab,
        loading,
        errorMsg,
        error,
        currentTab,
        onChangeState,
        organizationData,
        formBuilder,
        setFormBuilder
    } = props;

    const handleChange = (e) => {
        let {name, value} = e.target ? e.target : e;
        onChangeState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <div className="organization">
            {currentTab !== 1 && <InputBox
                loading={loading}
                title={tab[currentTab].label}
            >
                {currentTab === 0 &&
                    <Overview errorMsg={errorMsg} error={error === currentTab}
                              organizationData={organizationData}
                              onChange={handleChange}/>}
                {currentTab === 2 &&
                    <WorkSchedule errorMsg={errorMsg} name="schedules" schedules={organizationData.schedules}
                                  onChange={handleChange}/>}
                {currentTab === 3 &&
                    <Warehouses errorMsg={errorMsg} organizationData={organizationData} name="schedules"
                                onChange={handleChange}/>}
            </InputBox>}
            {currentTab === 1 &&
                <CreateTemplate formData={organizationData} error={error} onChange={handleChange}
                                setFormBuilder={setFormBuilder}
                                formBuilder={formBuilder}/>}
        </div>
    );
};

export default Forms;