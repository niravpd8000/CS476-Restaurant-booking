import React from 'react'
import InputBox from "../../../reusable/InputBox";
import Overview from "./Overview";
import CreateTemplate from "./CreateTemplate";

const Forms = (props) => {
    const {
        tab,
        loading,
        errorMsg,
        error,
        currentTab,
        onChangeState,
        manuData,
        formBuilder,
        setFormBuilder,
    } = props;

    const handleChange = (e) => {
        console.log(e)
        let {name, value} = e.target ? e.target : e;
        if (name === "price" || name === "estimate_time")
            value = (name === "price" || name === "estimate_time") && value >= 0 ? value : 0;
        onChangeState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <div className={"justify-content-center d-flex w-100"}>
            {currentTab !== 1 &&
                <div className="organization">
                    <InputBox
                        loading={loading}
                        title={tab[currentTab].label}
                    >
                        {currentTab === 0 &&
                            <Overview errorMsg={errorMsg} error={error === currentTab}
                                      manuData={manuData}
                                      onChange={handleChange}/>}
                    </InputBox></div>}
            <div style={{display: currentTab === 1 ? "block" : "none", width: "100%"}}>
                <CreateTemplate manuData={manuData} error={error} onChange={handleChange}
                                setFormBuilder={setFormBuilder}
                                formBuilder={formBuilder}/>
            </div>
        </div>
    );
};

export default Forms;