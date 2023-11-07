import React from 'react';
import FormBuilder from "../../../reusable/FormBuilder";
import "./FormBuilder.scss"

const CreateTemplate = ({setFormBuilder, onChange, manuData, formBuilder, error}) => {
    return (
        <div className="workflow workflow2">
            <div className={'d-block d-none'}>
                <FormBuilder setFormBuilder={setFormBuilder}
                             formData={manuData.additional_details ? JSON.parse(manuData.additional_details) : []}
                             formBuilder={formBuilder}/>
            </div>
        </div>
    )
};

export default CreateTemplate;
