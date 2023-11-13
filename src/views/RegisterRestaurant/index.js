import React, {useEffect, useState} from 'react'
import CreateRest from "./Create";
import {useLocation, useNavigate} from "react-router-dom";
import {fetchOrgById, fetchOrgManuById} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {errorMessage, getFromStorage, getRestIdFromToken} from "../../utils/common";

const RegisterRestaurant = ({fetchOrgById}) => {
    const [restData, setRestData] = useState({});
    const location = useLocation();
    const isEditRestPath = "/restaurant-home/edit" === location.pathname;
    const navigate = useNavigate();


    useEffect(() => {
        if (isEditRestPath)
            getOrgById();
    }, []);

    useEffect(() => {
        if (getFromStorage("accessToken"))
            navigate("/")
    }, []);

    const getOrgById = () => {
        const onSuccess = response => {
            setRestData(response);
        };
        const onFail = err => {
            errorMessage("There is an issue while processing your request");
        };
        fetchOrgById(
            {id: getRestIdFromToken()},
            onSuccess,
            onFail
        );
    };
    return (
        <>
            <CreateRest restData={restData} isEditRestPath={isEditRestPath}/>
        </>
    )
};
const mapDispatchToProps = dispatch => {
    return {
        fetchOrgById: (data, onSuccess, onFail) => dispatch(fetchOrgById({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(RegisterRestaurant);

