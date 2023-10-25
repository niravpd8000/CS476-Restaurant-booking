import React, {useState} from 'react'
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {errorMessage, successMessage, validateEmail} from "../../utils/common";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Timing"},
    {label: "Categories"},
    {label: "Table Reservation"}
]

const Create = (props) => {
    const navigate = useNavigate();
    const {createOrg, organization} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});

    const [state, setState] = useState({
        name: 'Test',
        description: 'test ',
        phone: '3063513068',
        email: 'nislds@gmail.com',
        number_of_table: 6,
        address: {
            countryId: 0,
            stateId: 0,
            cityId: 0,
            address: '132 ABC st',
            isPrimary: true
        },
        schedules: []
    });

    const onclickNext = () => {
        if ((currentTab === 0 && (state.name && state.description && state.phone.length === 10 && validateEmail(state.email))) || (currentTab === 1 && !!(state.address.address)))
            setCurrentTab(currentTab + 1);
        else if (currentTab === 2)
            setCurrentTab(currentTab + 1);
        else if (currentTab === 3)
            setCurrentTab(currentTab + 1);
        else
            setError(currentTab);
    };

    const onclickBack = () => {
        if (currentTab !== 0)
            setCurrentTab(currentTab - 1);
        else
            navigate(-1);

    };

    const createOrganization = () => {
        const onSuccess = data => {
            successMessage("Organization created successfully.");
        };
        const onFail = err => {
            setErrorMsg(err?.data?.errors);
            errorMessage(err.data?.title || err.data?.message);
        };
        createOrg(state, onSuccess, onFail);
    };

    return (
        <Row>
            <Col xs={24}>

                <div align={"right"}>
                    <LightBlueButton className="w-110 border-radius-25" onClick={onclickBack}>Cancel</LightBlueButton>
                    <GreenButton className="ml-3 w-170"
                                 onClick={onclickNext}>{currentTab !== 4 ? "Next" : "Create"}</GreenButton>
                </div>
                <div>
                    <ProgressBar labelList={tab} index={currentTab}/>
                    <Forms errorMsg={errorMsg} loading={false} error={error}
                           organizationData={state}
                           onChangeState={setState} tab={tab} currentTab={currentTab}/>
                </div>
            </Col>
        </Row>
    )
};

export default Create;
