import React, {useState} from 'react'
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {errorMessage, successMessage,} from "../../utils/common";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {createManu} from "../../redux/modules/organization/organizationActions";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Timing"},
    {label: "Categories"}
]
const ManuCreate = (props) => {
    const navigate = useNavigate();
    const {organization, createManu} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});
    const [formBuilder, setFormBuilder] = useState();

    const [state, setState] = useState({
        name: 'Test',
        description: 'test ',
        price: 10,
        estimate_time: 10,
        additional_details: '"[{\\"type\\":\\"header\\",\\"subtype\\":\\"h1\\",\\"label\\":\\"Customize\\"},{\\"type\\":\\"checkbox-group\\",\\"required\\":false,\\"label\\":\\"Veggie\\",\\"name\\":\\"Veggie\\",\\"values\\":[{\\"label\\":\\"tomato\\",\\"value\\":\\"Tomato\\",\\"selected\\":true},{\\"label\\":\\"onion\\",\\"value\\":\\"Onion\\",\\"selected\\":false}]},{\\"type\\":\\"radio-group\\",\\"required\\":true,\\"label\\":\\"Size\\",\\"name\\":\\"Size\\",\\"values\\":[{\\"label\\":\\"10\\",\\"value\\":\\"Small\\",\\"selected\\":true},{\\"label\\":\\"11\\",\\"value\\":\\"medium\\",\\"selected\\":false},{\\"label\\":\\"12\\",\\"value\\":\\"large\\",\\"selected\\":false}]},{\\"type\\":\\"text\\",\\"required\\":false,\\"label\\":\\"Instruction\\",\\"className\\":\\"form-control\\",\\"name\\":\\"text-1698815678379-0\\",\\"subtype\\":\\"text\\"}]"',
        available: true,
        image_url: "",
    });

    const onclickNext = async () => {
        if (currentTab === 0)
            setCurrentTab(currentTab + 1);
        else
            setError(currentTab);
        if (currentTab === 1) {
            await setState({...state, additional_details: JSON.stringify(formBuilder?.formData)});
            createManuControl();
        }
    };
    const onclickBack = () => {
        if (currentTab !== 0)
            setCurrentTab(currentTab - 1);
        else
            navigate(-1);

    };

    const createManuControl = () => {
        const onSuccess = data => {
            successMessage("Organization created successfully.");
        };
        const onFail = err => {
            setErrorMsg(err?.data?.errors);
            errorMessage(err.data?.title || err.data?.message);
        };
        createManu({...state, additional_details: JSON.stringify(formBuilder?.formData)}, onSuccess, onFail);
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
                           manuData={state}
                           setFormBuilder={setFormBuilder}
                           formBuilder={formBuilder}
                           onChangeState={setState} tab={tab} currentTab={currentTab}/>
                </div>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        createManu: (data, onSuccess, onFail) => dispatch(createManu({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManuCreate);
