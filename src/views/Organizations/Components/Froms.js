import React, {useEffect, useState} from 'react'
import InputBox from "../../../reusable/InputBox";
import LocationAndContact from "./LocationAndContact";
import Overview from "./Overview";
import {errorMessage} from "../../../utils/common";
import _ from "lodash";

const Forms = (props) => {
    const {
        tab,
        loading,
        errorMsg,
        common,
        getWHList,
        getCountries,
        error,
        currentTab,
        onChangeState,
        organizationData,
        getStateList,
        getCityList,
        getIndustryList,
        organization
    } = props;

    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [whList, setWhList] = useState([]);
    useEffect(async () => {
        if (!whList.length)
            getAllWH({page: 1, pageSize: 100});
        if (!common.countries?.length)
            await getCountries();
        if (!organization.industries?.length)
            await getIndustryList();
        if (organizationData?.address.countryId)
            await getAllStateById(organizationData.address.countryId);
        if (organizationData?.address.stateId)
            await getAllCityById(organizationData.address.stateId)
    }, []);

    const handleChange = (e) => {
        let {name, value} = e.target ? e.target : e;
        const intArray = ["staffCount", "industryId"];
        if (intArray.includes(name))
            value = parseInt(value) || 0;
        onChangeState(prevState => ({
            ...prevState,
            [name]: value
        }));
        // onChangeState(state);
    };

    const handleChangeAddress = e => {
        let {name, value} = e.target ? e.target : e;
        const intArray = ["countryId", "stateId", "cityId"];
        if (intArray.includes(name))
            value = parseInt(value) || 0;
        onChangeState(prevState => ({
            ...prevState,
            address: {
                ...organizationData.address,
                [name]: value
            }
        }));
        if (name === "countryId") {
            getAllStateById(value)
        }
        if (name === "stateId") {
            getAllCityById(value)
        }
    };

    const getAllWH = data => {
        const onSuccess = response => {
            _.forEach(response?.data, (item) => {
                item.key = item.id;
            });
            setWhList(response?.data)
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message || err?.data?.returnMessage[0]);
        };
        getWHList(
            data,
            onSuccess,
            onFail
        );
    };

    const getAllStateById = countryId => {
        const onSuccess = data => {
            setStates(data.data)
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message || err?.data?.returnMessage[0]);
        };
        getStateList(
            {
                countryId
            },
            onSuccess,
            onFail
        );
    };

    const getAllCityById = stateId => {
        const onSuccess = data => {
            setCities(data.data)
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message || err?.data?.returnMessage[0]);
        };
        getCityList({
                stateId
            },
            onSuccess,
            onFail
        );
    };
    return (
        <div className="organization">
            <InputBox
                loading={loading}
                title={tab[currentTab].label}
            >
                {currentTab === 0 &&
                    <Overview errorMsg={errorMsg} error={error === currentTab} industries={organization.industries}
                              organizationData={organizationData}
                              onChange={handleChange}/>}
                {currentTab === 1 &&
                    <LocationAndContact errorMsg={errorMsg} error={error === currentTab} countries={common.countries}
                                        states={states} cities={cities}
                                        organizationData={organizationData.address}
                                        onChange={handleChangeAddress}/>}
            </InputBox>
        </div>
    );
};

export default Forms;
