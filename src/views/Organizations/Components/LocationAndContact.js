import React from 'react'
import {IdLabel, SelectMenu, TextField} from "../../../reusable";
import TextArea from "../../../reusable/TextArea";

const LocationAndContact = (props) => {
    const {onChange, errorMsg, organizationData, countries, states, cities, error} = props;

    const onclickGoogleMap = () => {
        window.open(
            'www.google.co.in/maps',
            '_blank'
        );
    };
    return (
        <div>
            <TextArea required
                      errorMsg={!!errorMsg["address.Address"] || errorMsg?.address ? errorMsg["address.Address"] || errorMsg?.address : "Address is required"}
                      error={!!errorMsg["address.Address"] || errorMsg?.address || (error && !organizationData?.address)}
                      label="Address"
                      value={organizationData.address} name='address'
                      placeholder="This is address line 1 and address line 2" onChange={onChange}/>
            <SelectMenu required
                        errorMsg={!!errorMsg["address.Country"] || errorMsg?.country ? errorMsg["address.Country"] || errorMsg?.country : "Country is required"}
                        error={!!errorMsg["address.Country"] || errorMsg?.country || (error && !organizationData?.countryId)}
                        label="Country"
                        value={organizationData.countryId} name='countryId' placeholder="Select a country"
                        options={countries}
                        onChange={onChange}/>
            <SelectMenu required
                        errorMsg={!!errorMsg["address.State"] || errorMsg?.state ? errorMsg["address.State"] || errorMsg?.state : "State is required"}
                        error={!!errorMsg["address.State"] || errorMsg?.state || (error && !organizationData?.stateId)}
                        disabled={!organizationData.countryId}
                        label="State" value={organizationData.stateId} name='stateId'
                        placeholder="Select a state"
                        options={states || []}
                        onChange={onChange}/>
            <SelectMenu required
                        errorMsg={!!errorMsg["address.City"] || errorMsg?.city ? errorMsg["address.City"] || errorMsg?.city : "City is required"}
                        error={!!errorMsg["address.City"] || errorMsg?.city || (error && !organizationData?.cityId)}
                        disabled={!organizationData.stateId}
                        label="City" value={organizationData.cityId} name='cityId'
                        placeholder="Select a city"
                        options={cities}
                        onChange={onChange}/>
            <TextField required
                       errorMsg={!!errorMsg["address.ZipCode"] || errorMsg?.zipCode ? errorMsg["address.ZipCode"] || errorMsg?.zipCode : "Zip code is required"}
                       error={!!errorMsg["address.ZipCode"] || errorMsg?.zipCode || (error && !organizationData?.zipCode)}
                       label="Zip code"
                       value={organizationData.zipCode} name='zipCode'
                       placeholder="Enter zip code"
                       onChange={onChange}/>
            <IdLabel onClick={onclickGoogleMap} className="pl-2" link={true} value={"Use google map"}/>
        </div>
    )
};

export default LocationAndContact


const x = {
    "name": "ABCD",
    "status": 1,
    "staffCount": 2,
    "industryId": 1,
    "description": "Hi there",
    "phone": "9998887770",
    "email": "SXc@AAA.com",
    "path": "string",
    "address": {
        "organisationId": 1,
        "countryId": 1,
        "stateId": 21,
        "cityId": 1,
        "zipCode": "395006",
        "address": "string",
        "latitude": 0,
        "longitude": 0,
        "isPrimary": true
    }
}
