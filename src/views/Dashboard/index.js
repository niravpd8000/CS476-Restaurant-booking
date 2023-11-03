import React, {useEffect, useState} from 'react'
import RestaurantCard from "../../reusable/RestaurantCard";
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import {connect} from "react-redux";
import {fetchOrg} from "../../redux/modules/organization/organizationActions";
import {errorMessage} from "../../utils/common";

const Dashboard = ({getOrgList}) => {
    const navigate = useNavigate();
    const [restList, setRestList] = useState([]);

    useEffect(() => {
        getAllOrg({})
    }, []);
    const getAllOrg = data => {
        const onSuccess = response => {
            setRestList(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getOrgList(
            data,
            onSuccess,
            onFail
        );
    };

    return (
        <>
            <div className="dashboard-wrapper mb-4">
                <div className="card-container mb-3">
                    <Grid container spacing={2}>
                        {
                            restList.map((item, key)=>
                                <Grid item key={key} lg={3} md={4} sm={6} xs={12}>
                                    <RestaurantCard data={item} onClick={() => navigate(`/meals/${item._id}`)}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        getOrgList: (data, onSuccess, onFail) => dispatch(fetchOrg({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(Dashboard)