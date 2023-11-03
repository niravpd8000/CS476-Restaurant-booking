import React from 'react';
import "./FormGenerator.scss";
import TextField from "../TextField";
import RadioGroup from "../RadioGroup";
import CheckBoxGroup from "../CheckBoxGroup";

const FormGenerator = props => {
    const {className, error, disabled, dataJSON, handleForm} = props;
    return (
        <div className={`form-generator ${className || ""}`}>
            {
                JSON.parse(dataJSON).map((item, index) => {

                    return (
                        <div key={index}>
                            {
                                item?.type === "header" &&
                                <h3>{item?.label}</h3>
                            }
                            {
                                (item?.type === "text") &&
                                <TextField required={item.required} disabled={disabled}
                                           errorMsg={item?.label + " is required"}
                                           error={error && !item?.value && item.required}
                                           onChange={(e) => {
                                               item.value = e.target.value;
                                               handleForm(e);
                                           }} {...item}/>
                            }
                            {
                                item?.type === "checkbox-group" &&
                                <CheckBoxGroup disabled={disabled} errorMsg={item?.label + " is required"}
                                               error={error && !item?.value && item.required}
                                               onChange={(value) => {
                                                   item.value = value;
                                                   // handleForm(value);
                                               }} {...item}/>
                            }
                            {
                                item?.type === "radio-group" &&
                                <RadioGroup disabled={disabled} errorMsg={item?.label + " is required"}
                                            error={error && !item?.value && item.required}
                                            onChange={(e) => {
                                                item.value = e;
                                                handleForm(e);
                                            }} {...item}/>
                            }
                        </div>
                    )
                })
            }
        </div>)
};

export default FormGenerator
