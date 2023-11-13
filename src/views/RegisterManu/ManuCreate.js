import React, {useEffect, useState} from 'react'
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {errorMessage, successMessage,} from "../../utils/common";
import {Col, Row} from "antd";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {createManu, fetchManuById} from "../../redux/modules/organization/organizationActions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Timing"},
    {label: "Categories"}
]
const ManuCreate = (props) => {
    const navigate = useNavigate();
    const {organization, createManu, getManu} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});
    const [formBuilder, setFormBuilder] = useState();
    const location = useLocation();
    const isEditMenuPath = /^\/edit-manu\/[a-fA-F0-9]{24}$/.test(location.pathname);

    const {id} = useParams();
    const [state, setState] = useState({
        name: '',
        description: '',
        price: 0,
        estimate_time: 0,
        additional_details: '',
        available: true,
        image_url: "",
    });

    useEffect(() => {
        if (isEditMenuPath && id)
            getManuByID();
        else if (isEditMenuPath)
            navigate(-1);
    }, []);
    const handleTab = (event, newValue) => {
        setCurrentTab(newValue);
    };
    const onclickNext = async () => {
        if (currentTab === 0 && state.name && state.description && state.price && state.estimate_time)
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
            successMessage(isEditMenuPath ? "Menu Updated Successfully" : "Menu created successfully.");
            navigate(-1)
        };
        const onFail = err => {
            setErrorMsg(err?.data?.errors);
            errorMessage(err.data?.title || err.data?.message);
        };
        createManu({...state, additional_details: JSON.stringify(formBuilder?.formData)}, onSuccess, onFail);
    };
    const getManuByID = () => {
        const onSuccess = data => {
            data.additional_details = JSON.parse(data.additional_details);
            data.itemId = data._id;
            delete data._id;
            setState(data);
        };
        const onFail = err => {
            setErrorMsg(err?.data?.errors);
            errorMessage(err.data?.title || err.data?.message);
        };
        getManu({id}, onSuccess, onFail);
    };

    return (
        <Row style={{padding: "0 30px"}}>
            <Col xs={24}>
                {isEditMenuPath ? <div align={"right"}>
                        <LightBlueButton className="w-110 border-radius-25" onClick={onclickBack}>Cancel</LightBlueButton>
                        <GreenButton className="ml-3 w-170"
                                     onClick={onclickNext}>Save</GreenButton>
                    </div> :
                    <div align={"right"}>
                        <LightBlueButton className="w-110 border-radius-25"
                                         onClick={onclickBack}>Cancel</LightBlueButton>
                        <GreenButton className="ml-3 w-170"
                                     onClick={onclickNext}>{currentTab !== 4 ? "Next" : "Create"}</GreenButton>
                    </div>}
            </Col>
            <Col xs={24} style={{justifyContent: "center", display: "flex"}}>
                {isEditMenuPath ? <Box sx={{bgcolor: 'background.paper'}}>
                        <Tabs value={currentTab} onChange={handleTab} centered>
                            <Tab label="Overview"/>
                            <Tab label="Edit Template"/>
                        </Tabs>
                    </Box> :
                    <ProgressBar labelList={tab} index={currentTab}/>}
            </Col>
            <Col xs={24} style={{justifyContent: "center", display: "flex"}}>

                <Forms errorMsg={errorMsg} loading={false} error={error}
                       isEditMenuPath={isEditMenuPath}
                       manuData={state}
                       setFormBuilder={setFormBuilder}
                       formBuilder={formBuilder}
                       onChangeState={setState} tab={tab} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        createManu: (data, onSuccess, onFail) => dispatch(createManu({data, onSuccess, onFail})),
        getManu: (data, onSuccess, onFail) => dispatch(fetchManuById({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManuCreate);
