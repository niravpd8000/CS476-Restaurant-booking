import React from 'react';
import FormBuilder from "../../../reusable/FormBuilder";
import "./FormBuilder.scss"

const CreateTemplate = ({setFormBuilder, onChange, formData, formBuilder, error}) => {
  return (
    <div className="workflow workflow2">
      <div className={'d-block d-none'}>
        <FormBuilder setTaskElementFormBuilder={setFormBuilder} activityTasks={null}
                     formBuilderList={formBuilder}/>
      </div>
    </div>
  )
};

export default CreateTemplate;
