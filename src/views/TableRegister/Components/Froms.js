import React from 'react'
import InputBox from "../../../reusable/InputBox";
import Overview from "./Overview";

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
            {currentTab !== 1 && <InputBox
                loading={loading}
                title={tab[currentTab].label}
            >
                {currentTab === 0 &&
                    <Overview errorMsg={errorMsg} error={error === currentTab}
                              organizationData={organizationData}
                              onChange={handleChange}/>}
            </InputBox>}

        </div>
    );
};
export default Forms;