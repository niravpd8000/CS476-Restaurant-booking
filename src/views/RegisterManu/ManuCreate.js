import React, {useState} from 'react'
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {errorMessage, successMessage,} from "../../utils/common";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Timing"},
    {label: "Categories"}
]

const ManuCreate = (props) => {
    const navigate = useNavigate();
    const {createOrg, organization} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});
    const [formBuilder, setFormBuilder] = useState();

    const [state, setState] = useState({
        name: 'Test',
        description: 'test ',
        price: 10,
        estimate_time: 10,
        address: {
            countryId: 0,
            stateId: 0,
            cityId: 0,
            address: '123 ABC st',
            isPrimary: true
        },
        schedules: []
    });

    const onclickNext = () => {
        if (currentTab === 0)
            setCurrentTab(currentTab + 1);
        else
            setError(currentTab);
        if (currentTab === 2)
            setCurrentTab(currentTab + 1);
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
                <React.Fragment>
                    <LightBlueButton className="w-110" onClick={onclickBack}>Cancel</LightBlueButton>
                    <GreenButton className="ml-3 w-170"
                                 onClick={onclickNext}>{currentTab !== 2 ? "Next" : "Create"}</GreenButton>
                </React.Fragment>
                <div>
                    <ProgressBar labelList={tab} index={currentTab}/>
                    <Forms errorMsg={errorMsg} loading={false} error={error}
                           organizationData={state}
                           setFormBuilder={setFormBuilder}
                           formBuilder={formBuilder}
                           onChangeState={setState} tab={tab} currentTab={currentTab}/>
                </div>
            </Col>
        </Row>
    )
};


export default ManuCreate;
