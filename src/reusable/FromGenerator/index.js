import React from 'react';
import "./FormGenerator.scss";
import {CheckBoxGroup, DateTime, RadioGroup, TextField, UploadFile} from "../index";
import UploadImage from "../UploadImage";
import {Image} from 'antd';
import NoImage from "../../assets/images/no-image.jpg";

const FormGenerator = props => {
  const {className, error, disabled, dataJSON, handleForm} = props;
  return (
    <div className={`form-generator ${className || ""}`}>
      {
        dataJSON?.map((i, index) => {
          const item = i.elementData;
          return (
            <div key={index}>
              {
                item?.type === "header" &&
                <h3>{item?.label}</h3>
              }
              {
                (item?.type === "text") &&
                <TextField required={item.required} disabled={disabled} errorMsg={item?.label + " is required"}
                           error={error && !item?.value && item.required}
                           onChange={(e) => {
                             item.value = e.target.value;
                             handleForm();
                           }} {...item}/>
              }


              {
                item?.type === "checkbox-group" &&
                <CheckBoxGroup disabled={disabled} errorMsg={item?.label + " is required"}
                               error={error && !item?.value && item.required}
                               onChange={(value) => {
                                 item.value = value;
                                 handleForm();
                               }} {...item}/>
              }
              {
                item?.type === "radio-group" &&
                <RadioGroup disabled={disabled} errorMsg={item?.label + " is required"}
                            error={error && !item?.value && item.required}
                            onChange={(e) => {
                              item.value = e;
                              handleForm();
                            }} {...item}/>
              }
              {
                item?.type === "file" &&
                <>
                  <UploadFile {...item}
                              error={error && !item?.value && item.required}
                              errorMsg={item?.label + " is required"}/>
                </>
              }
              {
                item?.type === "dateTime" &&
                <>
                  <DateTime disabled={disabled} errorMsg={item?.label + " is required"}
                            error={error && !item?.value && item.required} {...item}
                            onChange={(e) => {
                              item.value = e.value;
                              handleForm();
                            }}/>
                </>
              }
              {
                (item?.type === "image") &&
                <div className="">
                  <label className="labelClass margin-left-5">{item?.label}{item?.required &&
                  <span className="color-red">*</span>}</label>
                  {!disabled ? <UploadImage {...item}/> :
                    <div>
                      <Image style={{width: "100px", height: "100px"}} alt={"photo"} src={item?.value || ""}
                             fallback={NoImage}
                      />
                    </div>}
                  {error && !item?.value && item.required &&
                  <span className="margin-left-5 error-label">Image is required.</span>}
                </div>
              }

            </div>
          )
        })
      }
    </div>)
};

export default FormGenerator
