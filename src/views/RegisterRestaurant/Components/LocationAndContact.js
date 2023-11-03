import React from 'react';
import TextArea from "../../../reusable/TextArea";
import SelectMenu from "../../../reusable/SelectMenu";
import TextField from "../../../reusable/TextField";
import {validateCanadianPostalCode} from "../../../utils/common";

const LocationAndContact = (props) => {
    const {onChange, addressData, error} = props;
    const handleChange = (e) => {
        let {name, value} = e.target ? e.target : e;
        onChange({name: "address", value: {...addressData, [name]: value}})
        // onChangeState(state);
    };
    return (
        <div>
            <TextArea required
                      error={error && !addressData.address}
                      label="Address"
                      value={addressData.address} name='address'
                      placeholder="This is address line 1 and address line 2" onChange={handleChange}/>
            <SelectMenu required
                        disabled
                        label="City" value={addressData.cityId} name='cityId'
                        placeholder="Select a city"
                        options={[{label: "Regina", value: "Regina"}]}
                        onChange={handleChange}/>
            <SelectMenu required
                        error={error && !addressData.cityId}
                        disabled
                        label="State" value={addressData.stateId} name='stateId'
                        placeholder="Select a state"
                        options={[{label: "SK", value: "SK"}]}
                        onChange={handleChange}/>
            <TextField required
                       error={error && !validateCanadianPostalCode(addressData.zipcode)}
                       label="Zip code"
                       value={addressData.zipcode} name='zipcode'
                       placeholder="Enter valid zip code"
                       onChange={handleChange}/>
        </div>
    )
};

export default LocationAndContact
