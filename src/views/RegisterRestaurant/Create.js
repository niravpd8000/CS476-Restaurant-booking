import React, {useEffect, useState} from 'react'
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {
    errorMessage, getRestIdFromToken, isPasswordComplex,
    successMessage,
    validateCanadianPostalCode,
    validateEmail,
    validateMobileNumber
} from "../../utils/common";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {createOrg} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Timing"},
    {label: "Categories"},
    {label: "Table Reservation"}
]

const Create = (props) => {
    const navigate = useNavigate();
    const {createOrg, restData, isEditRestPath} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);

    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        name: '',
        description: ' ',
        phone: '',
        email: '',
        number_of_table: 2,
        provide_reservation: true,
        image_url: "https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
        categories: ["Italian", "Mexican"],
        table_capacity: [
            {capacity: 4},
            {capacity: 4}
        ],
        address: {

            stateId: "SK",
            cityId: "Regina",
            address: '',
            zipcode: "",
        },
        schedules: data
    });


    useEffect(() => {
        if (isEditRestPath) {
            setState(restData)
            console.log(isEditRestPath)
        }
    }, [restData]);
    const onclickNext = () => {
        const verify = isEditRestPath?true:state.username && isPasswordComplex(state.password) && (state.confirmPassword && state.confirmPassword === state.password);
        if ((currentTab === 0 && (verify && state.name && state.description && validateMobileNumber(state.phone) && validateEmail(state.email))) || (currentTab === 1 && !!(state.address.address) && validateCanadianPostalCode(state.address.zipcode)))
            setCurrentTab(currentTab + 1);
        else if (currentTab === 2)
            setCurrentTab(currentTab + 1);
        else if (currentTab === 3) {
            setCurrentTab(currentTab + 1);
        } else if (currentTab === 4) {
            createOrganization();
        } else
            setError(currentTab);
    };
    const onclickBack = () => {
        if (currentTab !== 0)
            setCurrentTab(currentTab - 1);
        // else
        //     navigate(-1);

    };

    const createOrganization = () => {
        const onSuccess = data => {

            if (!getRestIdFromToken()) {
                navigate("/sign-in");
                successMessage(`Restaurant created successfully.`);
            } else {
                successMessage(`Restaurant updated successfully.`);
                setCurrentTab(0);
            }
        };
        const onFail = err => {
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
                    <Forms isEditRestPath={isEditRestPath} loading={false} error={error}
                           organizationData={state}
                           onChangeState={setState} tab={tab} currentTab={currentTab}/>
                </div>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        createOrg: (data, onSuccess, onFail) => dispatch(createOrg({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);


const data = [
    {day: "monday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "tuesday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "wednesday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "thursday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "friday", status: true, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "saturday", status: false, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
    {day: "sunday", status: false, times: [{startTime: "08:00 AM", endTime: "06:00 PM"}]},
];


//
// {
//     username: "",
//         password: "",
//     confirmPassword: "",
//     fullName: "Owner",
//     name: 'Test',
//     description: 'test ',
//     phone: '3063513068',
//     email: 'nislds@gmail.com',
//     number_of_table: 2,
//     provide_reservation: true,
//     image_url: "https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
//     categories: ["Italian", "Mexican"],
//     table_capacity: [
//     {capacity: 4},
//     {capacity: 4}
// ],
//     address: {
//
//     stateId: "SK",
//         cityId: "Regina",
//         address: '132 ABC st',
//         zipcode: "",
// },
//     schedules: data
// }