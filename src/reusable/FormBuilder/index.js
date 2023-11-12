import $ from "jquery";
import React, {createRef, useEffect, useRef, useState} from 'react';

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const config = {
    disabledAttrs: [
        'access',
        'className',
        'description',
        'inline',
        'max',
        'maxlength',
        'min',
        'other',
        'rows',
        'step',
        'style',
        'subtype',
        'toggle',
    ],
    formData: [],
    fields: [],
    replaceFields: [
        {
            type: "text",
            label: "Input field",
        },
        {
            type: "checkbox-group",
            label: "Checkbox",
        },
        {
            type: "radio-group",
            label: "Radio buttons",
        },
        {
            type: "header",
            label: "Text Label",
        },

    ],
    controlOrder: [
        'header',
        'text',
        'checkbox-group',
        'radio-group',
    ],
    disableFields: ['file']
};

const FormBuilder = (props) => {
    const {formBuilder, setFormBuilder, formData} = props;
    const fb = useRef(null);
    useEffect(() => {
        if (!formBuilder) {
            const formBuilderInstance = $(fb.current).formBuilder({...config, formData});
            setFormBuilder(formBuilderInstance);
        }
    }, [formBuilder]);
    useEffect(() => {
        if (formData.length && formBuilder && formBuilder?.setData)
            formBuilder?.setData(formData)
    }, [formData])
    return (
        <div className="work-location template">
            <div className="d-flex">
                <div className="work-header ">
                    <div className="fs-16 fw-bold">Additional Details</div>
                    <div className="gray-divider mt-10"/>
                </div>
                <div className="work-header2">
                    <div className="fs-16 fw-bold">Building Blocks</div>
                    <div className="gray-divider mt-10"/>
                </div>
            </div>
            <div className="template-form" ref={fb}/>
        </div>
    )
};

export default FormBuilder;

