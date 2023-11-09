import React, {useState} from 'react';
import GreenButton from "../../reusable/GreenButton";
import LightBlueButton from "../../reusable/LightBlueButton";
import ProgressBar from "../../reusable/ProgressBar";
import Forms from "./Components/Froms";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";


const tab = [
    {label: "Overview"}
]

const TableReservationForm = (props) => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0);
    const [error, setError] = useState(-1);
    const [errorMsg, setErrorMsg] = useState({});
    const [formBuilder, setFormBuilder] = useState();

    const [state, setState] = useState({
        firstName: 'Test',
        lastName: 'Test',
        description: 'test ',
        price: 0,
        estimate_time: 0,
        address: {
            countryId: 0,
            stateId: 0,
            cityId: 0,
            address: '132 abc st',
            isPrimary: true
        },
        schedules: []
    });

    const onclickNext = () => {
        if ((currentTab === 0 && (state.name && state.description && state.price.length > 0 && state.estimate_time)) || (currentTab === 1 && !!(state.address.address)))
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


    return (
        <Grid container>
            <Grid item xs={12} align={"right"}>
                <LightBlueButton className="w-110" onClick={onclickBack}>Cancel</LightBlueButton>
                <GreenButton className="ml-3 w-170"
                             onClick={onclickNext}>{currentTab !== 2 ? "Next" : "Create"}</GreenButton>
            </Grid>
            <Grid item xs={12}>
                <ProgressBar labelList={tab} index={currentTab}/>
                <Forms errorMsg={errorMsg} loading={false} error={error}
                       organizationData={state}
                       setFormBuilder={setFormBuilder}
                       formBuilder={formBuilder}
                       onChangeState={setState} tab={tab} currentTab={currentTab}/>
            </Grid>
        </Grid>
    )
};
export default TableReservationForm;
