import React, {useState} from 'react'
import {Breadcrumb} from "../../reusable";
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {createOrg} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {errorMessage, getPathByName, successMessage, validateEmail} from "../../utils/common";
import {ROUTES_ID} from "../../enums";


const tab = [
    {label: "Overview"},
    {label: "Location & Contacts"},
    {label: "Warehouses"},
]

const Create = (props) => {
    const {createOrg, organization} = props;
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});

    const [state, setState] = useState({
        name: '',
        status: 0,
        staffCount: 0,
        industryId: 0,
        description: '',
        phone: '',
        email: '',
        path: '',
        address: {
            countryId: 0,
            stateId: 0,
            cityId: 0,
            address: '',
            isPrimary: true
        }
    });

    return (
        <div>
            <Breadcrumb>

            </Breadcrumb>
            <div>

            </div>
        </div>
    )
};

export default Create;
