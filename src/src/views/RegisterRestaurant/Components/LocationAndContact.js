import React from 'react';
import TextArea from "../../../reusable/TextArea";
import SelectMenu from "../../../reusable/SelectMenu";
import TextField from "../../../reusable/TextField";

const LocationAndContact = (props) => {
    const {onChange, errorMsg, organizationData, states, cities, error} = props;

    return (
        <div>
            <TextArea required
                      errorMsg={!!errorMsg["address.Address"] || errorMsg?.address ? errorMsg["address.Address"] || errorMsg?.address : "Address is required"}
                      error={!!errorMsg["address.Address"] || errorMsg?.address || (error && !organizationData?.address)}
                      label="Address"
                      value={organizationData.address} name='address'
                      placeholder="This is address line 1 and address line 2" onChange={onChange}/>
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
        </div>
    )
};

export default LocationAndContact
