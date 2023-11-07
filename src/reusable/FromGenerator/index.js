import React, {useState} from 'react';
import "./FormGenerator.scss";
import TextField from "../TextField";
import RadioGroup from "../RadioGroup";
import CheckBoxGroup from "../CheckBoxGroup";

const FormGenerator = props => {
    const {className, error, disabled, dataJSON, handleForm} = props;
    const [state, setState] = useState(JSON.parse(dataJSON));
    return (
        <div className={`form-generator ${className || ""}`}>
            {
                JSON.parse(dataJSON)?.map((item, index) => {

                    return (
                        <div key={index}>
                            {
                                state[index]?.type === "header" &&
                                <h4>{state[index]?.label}</h4>
                            }
                            {
                                (state[index]?.type === "text") &&
                                <TextField required={state[index].required} disabled={disabled}
                                           errorMsg={state[index]?.label + " is required"}
                                           error={error && !state[index]?.value && state[index].required}
                                           onChange={(e) => {
                                               state[index].value = e.target.value;
                                               setState({...state});
                                               handleForm({...state});
                                           }} {...state[index]}/>
                            }
                            {
                                state[index]?.type === "checkbox-group" &&
                                <CheckBoxGroup disabled={disabled}
                                               errorMsg={state[index]?.label + " is required"}
                                               error={error && !state[index]?.value && state[index].required}
                                               onChange={(value) => {
                                                   state[index].value = value;
                                                   setState({...state});
                                                   handleForm({...state});
                                               }} {...state[index]}/>
                            }
                            {
                                state[index]?.type === "radio-group" &&
                                <RadioGroup disabled={disabled} errorMsg={state[index]?.label + " is required"}
                                            error={error && !state[index]?.value && state[index].required}
                                            onChange={(e) => {
                                                item.value=e.value
                                                state[index].value = e.value;
                                                setState({...state});
                                                handleForm({...state});
                                            }} {...state[index]}/>
                            }
                        </div>
                    )
                })
            }
        </div>)
};

export default FormGenerator
