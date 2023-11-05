import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import MealItem from "./MealItem/MealItem";
import {errorMessage, getFromStorage, getRestIdFromToken} from "../../utils/common";
import {fetchOrgById, fetchOrgManuById} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';

const MainMeals = (props) => {
    const {fetchOrgById, fetchOrgManuById} = props;
    const [restData, setRestData] = useState({});
    const [manuData, setManuData] = useState([]);
    const id = getRestIdFromToken();
    console.log(id);
    useEffect(() => {
        getOrgById();
        getOrgManuById();
    }, []);
    const getOrgById = () => {
        const onSuccess = response => {
            setRestData(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        fetchOrgById(
            {id: id},
            onSuccess,
            onFail
        );
    };
    const getOrgManuById = () => {
        const onSuccess = response => {
            setManuData(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        fetchOrgManuById(
            {id: id},
            onSuccess,
            onFail
        );
    };
    return (
        <main>
            <Grid container spacing={2}>
                {manuData.map((item, key) =>
                    <Grid key={key} item xs={12} md={4} lg={3} sm={6}>
                        <MealItem manuItem={item}/>
                    </Grid>
                )}
            </Grid>
        </main>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrgById: (data, onSuccess, onFail) => dispatch(fetchOrgById({data, onSuccess, onFail})),
        fetchOrgManuById: (data, onSuccess, onFail) => dispatch(fetchOrgManuById({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(MainMeals);
